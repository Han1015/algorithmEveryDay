var isPalindrome = function(s) {
    let arrS = s.replace(/[^\w]/g, '').toLowerCase().split('');
    let revArrS = arrS.slice().reverse();
    return arrS.join('') == revArrS.join('');
    
};
let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s))