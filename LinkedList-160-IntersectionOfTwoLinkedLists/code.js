
var getIntersectionNode = function(headA, headB) {
    let curA = headA, 
        curB = headB, 
        lenA = 0, 
        lenB = 0;
    // A的长度
    while(curA){
        lenA++;
        curA = curA.next;
    }
    //B的长度
    while(curB){
        lenB++;
        curB = curB.next;
    }
    //如果两个链表不相交 那么最后一个节点肯定不相等
    if (curA !== curB){
        return null;
    }
    //让长度较长的链表先走几步，直到长度相等
    curA = headA;
    curB = headB;
    while (lenA > lenB){
        curA = curA.next;
        lenA--;
    }
    while (lenB > lenA){
        curB = curB.next;
        lenB--;
    }
    while (curA !== curB){
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
};