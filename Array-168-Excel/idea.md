1. 主要思路，就是把一个数转化成一个使用字母表示的26进制的数
2. 为什么 先要进行n--呢？
    * 因为一般的进制转换都是从0开始的，但是这里的A 表示的是1， 所以需要n-1
    * A-Z, 26个英文字母，表示的是1 - 26 这26个数， 但是n % 26的余数的范围是1 - 25，
    * 假设n = 27, 27 % 26 = 1, 余数是1, 应该是A，但是如果不减去1，那就成了65 + 1就变成了B, 
    * 所以需要提前减去1.
    * 假设n = 26, 不减去1的结果是A，所以必须先减去1