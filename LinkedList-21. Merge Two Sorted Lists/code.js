function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;

    let head = ListNode(0);
    if (l1.val < l2.val){
        head.val = l1.val;
        l1 = l1.next;
    }else{
        head.val = l2.val;
        l2 = l2.next;
    }
    let temp = head;
    while (l1 !== nullll || l2 !== null){
        if (l1.val < l2.val){
            temp.next = ListNode(l1.val)
            l1 = l1.next;
            temp = temp.next;
        }else{
            temp.next = ListNode(l2.val)
            l2 = l2.next;
            temp = temp.next;
        }
    }
    return head;
};
let a1 = [1,2,4], a2 = [1,3,4];
