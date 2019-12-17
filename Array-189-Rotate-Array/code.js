var merge = function(nums1, m, nums2, n) {
    nums1 = nums1.splice(0,m).concat(nums2.splice(0,n));
    nums1.sort((a,b)=>{a - b})
};

