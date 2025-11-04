function bruteForce(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let visitedArr = new Array(m).fill(0);
  let ans = [];
  let k = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr1[i] === arr2[j] && visitedArr[j] === 0) {
        ans[k] = arr1[i];
        visitedArr[j] = 1;
        k++;
        break;
      } else if (arr2[j] > arr1[i]) {
        break;
      }
    }
  }
  return ans;
}

function optimal(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      ans.push(arr1[i]);
      i++;
      j++;
    }
  }
  return ans;
}

let arr1 = [1, 1, 2, 2];
let arr2 = [1, 1, 2];
let res = optimal(arr1, arr2);
console.log(res);
