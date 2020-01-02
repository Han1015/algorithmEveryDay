// let a = 'abcaabcd';
// let exp = /abc/g;
// let temp = new Set()
// let hs = {
//     len: 0,
//     strs: ''
// };
// for (let i=0; i<a.length; i+=4){
//     let res = a.match(new RegExp('abc','g'));
//     console.log(res)
//     if (res){
//         temp.add(res.index)
//     }
// }
// console.log(temp.size)

var findRepeatedDnaSequences = function(s) {
    let hs = {len: 0, str: new Set()};
    for (let i = 0; i+10 <= s.length; i++){
        let subStr = s.substring(i, i+10);
        var res = s.match(new RegExp(subStr, 'g'))
        if (res.length > hs.len){
            hs.len = res.length;
            hs.str = new Set([subStr]);
        }
        if (res.length === hs.len){
            hs.str.add(subStr);
        }
       
    }
    return [...hs.str];
};
let s = "AAAAAAAAAA";
console.log(findRepeatedDnaSequences(s));
