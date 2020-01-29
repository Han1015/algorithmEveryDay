var isPalindrome = function(x) {
    if (x < 0) return false; // 负数 false
    if (x<10) return true; // 0<=x<=9 true
    if (x / 10 === Math.floor(x / 10)) return false; //结尾是0的数， false
    let temp = parseInt(x.toString().split('').reverse().join(''));
    if (x === temp) return true;
    else return false;
};