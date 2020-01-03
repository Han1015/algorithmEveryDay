
var coinChange = function(coins, amount) {
    let f = [0];
    let lenCoins = coins.length;
    for (let i=1; i<=amount;i++){
        f[i] = Infinity;
        for (let j=0; j < lenCoins; j++){
            if (i - coins[j] >= 0 && f[i-coins[j]] !== Infinity){
                f[i] = Math.min(f[i], f[i-coins[j]] + 1);
            }
        }
    }
    let res = f[amount];
    if ( res == Infinity) return -1;
    return res;
}

let coins = [2,5,7], amount = 2;
console.log(coinChange(coins, amount))