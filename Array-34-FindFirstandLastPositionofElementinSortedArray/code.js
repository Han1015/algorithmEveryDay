//Method1
// var searchRange = function(nums, target) {
//     let len = nums.length;
//     let res = [-1, -1];
//     for (let i = 0; i < len; i++){
//         if (nums[i] === target){
//             if (res[0] === -1){
//                 res[0] = i;
//             }else{
//                 res[1] = Math.max(res[1], i);
//             }
//         }
//         res[1] = Math.max(res[1], res[0]);
//     }
//     return res;
// };
//Method2
// var searchRange = function(nums, target) {
//     return [nums.indexOf(target), nums.lastIndexOf(target)];
// }
//Method3
var searchRange = function(nums, target) {
    var search = (n) => {
        let lo = 0, hi = nums.length;
        while (lo < hi){
            let mid = (lo + hi) / 2 >> 0;
            if (nums[mid] >= n){
                hi = mid;
            }else{
                lo = mid + 1;
            }
        }
        return lo;
    }
    let lo = search(target);
    let hi = search(target+1)
    if (nums[lo] !== target){
        return [-1, -1];
    }else{
        return [lo, hi-1]
    }
}

    // lo = search(target)
    // return [lo, search(target+1)-1] if target in nums[lo:lo+1] else [-1, -1]
let nums =  [1], target = 1;
console.log(searchRange(nums, target))