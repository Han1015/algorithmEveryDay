
var isValidSudoku = function(board){
    for (let i = 0; i < 9; i++){
        //检查一行
        if (!(validate(board[i]))){
            return false;
        }
        let temp = [];

        for (let j = 0; j < 9; j++){
            temp.push(board[j][i])
        }
        if (!(validate(temp))){
            return false
        }
    }
    let row = [[0,1,2], [3,4,5], [6,7,8]];
    let col = [[0,1,2], [3,4,5], [6,7,8]];
    for(let i of row) {
        for(let j of col) {
            let arr = [];
            for(let num1 of i) {
                for(let num2 of j){
                    arr.push(board[num1][num2]);
                }
            }
            if(!validate(arr)){
                return false;
            }
        }
    }
    return true;
    const validate=(arr)=>{
        let tempSet = new Set();
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === '.'){
                continue;
            }else if (tempSet.has(arr[i])){
                return false;
            }else{
                tempSet.add(arr[i])
            }
        }
        return true
    }
}
