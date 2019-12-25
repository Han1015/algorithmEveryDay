#### 1. Method1
* 简单直接暴力搜索
* 搜索到的第一个数的位置给res[0]；
* 继续搜索把搜索到的最大的数给res[1];
* 特殊情况： nums = [1], target = 1, return [1,1], 当只有一个数的时候，按照上面的步骤res[1] = -1, 
  所以需要添加一步，res[1] = max(res[0], res[1]), 解决res[1] = -1的情况
#### 2. Method1 Complexity 
* Time complexity: O(n)

#### 3. Method2
* 使用indexOf, lastIndexOf 但是表现不太好
* 
#### 4. Method3
* 使用二分查找法
* 第一步： 查找target应该在数组中的位置(无论数组中有没有)=> lo
* 第二步： 查找(target + 1)应该在数组中的位置(无论数组中有没有)=> hi
* 第三步： 如果nums[lo] !== target return [-1, -1];
* 第四步： 如果nums[lo] === target return [lo, hi-1];
* 结论： 巧妙的地方，1. 使用二分法查找元素的起始位置，2. 查找target+1的起始位置hi,那么hi-1就是target的结束位置。