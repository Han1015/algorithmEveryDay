
var reverse = function(x) {
    let pop, res=0, temp, sign = 1;
    let INTMAX = Math.pow(2, 31)-1;
    let INTMIN = -Math.pow(2, 31);
    if(x < 0) sign = -1;
    x = Math.abs(x);
    while(x !== 0){
        pop = x % 10;
        console.log(x)
        x = Math.floor(x / 10);
        res = res * 10 + pop;
    }
    console.log(x)
    if (res > INTMAX || res < INTMIN) return 0;
    return res * sign;
}
console.log(reverse(-123))
