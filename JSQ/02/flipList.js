/*
Flip the Linked List

Given the reference to the first node of a singly linked list, rearrange the list so that its order is reversed, and return the reference to the new first node.

**Example:**

```
Input: 1 → 2 → 3 → 4 → 5
Output: 5 → 4 → 3 → 2 → 1
```

*/

function flipList(head){
    // return head.reverse();

    let prev = null;
        let current = head;
        while (current !== null) {
            const nextNode = current.next; // store next
            current.next = prev;            // reverse pointer
            prev = current;                 // move prev forward
            current = nextNode;             // move current forward
        }
        return prev; 
}

console.log(flipList([1,2,3,4,5]));
