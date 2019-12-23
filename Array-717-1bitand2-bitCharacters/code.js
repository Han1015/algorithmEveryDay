//Method1， 遍历，碰到1加2， 碰到0加1，看最后的结果是不是len-1
// var isOneBitCharacter = function(bits) {
//     let i = 0;
//     let len = bits.length;
//     while (i < len-1){
//         if (bits[i] == 1){
//             i += 2;
//         }else{
//             i++;
//         }
//     }
//     return i === len-1;
// };

//Method2 使用正则表达式
var isOneBitCharacter = function(bits) {
    let bits_str = bits.join('');
    let pattern = /^(10|11|0)*0$/;
    return pattern.test(bits_str)
}
var bits = [1, 1,  0];
console.log(isOneBitCharacter(bits));