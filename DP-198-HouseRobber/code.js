//非DP 算法， 思路， 每天都出去抢劫，最后看那一天强的最多，再返回结果
// var rob = function(nums) {
//     let dp = [], len = nums.length;
//     if (nums.length === 0) return 0
//     for (let i = 0; i < len; i++){
//         if (i-1 <= 0){
//             dp[i] = nums[i]
//         }else{
//             let sub = dp.slice(0, i-1);
//             dp[i] = Math.max(...sub) + nums[i];
//         }
//     }
//     return Math.max(...dp);
// };

var rob = function(nums) {
    let dp = [], len = nums.length;
    if (len === 0) return 0;
    if (len === 1) return nums[0];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
    }
    return dp[len-1]
}
let nums = [2,7,9,3,1];
let res = rob(nums);
console.log(res); 