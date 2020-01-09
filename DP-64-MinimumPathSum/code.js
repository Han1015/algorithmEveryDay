var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = [];
    const change = (a)=>{
        return a.map((cur, index)=>{
            return a.slice(0, index+1).reduce((prev, cur)=>{return prev+cur})
        })
    }
    //初始化阶段：
    let temp = [];
    for (let i = 0; i < m; i++){
        dp.push(new Array(n));
        temp.push(grid[i][0])
    }
    let changeTemp = change(temp);
    for (let i = 0; i < m; i++){
        dp[i][0] = changeTemp[i];
    }
    dp[0] = change(grid[0]);
    //以上部分都是初始化阶段
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[m-1][n-1];
};

let grid = [
    [1,2],
    [1,1],
  ];
console.log(minPathSum(grid))
