var uniquePathsWithObstacles = function(obstacleGrid) {
    var dp = [];
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    //找到第一行的第一个1的位置
    let oneRaw = (obstacleGrid[0].indexOf(1) == -1)? Infinity: obstacleGrid[0].indexOf(1);
    let oneCol = Infinity;
    //找到第一列的第一个1的位置
    for (let l = 0; l < m; l++){
        if (obstacleGrid[l][0] == 1){
            oneCol = l;
            break;
        }
    }
    for (let i = 0; i < m ; i++){
        dp.push(new Array(n));
        for (let j = 0; j < n; j++){
            //处理初始化情况
            if (i == 0 && j >= oneRaw){
                dp[i][j] = 0;
            }
            if (j == 0 && i >= oneCol){
                dp[i][j] = 0;
            }
            if ((i == 0 && dp[i][j] != 0) || (j == 0 && dp[i][j] != 0)){
                dp[i][j] = 1;
            }
            if (obstacleGrid[i][j] == 1){
                dp[i][j] = 0;
            }
            ////
            if (typeof(dp[i][j]) !== 'number'){
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    return dp[m-1][n-1];
};
let obstacleGrid = [[1,0]];
let res = uniquePathsWithObstacles(obstacleGrid)
console.log(res)
