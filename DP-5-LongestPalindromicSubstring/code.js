var longestPalindrome = function(s) {
    let dp = [];
    let len = s.length;
    let res = '';
    let start = 0, characters = 0;
    for (let i = 0; i < len; i++){
        dp.push(new Array(len));
    }
    //初始化阶段
    for(let i = 0; i < len; i++){
        dp[i][i] = true;
    }
    for (let i = 0; i < len-1; i++){
        dp[i][i+1] = false;
        if (s.charAt(i) === s.charAt(i+1)){
            dp[i][i+1] = true;
            start = i;
            characters = 2;
        }
    }
    for (let i = 3; i <= len; i++){
        for (let j = 0; j + i - 1 <len; j++){
            if (s.charAt(j) === s.charAt(j+i-1) && dp[j+1][j+i-2]==true){
                dp[j][j+i-1] = true;
                start = j;
                characters = i;
            }else{
                dp[j][j+i-1] = false;
            }
        }
    }
    // console.log(dp)
    if (characters != 0){
        return s.substring(start, start + characters);
    }
    return s.substring(start, start + characters + 1);
}
console.log(longestPalindrome("abcda"))