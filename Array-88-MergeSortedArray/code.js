// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m);
//     nums2.splice(n)
    
//     nums2.forEach(element => {
//         nums1.push(element);
//     });
//     nums1.sort((a,b)=>{return (a - b)});
// };
var merge = function(nums1, m, nums2, n) {
    while(n > 0) {
        if (nums1[m-1] >= nums2[n-1]) {
            nums1[n+m-1] = nums1[--m]
        } else {
            nums1[n+m-1] = nums2[--n]
        }
    }
};


var nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3;

merge(nums1, m, nums2, n);
console.log(nums1)




