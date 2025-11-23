;(function(){
  var API = window.API_BASE || 'http://localhost:5000'
  function show(msg,type){ if(window.showToast) window.showToast(msg,type||'info') }
  function bind(){
    var btn = document.getElementById('regSubmit')
    if(!btn) return
    btn.addEventListener('click',function(){
      var name = (document.getElementById('regUser').value||'').trim()
      var email = (document.getElementById('regEmail').value||'').trim()
      var phone = (document.getElementById('regMobile').value||'').trim()
      var pwd = (document.getElementById('regPwd').value||'')
      var pwd2 = (document.getElementById('regPwd2').value||'')
      var phoneRe = /^1[3-9]\d{9}$/
      var strongRe = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/
      if(!phoneRe.test(phone)) return show('手机号格式不正确','error')
      if(pwd!==pwd2) return show('两次密码不一致','error')
      if(!strongRe.test(pwd)) return show('密码需包含字母和数字且至少8位','error')
      fetch(API+'/auth/signup', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ phone: phone, password: pwd, name: name, email: email })})
        .then(function(r){ return r.json() })
        .then(function(res){
          if(res && res.success && res.data){
            var userPhone = (res.data.user && res.data.user.phone) || phone
            sessionStorage.setItem('user', userPhone)
            sessionStorage.setItem('token', res.data.token || '')
            window.location.href = 'account.html'
          }else{ show((res && res.message)||'注册失败','error') }
        })
        .catch(function(){ show('网络错误','error') })
    })
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',bind)
  }else{ bind() }
})()