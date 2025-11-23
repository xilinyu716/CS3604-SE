;(function(){
  var API = window.API_BASE || 'http://localhost:5000'
  function authFetch(url, opts){
    var token = sessionStorage.getItem('token') || ''
    var h = (opts && opts.headers) || {}
    h['Content-Type'] = h['Content-Type'] || 'application/json'
    if(token) h['Authorization'] = 'Bearer '+token
    var o = opts || {}
    o.headers = h
    return fetch(url, o).then(function(r){ return r.json() })
  }
  function ensureLogin(){
    var token = sessionStorage.getItem('token')
    var user = sessionStorage.getItem('user')
    if(!token || !user){
      window.location.href = 'login.html'
      return false
    }
    return true
  }
  function switchTab(key){
    var tabs = ['orders','passengers','profile']
    for(var i=0;i<tabs.length;i++){
      var el = document.getElementById('tab-'+tabs[i])
      if(el) el.style.display = tabs[i]===key ? 'block' : 'none'
    }
    var lis = document.querySelectorAll('.account-side li')
    Array.prototype.forEach.call(lis,function(li){
      var k = li.getAttribute('data-tab')
      if(k===key){ li.classList.add('active') } else { li.classList.remove('active') }
    })
  }
  function seatPill(status){
    if(status==='pending') return '<span class="pill red">待支付</span>'
    if(status==='paid') return '<span class="pill green">已支付</span>'
    if(status==='cancelled') return '<span class="pill grey">已取消</span>'
    return '<span class="pill">'+status+'</span>'
  }
  function renderOrders(data){
    var ul = document.getElementById('orderList')
    var pi = document.getElementById('pageInfo')
    if(!ul) return
    ul.innerHTML = ''
    var orders = (data && data.orders) || []
    for(var i=0;i<orders.length;i++){
      var o = orders[i]
      var li = document.createElement('li')
      var left = document.createElement('div')
      left.textContent = (o.train_id||'')+'  总价￥'+(o.total_amount||0)
      left.innerHTML += seatPill(o.status)
      var right = document.createElement('div')
      if(o.status==='pending'){
        var payBtn = document.createElement('button')
        payBtn.className = 'btn-primary'
        payBtn.textContent = '支付'
        payBtn.addEventListener('click',function(id){ return function(){ payOrder(id) } }(o.id))
        right.appendChild(payBtn)
        var cancelBtn = document.createElement('button')
        cancelBtn.className = 'btn-danger'
        cancelBtn.style.marginLeft = '8px'
        cancelBtn.textContent = '取消'
        cancelBtn.addEventListener('click',function(id){ return function(){ cancelOrder(id) } }(o.id))
        right.appendChild(cancelBtn)
      }else{
        var viewBtn = document.createElement('button')
        viewBtn.className = 'btn-primary'
        viewBtn.textContent = '详情'
        viewBtn.addEventListener('click',function(id){ return function(){ viewOrder(id) } }(o.id))
        right.appendChild(viewBtn)
      }
      li.appendChild(left)
      li.appendChild(right)
      ul.appendChild(li)
    }
    if(pi && data && data.pagination){
      pi.textContent = '第 '+data.pagination.page+' / '+data.pagination.totalPages+' 页'
    }
  }
  function viewOrder(id){
    authFetch(API+'/api/orders/'+id, { method:'GET' }).then(function(res){
      if(res && res.order){
        var d = res.order
        var msg = '订单 '+(d.id||'')+' 车次 '+(d.train_id||'')+' 乘客 '+(((d.passengers||[]).length)||0)
        if(window.showToast) window.showToast(msg,'info')
      }else{
        if(window.showToast) window.showToast((res && res.error)||'加载失败','error')
      }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  function payOrder(id){
    startQueue(id)
  }
  var queueTimer = null
  var audioCtx = null
  var playOn = false
  function tone(){
    try{
      if(!playOn) return
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)()
      var osc = audioCtx.createOscillator()
      var gain = audioCtx.createGain()
      osc.type = 'sine'
      osc.frequency.value = 880
      gain.gain.value = 0.02
      osc.connect(gain)
      gain.connect(audioCtx.destination)
      osc.start()
      setTimeout(function(){ osc.stop() }, 200)
    }catch(e){}
  }
  function openQueue(){
    var m = document.querySelector('.queue-modal')
    if(!m){
      m = document.createElement('div')
      m.className = 'queue-modal'
      m.innerHTML = '<div class="queue-box">'
        + '<div class="queue-title">正在排队</div>'
        + '<div class="queue-time" id="queueTime">预计 1 分钟</div>'
        + '<div class="queue-actions">'
        + '<button id="tryPlayer" class="btn-primary">试听提示音乐</button>'
        + '<button id="queueClose" class="btn-danger">关闭</button>'
        + '</div>'
        + '</div>'
      document.body.appendChild(m)
      var tryBtn = document.getElementById('tryPlayer')
      tryBtn.addEventListener('click',function(){
        if(tryBtn.textContent==='试听提示音乐'){ playOn=true; tone(); tryBtn.textContent='停止提示音乐' } else { playOn=false; tryBtn.textContent='试听提示音乐' }
      })
      document.getElementById('queueClose').addEventListener('click',function(){ closeQueue() })
    }
    m.style.display='flex'
  }
  function closeQueue(){
    var m = document.querySelector('.queue-modal')
    if(m) m.style.display='none'
    playOn=false
    if(queueTimer) { clearInterval(queueTimer); queueTimer=null }
  }
  function startQueue(orderId){
    openQueue()
    var t = 60
    var timeEl = document.getElementById('queueTime')
    function update(){
      authFetch(API+'/confirmPassenger/queryOrderWaitTime?random='+Date.now(), { method:'GET' }).then(function(res){
        var data = res && res.data
        if(data && data.queryOrderWaitTimeStatus){
          var wt = data.waitTime || 1
          t = wt
          var m = Math.max(1, Math.floor(wt/60))
          if(timeEl){ timeEl.textContent = '预计 '+(wt>60?m+' 分钟':wt+' 秒') }
          tone()
          if(wt<=1){
            clearInterval(queueTimer)
            queueTimer=null
            authFetch(API+'/api/orders/'+orderId+'/pay', { method:'POST', body: JSON.stringify({ paymentMethod:'alipay' }) }).then(function(pay){
              closeQueue()
              if(pay && pay.status==='paid'){ if(window.showToast) window.showToast('支付成功','success'); loadOrders() } else { if(window.showToast) window.showToast((pay && pay.error)||'支付失败','error') }
            }).catch(function(){ closeQueue(); if(window.showToast) window.showToast('网络错误','error') })
          }
        }
      }).catch(function(){})
    }
    update()
    queueTimer = setInterval(update, 1500)
  }
  function cancelOrder(id){
    authFetch(API+'/api/orders/'+id+'/cancel', { method:'POST', body: JSON.stringify({ reason:'用户取消' }) }).then(function(res){
      if(res && res.status==='cancelled'){ if(window.showToast) window.showToast('已取消','success'); loadOrders() } else { if(window.showToast) window.showToast((res && res.error)||'取消失败','error') }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  var curPage = 1
  var curStatus = ''
  function loadOrders(){
    var params = '?page='+curPage+'&limit=10'
    if(curStatus) params += '&status='+curStatus
    authFetch(API+'/api/orders'+params, { method:'GET' }).then(function(res){
      if(res && res.orders){ renderOrders(res) } else { if(window.showToast) window.showToast((res && res.error)||'加载失败','error') }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  function renderPassengers(list){
    var ul = document.getElementById('passengerList')
    if(!ul) return
    ul.innerHTML = ''
    for(var i=0;i<list.length;i++){
      var p = list[i]
      var li = document.createElement('li')
      var left = document.createElement('div')
      left.textContent = (p.name||'')+' '+(p.id_card||'')+' '+(p.passenger_type||'')
      var right = document.createElement('div')
      var editBtn = document.createElement('button')
      editBtn.className = 'btn-primary'
      editBtn.textContent = '编辑'
      editBtn.addEventListener('click',function(pid){ return function(){ editPassenger(pid) } }(p.id))
      var delBtn = document.createElement('button')
      delBtn.className = 'btn-danger'
      delBtn.style.marginLeft = '8px'
      delBtn.textContent = '删除'
      delBtn.addEventListener('click',function(pid){ return function(){ deletePassenger(pid) } }(p.id))
      right.appendChild(editBtn)
      right.appendChild(delBtn)
      li.appendChild(left)
      li.appendChild(right)
      ul.appendChild(li)
    }
  }
  function loadPassengers(){
    authFetch(API+'/api/passengers', { method:'GET' }).then(function(res){
      if(res && res.passengers){ renderPassengers(res.passengers) } else { if(window.showToast) window.showToast((res && res.error)||'加载失败','error') }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  function addPassenger(){
    var name = document.getElementById('pName').value.trim()
    var idCard = document.getElementById('pIdCard').value.trim()
    var phone = document.getElementById('pPhone').value.trim()
    var type = document.getElementById('pType').value
    if(!name || !idCard){ if(window.showToast) window.showToast('请填写姓名和证件号','error'); return }
    authFetch(API+'/api/passengers', { method:'POST', body: JSON.stringify({ name:name, idCard:idCard, phone:phone, passengerType:type }) }).then(function(res){
      if(res && res.passenger){ if(window.showToast) window.showToast('添加成功','success'); loadPassengers() } else { if(window.showToast) window.showToast((res && res.error)||'添加失败','error') }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  function editPassenger(id){
    var name = prompt('请输入姓名') || ''
    var idCard = prompt('请输入证件号') || ''
    var phone = prompt('请输入手机号') || ''
    var type = prompt('请输入类型(adult/student/child)') || 'adult'
    if(!name || !idCard){ if(window.showToast) window.showToast('请填写完整','error'); return }
    authFetch(API+'/api/passengers/'+id, { method:'PUT', body: JSON.stringify({ name:name, idCard:idCard, phone:phone, passengerType:type }) }).then(function(res){
      if(res && res.passenger){ if(window.showToast) window.showToast('更新成功','success'); loadPassengers() } else { if(window.showToast) window.showToast((res && res.error)||'更新失败','error') }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  function deletePassenger(id){
    authFetch(API+'/api/passengers/'+id, { method:'DELETE' }).then(function(res){
      if(res && res.message){ if(window.showToast) window.showToast('删除成功','success'); loadPassengers() } else { if(window.showToast) window.showToast((res && res.error)||'删除失败','error') }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  function loadProfile(){
    authFetch(API+'/api/users/profile', { method:'GET' }).then(function(res){
      if(res && res.user){
        var d = res.user
        var uName = document.getElementById('uName')
        var uEmail = document.getElementById('uEmail')
        var uPhone = document.getElementById('uPhone')
        if(uName) uName.value = d.name || ''
        if(uEmail) uEmail.value = d.email || ''
        if(uPhone) uPhone.value = d.phone || ''
      }else{
        if(window.showToast) window.showToast((res && res.error)||'加载失败','error')
      }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  function saveProfile(){
    var name = document.getElementById('uName').value.trim()
    var email = document.getElementById('uEmail').value.trim()
    authFetch(API+'/api/users/profile', { method:'PUT', body: JSON.stringify({ name:name, email:email }) }).then(function(res){
      if(res && res.user){
        sessionStorage.setItem('userName', res.user.name || sessionStorage.getItem('user') || '')
        var nav = document.querySelector('.nav')
        if(nav){ var registerLink = nav.querySelector('a[href="account.html"]') || nav.querySelector('a[href="register.html"]'); if(registerLink){ registerLink.textContent = '欢迎，'+(res.user.name || sessionStorage.getItem('user')) } }
        if(window.showToast) window.showToast('保存成功','success')
      } else { if(window.showToast) window.showToast((res && res.error)||'保存失败','error') }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  function bind(){
    var sideLis = document.querySelectorAll('.account-side li')
    Array.prototype.forEach.call(sideLis,function(li){
      li.addEventListener('click',function(){ switchTab(li.getAttribute('data-tab')) })
    })
    var reloadBtn = document.getElementById('reloadOrders')
    var statusSel = document.getElementById('orderStatus')
    var prevBtn = document.getElementById('prevPage')
    var nextBtn = document.getElementById('nextPage')
    if(reloadBtn){ reloadBtn.addEventListener('click',function(){ curPage = 1; curStatus = statusSel.value; loadOrders() }) }
    if(prevBtn){ prevBtn.addEventListener('click',function(){ if(curPage>1){ curPage--; loadOrders() } }) }
    if(nextBtn){ nextBtn.addEventListener('click',function(){ curPage++; loadOrders() }) }
    var pSubmit = document.getElementById('pSubmit')
    if(pSubmit){ pSubmit.addEventListener('click',addPassenger) }
    var uSave = document.getElementById('uSave')
    if(uSave){ uSave.addEventListener('click',saveProfile) }
  }
  function init(){
    if(!ensureLogin()) return
    bind()
    var tabKey = 'orders'
    var h = (location.hash||'').replace('#','')
    try{ var params = new URLSearchParams(location.search); var q = params.get('tab'); if(h==='orders'||h==='passengers'||h==='profile'){ tabKey=h } else if(q==='orders'||q==='passengers'||q==='profile'){ tabKey=q } }catch(e){}
    switchTab(tabKey)
    loadOrders()
    loadPassengers()
    loadProfile()
    window.addEventListener('hashchange', function(){
      var hk = (location.hash||'').replace('#','')
      if(hk==='orders'||hk==='passengers'||hk==='profile'){ switchTab(hk) }
    })
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init)
  }else{ init() }
})()