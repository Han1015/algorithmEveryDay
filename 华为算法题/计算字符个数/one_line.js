const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Please enter something:', (input)=>{
    console.log(`The input str is ：${input}`)
    rl.close();
})