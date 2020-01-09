#### 四步走战略
* step1: 确定状态： 目的地dp[x][y] 只能从 dp[x-1][y]向下走， 或者dp[x][y-1]向有走. 
* step2: 确定转移方程： dp[x][y] = Min(dp[x-1][y], dp[x][y-1]) + dp[x][y]
* step3: 初始边界条件： 
    * 1. 第一行的每一个元素都等于该元素之前的所有元素的和(包括自己)
    * 2. 例如： dp[0][2] = dp[0][0] + dp[0][1] + dp[0][2]
    * 3. 第一个的每一个元素都等于该元素在该列之前的所有元素之和(包括自己)
    * 4. 例如：dp[2][0] = dp[0][0] + dp[1][0] + dp[2][0]
* step4: 计算顺序： 在初始化过后，就可以使用转移方程进行求解。