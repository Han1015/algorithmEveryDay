var reverseList = function(head) {
    let pre = null,
        temp = null,
        cur = head;
    while (cur){
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre
};