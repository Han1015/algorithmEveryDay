
var maxProfit = function(prices) {
    let min_prices = [prices[0]];
    let max_profit = [0];
    for (let i = 1; i < prices.length; i++){
        console.log(min_prices);
        console.log(max_profit);
        console.log();
        min_prices.push(Math.min(min_prices[i-1], prices[i]));
        max_profit.push(Math.max(max_profit[i-1], prices[i] - min_prices[i-1]));
    }
    return max_profit[max_profit.length - 1];
};

var prices = [7,2,6,1,4];
console.log(maxProfit(prices))