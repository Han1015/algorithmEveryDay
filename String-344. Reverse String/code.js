var reverseString = function(s) {
    let len = s.length;
    for (let i = 0; i < len / 2; i++){
        let temp = s[i];
        s[i] = s[len-i-1];
        s[len-i-1] = temp;
    }
    return s;
};
let s = ["h","e","l","l","o"]
console.log(reverseString(s))