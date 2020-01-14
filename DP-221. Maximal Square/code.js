var maximalSquare = function(matrix) {
    let rows = matrix.length,
        cols = matrix[0].length,
        dp = [],
        res = 0;
    for (let i = 0; i < rows; i++){
        dp.push(new Array(cols))
        for (let j = 0; j < cols; j++){
            let num = parseInt(matrix[i][j])
            if (i === 0 || j === 0){
                dp[i][j] = num;
            }else{
                if (num === 1){
                    dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
                }else{
                    dp[i][j] = 0;
                }
            }
            res = Math.max(res, dp[i][j])
        }
    }
    return res;
};

let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalSquare(matrix))
console.log(parseInt(matrix[0][0]))