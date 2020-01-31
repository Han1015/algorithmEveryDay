var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    let numStack = [];
    let cur = head;
    while(cur){
        numStack.push(cur.val);
        cur = cur.next;
    }
    while(head){
        if (numStack.pop() != head.val){
            return false;
        }
        head = head.next;
    }
    return true
}
