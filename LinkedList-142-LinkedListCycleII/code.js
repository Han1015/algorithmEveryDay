var detectCycle = function(head) {
    let slow = head, fast = head;
    while (fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast){
            break;
        }
    }
    //如果上面的循环找到了slow和fast相等的点，说明有环
    //如果fast走到了链表的尾巴上，说明没有环
    //fast可能走到的位置： 1. 链表的最后一个节点 2. 链表的倒数第二个节点
    if(!fast.next || !fast.next.next){
        return null;
    }

    fast = head;
    while(slow != fast){
        fast=fast.next;
        slow=slow.next;
    }
    return fast
};
