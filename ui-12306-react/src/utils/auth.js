let _user = null

export function isLoggedIn() {
  return !!_user
}

export function login(user) {
  _user = user || 'user'
}

export function logout() {
  _user = null
}

export function currentUser() {
  return _user
}
