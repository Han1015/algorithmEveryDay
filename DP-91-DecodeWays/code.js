var numDecodings = function(s) {
    let len = s.length
    if (s === null || len === 0 || s[0] === '0') return 0;
    if (len === 1) return 1;
    let d = [1];
    for (let i = 1; i < len; i++){
        //是0, 先赋值为0， 不是0 先赋值d[i-1]
        d[i] = s[i] == '0' ? 0 : d[i-1];
        let sub = s.substring(i-1, i+1)
        //0的情况下满足条件： d[i-2]
        //非0的情况下满足条件： d[i-1] + d[i-2]
        //非0的情况下不满足条件： d[i-1]
        if(sub >= "10" && sub <= "26") 
            d[i] += (i > 1 ? d[i-2] : 1)
    }
    return dp;
};
let s = "110";
console.log(numDecodings(s))