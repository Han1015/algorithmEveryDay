//Method1
// var findPeakElement = function(nums) {
//     let len = nums.length;
//     if (len === 1){return 0}
//     else if (Math.max(...nums) === nums[len-1]){return len-1}
//     else if (Math.max(...nums) === nums[0]) {return 0};
//     for (let i = 1; i < len-1; i++){
//         if (nums[i-1] < nums[i] && nums[i+1] < nums[i]){
//             return i;
//         }
//     }
// };

//Method2
var findPeakElement = function(nums) {
    let left = 0, right = nums.length;
    while (left < right){
        let mid = Math.floor((left + right)/2);
        if (nums[mid] < nums[mid+1]){//这是上升的趋势
            left = mid + 1;
        }else{  //下降的趋势
            right = mid;
        }
    }
    return left;
}
let nums = [1,2];
console.log(findPeakElement(nums))