export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

// Generate UUID
export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// Convert all keys of an object to lowercase
export const keysToLowerCase = (obj: { [key: string]: any }) => {
  const newObj: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key.toLowerCase()] = obj[key];
    }
  }
  return newObj;
};

export const isPlainObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

// Check if a string is JSON
export const isJSONString = (str: string) => {
  if (typeof str !== 'string') {
    return false;
  }
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

// Check if a string is a valid URL
export const isValidHttpUrl = (str: any) => {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};

// Check if value is numeric, including '123'
export const isNumeric = (value: any) => {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(String(value));
};

// Get current user
export const getUser = () => {
  const { user = {} } = window as any;
  return user;
};
