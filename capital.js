/* Challenge 7: Title Case a Sentence
Problem Statement:

Write a JavaScript function that converts a sentence to title case (the first letter of each word capitalized).

Example:

Input: "this is a sample sentence" Output: "This Is A Sample Sentence" */
// Write a JavaScript function that converts a sentence to title case (the first letter of each word capitalized).
const input = "this is a sample sentence";

function capital(input) {
  const words = input.split(" ");
  const words2 = words.map(
    (item) => item[0].toUpperCase() + item.slice(1).toLowerCase()
  );
  console.log(words2.join(" "));
}
capital(input);
