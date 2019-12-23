var removeElement = function(nums, val) {
    let i = 0;
    let len = nums.length;
    while (i < len){
        if (nums[i] === val){
            nums.splice(i, 1);
            len--;
        }else{
            i ++;
        }
    }
   return len;
};

var nums = [0,1,2,2,3,0,4,2], val = 2;
console.log(removeElement(nums, val));
console.log(nums)