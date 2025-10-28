function bubbleSort(nums) {
  let n = nums.length;
  for (let i = n - 1; i >= 1; i--) {
    let didSwap = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        didSwap = 1;
      }
    }
    if (didSwap === 0) {
      break;
    }
  }
  return nums;
}

let nums = [7, 4, 1, 5, 3];
let result = bubbleSort(nums);
console.log(result);

/**
 *   Bubble sort
 *           -> Find The Max number in array.
 *           -> push that to last and swap adjacent numbers.
 *
 */
