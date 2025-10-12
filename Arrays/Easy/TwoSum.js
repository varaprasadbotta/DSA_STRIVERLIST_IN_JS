//Two Sum : Check if a pair with given sum exists in Array
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)

function bruteForce(arr, target, length) {
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (i === j) continue;
      if (arr[i] + arr[j] === target) {
        return new Array(i, j);
      }
    }
  }
  return [-1, -1];
}

function betterApproach(arr, target, length) {
  let map = new Map();
  for (let i = 0; i < length; i++) {
    let value = arr[i];
    let require = target - value;
    if (map.get(require)) {
      return new Array(map.get(require), i);
    }
    map.set(arr[i], i);
  }
}

function optimal(arr, target, length) {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = length - 1;
  while (start <= end) {
    if (arr[start] + arr[end] < target) {
      start++;
    } else if (arr[start] + arr[end] > target) {
      end--;
    } else {
      return "Yes";
    }
  }
  return "NO";
}

let arr = [2, 6, 5, 8, 11];
let target = 14;
let length = arr.length;
let result = optimal(arr, target, length);
console.log(result);
