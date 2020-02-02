var rotateRight = function(head, k) {
    if (head === null) return head;
    let slow = head,
        fast = head,
        len = 0;
    //求链表的长度
    while(fast !== null){
        len++;
        fast = fast.next;
    }
    //求完长度，把fast指针放回原位
    fast = head;
    //fast指针先走k % n 步
    for(let i = 0; i < k % len; i++){
        fast = fast.next;
    }
    //fast和slow都走，
    //当fast走到最后一个节点的时候,slow.next就是新的head
    while(fast.next !== null){
        fast = fast.next;
        slow = slow.next;
    }
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
};  