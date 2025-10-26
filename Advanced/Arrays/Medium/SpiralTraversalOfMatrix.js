// Problem Statement: Given a Matrix, print the given matrix in spiral order.

// Examples:

// Example 1:               left   =>    right
// Input: Matrix[][] =   top  { { 1, 2, 3, 4 },
// 		                        { 5, 6, 7, 8 },
// 		                        { 9, 10, 11, 12 },
// 	                     bottom { 13, 14, 15, 16 } }

// Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
// Explanation: The output of matrix in spiral form.

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let result = optimal(arr);
console.log(result);

function optimal(arr) {
  let n = arr.length;
  let m = arr[0].length;
  let left = 0;
  let right = m - 1;
  let top = 0;
  let bottom = n - 1;
  let ans = [];

  while (left <= right && top <= bottom) {
    //right
    for (let i = left; i <= right; i++) {
      ans.push(arr[top][i]);
    }
    top++;

    //bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(arr[i][right]);
    }
    right--;

    //left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(arr[bottom][i]);
      }
      bottom--;
    }

    //top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(arr[i][left]);
      }
      left++;
    }
  }
  return ans;
}
