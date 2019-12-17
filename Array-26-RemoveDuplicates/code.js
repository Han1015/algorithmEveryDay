
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i +=1){
        if (nums[i] === nums[i+1]) {
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};
var nums = [1,1,1,1,1];
console.log(removeDuplicates(nums));

