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

// 生成UUID
export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// 将对象的所有键转换为小写
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

// 判断是否为JSON字符串
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

// 判断是否为合法链接
export const isValidHttpUrl = (str: any) => {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};

// 判断是否为数字, 包括'123'
export const isNumeric = (value: any) => {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(String(value));
};

// 获取当前用户
export const getUser = () => {
  const { user = {} } = window as any;
  return user;
};
