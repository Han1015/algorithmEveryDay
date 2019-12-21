
var maxProfit = function(prices, fee) {
    if (prices === null || prices.length === 0){
        return 0;
    }
    let hold = [-prices[0]];
    let sold = [0];
    for (let i = 1; i < prices.length; i++){
        sold.push(Math.max(sold[i-1], hold[i-1] + prices[i] - fee));
        hold.push(Math.max(hold[i-1], sold[i-1]-prices[i]))

    }
    return sold[prices.length-1];
};
var prices = [1, 3, 2, 8, 4, 9], fee = 2;
maxProfit(prices, fee) 