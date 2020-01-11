const wordBreak = (s, wordDict) => {
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let j = 0; j < s.length; j++) {
        for (let w of wordDict) {
            let i = j - w.length + 1;
            if (i < 0) { continue; }
            if (w === s.substring(i, j + 1) && dp[i]) {
                dp[j + 1] = true;
                break;
            }
        }
    }
    return dp;
};

let s = "leetcodesleetcodes";
let wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict))

