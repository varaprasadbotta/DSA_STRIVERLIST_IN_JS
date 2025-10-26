// Left Rotate the Array by One
function bruteForce(arr, n) {
  let tempArr = new Array(n);
  for (let i = 1; i < n; i++) {
    tempArr[i - 1] = arr[i];
  }
  tempArr[n - 1] = arr[0];
  console.log(tempArr);
}

function optimal(arr, n) {
  let firstNumber = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = firstNumber;
  console.log("Optimal Approach : ", arr);
}

let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;
bruteForce(arr, n);
optimal(arr, n);
