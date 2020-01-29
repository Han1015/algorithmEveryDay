// 时间复杂度 min(l1, l2)
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;
    //当l1和l2都不为空的时候
    while( l1 !== null && l2 !== null){
        if (l1.val < l2.val){
            tail.next = new ListNode(l1.val);
            l1 = l1.next;
        }else{
            tail.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        tail = tail.next;
    }
    // 当有一个为空的，一个不为空的时候， 把不为空的直接接到tail的后面
    if (l1 != null) tail.next = l1;
    if (l2 != null) tail.next = l2;
    return dummy.next;
}