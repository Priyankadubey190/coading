const arr = [1, 2, 3, 4];
const forEachResult = arr.forEach((ar, i) => {
  ar[i] = ar[i] + 2;
});

console.log(forEachResult, "hiii", arr);
