### 1. 初级版本
```javascript
var maxProfit = function(prices) {
    let max = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i+1; j < prices.length; j++){
            let gapPrices = prices[j]-prices[i];
            if (max < gapPrices){
                max = gapPrices;
            }
        }
    }
    return max;
};
```
* 想法： 收集每一个元素和在它后面的所有元素差值， 然后找出最大值
* 这种方法速度慢，消耗内存
* 时间复杂度O(n^2);

### DP(动态规划)
```javascript
var maxProfit = function(prices) {
    let min_prices = [prices[0]];
    let max_profit = [0];
    for (let i = 1; i < prices.length; i++){
        min_prices.push(Math.min(min_prices[i-1], prices[i]));
        max_profit.push(Math.max(max_profit[i-1], prices[i] - min_prices[i-1]));
    }
    return max_profit[max_profit.length - 1];
};
```
* 思路解析： 1. 跟随这数组的循环遍历，
           2. 每一个都把最低的价格push到min_prices, 是先和已经收集到的最低价进行比较
           3. 然后收集max_profit
           4. 为什么是prices[i] - min_prices[i-1]， 一个是i， 一个是i-1;
           5. 因为，股票只能先买，再卖，相当于今天的价格，减去今天之前的最低价格。