var addTwoNumbers = function(l1, l2) {
    let tail = new ListNode(0);
    let dummy = tail, sum = 0;
    while (l1 || l2 || sum){
        sum += (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val);
        tail.next = new ListNode(sum % 10);
        tail = tail.next;
        sum = Math.floor(sum / 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummy.next;
};