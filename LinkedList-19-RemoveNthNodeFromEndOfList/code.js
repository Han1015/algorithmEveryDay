var removeNthFromEnd = function(head, n) {
    let prev = head, cur = head;
    for(let i = 0; i < n; i++){
        prev = prev.next;
    }
    //题目规定了n是有效的最大的n不会大于该链表的长度
    //第一种情况，如果prev从head开始走了n步，走到了null，说明走到了最后一个元素的next,
    //说明链表的长度为n, 那么要删除的元素就是head, 
    if (prev === null) return head.next;

    //当prev不为null的时候，cur指针也是从头出发， 记得prev指针先出发n步的，所以prev和cur
    //总是相差n步， 可以画图简单了解一下，当prev.next为空的时候,（prev现在为最后一个元素），
    // cur指针指向的是目标元素的前一个元素。
    while(prev.next){
        prev = prev.next;
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return head;
};