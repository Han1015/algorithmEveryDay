var deleteDuplicates = function(head) {
    if (head === null) return head;
    let cur = head;
    while(cur.next !== null){
        if (cur.val === cur.next.val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return head;
};