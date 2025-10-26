//Search in a sorted 2D matrix
// Input Format: N = 3, M = 4, target = 8,
// mat[] =
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// Result: true

function bruteForce(arr, N, M, target) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

function betterApproach(arr, N, M, target) {
  for (let i = 0; i < N; i++) {
    if (arr[i][0] <= target && target <= arr[i][M - 1]) {
      // you can do this one also but this is linear search will take 0(n)
      //   let row = arr[i];
      //   for (let j = 0; j < M; j++) {
      //     if (row[j] === target) {
      //       return true;
      //     }
      //   }
      // so that lets go with binary search for paticular array if satisfies conditaion
      return binarySearch(arr[i], target);
    }
  }
  return false;
}

function optimal(arr, N, M, target) {
  let low = 0;
  let high = N * M - 1;
  while (low <= high) {
    let mid = (low + high) / 2;
    let row = Math.floor(mid / M);
    let col = Math.floor(mid % M);
    if (arr[row][col] === target) {
      return true;
    } else if (arr[row][col] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let N = 3;
let M = 4;
let target = 8;
let result = betterApproach(arr, N, M, target);
console.log(result);
