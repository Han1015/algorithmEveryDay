//题目要求不返回任何东西
var reorderList = function(head) {
    if (head === null || head.next === null || head.next.next === null){
        return;
    }
    let slow = head, fast = head;
    while (fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let p, q, r, temp;
    p = slow.next;
    slow.next = null;
    q = p.next;
    p.next = null;
    //把后一半的链表翻转过来了，p就是链表的头
    while(q){
        r = q.next;
        q.next = p;
        p = q;
        q = r;
    }
    while(head && p){
        temp = head.next;
        head.next = p;
        p = p.next;
        head.next.next = temp;
        head = temp;
    }
};