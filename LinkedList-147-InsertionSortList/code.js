var insertionSortList = function(head) {
    let dummy = new ListNode(-1);
    let cur = dummy;
    while(head){
        let temp = head.next;
        //因为每一次寻找插入的新位置都要从头开始遍历
        //所以整体算法的时间复杂度较高O(n^2), 空间复杂度O(1)
        cur = dummy;
        while (cur.next && cur.next.val <= head.val){
            cur = cur.next;
        }
        head.next = cur.next;
        cur.next = head;
        head = temp;
    }
    return dummy.next;
};