export function debounce(fn: (...args: any[]) => any, delay: number = 200) {
  let timer = 0;

  return (...args: any[]) => {
    timer && clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(null, args);
    }, delay);
  };
}
