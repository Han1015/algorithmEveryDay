#### 过程简答解析
* temp数组里的元素永远都是不同的
* For exmaple: s = 'abcabcbb';
* temp的变化过程： 
* []->['a']->['a','b']->['a','b', 'c']->['b', 'c', 'a']（截取a后面的所有元素，然后push 'a')->['c', 'a', 'b']->['a', 'b', 'c']->['c','b']->['b']
* 由此可见，最长的是3