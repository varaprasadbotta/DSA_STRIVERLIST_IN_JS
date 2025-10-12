//Find the missing number in an array
// Input Format: N = 5, array[] = {1,2,4,5}
// Result: 3

function bruteForce(arr, N, length) {
  for (let i = 1; i <= N; i++) {
    let flag = 0;
    for (let j = 0; j < length; j++) {
      if (arr[j] === i) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      return i;
    }
  }
}

function betterApproach(arr, N, length) {
  let hashArr = new Array(N + 1).fill(0);
  for (let i = 0; i < length; i++) {
    hashArr[arr[i]] = 1;
  }
  for (let i = 1; i <= N; i++) {
    if (hashArr[i] === 0) {
      return i;
    }
  }
}

function optimal1(arr, N, length) {
  let sum = (N * (N + 1)) / 2;
  for (let i = 0; i < length; i++) {
    sum = sum - arr[i];
  }
  return sum;
}

function optimal2(arr, N, length) {
  let XOR1 = 0;
  let XOR2 = 0;
  for (let i = 0; i < N - 1; i++) {
    XOR2 = XOR2 ^ arr[i];
    XOR1 = XOR1 ^ (i + 1);
  }
  XOR1 = XOR1 ^ N;

  return XOR1 ^ XOR2;
}

let arr = [4, 5, 1, 2];
let N = 5;
let length = arr.length;
let ans = optimal2(arr, N, length);
console.log("Missing Number is : ", ans);
