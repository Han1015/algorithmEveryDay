var threeSum = function(nums) {
    let len = nums.length, res = [], strRes = new Set;
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len; j++){
            for (let k = 0; k < len; k ++){
                if (nums[i] + nums[j] + nums[k] === 0 && i !== j && j !==k && i != k){
                    let temp = [nums[i], nums[j], nums[k]].sort((a,b)=> {return a-b});
                    if (! strRes.has(temp.toString())){
                        strRes.add(temp.toString())
                        res.push(temp);
                    }
                }
            }
        }
    }
    return res;
};

let nums = [-1, 0, 1, 2, -1, -4];
let res = threeSum(nums);
console.log(res)