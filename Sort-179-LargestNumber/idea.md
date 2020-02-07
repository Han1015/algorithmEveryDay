1. 重新理解了sort的function参数
   * (a,b), 如果a 应该在b的前面， 返回-1(负数即可)
   * (a,b), 如果a 应该在b的后面，返回1（整数即可）

```javascript
    // 从小到大
    function compare(a, b){
        //a 应该在b的前面
        if (a < b){
            return -1
        }else if (a > b){
            return 1
        }else{
            return 0
        }
    }
    // 从大到小
    function compare2(){
        //a 应该在b的后面
        if (a < b){
            return 1
        }else if (a > b){
            return 1
        }else{
            return 0
        }
    }
    arr.sort(compare);
```
2.
```javascript
//一般的写法是 
arr.sort((a,b)=>{return a-b})
//试想， 如果 a < b 那么 a-b <0, 所以按照a在b前的顺序排列
//如果，检测到一组a,b, a > b, 那么a-b>0, a应该在b的后面
//所以这样就实现了从小到大的排列
```
3. method1和method2是一样的做法，只不过排序函数写法不一样，作用一样
   * 我们实现的是，两个数组合然后达到最大值(前提是数组是按照ASCII排序的)
   * 假设(b+a)-(a+b)>0, 那么a应该在b的后面， 
   * 假设(b+a)-(a+b)<0, 那么a应该在b的前面，
   * 可以详细查看method1,容易理解
