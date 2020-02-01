var removeNthFromEnd = function(head, n) {
    let size = 1;
    let cur = p = head;
    while (cur.next){
        size++;
        cur = cur.next;
        if (size > n + 1) p = p.next;
    }
    if (size === n) return head.next;
    else p.next = p.next.next;
    return head;
}
