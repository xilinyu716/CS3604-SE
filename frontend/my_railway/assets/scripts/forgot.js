;(function(){
  var API = window.API_BASE || 'http://localhost:5000'
  var step1 = document.getElementById('step1')
  var step2 = document.getElementById('step2')
  var step3 = document.getElementById('step3')
  var step4 = document.getElementById('step4')
  var methodFace = document.getElementById('methodFace')
  var methodEmail = document.getElementById('methodEmail')
  var phone = ''
  var code = ''

  function showStep(n){
    if(step1) step1.style.display = n===1 ? 'block' : 'none'
    if(step2) step2.style.display = n===2 ? 'block' : 'none'
    if(step3) step3.style.display = n===3 ? 'block' : 'none'
    if(step4) step4.style.display = n===4 ? 'block' : 'none'
    var steps = document.querySelectorAll('#resetBox .progress .step')
    for(var i=0;i<steps.length;i++){ if(i < n) steps[i].classList.add('active'); else steps[i].classList.remove('active') }
  }

  function switchMethod(m){
    var tabs = document.querySelectorAll('#resetBox .find-tabs li')
    Array.prototype.forEach.call(tabs,function(li){
      var is = li.getAttribute('data-method')===m
      if(is) li.classList.add('active'); else li.classList.remove('active')
    })
    var progress = document.querySelector('#resetBox .progress')
    if(progress) progress.style.display = m==='phone' ? 'flex' : 'none'
    if(methodFace) methodFace.style.display = m==='face' ? 'block' : 'none'
    if(methodEmail) methodEmail.style.display = m==='email' ? 'block' : 'none'
    if(m==='phone'){ showStep(1) } else { if(step1) step1.style.display='none'; if(step2) step2.style.display='none'; if(step3) step3.style.display='none'; if(step4) step4.style.display='none' }
  }

  function sendCode(ph){
    var url = API + '/auth/send-code'
    return fetch(url, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ phone: ph, type: 'reset_password' }) })
      .then(function(r){ return r.json() })
  }

  function resetPwd(ph, cd, np){
    var url = API + '/auth/reset-password'
    return fetch(url, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ phone: ph, verificationCode: cd, newPassword: np }) })
      .then(function(r){ return r.json() })
  }

  var btnSend = document.getElementById('fpSend')
  if(btnSend){
    btnSend.addEventListener('click', function(){
      if(btnSend.disabled) return
      var p = document.getElementById('fpPhone')
      var val = (p && p.value.trim()) || ''
      var ok = /^1[3-9]\d{9}$/.test(val)
      if(!ok){ if(window.showToast) window.showToast('手机号格式不正确','error'); return }
      btnSend.disabled = true
      var oldText = btnSend.textContent
      btnSend.textContent = '发送中…'
      sendCode(val).then(function(res){
        if(res && res.success){ phone = val; if(window.showToast) window.showToast('验证码已发送，5分钟内有效','success'); showStep(2); var ps = document.getElementById('fpPhoneShow'); if(ps){ ps.value = '(+86) '+phone } }
        else { if(window.showToast) window.showToast((res && res.message) || '发送失败','error') }
      }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
      .finally(function(){ btnSend.disabled = false; btnSend.textContent = oldText })
    })
  }

  var btnResend = document.getElementById('fpResend')
  if(btnResend){
    btnResend.addEventListener('click', function(e){
      e.preventDefault()
      if(!phone){ showStep(1); return }
      if(btnSend) btnSend.disabled = true
      sendCode(phone).then(function(res){
        if(res && res.success){ if(window.showToast) window.showToast('验证码已重新发送','success') }
        else { if(window.showToast) window.showToast((res && res.message) || '发送失败','error') }
      }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
      .finally(function(){ if(btnSend) btnSend.disabled = false })
    })
  }

  var btnNext = document.getElementById('fpNext')
  if(btnNext){
    btnNext.addEventListener('click', function(){
      var c = document.getElementById('fpCode')
      var v = (c && c.value.trim()) || ''
      if(!v){ if(window.showToast) window.showToast('请输入验证码','error'); return }
      code = v
      showStep(3)
    })
  }

  var btnSubmit = document.getElementById('fpSubmit')
  if(btnSubmit){
    btnSubmit.addEventListener('click', function(){
      var np = document.getElementById('fpNew')
      var cf = document.getElementById('fpConfirm')
      var a = (np && np.value.trim()) || ''
      var b = (cf && cf.value.trim()) || ''
      var strong = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(a)
      if(!strong){ if(window.showToast) window.showToast('密码需不少于8位且含字母和数字','error'); return }
      if(a!==b){ if(window.showToast) window.showToast('两次输入的密码不一致','error'); return }
      resetPwd(phone, code, a).then(function(res){
        if(res && res.success){ showStep(4) }
        else { if(window.showToast) window.showToast((res && res.message) || '重置失败','error') }
      }).catch(function(){ if(window.showToast) window.showToast('网络错误','error') })
    })
  }
  var tabs = document.querySelectorAll('#resetBox .find-tabs li')
  Array.prototype.forEach.call(tabs,function(li){ li.addEventListener('click',function(){ switchMethod(li.getAttribute('data-method')) }) })
  var emailBtn = document.getElementById('emailSubmit')
  if(emailBtn){ emailBtn.addEventListener('click',function(){ if(window.showToast) window.showToast('邮箱找回为模拟流程','info') }) }
  showStep(1)
  switchMethod('phone')
})()