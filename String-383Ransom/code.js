//magazine，里面的字母无论什么顺序，只要能组合成ransomNote就行
var canConstruct = function(ransomNote, magazine) {
    let m = ransomNote.length, n = magazine.length, dict = {};
    for (let i = 0; i < n; i++){
        if (!dict.hasOwnProperty(magazine[i])){
            dict[magazine[i]] = 1;
        }else{
            dict[magazine[i]]++
        }
    }
    for (let j = 0; j < m; j++){
        if (!dict.hasOwnProperty(ransomNote[j]) || --dict[ransomNote[j]] < 0){
            return false;
        }
    }
    return true;
};
console.log(canConstruct("a", "b"))
console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))
console.log(canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"))
