;(function(){
  window.API_BASE = window.API_BASE || 'http://localhost:5001'
  function createToast(){
    var el = document.getElementById('j_toast')
    if(!el){
      el = document.createElement('div')
      el.id = 'j_toast'
      el.className = 'toast hide'
      document.body.appendChild(el)
    }
    return el
  }
  function showToast(msg, type){
    try{
      var el = createToast()
      el.className = 'toast '+(type||'info')
      el.textContent = msg
      setTimeout(function(){ el.classList.add('hide') }, 2600)
      setTimeout(function(){ el.className = 'toast hide'; el.textContent='' }, 3200)
    }catch(e){ alert(msg) }
  }
  window.showToast = showToast
  function buildMega(){
    var nav = document.querySelector('.nav')
    if(!nav) return
    if(nav.getAttribute('data-mega')==='1') return
    nav.setAttribute('data-mega','1')
    nav.className = 'nav mega-nav'
    nav.innerHTML = ''
    var html = ''
    html += '<a href="index.html" class="nav-link" role="menuitem" tabindex="0">首页</a>'
    html += '<div class="nav-item" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-controls="panel-tickets">车票</div>'
    html += '<div class="nav-item" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-controls="panel-member">我的12306</div>'
    html += '<a href="info.html" class="nav-link" role="menuitem" tabindex="0">信息查询</a>'
    html += '<a href="help.html" class="nav-link" role="menuitem" tabindex="0">出行指南</a>'
    html += '<a href="register.html" class="nav-link" role="menuitem" tabindex="0">注册</a>'
    html += '<a href="login.html" class="nav-link" role="menuitem" tabindex="0">登录</a>'
    nav.innerHTML = html
    var panel = document.createElement('div')
    panel.className = 'mega-panel'
    panel.id = 'panel-tickets'
    panel.setAttribute('role','menu')
    panel.innerHTML = '<div class="panel">'
      + '<div class="panel-col"><div class="panel-title">购买</div>'
      + '<a href="#" role="menuitem" data-link="tickets.html">单程</a>'
      + '<a href="#" role="menuitem" data-link="tickets.html?type=wf">往返</a>'
      + '<a href="#" role="menuitem" data-link="tickets.html?type=lc">中转换乘</a>'
      + '</div>'
      + '<div class="panel-col"><div class="panel-title">变更</div>'
      + '<a href="#" role="menuitem" data-link="account.html#orders">退票</a>'
      + '<a href="#" role="menuitem" data-link="account.html#orders">改签</a>'
      + '</div>'
      + '<div class="panel-col"><div class="panel-title">其他</div>'
      + '<a href="#" role="menuitem" data-link="info.html">正晚点</a>'
      + '<a href="#" role="menuitem" data-link="info.html">起售时间</a>'
      + '</div>'
      + '</div>'
    document.querySelector('.header').appendChild(panel)
    var panel2 = document.createElement('div')
    panel2.className = 'mega-panel'
    panel2.id = 'panel-member'
    panel2.setAttribute('role','menu')
    panel2.innerHTML = '<div class="panel">'
      + '<div class="panel-col"><div class="panel-title">我的服务</div>'
      + '<a href="#" role="menuitem" data-link="account.html#orders">我的订单</a>'
      + '<a href="#" role="menuitem" data-link="account.html#passengers">乘车人</a>'
      + '<a href="#" role="menuitem" data-link="account.html#profile">个人资料</a>'
      + '</div>'
      + '</div>'
    document.querySelector('.header').appendChild(panel2)
    var path = location.pathname.split('/').pop() || 'index.html'
    var navLinks = nav.querySelectorAll('.nav-link')
    Array.prototype.forEach.call(navLinks,function(a){
      var href = a.getAttribute('href')
      if(href === path) a.classList.add('active')
    })
    function openPanel(id, item){
      var p = document.getElementById(id)
      if(!p) return
      p.style.display = 'block'
      p.setAttribute('aria-hidden','false')
      if(item){ item.setAttribute('aria-expanded','true') }
      var firstLink = p.querySelector('a')
      if(firstLink){ firstLink.focus() }
    }
    function closePanels(){
      var ps = document.querySelectorAll('.mega-panel')
      Array.prototype.forEach.call(ps,function(p){ p.style.display = 'none'; p.setAttribute('aria-hidden','true') })
      var items = nav.querySelectorAll('.nav-item')
      Array.prototype.forEach.call(items,function(it){ it.setAttribute('aria-expanded','false') })
    }
    function bindNav(){
      var items = nav.querySelectorAll('.nav-item')
      Array.prototype.forEach.call(items,function(it){
        it.addEventListener('click',function(){
          var id = it.getAttribute('aria-controls')
          var expanded = it.getAttribute('aria-expanded')==='true'
          closePanels()
          if(!expanded){ openPanel(id, it) }
        })
        it.addEventListener('mouseenter',function(){
          var id = it.getAttribute('aria-controls')
          openPanel(id, it)
        })
        it.addEventListener('mouseleave',function(){
          setTimeout(function(){
            var p = document.getElementById(it.getAttribute('aria-controls'))
            var rel = document.activeElement
            if(p && !p.contains(rel)){ closePanels() }
          }, 120)
        })
        it.addEventListener('keydown',function(e){
          var code = e.key
          if(code==='Enter' || code===' ' || code==='ArrowDown'){
            e.preventDefault()
            closePanels()
            openPanel(it.getAttribute('aria-controls'), it)
          }
          if(code==='Escape'){
            closePanels()
          }
          if(code==='ArrowRight' || code==='ArrowLeft'){
            var all = nav.querySelectorAll('.nav-link, .nav-item')
            var arr = Array.prototype.slice.call(all)
            var idx = arr.indexOf(it)
            var next = code==='ArrowRight' ? idx+1 : idx-1
            if(next>=0 && next<arr.length){ arr[next].focus() }
          }
        })
      })
      document.addEventListener('click',function(e){
        var inside = e.target.closest('.mega-panel') || e.target.closest('.nav-item')
        if(!inside){ closePanels() }
      })
      var links = document.querySelectorAll('.mega-panel a')
      Array.prototype.forEach.call(links,function(a){
        a.addEventListener('click',function(e){
          if(e) e.preventDefault()
          var href = a.getAttribute('data-link')
          if(href){ window.location.href = href }
        })
        a.setAttribute('tabindex','0')
        a.addEventListener('keydown',function(e){
          var k = e.key
          if(k==='Enter' || k===' '){
            e.preventDefault()
            var href = a.getAttribute('data-link')
            if(href){ window.location.href = href }
          }
        })
      })
    }
  bindNav()
  }
  buildMega()
  ;(function(){
    try{
      var su = sessionStorage.getItem('user')
      var st = sessionStorage.getItem('token')
      var lu = localStorage.getItem('user')
      var lt = localStorage.getItem('token')
      var ln = localStorage.getItem('userName')
      if((!su || !st) && lu && lt){
        sessionStorage.setItem('user', lu)
        sessionStorage.setItem('token', lt)
        if(ln) sessionStorage.setItem('userName', ln)
      }
    }catch(e){}
  })()
  var closeEl = document.querySelector('.search-down .close')
  if(closeEl){
    closeEl.addEventListener('click',function(){
      var box = document.querySelector('.search-down')
      if(box) box.style.display = 'none'
      var input = document.getElementById('search-input')
      if(input) input.value = ''
    })
  }
  var dots = document.querySelectorAll('.fullSlide .hd li')
  var slides = document.querySelectorAll('.fullSlide .bd li')
  var idx = 0
  function updateSlide(i){
    Array.prototype.forEach.call(dots,function(d){d.classList.remove('on')})
    Array.prototype.forEach.call(slides,function(s){s.style.display = 'none'})
    if(dots[i]) dots[i].classList.add('on')
    if(slides[i]) slides[i].style.display = 'block'
  }
  if(dots.length>0 && slides.length>0){
    updateSlide(0)
    setInterval(function(){
      idx = (idx+1)%slides.length
      updateSlide(idx)
    },4000)
  }
  var loginBtn = document.getElementById('loginSubmit')
  if(loginBtn){
    loginBtn.addEventListener('click',function(){
      var u = document.getElementById('loginUser')
      var p = document.getElementById('loginPwd')
      var rm = document.getElementById('remember')
      var name = (u && u.value.trim()) || ''
      var pwd = (p && p.value.trim()) || ''
      if(name && pwd){
        var url = (window.API_BASE||'') + '/auth/signin'
        try{
          fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ phone: name, password: pwd })})
            .then(function(r){ return r.json() })
            .then(function(res){
              if(res && res.success && res.data){
                var userPhone = (res.data.user && res.data.user.phone) || name
                var userName = (res.data.user && res.data.user.name) || userPhone
                sessionStorage.setItem('user', userPhone)
                sessionStorage.setItem('userName', userName)
                sessionStorage.setItem('token', res.data.token || '')
                try{ if(rm && rm.checked){ localStorage.setItem('user', userPhone); localStorage.setItem('userName', userName); localStorage.setItem('token', res.data.token || '') } }catch(err){}
                window.location.href = 'index.html'
              }else{
                if(window.showToast){ window.showToast((res && res.message) || '登录失败','error') }
              }
            })
            .catch(function(){ if(window.showToast){ window.showToast('网络错误','error') } })
        }catch(e){ if(window.showToast){ window.showToast('网络错误','error') } }
      }
    })
  }
  var user = sessionStorage.getItem('user')
  var userName = sessionStorage.getItem('userName')
  if(user){
    var nav = document.querySelector('.nav')
    if(nav){
      var loginLink = nav.querySelector('a[href="login.html"]')
      if(loginLink){
        loginLink.textContent = '退出'
        loginLink.classList.remove('active')
        loginLink.addEventListener('click',function(e){
          e.preventDefault()
          sessionStorage.removeItem('user')
          sessionStorage.removeItem('userName')
          sessionStorage.removeItem('token')
          try{ localStorage.removeItem('user'); localStorage.removeItem('userName'); localStorage.removeItem('token') }catch(err){}
          window.location.href = 'index.html'
        })
      }
      var registerLink = nav.querySelector('a[href="register.html"]')
      if(registerLink){
        registerLink.textContent = '欢迎，'+(userName || user)
        registerLink.setAttribute('href','account.html')
        registerLink.setAttribute('title','进入个人中心')
      }
      var mOrders = document.querySelector('#sideContentMember .form-row a[href="tickets.html"]')
      if(mOrders){ mOrders.setAttribute('href','account.html#orders') }
      var mProfile = document.querySelector('#sideContentMember .form-row a[href="register.html"]')
      if(mProfile){ mProfile.setAttribute('href','account.html#profile') }
      var svcMember = document.querySelector('.services a[href="register.html"]')
      if(svcMember){ svcMember.setAttribute('href','account.html') }
    }
  }
  var tabLis = document.querySelectorAll('.search-tab-hd li')
  Array.prototype.forEach.call(tabLis,function(li, i){
    li.addEventListener('click',function(){
      Array.prototype.forEach.call(tabLis,function(x){x.classList.remove('active')})
      li.classList.add('active')
      var backRow = document.getElementById('rowBack')
      if(backRow){ backRow.style.display = i===1 ? 'flex' : 'none' }
    })
  })
  var sideLis = document.querySelectorAll('.search-side li')
  Array.prototype.forEach.call(sideLis,function(li, i){
    li.addEventListener('click',function(){
      Array.prototype.forEach.call(sideLis,function(x){x.classList.remove('active')})
      li.classList.add('active')
      var t = document.getElementById('sideContentTicket')
      var m = document.getElementById('sideContentMember')
      var q = document.getElementById('sideContentQuery')
      if(i===0){ if(t) t.style.display='block'; if(m) m.style.display='none'; if(q) q.style.display='none' }
      if(i===1){ if(t) t.style.display='none'; if(m) m.style.display='block'; if(q) q.style.display='none' }
      if(i===2){ if(t) t.style.display='none'; if(m) m.style.display='none'; if(q) q.style.display='block' }
    })
  })
  var swapBtn = document.getElementById('swapStations')
  if(swapBtn){
    swapBtn.addEventListener('click',function(){
      var a = document.getElementById('fromStation')
      var b = document.getElementById('toStation')
      if(a && b){ var t = a.value; a.value = b.value; b.value = t }
    })
  }
  var goBtn = document.getElementById('goQuery')
  if(goBtn){
    goBtn.addEventListener('click',function(){
      try{
        var g = document.getElementById('goDate')
        var b = document.getElementById('backDate')
        var gt = g && g.value ? new Date(g.value).getTime() : 0
        var bt = b && b.value ? new Date(b.value).getTime() : 0
        if(bt && gt && bt<gt){
          showToast('返程日期不能小于出发日期','error')
        }
      }catch(e){}
    })
  }
})()
