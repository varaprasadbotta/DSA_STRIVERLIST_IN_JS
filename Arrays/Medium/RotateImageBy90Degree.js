//Rotate Image by 90 degree

// Input: [[1,2,3],
//         [4,5,6],
//         [7,8,9]]

// Output: [[7,4,1],
//          [8,5,2],
//          [9,6,3]]

function bruteForce(arr, n, m) {
  let ans = Array.from({ length: n }, () => Array(m).fill(0));
  console.log(ans);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ans[j][n - 1 - i] = arr[i][j];
    }
  }
  console.log(ans);
}

function optimal(arr, n, m) {
  //transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < m; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  console.log(arr);
  //reverse the row
  for (let i = 0; i < n; i++) {
    arr[i].reverse();
  }
  console.log(arr);
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let n = arr.length;
let m = arr[0].length;
optimal(arr, n, m);
