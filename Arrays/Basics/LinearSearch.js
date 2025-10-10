function linearSearch(arr, n, num) {
  if (n === 0) {
    return -1;
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

let arr = [5, 7, 4, 8, 2, 83];
let n = arr.length;
let num = 2;
let index = linearSearch(arr, n, num);
console.log(index);
