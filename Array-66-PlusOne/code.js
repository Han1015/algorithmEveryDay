
var plusOne = function(digits) {
    let len = digits.length;
    for(let i = len-1; i >= 0; i--){
        if (digits[i] < 9){
            digits[i] = digits[i] + 1;
            return  digits;
        }
        digits[i] = 0;
    }
    // digits.fill(0);
    // digits.unshift(1);
    // return digits;
    for(let i = 0; i < len; i++){
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;

};

var digits = [9,9,9];
console.log(plusOne(digits));
