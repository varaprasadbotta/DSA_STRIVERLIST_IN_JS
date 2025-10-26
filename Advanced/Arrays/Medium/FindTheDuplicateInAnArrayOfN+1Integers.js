//Find the duplicate in an array of N+1 integers

// Input: arr=[1,3,4,2,2]
// Output: 2
// Explanation: Since 2 is the duplicate number the answer will be 2.

function bruteForce(arr, n) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
}

function betterApproach(arr, n) {
  let freq = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (freq[arr[i]] === 0) {
      freq[arr[i]]++;
    } else {
      return arr[i];
    }
  }
}

let arr = [1, 3, 4, 3, 2];
let n = arr.length;
let result = betterApproach(arr, n);
console.log(result);
