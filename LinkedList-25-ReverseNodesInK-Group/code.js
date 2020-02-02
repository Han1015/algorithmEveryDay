var reverseKGroup = function(head, k) {
    if (head === null) return null; 
    let newStack = [],
        dummy = new ListNode(0);

    dummy.next = head;

    let cur = dummy,
        nextNode = dummy.next;

    while(nextNode !== null){
        //nextNode记录遍历到的节点位置
        for (let i = 0; i < k && nextNode !== null; i++){
            newStack.push(nextNode.val);
            nextNode = nextNode.next;
        }
        // 当newStack.length !== k的时候，说明数据不够，不需要翻转直接return
        if (newStack.length !== k){
            return dummy.next;
        }
        while(newStack.length !== 0){
            cur.next = new ListNode(newStack.pop());
            cur = cur.next;
        }
        //当每次翻转过后，都要把翻转后的新链表和nextNode(剩余的没有翻转的部分)相连接
        cur.next = nextNode;
    }
    return dummy.next;
};