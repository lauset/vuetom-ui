export const debounce = function(func: Function, wait: number) {
  let startTime = Date.now();
  let timer: any;

  return (...args: any) => {
    if (Date.now() - startTime < wait && timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, wait);
    startTime = Date.now();
  }
}