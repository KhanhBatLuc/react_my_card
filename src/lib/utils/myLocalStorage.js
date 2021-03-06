export function setLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return value;
}

export function removeLocalStorage(key) {
  return localStorage.removeItem(key);
}
