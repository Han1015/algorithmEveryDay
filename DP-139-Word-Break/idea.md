#### 四步走战略
* step1: 确定状态： dp[i] 表示该位置之前的字符串能否被break
* step2: 确定转移方程：dp[i] = ( sub[i-j, i] in dict) and dp[i-j]
* step3: 初始边界条件： dp[0] = true
* step4: 计算顺序： 从小到大。
#### 想法描述
就是选择一个子字符串，怎么确定这个字符串是true还是false, 根据两个条件
假设：求解dp[i]这个位置的boolen值。
dp[i] = sub[i-j] && dp[i-j] == true的时候，dp[i] = true;
什么意思呢？
let s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"];
求解dp[7],这个7,对应的字符串是'catsand', dp[7] = true, 因为dp[4] == true 而且‘and’存在'worddict'里面。 