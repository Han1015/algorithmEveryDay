//method1
var largestNumber = function(nums) {
    if (nums.join('') == 0)
        return '0'
    let res = nums.map(val => val + '')
    var compare = (a,b)=>{
        if ((a+b)>(b+a)){
            return -1
        }else if ((a+b)<(b+a)){
            return 1
        }else{
            return 0
        }
    }
    res.sort(compare)
    return res.join('')
};
//method2
var largestNumber = function(nums) {
    if (nums.join('') == 0)
        return '0'
    let res = nums.map(val => val + '')
    res.sort((a, b) =>{
        return (b + a) - (a + b);
    })
    return res.join('')
};