/*
Unique Sorted Elements

Given a **sorted** array `arr[]` of length `n`, modify the array **in‑place** so that all distinct values appear at the beginning of the array while preserving their original order. After the distinct segment, the remaining positions may contain any values and are irrelevant for the result.

The function should return the length of the prefix that contains the unique elements.

### Example

```
Input:  arr = [2, 2, 2, 2, 2]
Output: 1
Modified array (first part): [2]
```

*/

function uniqueSortedElem(arr) {
    let nrr=[];
   for (let i=0; i<arr.length; i++){
    if(arr[i]!=arr[i+1]){
        nrr.push(arr[i])
    }
   }
   return nrr.length;
}


/*
uniqueSortedElements(arr) {
    // Handle empty input gracefully
    if (!arr || arr.length === 0) return 0;
    // write points to the last unique element placed
    let write = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[write]) {
        write++;
        arr[write] = arr[i];
      }
    }
    // length of the unique prefix
    return write + 1;
  }
*/


console.log(uniqueSortedElem([2, 2, 2, 2, 2]));
console.log(uniqueSortedElem([1,2,2,3,4,4,4,5,5]));
