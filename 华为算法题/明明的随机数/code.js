const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
handleNums=(nums)=>{
    let newNums = Array.from(new Set(nums.slice(1)));
    newNums=newNums.map((val)=>{return parseInt(val)})
    return newNums.sort((a, b)=>{return (a - b)})
}

const nums=[]
rl.on('line', (input)=>{
    nums.push(input);
    if (parseInt(nums.length)-1 === parseInt(nums[0])){
        handleNums(nums).forEach((val)=>{
            console.log(val)
        })
        rl.close();
    }
})