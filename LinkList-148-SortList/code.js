//分治算法
var sortList = function(head) {
    if (head === null || head.next === null) return head;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow.next;
    slow.next = null;
    return mergeTwoSortList(sortList(head), sortList(mid))
};
var mergeTwoSortList = (l1, l2)=>{
    let dummy = new ListNode(0);
    let tail = dummy;
    while(l1 !== null && l2 !== null){
        if (l1.val < l2.val){
            tail.next = new ListNode(l1.val);
            l1 = l1.next;
        }else{
            tail.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}