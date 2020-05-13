const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const lines = []
rl.on('line', (input)=>{
    lines.push(input);
    if (lines.length == 2){
        console.log(lines);
        rl.close();
    }
})