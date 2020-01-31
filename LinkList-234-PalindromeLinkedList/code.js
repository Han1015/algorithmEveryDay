var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    let nums = [head.val];
    let slow = head, fast = head;
    while(fast.next !== null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        nums.push(slow.val)
    }
    //说明链表的长度为奇数， fast指针跳到了最后一个位置，而slow指针正好处于中间位置
    //因为对于奇数个元素来说，中间位置不需要比较，所以删除
    if (fast.next === null){
        nums.pop();
    }
    while (slow.next !== null){
        slow = slow.next;
        if (nums.pop() !== slow.val){
            return false;
        }
    }
    return true;
};