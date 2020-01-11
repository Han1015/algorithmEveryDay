//思路和198一样，就是多了一点变化，题目要求，第一户和最后一户不能一块抢
//所以，把原来的数组分成了两种情况，一种情况: 不包含第一户，一种情况: 不包含最后一户
var rob = function(nums) {
    let numsLen = nums.length;
    if (numsLen === 0) return 0;
    if (numsLen === 1) return nums[0];
    var smartRob = (nums)=>{
        let dp = [], len = nums.length;
        if (len === 0) return 0;
        if (len === 1) return nums[0];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1])
        for (let i = 2; i < len; i++){
            dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
        }
        return dp[len-1];
    }
    return Math.max(smartRob(nums.slice(0, numsLen-1)), smartRob(nums.slice(1, numsLen)))
};
let nums = [1,2,3,1];
console.log(rob(nums))