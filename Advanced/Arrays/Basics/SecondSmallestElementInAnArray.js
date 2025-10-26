let arr = [9, 16, 4, 98, 77, 35, 47];
let n = arr.length;

function optimalFindSecondSmallestElement(arr, n) {
  let smallestElement = arr[0];
  let secondSmallestElement = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (arr[i] < smallestElement) {
      secondSmallestElement = smallestElement;
      smallestElement = arr[i];
    } else if (arr[i] < secondSmallestElement && arr[i] !== smallestElement) {
      secondSmallestElement = arr[i];
    }
  }
  return secondSmallestElement;
}

function betterFindSecondSmallestElement(arr, n) {
  let smallestElement = arr[0];
  let secondSmallestElement = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] < secondSmallestElement && arr[i] !== smallestElement) {
      secondSmallestElement = arr[i];
    }
  }
  return secondSmallestElement;
}

function bruteForecfindSmallestElememnt(arr, n) {
  arr.sort((a, b) => a - b);
  let smallestElement = arr[0];
  let secondSmallestElement = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== smallestElement) {
      secondSmallestElement = arr[i];
      break;
    }
  }
  return secondSmallestElement;
}

let ans = optimalFindSecondSmallestElement(arr, n);
console.log("second Smallest Element : ", ans);
