1. 假设nums=[2,5,7], target = 27
2. 确定状态： f(x) = f(x-k) + 1;
3. 状态转移方程： f(x) = min(f(x-2)+1, f(x-5)+1, f(x-7)+1);
4. 确定边界和初始情况：f(0) = 0, 
5. 确定计算顺序： 从小到大

#### 代码解释
* 因为每一步都是求最小值，所以把f[-n] 设置为Infinity(正无穷)。
* if (i - coins[j] >= 0 && f[i-coins[j]] !== Infinity)为什么求f[i]这样写；
* 因为在f里，有Infinity，如果Infinity + 1会容易出现问题