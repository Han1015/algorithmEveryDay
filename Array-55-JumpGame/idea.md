#### 1. Method
* 这是贪婪算法(Greedy Algorithm)
* reach 表示整个数组里面的所有位置能到达的最远位置；
* 如果当前遍历的位置(i)大于了reach，那说明，reach不能到达该位置，那i之后的位置更不可能到达
* 如果reach > len -1，说明了能到达重点，可以直接返回true;
* *reach = Math.max(reach, i + nums[i]);* 这是上一步能到达的最远位置和遍历到的该位置能到达的最远位置的比较