var convertToTitle = function(n) {
    if (n <=0) return '';
    let res = [];
    while (n > 0){
        n--;
        res.unshift(String.fromCharCode(65 + n % 26));
        n = Math.floor(n / 26);
    }
    return res.join('');
};
console.log(convertToTitle(26))