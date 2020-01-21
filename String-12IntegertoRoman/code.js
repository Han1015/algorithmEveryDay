// class Solution {
//     public:
//         string intToRoman(int num) {
//             string res = "";
//             vector<string> v1{"", "M", "MM", "MMM"};
//             vector<string> v2{"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
//             vector<string> v3{"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
//             vector<string> v4{"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
//             return v1[num / 1000] + v2[(num % 1000) / 100] + v3[(num % 100) / 10] + v4[num % 10];
//         }
//     };

var intToRoman = function(num) {
    let v1 = ['', 'M', 'MM', 'MM'];
    let v2 = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let v3 = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let v4 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let thousand = Math.floor(num / 1000);
    let hundred = Math.floor((num % 1000) / 100);
    let ten = Math.floor((num % 100) / 10);
    let one = Math.floor((num % 10));
    return v1[thousand] + v2[hundred] + v3[ten] + v4[one];
};
console.log(intToRoman(3))