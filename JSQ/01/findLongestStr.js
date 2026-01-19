/*
Finding the Longest Common Starting Letters

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

Example 1:

```
Input: strs = ["windtalker","windy","wind"]
Output: "wind"
```

*/

function longestStr(strs){
   let s= strs[0]

   for (let i=1; i<strs.length;i++){
     while (strs[i].indexOf(s) !== 0) {
            s = s.slice(0, -1);
            if (s === "") return "";
        }
   }
   return s;
}
console.log("windy".indexOf("windtalker"));

console.log("1",longestStr(["windtalker","windy","wind"]));
console.log("2",longestStr(["cat","dog","elephant"]));