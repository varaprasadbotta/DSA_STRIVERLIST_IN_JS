let arr = [5, 8, 9, 252, 804, 188, 799, 54, 999];
let n = arr.length;

let largestElement = arr[0];
let secondLargestElement = -1;

// optimal aproach
//=================
for (let i = 0; i < n; i++) {
  if (arr[i] > largestElement) {
    secondLargestElement = largestElement;
    largestElement = arr[i];
  } else if (arr[i] > secondLargestElement && arr[i] !== largestElement) {
    secondLargestElement = arr[i];
  }
}

console.log(secondLargestElement);

// time complexity => 0(n)

// Better Approach
//===================
/*
for (let i = 0; i < n; i++) {
  if (arr[i] > largestElement) {
    largestElement = arr[i];
  }
}

for (let i = 0; i < n; i++) {
  if (arr[i] > secondLargestElement && arr[i] !== largestElement) {
    secondLargestElement = arr[i];
  }
}

console.log(secondLargestElement);

 time complexity = 0(2n)
*/

//Brute force
//===============
/*

arr.sort((a, b) => a - b);
console.log(arr);
for (let i = n - 2; i >= 0; i--) {
  if (arr[i] !== arr[n - 1]) {
    secondLargestElement = arr[i];
    break;
  }
}
console.log("Second Largest Element", secondLargestElement);
 
time complexity = 0(nlogn) + 0(n)

*/
