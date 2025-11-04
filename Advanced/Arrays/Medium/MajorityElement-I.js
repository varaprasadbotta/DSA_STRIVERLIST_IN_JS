// Majority Element-I

// Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]
// Output: 7
// Explanation:
// The number 7 appears 5 times in the 9 sized array

function bruteForce(nums) {
  let n = nums.length;
  let map = new Map();
  let max = 0;
  let majEle = null;
  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (let [key, val] of map) {
    if (val > max) {
      max = val;
      majEle = key;
    }
  }
  return majEle;
}

function optimal(nums) {
  let n = nums.length;
  let count = 0;
  let element = null;
  for (let i = 0; i < n; i++) {
    if (count === 0) {
      count = 1;
      element = nums[i];
    } else if (nums[i] === element) {
      count++;
    } else {
      count--;
    }
  }

  let count1 = nums.filter((num) => num === element).length;
  if (count1 > Math.floor(n / 2)) {
    return element;
  }
}

let nums = [7, 0, 0, 1, 7, 7, 2, 7, 7];
let res = optimal(nums);
console.log(res);
