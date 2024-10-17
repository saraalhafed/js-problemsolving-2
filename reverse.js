/* Challenge 2: Reverse a String
Problem Statement:

Write a JavaScript function to reverse a given string.

Example:

Input: "Hello, World!" Output: "!dlroW ,olleH" */

const input = "Hello, world!";
const reversed = input.split("").reverse().join("");
console.log(input, reversed);

//the 2nd solution

let reversed2 = ""; 
for (let i = input.length - 1; i >= 0; i--) {
  reversed2 += input[i];
}
