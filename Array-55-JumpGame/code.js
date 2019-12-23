var canJump = function(nums) {
    let reach = 0, len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i > reach){
            return false
        }else if(reach >= len-1){
            return true;
        }
        reach = Math.max(reach, i + nums[i]);
    }
    return true;
};

let nums = [3,2,1,0,4];
console.log(canJump(nums));