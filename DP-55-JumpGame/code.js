var canJump = function(nums) {
    let len = nums.length;
    let f = [true];
    for (let i = 1; i < len; i++){
        f[i] = false;
        for (let j = 0; j < i ; j++){
            if (f[j] && nums[j]+j >= i){
                f[i] = true;
                break;
            }
        }
    }
    return f[len-1];
}
let nums = [1,2];
canJump(nums);