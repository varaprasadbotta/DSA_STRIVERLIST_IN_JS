//Sort an array of 0s, 1s and 2s

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Input: nums = [0]
// Output: [0]

function bruteForce(arr, n) {
  arr.sort((a, b) => a - b);
  return arr;
}

function betterApproach(arr, n) {
  let zero = 0;
  let one = 0;
  let two = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      zero++;
    } else if (arr[i] === 1) {
      one++;
    } else {
      two++;
    }
  }

  for (let i = 0; i < zero; i++) {
    arr[i] = 0;
  }
  for (let i = zero; i < zero + one; i++) {
    arr[i] = 1;
  }
  for (let i = zero + one; i < n; i++) {
    arr[i] = 2;
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Dutch national algorithm
function optimal(arr, n) {
  let low = 0;
  let mid = 0;
  let high = n - 1;

  for (let i = 0; i < n; i++) {
    if (arr[mid] === 0) {
      swap(arr, mid, low);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }
  return arr;
}

let arr = [2, 0, 2, 1, 1, 1, 0];
let n = arr.length;
let result = optimal(arr, n);
console.log(result);
