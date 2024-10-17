/* Challenge 5: Check Anagrams
Problem Statement:

Write a JavaScript function to check if two strings are anagrams of each other.

Example:

Input: "listen", "silent" Output: true 
have same letters */
// Input: "listen", "silent" Output: true
const word1 = "silent";
const word2 = "listen";

//  l i s t e n   ==> e i l n s t
//  s i l e n t

function compare(str1, str2) {
  const sorted1 = word1.split("").sort().join("");
  const sorted2 = word2.split("").sort().join("");
  if (sorted1 === sorted2) {
    return ` ${str1} and ${str2} are anagrams`;
  } else {
    return false;
  }
}
console.log(compare(word1, word2));
