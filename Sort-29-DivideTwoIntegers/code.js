var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    // 如果同号就是1，异号就是-1
    //同号的时候(dividend < 0) ^ (divisor  < 0) = 0
    //异号的时候 (dividend < 0) ^ (divisor  < 0) !=0

    let sign = (dividend < 0) ^ (divisor  < 0) ? -1 : 1,
        a = Math.abs(dividend),
        b = Math.abs(divisor),
        res = 0;
    while (a >= b){
        a -= b;
        res++;
    }
    return res * sign;
};
console.log(divide(-1, 1))
