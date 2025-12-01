;(function(){
  var API = window.API_BASE || 'http://localhost:5001'
  var menu = []
  function renderMenu(list){
    var box = document.getElementById('menuList')
    if(!box) return
    var html = ''
    for(var i=0;i<list.length;i++){
      var it = list[i]
      html += '<div class="list-item">'
      html += '<span class="item-name">'+it.name+'</span>'
      html += '<span class="item-price">￥'+it.price.toFixed(2)+'</span>'
      html += '<input data-id="'+it.id+'" class="qty" type="number" min="0" value="0" style="width:64px;margin-left:8px" />'
      html += '</div>'
    }
    box.innerHTML = html
  }
  function ensureTrainExists(trainNo){
    return fetch(API+'/api/trains/'+encodeURIComponent(trainNo)).then(function(r){ return r.json() }).then(function(res){
      if(res && res.success){ return trainNo }
      throw new Error('Train not found')
    })
  }
  function openPicker(){
    var picker = document.getElementById('stationPicker')
    if(!picker) return
    var tabsHtml = ''
    var letters = ['热门','ABCDEF','FGHIJ','KLMNO','PQRST','UVWXYZ']
    for(var i=0;i<letters.length;i++){ tabsHtml += '<button data-tab="'+letters[i]+'">'+letters[i]+'</button>' }
    var gridHtml = ''
    var list = window.STATIONS || []
    for(var i=0;i<list.length;i++){
      var s = list[i]
      gridHtml += '<button data-name="'+s.name+'">'+s.name+'</button>'
    }
    picker.innerHTML = '<div class="tabs">'+tabsHtml+'</div><div class="grid">'+gridHtml+'</div>'
    picker.classList.add('show')
    picker.setAttribute('aria-hidden','false')
    picker.addEventListener('click',function(e){
      var btn = e.target.closest('button[data-name]')
      if(btn){
        var input = document.getElementById('arriveStation')
        if(input){ input.value = btn.getAttribute('data-name') }
        closePicker()
      }
    })
  }
  function closePicker(){
    var picker = document.getElementById('stationPicker')
    if(picker){ picker.classList.remove('show'); picker.setAttribute('aria-hidden','true') }
  }
  function bindPicker(){
    var input = document.getElementById('arriveStation')
    if(!input) return
    input.addEventListener('focus', openPicker)
    document.addEventListener('click',function(e){
      var inside = e.target.closest('#stationPicker') || e.target.closest('#arriveStation')
      if(!inside){ closePicker() }
    })
  }
  function load(){
    var dateEl = document.getElementById('mealDate')
    var trainEl = document.getElementById('trainNo')
    var arriveEl = document.getElementById('arriveStation')
    var d = (dateEl && dateEl.value) || ''
    var no = (trainEl && trainEl.value.trim()) || ''
    var arr = (arriveEl && arriveEl.value.trim()) || ''
    if(!no){ if(window.showToast) window.showToast('请输入车次','error'); return }
    ensureTrainExists(no).then(function(id){
      var url = API + '/api/catering/menu?trainId=' + encodeURIComponent(id)
      return fetch(url).then(function(r){ return r.json() })
    }).then(function(res){
      if(res && res.menu && res.menu.items){
        menu = res.menu.items
        renderMenu(menu)
      }else{
        if(window.showToast) window.showToast('菜单加载失败','error')
      }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  function submit(){
    var trainEl = document.getElementById('trainNo')
    var arriveEl = document.getElementById('arriveStation')
    var dateEl = document.getElementById('mealDate')
    var seatEl = document.getElementById('deliverySeat')
    var no = (trainEl && trainEl.value.trim()) || ''
    var arr = (arriveEl && arriveEl.value.trim()) || ''
    var d = (dateEl && dateEl.value) || ''
    var qtyInputs = document.querySelectorAll('.qty')
    var items = []
    for(var i=0;i<qtyInputs.length;i++){
      var q = parseInt(qtyInputs[i].value || '0')
      if(q>0){
        var iid = qtyInputs[i].getAttribute('data-id')
        items.push({ itemId: iid, quantity: q })
      }
    }
    if(items.length===0){ if(window.showToast) window.showToast('请选择餐品','error'); return }
    var token = sessionStorage.getItem('token')
    if(!token){ if(window.showToast) window.showToast('请先登录','error'); return }
    ensureTrainExists(no).then(function(id){
      var url = API + '/api/catering/orders'
      return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }, body: JSON.stringify({ trainId: id, items: items, deliverySeat: (seatEl && seatEl.value.trim()) || '' }) })
    }).then(function(r){ return r.json() }).then(function(res){
      if(res && res.order){
        if(window.showToast) window.showToast('下单成功，金额￥'+(res.order.totalAmount||0),'success')
      }else{
        if(window.showToast) window.showToast('下单失败','error')
      }
    }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
  }
  var btn = document.getElementById('loadMenu')
  if(btn){ btn.addEventListener('click', load) }
  var sub = document.getElementById('submitOrder')
  if(sub){ sub.addEventListener('click', submit) }
  bindPicker()
})()