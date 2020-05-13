const readline=require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const lines = []
rl.on('line', (input)=>{
    lines.push(input);
    if (lines.length === 2){
        let pt = RegExp(lines[1], 'gi');
        let res = lines[0].match(pt);
        if (res){
            console.log(res.length);
        }else{
            console.log(0);
        }
        rl.close()
    }
})