const KEY_USER = '12306_user'
const KEY_TOKEN = '12306_token'

export function isLoggedIn() {
  return !!localStorage.getItem(KEY_USER)
}

export function login(user, token) {
  if (user) {
    localStorage.setItem(KEY_USER, typeof user === 'string' ? user : JSON.stringify(user))
  }
  if (token) {
    localStorage.setItem(KEY_TOKEN, token)
  }
  // Dispatch a storage event so other components can react (if using storage listener)
  // or use a custom event
  window.dispatchEvent(new Event('auth-change'))
}

export function logout() {
  localStorage.removeItem(KEY_USER)
  localStorage.removeItem(KEY_TOKEN)
  window.dispatchEvent(new Event('auth-change'))
}

export function currentUser() {
  const u = localStorage.getItem(KEY_USER)
  try {
    return JSON.parse(u)
  } catch (e) {
    return u
  }
}

export function getToken() {
  return localStorage.getItem(KEY_TOKEN)
}
