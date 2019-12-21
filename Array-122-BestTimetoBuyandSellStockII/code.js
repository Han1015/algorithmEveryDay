//想象成一个股票的波形图，我们要做的就是把上升的部分的高度加起来就可以了
var maxProfit = function(prices) {
    if (prices === null || prices.length === 0){
        return 0;
    }
    let sum = 0;
    for (let i = 1; i < prices.length; i++){
        let cur = prices[i];
        let prv = prices[i-1];
        if (cur > prv){
            sum += cur - prv
        }
    }
    return sum;
};
var prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
