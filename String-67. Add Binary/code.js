var addBinary = function(a, b) {
    let arrA = a.split('');
    let arrB = b.split('');
    let lenA = arrA.length;
    let lenB = arrB.length;
    if (lenA > lenB){
        for (let i = 0; i < lenA-lenB; i++){
            arrB.unshift('0')
        }
    }
    else if (lenA < lenB){
        for (let i = 0; i < lenb-lenA; i++){
            arrA.unshift('0');
        }
    }
    let len = arrA.length;
    let res = [];
    let temp = 0;
    for (let i = len-1; i >= 0; i--){
        let sum = parseInt(arrA[i]) + parseInt(arrB[i]) + temp;
        let reminder = sum % 2;
        temp = Math.floor(sum / 2);
        res.unshift(reminder);
    }
    // console.log(temp)
    if (temp){
        res.unshift(temp);
    }
    return res.join('');
};
let a = '1010';
let b = '1011';

console.log(addBinary(a, b));