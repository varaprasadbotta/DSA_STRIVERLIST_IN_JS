// Stock Buy And Sell
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and
// sell on day 5 (price = 6), profit = 6-1 = 5.

function optimal(prices, length) {
  let mini = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < length; i++) {
    let cost = prices[i] - mini;
    maxProfit = Math.max(cost, maxProfit);
    mini = Math.min(mini, prices[i]);
  }
  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
let length = prices.length;
let maxProfit = optimal(prices, length);
console.log(maxProfit);
