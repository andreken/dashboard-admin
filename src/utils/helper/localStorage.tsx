
// ----------------------------
// LOCAL STORAGE
// ----------------------------

// Save object
export function storageSaveItem(key: string, value: any) {
  var timestamp = new Date().getTime();
  localStorage.setItem(key, JSON.stringify({ value: value, timestamp: timestamp }));
}

// Get object
export function storageGetItem(key: string) {
  if(!localStorage.getItem(key))  return null;
  try { 
      return JSON.parse(localStorage.getItem(key) || '[]');
  } catch (e) { 
      return localStorage.getItem(key);
  }
}

// Get object value
export function storageGetItemValue (key: string) {
  const item = storageGetItem(key);
  if(item === null) return null;
  if(item.value === undefined)  return item;
  try {
      return JSON.parse(item.value);
  } catch (e) {
      return item.value;
  }
}

// Remove object
export function storageRemoveItem(key: string) {
  localStorage.removeItem(key);
}

