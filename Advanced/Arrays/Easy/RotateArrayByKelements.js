//Rotate array left by K elements
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , left
// Output: 6 7 1 2 3 4 5

function bruteForce(arr, n, k) {
  console.log("Orginal Array : ", arr);
  let tempArr = new Array(k);
  for (let i = 0; i < k; i++) {
    tempArr[i] = arr[i];
  }

  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }

  for (let i = n - k; i < n; i++) {
    arr[i] = tempArr[i - (n - k)];
  }

  console.log("Aftet Left Rotated Array : ", arr);
}

function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function optimal(arr, n, k) {
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);
  console.log("After Rotation From Optimal : ", arr);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length;
let d = 5;
let k = d % n;
optimal(arr, n, k);
