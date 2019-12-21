#### Code
```javascript
var maxProfit = function(prices, fee) {
    if (prices === null || prices.length === 0){
        return 0;
    }
    let hold = [-prices[0]];
    let sold = [0];
    for (let i = 1; i < prices.length; i++){

        sold.push(Math.max(sold[i-1], hold[i-1] + prices[i] - fee));
        hold.push(Math.max(sold[i-1]-prices[i], hold[i-1]))
    }
    return sold[prices.length-1];
};
```
#### Idea
* 1. hold: 在第i天结束的时候，手里仍然持有股票的最大收益是多少;
            hold[i] = max(hold[i-1], sold[i-1] - prices[i])
* 2. sold: 在第i天结束的时候，手里没有股票的情况下，获得的收益;
            sold[i] = max(sold[i-1], hold[i-1] + prices[i] - fee)
* 3. hold的两种情况： 1. 今天什么也没做，股票还是以前买的，所以hold[i] = hold[i-1]
                    2. 今天新买的股票，(今天新买股票说明了，昨天的股票已经卖出了)那么今天持有股票的最大收益
                        就是：hold[i] = sold[i-1](昨天卖出股票的收益) - prices[i](减去今天新买股票的成本价格)
* 4. sold的两种情况： 1. 今天什么也没做, sold[i] = sold[i-1]
                    2. 今天卖出股票(以今天的价格)，那说明在今天之前已经持有股票了， 所以： 
                        sold[i] = hold[i-1](前一天持有股票的最大收益) + prices[i](今天的卖出价格) - fee(手续费)
* 最后的结果就是卖出股票的最大收益；

#### Complexity
* Time complexity:  O(n)
* Space complexity: O(2n)