var myAtoi = function(str) {
    if (str === '') return str;
    let disableWhiteSpace = str.trim();
    let exp = /^([+|-]?\d+)/;
    if (exp.exec(disableWhiteSpace)!=null){
        let maxNum = Math.pow(2, 31) - 1;
        let minNum = Math.pow(2, 31) * -1;
        let num = disableWhiteSpace.match(exp)[0];
        num = parseInt(num);
        if (num > maxNum){
            return maxNum;
        }else if (num < minNum){
            return minNum
        }else{
            return num;
        }
    }
    else{
        return 0;
    }
};

let s = "+42 hello world";
let res = myAtoi(s);
console.log(res)
let exp = /^([+|-]?\d+)/;
console.log(s.match(exp)[0])
