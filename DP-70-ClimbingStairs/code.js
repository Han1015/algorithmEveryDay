var climbStairs = function(n) {
    let stepOne = 1;
    let stepTwo = 1;

    for (let i = 2; i < n+1; i++){
        let temp = stepOne + stepTwo;
        stepOne = stepTwo;
        stepTwo = temp;
    }
    return stepTwo;
};
console.log(climbStairs(2))