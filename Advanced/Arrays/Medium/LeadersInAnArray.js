// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.
// Input:
//  arr = [10, 22, 12, 3, 0, 6]
// Output:
//  22 12 6
// Explanation:
//  6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6

function bruteForce(arr, n) {
  let ans = new Array();
  for (let i = 0; i < n; i++) {
    let leader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
      }
    }
    if (leader === true) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

function optimal(arr, n) {
  let ans = [];
  let maxi = Number.MIN_VALUE;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > maxi) {
      ans.push(arr[i]);
      maxi = arr[i];
    }
  }
  return ans;
}

let arr = [10, 22, 12, 3, 0, 6];
let n = arr.length;
let result = optimal(arr, n);
console.log(result);
