;(function(){
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
  var navLinks = document.querySelectorAll('.nav a')
  var path = location.pathname.split('/').pop() || 'index.html'
  Array.prototype.forEach.call(navLinks,function(a){
    var href = a.getAttribute('href')
    if(href === path) a.classList.add('active')
  })
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
      var name = (u && u.value.trim()) || ''
      var pwd = (p && p.value.trim()) || ''
      if(name && pwd){
        sessionStorage.setItem('user',name)
        window.location.href = 'index.html'
      }
    })
  }
  var user = sessionStorage.getItem('user')
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
          window.location.href = 'index.html'
        })
      }
      var registerLink = nav.querySelector('a[href="register.html"]')
      if(registerLink){
        registerLink.textContent = '欢迎，'+user
        registerLink.setAttribute('href','#')
      }
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