/* Challenge 6: Sum of Digits
Problem Statement:

Write a JavaScript function to calculate the sum of digits of a positive integer.

Example:

Input: 12345 Output: 15 */
// Write a JavaScript function to calculate the sum of digits of a positive integer
const input = 12345;
// const output =15

// function sumof(num) {
//   let numinArray = num.toString().split("");
//   let numbers = numinArray
//     .map((item) => Number(item))
//     .reduce((acc, digit) => acc + digit, 0);
//   console.log(numbers);
// }
// sumof(input);
function sumof(num) {
  let numinArray = num
    .toString()
    .split("")
    .map((item) => Number(item))
    .reduce((acc, digit) => acc + digit, 0);
  console.log(numinArray);
}
sumof(input);

//another solution
const str = input.toString();//convert the numer to string
console.log(str);
let sum = 0;
for (let item of str) {
  sum += Number(item);
}
console.log(sum);