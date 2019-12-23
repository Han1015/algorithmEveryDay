//Method1
// var searchInsert = function(nums, target) {
//     let len = nums.length;
//     if (nums[0] >= target){
//         return 0;
//     }else if(nums[len-1] === target){
//         return len - 1;
//     }else if(nums[len-1] < target){
//         return len;
//     }
//     for(let i = 0; i < len-1; i++){
//         if (nums[i] === target){
//             return i;
//         }
//         else if (nums[i] < target && nums[i+1] > target){
//             return i+1;
//         }
//     }
// };

// //Method2
// var searchInsert = function(nums, target) {
//     let len = nums.length;
    
//     if (nums[0] >= target) return 0;
//     else if(nums[len-1] < target) return len;

//     for(let i = 0; i < len; i++){
//        if (nums[i] >= target) return i;
//     }
// };

//Method3
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left < right){
        let middle = Math.floor(left+(right-left)/2);
        if(nums[middle]>=target){
            right = middle;
        } else {
            left = middle+1;
        }
    }
    return left;
}


var nums = [1,3,5,6], target = 2;
console.log(searchInsert(nums, target))