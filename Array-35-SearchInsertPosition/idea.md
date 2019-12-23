#### 1. Method 1
* When 'target <= nums[0]'; return 0
* when 'target = nums[len-1]'; return len-1;
* when 'target > nums[len-1]'; return len
* when 'target <= nums[i]'; return i;
* when 'nums[i] <= target <= nums[i+1]'; return i+1;
* 就这几种情况，都进行了判断，速度快，内存少
#### 2. Method 1 Complexity
* Time Complexity: O(n)
* Space Complexity O(1)
  
#### 2, Method 2
* 是Method1的精简版本

#### 2, Method 3
* 二分查找法