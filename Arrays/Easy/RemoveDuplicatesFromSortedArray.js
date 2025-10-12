// Remove duplicates from sorted array

// Input: nums = [0, 0, 3, 3, 5, 6]

// Output: 4

function bruteForceRemoveDuplicatesFromSortedArray(arr, n) {
  let mySet = new Set();
  for (let i = 0; i < n; i++) {
    mySet.add(arr[i]);
  }
  let convertedToArray = [...mySet];
  let lengthOfSet = mySet.size;
  for (let i = 0; i < lengthOfSet; i++) {
    arr[i] = convertedToArray[i];
  }
  return lengthOfSet;
}

function optimalRemoveDuplicatesFromSortedArray(arr, n) {
  let index = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[index]) {
      arr[index + 1] = arr[i];
      index++;
    }
  }
  return index + 1;
}

let arr = [0, 0, 3, 3, 5, 6];
let n = arr.length;
let uniqueElements = optimalRemoveDuplicatesFromSortedArray(arr, n);
console.log(uniqueElements);
