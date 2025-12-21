export function validateUsername(v) {
  if (!v) return '请输入用户名'
  if (v.indexOf(' ') >= 0) return '用户名不能包含空格'
  if (!/^[A-Za-z][A-Za-z0-9_]{5,29}$/.test(v)) return '6-30位，字母开头，可含数字与下划线'
  return ''
}

export function passwordStrength(v) {
  if (!v) return 'a'
  let s = 0
  if (/[a-z]/.test(v)) s++
  if (/[A-Z]/.test(v)) s++
  if (/[0-9]/.test(v)) s++
  if (/[^A-Za-z0-9]/.test(v)) s++
  if (v.length >= 12) s++
  if (s <= 2) return 'a'
  if (s === 3) return 'b'
  return 'c'
}

export function validatePassword(v, u) {
  if (!v) return '请输入密码'
  if (v.length < 6) return '密码至少6位'
  if (u && v === u) return '密码不能与用户名相同'
  return ''
}

export function validateConfirmPassword(v, p) {
  if (!v) return '请再次输入密码'
  if (v !== p) return '两次输入的密码不一致'
  return ''
}

export function validateName(v, isChina) {
  if (!v) return '请输入姓名'
  const hasCn = /[\u4e00-\u9fa5]/.test(v)
  const hasEn = /[A-Za-z]/.test(v)
  if (isChina && !hasCn) return '姓名需为中文'
  if (!isChina && !hasEn) return '姓名需为英文'
  if (hasCn && hasEn) return '中文与英文不可混用'
  return ''
}

export function validateEmail(v) {
  if (!v) return ''
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v)) return '邮箱格式不正确'
  return ''
}

export function validateMobile(code, v) {
  if (!v) return '请输入手机号码'
  if (!/^\d{6,15}$/.test(v)) return '手机号码格式不正确'
  return ''
}

export function validateIdNumber(type, v) {
  if (!v) return '请输入证件号码'
  if (type === '1') {
    if (!/^\d{17}[\dXx]$/.test(v)) return '身份证号码格式不正确'
  }
  return ''
}

export function deriveBirthdayFromId(v) {
  if (!/^\d{17}[\dXx]$/.test(v)) return ''
  const y = v.substring(6, 10)
  const m = v.substring(10, 12)
  const d = v.substring(12, 14)
  return `${y}-${m}-${d}`
}
