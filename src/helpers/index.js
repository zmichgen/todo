export const tail = arr => arr[arr.length - 1];
export const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)))