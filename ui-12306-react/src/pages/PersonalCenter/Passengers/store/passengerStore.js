const KEY_ADDS = 'pc_passengers_adds'
const KEY_DELS = 'pc_passengers_deletes'

function readJson(key) {
  try {
    const s = localStorage.getItem(key)
    return s ? JSON.parse(s) : []
  } catch {
    return []
  }
}

function writeJson(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val))
  } catch {}
}

export function loadPassengers(baseList = []) {
  const adds = readJson(KEY_ADDS)
  const dels = readJson(KEY_DELS)
  const delSet = new Set(dels)
  const merged = [...baseList.filter(p => !delSet.has(p.allEncStr)), ...adds]
  return merged
}

export function addPassenger(p) {
  const adds = readJson(KEY_ADDS)
  adds.push(p)
  writeJson(KEY_ADDS, adds)
}

export function deleteByEncStr(encList = []) {
  if (!Array.isArray(encList) || encList.length === 0) return
  // remove from added list
  const adds = readJson(KEY_ADDS).filter(p => !encList.includes(p.allEncStr))
  writeJson(KEY_ADDS, adds)
  // mark deletes for base list
  const dels = readJson(KEY_DELS)
  const delSet = new Set(dels)
  encList.forEach(e => delSet.add(e))
  writeJson(KEY_DELS, Array.from(delSet))
}

export function clearAllPassengerLocal() {
  localStorage.removeItem(KEY_ADDS)
  localStorage.removeItem(KEY_DELS)
}

