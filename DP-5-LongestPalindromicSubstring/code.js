var longestPalindrome = function(s) {
    let dp = [];
    let len = s.length;
    let res = '';
    for (let i = 0; i < len; i++){
        dp.push(new Array(len));
    }
    for (let i = len - 1; i >= 0; i--){
        for (let j = i; j < len; j++){
            dp[i][j] = false;
            if (s.charAt(i) === s.charAt(j) && (i - j < 3 || dp[i+1][j-1])){
                dp[i][j] = true;
            }
        }
    }
    return dp;
};
console.log(longestPalindrome("babad"))