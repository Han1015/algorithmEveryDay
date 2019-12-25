#### 1. Method1
* 最简单粗暴的做法
* 如果只有一个元素，return 0
* 如果是一个递减数组， return 0
* 如果是一个递增数组 return len -1;
* 不是以上的三种情况， 就判断(都是nums[x]省略了nums) i > i-1 && i > i+ 1； return i;
#### 2. Method1 Complexity
* Time Complexity: O(n)
* Space Complexity:

#### 3. Method2
* 使用二分查找法
* 