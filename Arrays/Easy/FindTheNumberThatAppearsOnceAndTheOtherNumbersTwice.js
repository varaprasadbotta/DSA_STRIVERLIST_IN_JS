//Find the number that appears once, and the other numbers twice
// Input Format: arr[] = {2,2,1}
// Result: 1

function bruteForce(arr, n) {
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    if (count === 1) {
      return arr[i];
    }
  }
}

//using hashing
function betterApproach(arr, n) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, arr[i]);
  }
  let hashArr = new Array(max + 1).fill(0);
  for (let i = 0; i < n; i++) {
    hashArr[arr[i]]++;
  }

  for (let i = 1; i <= max; i++) {
    if (hashArr[arr[i]] === 1) {
      return arr[i];
    }
  }
}

//using map
function betterApproach2(arr, n) {
  let hashMap = new Map();
  for (let i = 0; i < n; i++) {
    let num = arr[i];
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  }

  console.log(hashMap);
  for (const [num, count] of hashMap) {
    if (count === 1) {
      return num;
    }
  }
}
function optimal(arr, n) {
  let XOR = 0;
  for (let i = 0; i < n; i++) {
    XOR = XOR ^ arr[i];
  }
  return XOR;
}

let arr = [2, 2, 5, 3, 5, 3, 1];
let n = arr.length;
let ans = betterApproach2(arr, n);
console.log(ans);
