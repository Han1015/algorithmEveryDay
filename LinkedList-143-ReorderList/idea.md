1. 翻转链表的通用代码
```
    let prev = null
    while(head){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next
    }
```