var largestRectangleArea = function(heights) {
    let maxArea = 0, len = heights.length;
    for (let i = 0; i < len; i++){
        if (i + 1 < len && heights[i] <= heights[i+1]){
            continue;// continue,跳出本次循环，后面的代码不执行，继续执行下次循环
            //这个continue的意思就是，找到那个局部最高处，再执行下面的代码
        }
        let minHeight = heights[i];
        for (let j = i; j >= 0; j--){
            minHeight = Math.min(heights[j], minHeight);
            let tempArea = minHeight * (i - j +1);
            maxArea = Math.max(maxArea, tempArea);
        }
    }
    return maxArea;
};

let heights = [1, 0, 1, 0, 0 ];
console.log(largestRectangleArea(heights))