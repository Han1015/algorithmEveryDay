const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (answer) => {
    let words = answer.split(' ');
    let len = words[words.length-1].length;
    console.log(`${len}`);

  rl.close();
});


