var lengthOfLastWord = function(s) {
    //trime()去除字符串前后的空格
    return s.trim().split(' ').pop().length;
};