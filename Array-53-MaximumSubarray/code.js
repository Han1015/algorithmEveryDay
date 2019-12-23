var maxSubArray = function(nums) {
    let max_sum = nums[0];
    let temp = nums[0];
    let len = nums.length;
    for (let i = 1; i < len; i++){
        if (temp > 0){
            temp += nums[i];
        }else{
            temp = nums[i];
        }
        max_sum = max_sum > temp? max_sum: temp;
    }
    return max_sum;   
};
var nums = [-2, -1,-3, -4,-1,-2,-1,-5,-4];
console.log(maxSubArray(nums));