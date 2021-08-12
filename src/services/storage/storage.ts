export function removeStorage(key: string) {
  if (
    typeof window !== "undefined" &&
    window.localStorage &&
    window.localStorage.getItem(key)
  ) {
    window.localStorage.removeItem(key);
  }

  if (
    typeof window !== "undefined" &&
    window.sessionStorage &&
    window.sessionStorage.getItem(key)
  ) {
    window.sessionStorage.removeItem(key);
  }
}

export function getStorage(key: string) {
  const localString = window.localStorage.getItem(key);
  const sessionString = window.sessionStorage.getItem(key);
  if (typeof window !== "undefined" && window.localStorage && localString) {
    try {
      return JSON.parse(localString);
    } catch (err) {
      console.log("Error parsing local string", err);
      return null;
    }
  }

  if (typeof window !== "undefined" && window.sessionStorage && sessionString) {
    try {
      return JSON.parse(sessionString);
    } catch (err) {
      console.log("Error parsing session string", err);
      return null;
    }
  }

  return null;
}

export function setStorage(
  value: Object | undefined | null,
  key: string,
  isLocalStorage: boolean
) {
  if (value) {
    try {
      const stringValue = JSON.stringify(value);
      if (
        isLocalStorage &&
        typeof window !== "undefined" &&
        window.localStorage
      ) {
        return window.localStorage.setItem(key, stringValue);
      }

      if (typeof window !== "undefined" && window.sessionStorage) {
        return window.sessionStorage.setItem(key, stringValue);
      }
    } catch (err) {
      console.log("Error stringifying object", err);
    }
  }
}

export function removeAppStorage() {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.clear();
  }

  if (typeof window !== "undefined" && window.sessionStorage) {
    window.sessionStorage.clear();
  }
}
