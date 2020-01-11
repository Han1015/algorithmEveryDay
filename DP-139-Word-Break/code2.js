const wordBreak = (s, wordDict) => {
    let len = s.length;
    let dp = Array(len + 1).fill(false);
    dp[0] = true;
    let obj = new Object();
    wordDict.map((ele, index)=>{
        obj[ele] = index;
    })
    for (let i = 1; i <= len; i++){
        for (let j = i; j > 0; j--){
            let sub = s.substring(i-j, i);
            if (obj[sub] !== undefined){
                if (dp[i-j] === true){
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return dp[len];
};

// let s = "leetcode", wordDict = ["leet", "code"];
// let s = "applepenapple", wordDict = ["apple", "pen"];
let s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict))




