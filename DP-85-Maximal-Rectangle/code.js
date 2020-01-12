var maximalRectangle = function(matrix) {
    let rows = matrix.length;
    if (rows === 0) return 0;
    let cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let res = 0;
    function largestRectangleArea(nums){
        let maxArea = 0, len = nums.length;
        for (let i = 0; i < len; i++){
            if (i + 1 < len && nums[i] <= nums[i+1]){
                continue;
            }
            let minHeight = nums[i];
            for (let j = i; j >= 0; j--){
                minHeight = Math.min(minHeight, nums[j]);
                let tempArea = minHeight * (i - j + 1);
                maxArea = Math.max(tempArea, maxArea);
            }
        }
        return maxArea;
    }
    for (let i = 0; i < rows; i ++){
        for (let j = 0; j < cols; j++){
            let num = parseInt(matrix[i][j]);
            if (num === 0){
                heights[j] = 0;
            }else{
                heights[j] += num
            }
        }
        let midRes = largestRectangleArea(heights);
        res = Math.max(res, midRes)
    }
    return res;
};
let matrix = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
  ];
console.log(maximalRectangle(matrix));
