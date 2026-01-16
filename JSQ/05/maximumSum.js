/*
You are given a **0-indexed** integer array `nums` and an integer `k`. Your task is to perform the following operation **exactly** `k` times in order to maximize your score:

1. Select an element `m` from `nums`.
2. Remove the selected element `m` from the array.
3. Add a new element with a value of `m + 1` to the array.
4. Increase your score by `m`.

Return *the maximum score you can achieve after performing the operation exactly* `k` *times.*

**Example 1:**

```
Input: nums = [1,2,3,4,5], k = 3
Output: 18
Explanation: We need to choose exactly 3 elements from nums to maximize the sum.
For the first iteration, we choose 5. Then sum is 5 and nums = [1,2,3,4,6]
For the second iteration, we choose 6. Then sum is 5 + 6 and nums = [1,2,3,4,7]
For the third iteration, we choose 7. Then sum is 5 + 6 + 7 = 18 and nums = [1,2,3,4,8]
So, we will return 18.
It can be proven, that 18 is the maximum answer that we can achieve.
```

*/

function maximumSum(nums, k) {
    let sum = 0; 
    
    
    for (let i=0; i<k;i++){
        // sum += nums[nums.length-1] 
        let max = Math.max(...nums);
        sum += max  
        // nums.push(nums[nums.length-1] +1); 
        nums.push(max +1);  
    }
    console.log(sum);    
}

console.log(maximumSum([1, 2, 3, 4, 5], 3));
console.log(maximumSum([5,5,5], 2));
console.log(maximumSum([1,2,10,3,1,5], 10));

// M
function maximizeSum(nums, k) {
    let a= Math.max(...nums);
    return (k/2)*(2*a + (k-1));
      
  }

console.log(maximizeSum([1, 2, 3, 4, 5], 3));
/*
 = 10+2 * 3/2
 = 12*3/2
 = 6*3
 = 18

*/
console.log(maximizeSum([5,5,5], 2));
console.log(maximizeSum([1,2,10,3,1,5], 10));
