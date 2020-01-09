var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = [];
    //初始化阶段
    for (let i = 0; i <= n; i++){
        dp.push(new Array(m+1))
    }
    for (let i = 0; i <= n; i++){
        dp[i][0] = i;
    }
    for (let j = 0; j <= m; j++){
        dp[0][j] = j;
    }
    //以上初始化阶段
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= m; j++){
            dp[i][j] = Infinity;
            if (word1.charAt(j-1) === word2.charAt(i-1)){
                dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1])
            }else{
                dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+1)
            }
        }
    }
    return dp[n][m]
};
let word1 = "abcdef", word2 = "azced";
let res = minDistance(word1, word2)
console.log(res)