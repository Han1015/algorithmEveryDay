var threeSum = function(nums) {
    let len = nums.length, res = [];
    if (len < 3) return [];
    nums = nums.sort((a,b)=>{return a- b});
    for(let i = 0; i < len-2; i++){
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let j = i + 1;
        let k = len-1;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]])
                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--
                j++
                k--     
            }else if (sum < 0){
                j++
            }else{
                k--;
            }
        }
    }
    return res;
}
