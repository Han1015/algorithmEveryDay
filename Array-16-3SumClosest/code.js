var threeSumClosest = function(nums, target) {
    let len = nums.length;
    let res = 0;
    let sumGap = Infinity
    nums = nums.sort((a,b)=>{return a - b});
    //当只有三个数的时候 直接返回sum
    if (len === 3) return nums.reduce((prev, cur)=>{return prev+cur})
    
    for(let i = 0; i < len - 2; i++){
        let j = i + 1;
        let k = len-1;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            //tempGap 就是sum 距离target的距离， 取能产生较小gap的sum
            let tempGap = Math.abs(sum - target);
            if (tempGap < sumGap){
                res = sum;
                sumGap = tempGap;
            }
            if (sum === target){
                return target;
            }else if (sum < target){
                //看到相同的数，直接越过，因为sum相同没必要重复计算
                while(nums[j] === nums[j+1]) j++;
                j++;
            }else{
                while(nums[k] === nums[k-1]) k--;
                k--;
            }
            while (nums[i] === nums[i+1]) i++;
        }
    }
    return res;
};

let nums = [-1, 2, 1, -4], target = 1;
console.log(threeSumClosest(nums,target))