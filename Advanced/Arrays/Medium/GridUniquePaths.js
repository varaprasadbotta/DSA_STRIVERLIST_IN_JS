class Solution {
  //Function to solve the problem using recursion
  func(i, j) {
    // Base case
    if (i === 0 && j === 0) return 1;

    // If we go out of bounds, there are no ways
    if (i < 0 || j < 0) return 0;

    /* Calculate the number of ways by
        moving up and left recursively*/
    let up = this.func(i - 1, j);
    let left = this.func(i, j - 1);

    // Return the total ways
    return up + left;
  }

  //Function to solve the problem using recursion
  uniquePaths(m, n) {
    // Return the total count (0-based indexing)
    return this.func(m - 1, n - 1);
  }
}

let m = 3;
let n = 2;

// Create an instance of Solution class
let sol = new Solution();

// Call the uniquePaths function and print the result
console.log("Number of ways: " + sol.uniquePaths(m, n));
