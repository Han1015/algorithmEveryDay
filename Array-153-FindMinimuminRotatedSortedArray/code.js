var findMin = function(nums) {
    let len = nums.length;
    if (len === 1){
        return nums[0];
    }

    let left = 0, right = len-1;
    //说明就是排好序的，没有旋转
    if (nums[0] < nums[right]){
        return nums[0];
    }
    //旋转过的
    while(right >= left){
        let mid = left + (right - left) / 2 >> 0;
        //说明mid就是最大值，mid+1就是最小值， 因为旋转
        if (nums[mid] > nums[mid+1]){
            return nums[mid+1]
        }
        //经过旋转以后，相当于在数组里，有两段递增的数组，有一个地方是max和min 相邻的地方
        //mid-1 > mid, 就是max和min 相邻的地方
        if (nums[mid-1] > nums[mid]){
            return nums[mid];
        }

        //说明min点在右边
        if (nums[mid] > nums[0]){
            left = mid;
        //说明min点在左边
        }else{
            right = mid - 1;
        }

    }
};