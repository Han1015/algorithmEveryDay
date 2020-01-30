// 思路简单： 就是依次进行两个链表的合并
var mergeKLists = function(lists) {
    const mergeTwo=(l1, l2)=>{
        let dummy = new ListNode(0);
        let tail = dummy;
        while (l1 !== null && l2 !== null){
            if (l1.val < l2.val){
                tail.next = new ListNode(l1.val);
                l1 = l1.next;
            }else{
                tail.next = new ListNode(l2.val);
                l2 = l2.next;
            }
            tail = tail.next;

        } 
        if (l1 !== null) tail.next = l1;
        if (l2 !== null) tail.next = l2;
        return dummy.next;
    }
    let res = new ListNode(-Infinity)
    for(let i = 0; i < lists.length; i++){
        res = mergeTwo(res, lists[i]);
    }
    return res.next;
};