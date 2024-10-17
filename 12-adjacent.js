
/* Challenge 12: Find the Largest Sum of Non-adjacent Numbers
Problem Statement:

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

Example:

const inputArray = [2, 4, 6, 2, 5];
// Your code here
console.log(result);
Sample Output:

13; */
function findmax(arr) {
    if (!arr.length) return 0;//empty array i return 0  = largsum ,Base Case: If the array is empty, it returns 0.
    const way1 = arr[0] + findmax(arr.slice(2));//take first one ,skip the second than take the rest
   //   2 + [6, 2, 5];
    const way2 = findmax(arr.slice(1));//skip the first take the second and rest
  
    return Math.max(way1,way2);
  }
  
  const result = findmax([2, 4, 6, 2, 5]);
console.log(result);//13


const result11 = findmax([0, 4, 6, -2, 5]);
console.log(result11);
// 2nd solution
function largestSumNonAdjacent(arr) {
  if (arr.length === 0) return 0;

  let include = 0; // Maximum sum including the current element
  let exclude = 0; // Maximum sum excluding the current element

  for (let i = 0; i < arr.length; i++) {
    let newExclude = Math.max(include, exclude);

    include = exclude + arr[i]; // Include current element
    exclude = newExclude; // Exclude current element
  }

  return Math.max(include, exclude);
}

const inputArray = [2, 4, 6, 2, 5];
const result2 = largestSumNonAdjacent(inputArray);
console.log(result2); // Output: 13
