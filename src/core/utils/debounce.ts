export function debounce(fn: (...args: any[]) => any, delay: number = 200) {
  let timer = 0;

  return (...args: any[]) => {
    timer && window.clearTimeout(timer);

    timer = window.setTimeout(() => {
      fn.call(null, args);
    }, delay);
  };
}
