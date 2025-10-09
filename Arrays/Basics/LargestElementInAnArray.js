// Brute Force Approach

/*
function sortArr(arr) {
  if (arr.length === 0) {
    return "Empty Array";
  }
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

const arr1 = [2, 5, 1, 3, 0];
console.log("largest Element is the Array is : ", sortArr(arr1));

const arr2 = [];
console.log("largest Element is the Array is : ", sortArr(arr2));


Time Complexity: O(N*log(N))

Space Complexity: O(n)
*/

// Optimal Approach

function largestElement(arr) {
  if (arr.length === 0) {
    return "Empty Array";
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const arr1 = [2, 5, 1, 3, 0];
console.log("largest Element is the Array is : ", largestElement(arr1));

const arr2 = [9, 0, 1, -9, -88];
console.log("largest Element is the Array is : ", largestElement(arr2));

/*
 Time Complexity: O(N)

Space Complexity: O(1)
*/
