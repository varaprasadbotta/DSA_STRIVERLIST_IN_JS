function selectionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let mini = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[mini]) {
        mini = j;
      }
    }
    if (mini !== i) {
      [nums[i], nums[mini]] = [nums[mini], nums[i]];
    }
  }
  return nums;
}

let nums = [7, 4, 1, 5, 3];
let result = selectionSort(nums);
console.log(result); //  [ 1, 3, 4, 5, 7 ]
