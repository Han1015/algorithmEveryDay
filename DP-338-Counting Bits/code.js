var countBits = function(num) {
   let res = [0];
   for (let i = 1; i <= num; i++){
       // 假设a%2 === 1, 说明了a-1是2的整倍数，
       //更进一步的说明了a-1的二进制数的最后一位为0，
       //a-1 + 1 = a, 同时1的个数也增加了1.
       if (i % 2 === 1){
           res[i] = res[i-1] + 1;
       }else{
           //数字a是数字b的二倍，说明了什么问题?
           //说明了, 数字a可以是数字b左移一位得来的
           //举例说明：4 << 1 结果是8， 左移后，1的个数不变
           res[i] = res[i / 2]
       }
   }
   return res;
};
console.log(countBits(8))