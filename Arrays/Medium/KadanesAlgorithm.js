// Kadane's Algorithm : Maximum Subarray Sum in an Array

// Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

// Example 1:
// Input: arr = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Examples 2:
// Input: arr = [1]
// Output: 1
// Explanation: Array has only one element and which is giving positive sum of 1
function bruteForce(arr, n) {
  let sum = 0;
  let maxi = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      maxi = Math.max(sum, maxi);
    }
  }
  return maxi;
}

function betterApproach(arr, n) {
  let sum = 0;
  let maxi = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      maxi = Math.max(sum, maxi);
    }
  }
  return maxi;
}

function optimal(arr, n) {
  let sum = 0;
  let maxi = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum > maxi) {
      maxi = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length;
let result = optimal(arr, n);
console.log(result);
