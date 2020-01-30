1. 必须掌握的知识点快慢指针
   ```javascript
    //假设head是一个单链表的头
    let slow = head;
    let fast = slow;
    while (fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next
    }
    let mid = slow.next;
    slow.next = null;

   ```
2. 因为链表没有办法通过坐标找元素，所以使用快慢指针
3. 快慢指针都是从头开始，条件允许的情况下，快指针走两部，慢指针走一步
4. mid指针把链表一分为2，一半是从head到slow, 一半是从slow到最后 