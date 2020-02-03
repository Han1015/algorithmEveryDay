var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    if(head === null || head.next === null) return next;
    let pre = dummy;

    while(pre.next){
        let cur = pre.next;
        //如果有元素是重复的那么， cur的位置就是重复元素的最后一个元素
        while(cur.next && cur.val === cur.next.val){
            cur = cur.next;
        }
        //cur != pre.next说明了有重复元素
        //而且，cur所在的位置是重复元素的最有一个，
        //所以prev.next = cur.next
        //为什么这一步不执行pre = pre.next; 因为pre.next还没有进行比较
        if (cur != pre.next){
            pre.next = cur.next;
        }else{
            pre = pre.next
        }
    }
    return dummy.next;
   
};