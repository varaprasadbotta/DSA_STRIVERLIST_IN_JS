let nums = [7, 4, 1, 5, 3];
let n = nums.length;
let result = mergeSort(nums, 0, n - 1);
console.log(result);

function mergeSort(nums, low, high) {
  if (low >= high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  mergeSort(nums, low, mid);
  mergeSort(nums, mid + 1, high);
  merge(nums, low, mid, high);
  return nums;
}

function merge(nums, low, mid, high) {
  let left = low;
  let right = mid + 1;
  let temp = [];
  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      temp.push(nums[left]);
      left++;
    } else {
      temp.push(nums[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(nums[left]);
    left++;
  }
  while (right <= high) {
    temp.push(nums[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    nums[i] = temp[i - low];
  }
}

/**
 *
 *  Merge Sort
 *      -> divide and merge
 *
 */
