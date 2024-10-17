/* Challenge 9: Flatten an Array
Problem Statement:

Write a JavaScript function to flatten a nested array into a single array.

Example:

Input: [1, [2, [3, 4], 5], 6] Output: [1, 2, 3, 4, 5, 6]

 recursion:is a functinon calling it self:
 repeated step here push the item to the array */
 // Write a JavaScript function to flatten a nested array into a single array.
const input = [1, [2, [3, 4], 5], 6];
//one solution
// function flatten(input) {
//   const result = input.join(",").split(",").map(Number);
//   return result;
// }
// console.log(flatten(input));
// 2nd soltion useful to flattern an array to use 
function flattenarr(arr) {
  const result = [];
  for (item of arr) {
   // [1, [2, [3, 4], 5], 6];
    //[2, [3, 4], 5];
    if (Array.isArray(item)) { //is this item an array?
        console.log(result);
      result.push(...flattenarr(item));//it will push not the array push the return of func  ,spread the return (the result) to have them all in one array
    }else {
        result.push(item);
      }
  }
}
console.log(flattenarr(input));
/* [1, [2, [3, 4], 5], 6]; we call the func
[2, [3, 4], 5]; 
[3, 4];   spread this and then push it to the result array */
// 3,4
// 2,3,4,5
// 1,2,3,4,5,6


/* when we have repeated step it is useful to use  the  recursion  (factorial for num)*/