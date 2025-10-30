class Solution {
  // Function to partition the array
  partition(arr, low, high) {
    // Choosing a random index between low and high
    let randomIndex = low + Math.floor(Math.random() * (high - low + 1));
    // Swap the random element with the first element
    [arr[low], arr[randomIndex]] = [arr[randomIndex], arr[low]];

    // Now choosing arr[low] as the pivot after the swap
    let pivot = arr[low];
    // Starting index for left subarray
    let i = low;
    // Starting index for right subarray
    let j = high;

    while (i < j) {
      /*  Move i to the right until we find an
                element greater than the pivot  */
      while (arr[i] <= pivot && i <= high - 1) {
        i++;
      }
      /*  Move j to the left until we find an
                element smaller than the pivot  */
      while (arr[j] > pivot && j >= low + 1) {
        j--;
      }
      /*  Swap elements at i and j if i is still
                less than j  */
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    // Pivot placed in correct position
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
  }

  // Helper Function to perform the recursive quick sort
  quickSortHelper(arr, low, high) {
    /*  Base case: If the array has one or no
            elements, it's already sorted  */
    if (low < high) {
      // Get the partition index
      let pIndex = this.partition(arr, low, high);
      // Sort the left subarray
      this.quickSortHelper(arr, low, pIndex - 1);
      // Sort the right subarray
      this.quickSortHelper(arr, pIndex + 1, high);
    }
  }

  // Function to perform quick sort on given array
  quickSort(nums) {
    // Get the size of array
    let n = nums.length;

    // Perform quick sort
    this.quickSortHelper(nums, 0, n - 1);

    // Return sorted array
    return nums;
  }
}
