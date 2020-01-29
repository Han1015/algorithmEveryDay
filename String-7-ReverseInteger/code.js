// O(n) n是x的长度
var reverse = function(x) {
    let arr = x.toString().split('');
    let res = '';
    if (arr[arr.length - 1] === 0){
        arr.pop();
    }
    if (arr[0] === '-'){
        res = arr.shift();
    }
    let num = parseInt(res + arr.reverse().join(''))
    if (num > Math.pow(2, 31) - 1 || num < Math.pow(2, 31) * -1){
        return 0
    }
    return num
};
console.log(reverse(-1230))