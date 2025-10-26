//Move all Zeros to the end of the array
// Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0

function bruteForce(arr, n) {
  console.log("Orginal Array : ", arr);
  let temp = new Array(n);
  let countZeros = 0;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      countZeros++;
    }
    if (arr[i] !== 0) {
      temp[j] = arr[i];
      j++;
    }
  }

  for (let i = n - countZeros; i < n; i++) {
    temp[i] = 0;
  }
  console.log("Moved Zeros to End : ", temp);
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function optimal(arr, n) {
  let j = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }
  for (let i = j + 1; i < n; i++) {
    if (arr[i] !== 0) {
      swap(arr, j, i);
      j++;
    }
  }
  console.log("Optimal Soluton : ", arr);
}

let arr = [1, 0, 2, 3, 0, 4, 0, 1];
let n = arr.length;
// bruteForce(arr, n);
optimal(arr, n);
