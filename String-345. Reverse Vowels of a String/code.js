var reverseVowels = function(s) {
    let exp = /([aeiou])/gi;
    let arr = s.match(exp);
    if (!arr) return s;
    let revArr = arr.slice().reverse();
    let changeS = s.split('');
    let loc = 0;
    for (let i = 0; i < changeS.length; i++){
        if (changeS[i] === arr[loc]){
            changeS[i] = revArr[loc];
            loc++;
        }
    }
    return changeS.join('')
};
let s = "leetcode"
console.log(reverseVowels(s))
