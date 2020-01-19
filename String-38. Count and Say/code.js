var countAndSay = function(n) {
    const countNum = (str)=>{
        let count = 1;
        let res = '';
        let len = str.length;
        for (let i = 0; i < len; i++){
            //这个地方不需要限制i+1<len; 
            //举例说明 var a = 'abc', a[3] => underfined;
            //所以，当遍历到最后一个字母的时候，就会自动的进入else阶段
            if (str[i] == str[i+1]){
                count++;
            }else{
                res = res + count + str[i];
                count = 1;
            }
        }
        return res;
    }
    if (n === 1){
        return '1';
    }else{
        var output = countNum('1');
        for (let i = 0; i < n-2; i++){
            output = countNum(output);
        }
        return output;
    }
};
console.log(countAndSay(4))