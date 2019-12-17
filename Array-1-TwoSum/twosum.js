//暴力搜索
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     }
// };

//第二种方法
var twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++){
        let temp = target - nums[i];
        let index = nums.lastIndexOf(temp);
        if( index && index != i && index != -1){
            return [i, index]; 
        }
    }
    return null;
};
var nums = [3,3], target = 6;
console.log(twoSum(nums, target))



