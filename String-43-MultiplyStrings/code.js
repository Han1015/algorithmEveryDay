//详细解法： https://www.cnblogs.com/grandyang/p/4395356.html
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    let m = num1.length, n = num2.length, vals = Array(m + n).fill(0);
    for(let i = m-1; i >= 0; i--){
        for(let j = n-1; j >= 0; j--){
            let mul = num1[i] * num2[j];
            let p1 = i + j, p2 = i + j + 1, sum = mul + vals[p2];
            vals[p1] += Math.floor(sum / 10);
            vals[p2] = sum % 10;
        }
    }
    for (let i = 0; i < m + n; i++){
        if (vals[i] === 0){
            vals.shift();
            //下面这一步是因为vals的长度会随着一步步的shift元素，而减小
            i--;
        }else{
            break;
        }
    }
    return vals.join('');
}
let num1 = "12", num2 = "5";
let res = multiply(num1, num2);
console.log(res)
