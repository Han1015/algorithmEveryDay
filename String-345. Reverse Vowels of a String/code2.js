var reverseVowels = function(s) {
    let exp = /([aeiou])/gi;
    let arr = s.match(exp);
    if (!arr) return s;
   
    let changeS = s.split('');
    let left = 0;
    let right = arr.length-1;
    for (let i = 0; i < changeS.length; i++){
        if (changeS[i] === arr[left]){
            changeS[i] = arr[right];
            left++;
            right--;
        }
    }
    return changeS.join('')
};
let s = "leetcode"
console.log(reverseVowels(s))
