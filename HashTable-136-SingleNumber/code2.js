var singleNumber = function(nums) {
    return nums.reduce((pre, cur)=>{
        return pre ^ cur;
    })
}

// method3
// 不好，不推荐
var singleNumber = function(nums) {
    var sum = (arr)=>{
        let res = 0;
        arr.forEach(element => {
            res+= element;
        });
        return res;
    }
    return sum(new Set(nums))*2 - sum(nums) ;
}
