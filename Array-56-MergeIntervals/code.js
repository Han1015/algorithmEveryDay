//Method1
// var merge = function(intervals) {
//     intervals.sort(function(a, b){
//         return a[0] - b[0]; 
//     });
//     let len = intervals.length;
//     for(let i = 0; i < len-1; i++){
//         if (intervals[i][1] >= intervals[i+1][0]){
//             let start = [i][0];
//             let end = Math.max(intervals[i][1], intervals[i+1][1]);
//             let temp = [start, end];
//             intervals.splice(i, 2, temp);
//             len--;
//             i--;
//         }
//     }
//     return intervals;
// };
//Method2
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    intervals.sort(function(a, b){
        return a[0] - b[0]; 
    });
    
    let result = []
    let temp = intervals[0];
    result.push(temp);
    intervals.forEach(sub => {
        if (temp[1] >= sub[0]){
            temp[1] = Math.max(temp[1], sub[1])
        }else{
            temp = sub;
            result.push(temp);
        }

    })
    return result;
}
var intervals = [[1,4],[4,5], [0, 6]];
console.log(merge(intervals))
