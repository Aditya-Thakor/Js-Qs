/*
Finding the Right‑Side Leaders

Given an array **arr** of length **n**, identify all *leaders* in the array. An element is called a leader if it is greater than or equal to every element that appears to its right. The rightmost element is always a leader because there are no elements after it.

**Input**: An array `arr[]`.

**Output**: A list of all leaders in the order they appear in the array.

### Example 1

```
Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
Explanation: 17 is greater than all elements to its right [4, 3, 5, 2]; 5 is greater than the element to its right [2]; 2 has no elements to its right.
```
*/

function findLeaders(arr){
    let ldr=[];
    let nldr = [];
    arr.forEach((e,ind )=> {
        if(e>=arr[ind+1]){
            ldr.push(e) 
        }

    });
    ldr.push(arr[arr.length-1]);

    for(let i=0; i<ldr.length;i++){
        if(ldr[i]>=ldr[i+1]){
            nldr.push(ldr[i])
        }
        
    }
    nldr.push(arr[arr.length-1])
   
    return nldr;
}

console.log(findLeaders([1,4,5,2,7,3]));
console.log(findLeaders([16,17,4,3,5,2]));
console.log(findLeaders([5,5,5,5]));
/*

CODE's States:::
Average Runtime
0.75ms

Average Memory
47.95mb

*/

// official SOLUTION::
//  findLeaders(arr) {
//     const n = arr.length;
//     if (n === 0) return [];
//     const leaders = [];
//     let maxSoFar = -Infinity;
//     // traverse from right to left
//     for (let i = n - 1; i >= 0; i--) {
//       if (arr[i] >= maxSoFar) {
//         leaders.push(arr[i]);
//         maxSoFar = arr[i];
//       }
//     }
//     // leaders are collected in reverse order, restore original order
//     leaders.reverse();
//     return leaders;
//   }

/*

CODE's States:::
Average Runtime
0.78ms

Average Memory
48.32mb

*/