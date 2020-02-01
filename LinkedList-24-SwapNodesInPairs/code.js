var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let cur = dummy;
    while (cur.next !== null && cur.next.next != null){
        let tempNode = cur.next;
        cur.next = tempNode.next;
        tempNode.next = tempNode.next.next;
        cur.next.next = tempNode;
        cur = cur.next.next;
    }
    return dummy.next;
};