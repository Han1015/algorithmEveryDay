// 这种方法，要先建立一个hashtable,然后再遍历hashtable,
//时间复杂度O(n)，空间O(n), 不合适
var singleNumber = function(nums) {
    let numObj = {};
    for(let i = 0; i < nums.length; i++){
        if (!numObj.hasOwnProperty(nums[i])){
            numObj[nums[i]] = 1;
        }else{
            numObj[nums[i]]++;
        }
    }
    for (let key in numObj){
        if (numObj[key] === 1){
            return key;
        }
    }
};