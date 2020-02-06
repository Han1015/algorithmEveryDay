var partition = function(head, x) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy, cur = head;
    //找到第一个大于x的点之前的那个点，然后把小于x的点插入它后面
    while (pre.next && pre.next.val < x){
        pre = pre.next;
    }
    cur = pre;
    // 为什么if步骤中，cur不向下走一步，因为cur.next被移后，现在的这个cur.next还没有进行判断，所以不能走向下一步
    while(cur.next){
        if (cur.next.val < x){
            let tmp = cur.next;
            cur.next = tmp.next;
            tmp.next = pre.next;
            pre.next = tmp;
            pre = pre.next;
        }else{
            cur = cur.next;
        }
    }
    return dummy.next;
};