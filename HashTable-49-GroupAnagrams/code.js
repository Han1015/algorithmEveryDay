var groupAnagrams = function(strs) {
    let hs = {};
    for(let i = 0; i < strs.length; i++){
        let change = strs[i].split('').sort().join('');
        if (!hs.hasOwnProperty(change)){
            hs[change] = [strs[i]];
        }else{
            hs[change].push(strs[i])
        }
    }
    return Object.values(hs);
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));


