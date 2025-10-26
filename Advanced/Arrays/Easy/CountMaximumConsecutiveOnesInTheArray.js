//Count Maximum Consecutive One's in the array
// Input: arr = [1, 1, 0, 1, 1, 1]
// Output: 3

let arr = [1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
let n = arr.length;
let maxOnes = 0;
let count = 0;

let result = optimal(arr, n);
console.log("Max One's in array : ", result);

function optimal(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      count++;
      maxOnes = Math.max(maxOnes, count);
    } else {
      count = 0;
    }
  }
  return maxOnes;
}
