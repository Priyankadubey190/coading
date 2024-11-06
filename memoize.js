function myMemoize(fn, context) {
  let res = {};
  return function (...args) {
    const argsCatch = JSON.stringify(args);
    if (!res[argsCatch]) {
      res[argsCatch] = fn.call(context || this, ...args);
    }
    return res[argsCatch];
  };
}
function product(num1, num2) {
  for (let i = 0; i < 100000000000; i++) {
    return num1 * num2;
  }
}
let memoizeProduct = myMemoize(product);
console.time("First Call");
console.log(memoizeProduct(3456, 2459));
console.timeEnd("First Call");
console.time("Second call");
console.log(memoizeProduct(3456, 2459));
console.timeEnd("Second call");
