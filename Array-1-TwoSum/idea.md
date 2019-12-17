### 1. forEach的用法
    ```javascript
    array.forEach(function(item, index, originalArray){})
    //item, array里的每一个元素
    //index,元素的位置
    //originalArray, 原始的数组

    //箭头函数写法
    nums.forEach((item, index, array)=>{
    console.log(item, index, array)
    })
    ```
### 2. 第二种方法的思路
    * 提交测试结果不太理想runtime有点高，
    * 思路梳理：
    * 首先循环遍历array.让temp 存储target - nums[i]的值
    * 使用lastIndex的方法检测是否能找到temp这个数
    * 为什么是lastIndexOf呢，因为indexOf返回的总是第一个检测到的数，所以从后往前避免找到重复
    * 例如： [3,3] target = 6, 

