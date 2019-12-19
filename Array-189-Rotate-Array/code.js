//第一种，就是截取最后一项在最前插入
// var rotate = function(nums, k) {
//     for(let i=0; i < k; i++){
//         let temp = nums.splice(-1, 1)[0];
//         nums.splice(0,0, temp)
//     }
//     // return nums;
// };
//第二种
var rotate = function(nums, k) {
    for(let i=0; i < k; i++){
        let item = nums.pop();
        nums.unshift(item);
    }
};
var nums = [1,2,3,4,5,6,7], k = 3;
rotate(nums, k);
console.log(nums)

