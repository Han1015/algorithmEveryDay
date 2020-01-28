var fourSum = function(nums, target) {
    let len = nums.length, res = [];
    nums = nums.sort((a, b)=> {return a - b;})
    if(len < 4) return [];
    for(let i = 0; i < len-3; i++){
        //为什么是i-1, 因为上面的这个for循环限制了i的最大上限，所以不能再加1，
        //换个角度想，先计算的是i-1， 后来for循环让i-1变成了i， 然后看到i === i-1,
        //那么i就没必要计算，
        //只要一个数和前一个数相等，就没有计算的必要，不仅仅节省资源，还省去了去重的步骤
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < len-2; j++){
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue
            let m = j+1, n = len - 1;
            while(m < n){
                let sum = nums[i] + nums[j] + nums[m] + nums[n];
                // console.log([nums[i], nums[j], nums[m], nums[n]]);
                if (sum === target){
                    res.push([nums[i], nums[j], nums[m], nums[n]]);
                    while (nums[m] === nums[m+1]) m++;
                    while (nums[n] === nums[n-1]) n--;
                    m++;
                    n--;
                }else if (sum < target){
                    m++;
                }else{
                    n--;
                }
            }
        }
    }
    return res;
};
let nums = [1,0,-1,0,-2,2], target = 0;
console.log(fourSum(nums, target))