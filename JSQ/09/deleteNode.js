/*
Delete Every k-th Node from a Linked List

Given a singly linked list, remove every **k‑th** node from the list (using 1‑based indexing). It is guaranteed that **k** is less than or equal to the length of the list. After removal, the remaining nodes should stay in their original order.

**Example 1:**

```text
Input:  List: 1 → 2 → 3 → 4 → 5 → 6,  k = 2
Output: 1 → 3 → 5
Explanation: Every 2nd node (2, 4, 6) is removed, leaving 1, 3, and 5.
```
*/


function deleteNode(head,k){
    return head.filter(n=> n%k!==0)
}
console.log(deleteNode([1,2,3,4,5,6],2));
console.log(deleteNode([1,2,3,4,5,6,7,8,9,10],3));
console.log(deleteNode([1,2,3,4,5,6,7,8,9,10],4));
// in system this is okk but in official gives an err.