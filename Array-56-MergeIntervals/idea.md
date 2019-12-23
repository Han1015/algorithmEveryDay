#### 1. Method 1
* 把每一个一纬的数组按照数组的第一个元素排序
* 例如：[[start, end],[start1, end1], [start2, end2]]就是按照start排序；
* 在排好序的时候其实就只有一种情况存在了，end > end1,说明两个子数组有重叠的部分，类似于[1,3]和[2,4]
* 如果存在上述情况就把两个子数组合并成一个数组[1,4],
* 但是这是理想的情况下，如果是[1,5], [3,4], 5 > 3成立，但是合并的数组必须是[1, max(5, 4)]这样才更合理；
#### 2. Method Complexity
* Time Complexity: O(n)
* Space Compleity: O()

#### Method2
* 和Method1的思路是一样的， 但是不是在原来的intervals上修改的， 是新创建的意味数组