class Solution {
  pascalTriangleI(r, c) {
    return this.nCr(r - 1, c - 1);
  }
  nCr(n, r) {
    if (r === 1) return n;

    let res = 1;
    for (let i = 0; i < r; i++) {
      res = res * (n - i);
      res = res / (i + 1);
    }
    return res;
  }
}
