//Rearrange Array Elements by Sign

// Input:
// arr[] = {1,2,-4,-5}
// Output:
// 1 -4 2 -5

function bruteForce(arr, n) {
  let pos = [];
  let neg = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }
  for (let i = 0; i < n / 2; i++) {
    arr[2 * i] = pos[i];
    arr[2 * i + 1] = neg[i];
  }
  console.log(arr);
}

function optimal(arr, n) {
  //this is just to return and store ans arr
  let ans = new Array(n);
  let posIndex = 0;
  let negIndex = 1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      ans[posIndex] = arr[i];
      posIndex = posIndex + 2;
    } else {
      ans[negIndex] = arr[i];
      negIndex = negIndex + 2;
    }
  }
  console.log(ans);
}

let arr = [1, 2, -4, -5, -7, 3];
let n = arr.length;
optimal(arr, n);
