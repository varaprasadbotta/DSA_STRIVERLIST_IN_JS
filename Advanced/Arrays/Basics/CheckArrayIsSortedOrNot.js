function bruteForceCheckArrayIsSortedOrNot(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        return false;
      }
    }
  }
  return true;
}

function optimalCheckArrayIsSortedOrNot(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

let arr = [3, 6, 9, 44, 67, 97, 99];
let n = arr.length;
let isSorted = optimalCheckArrayIsSortedOrNot(arr, n);

console.log(isSorted ? "Array is sorted" : "Array is not Sorted");
