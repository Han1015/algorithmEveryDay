1. 需要解决的地方就是链表的长度不1⃣️， 没办法做到步调一致
   * 解决： 让长度较长的链表先走几步，直到长度等于较短的链表，然后齐头并进
2. 第二种解法比较巧妙
    * 因为链表的长度不相等，所以存在步调不一致的情况，
    * 那么，变相的让链表A和B相等，
        * 当curA指针A链表后，再从头走B链表
        * 当curB指针**走完**B链表后，再从头走A链表
    * 这样 curA和curB所走的路程就相等了
    * 当 curA === curB 的时候，curA就是返回的解果，相交的点或者null;
3. [相交](./intersect.png)
    * curA走的路程 a + c + b
    * curB走的路程 b + c + a
    * curA = curB = c1
4. [不相交](./disjoint.png)
   * curA走的路程 a + b
   * curB走的路程 b + a
   * curA = curB = null
