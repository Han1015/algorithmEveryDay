var letterCombinations = function(digits) {
    if (digits === '') return [];
    let len = digits.length;
    let dict = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    }
    let res = dict[digits[0]];
    //思路： 1. 现有一个res数组， 然后遍历到一个数字，就把相对应的数字所对应的数组取出来
    //
    for (let i = 1; i < len; i++){
        let letters = dict[digits[i]];
        res = res.map(ele=>{
            return letters.map(el=>{
                return ele+el
            })
        })
        res = res.reduce((prev, cur)=>{
            return prev.concat(cur)
        })
    }
    return res;
};
console.log(letterCombinations('234'))