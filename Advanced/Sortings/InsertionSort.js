function insertionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      let temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
      j--;
    }
  }
  return nums;
}

let nums = [7, 4, 1, 5, 3];
let result = insertionSort(nums);
console.log(result);

/**
 *
 * Insertion Sort
 *         -> Take the element and put it in it's Corret place.
 *         -> compare with the previous element and swap .
 */
