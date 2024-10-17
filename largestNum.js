/* Challenge 4: Find the Largest Number
Problem Statement:

Write a JavaScript function to find the largest number in an array of numbers.

Example:

Input: [12, 5, 36, 8, 45, 67] Output: 67 */
// largest number
const arr = [12, 5, 36, 8, 45, 67];
let max = arr[0];

function findgreat(arr) {
  for (let number of arr) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
console.log(findgreat(arr));
