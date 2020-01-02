var lengthOfLongestSubstring = function(s) {
    let temp = [];
    let maxLength = 0;
    for (let i = 0; i < s.length; i++){
        if (temp.indexOf(s[i]) == -1){
            temp.push(s[i]);
            maxLength = Math.max(temp.length, maxLength);
        }else{
            temp = temp.slice(temp.indexOf(s[i])+1);
            temp.push(s[i]);
        }
        console.log(temp)
    }
    return maxLength;
};
let s =  "abcabcbb";
console.log(lengthOfLongestSubstring(s))
