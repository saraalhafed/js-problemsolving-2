/* Problem Statement:

Write a JavaScript function to find all prime numbers less than or equal to a given positive integer n.

Example:

Input: 10 Output: [2, 3, 5, 7] */
//5%5===0 and 5%1===0 is prim num,(1,0 not a prim numbers) always theris restvalue with dividing by other numbers
const input=10 ;

function isprime(input){
    if(input<=1 ) return false;
    //0,1 not prim numb
    for(let i=2;i<input;i++){
        if(input%i===0)
            return false
           
    }
    return true
}

function allprimes(n){
    let arr=[];
    for(let i=2 ;i<= n;i++){
       if(isprime(i)){
         arr.push(i);
        }
    }
    return arr;
}
console.log(allprimes(9))
console.log(allprimes(10))
console.log(allprimes(7))
console.log(allprimes(17))

/* ------------------- */
/* Problem Statement:

Write a JavaScript function to reverse a given string.

Example:

Input: "Hello, World!" Output: "!dlroW ,olleH" */

 const Input="Hello, World!" 
const input1=Input.split("").reverse().join("");
console.log(input1)



/* ---------------------------------- */

/* Challenge 3: Check Palindrome
Problem Statement:

Write a JavaScript function to check if a given string is a palindrome.

Example:

Input: "racecar" Output: true */

const str= "racecar" 
function ispalindrome(str){
    newstr=  str.split("").reverse().join("")
    if(newstr===str)
    return true
   
}
console.log(ispalindrome("beteb"))



/* --------------------------------- */
/* Challenge 4: Find the Largest Number
Problem Statement:

Write a JavaScript function to find the largest number in an array of numbers.

Example:

Input: [12, 5, 36, 8, 45, 67] Output: 67 */
const array=[12, 5, 36, 8, 45, 67]
function islargest(array){
let largest=0;
for(let i=0;i<=array.length-1;i++){
   
             if( largest<array[i]){
                largest=array[i]
             }
    
}
return largest;
}
console.log(islargest(array))


//way2;
function islargest1(array){
    let largest=(Math.max(...array));
  
    return largest;
    }
    console.log(islargest1(array))
/* ----------------------------------- */
/* Challenge 5: Check Anagrams
Problem Statement:

Write a JavaScript function to check if two strings are anagrams of each other.

Example:

Input: "listen", "silent" Output: true */
const str1="listen"; const str2="silent";
function isAnagrams(str1,str2){
    
    const leftstr= str2.slice(0,3).split("").reverse().join("");
    const rightstr= str2.slice(-3).split("").reverse().join("");
    const finalstr=leftstr + rightstr
    console.log(leftstr)
    console.log(rightstr)
   
    console.log(finalstr)
    if(str1==finalstr)
        return true
}
isAnagrams(str1,str2)
console.log(isAnagrams(str1,str2))
 //-------
 // Function to check whether two strings 
// are anagram of each other 
function areAnagram(str1,str2)
{
    // Get lengths of both strings
    let n1 = str1.length;
    let n2 = str2.length;
   
    // If length of both strings is not 
    // same, then they cannot be anagram
    if (n1 != n2)
        return false;
   
    // Sort both strings
    str1.split("").sort();
    str2.split("").sort()
   
    // Compare sorted strings
    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;
   
    return true;
}
     
// Driver Code
let str11="test";
let str22="ttew";
     
console.log(areAnagram(str11,str22))


/* --------------------------- */
/* Challenge 6: Sum of Digits
Problem Statement:

Write a JavaScript function to calculate the sum of digits of a positive integer.

Example:

Input: 12345 Output: 15 */
//i dont know how many number so i use rest opr ,itis here as []so i can use arr method of it
function sum(...arg){
     const final=arg.reduce((acc,num)=>acc + Number(num),0)
     return final
}

console.log(sum(1,2,3,4,5))

/* ----------------------- */
/* Challenge 7: Title Case a Sentence
Problem Statement:

Write a JavaScript function that converts a sentence to title case (the first letter of each word capitalized).

Example:

Input: "this is a sample sentence" Output: "This Is A Sample Sentence" */
const str3="this is a sample sentence"
function TitleCase(str){
const result=str.split(" ")
    const result1= result.map(item => 
       item.charAt(0).toUpperCase()+item.slice(1)
       );
const final =result1.join(" ")
return final

}
console.log(TitleCase(str3))
/* ---------------- */
/* Challenge 8: Calculate Factorial
Problem Statement:

Write a JavaScript function to calculate the factorial of a given positive integer.

Example:

Input: 5 Output: 120 */
function factorial(num){
    let fac=1;
    for(let i=1;i<=num;i++){
        fac *=i
    }
    return fac
}

console.log(factorial(5))





/* ------------------ */
/* Challenge 9: Flatten an Array
Problem Statement:

Write a JavaScript function to flatten a nested array into a single array.

Example:

Input: [1, [2, [3, 4], 5], 6] Output: [1, 2, 3, 4, 5, 6] */
const arr=[1, [2, [3, 4], 5], 6]
function FlattenArray(arr){
  return  arr.join(",").split(",").map(Number);//we convertet to string
}
console.log(FlattenArray(arr))




/* ----------------- */
/* Challenge 10: Decode Encoded Message
Problem Statement:

Given an encoded message, count the number of ways it can be decoded using the mapping a = 1, b = 2, ..., z = 26.

Example:

Input: '111'

Output: 3 (can be decoded as 'aaa', 'ka', and 'ak') */


/* --------------------------------------- */
/* Challenge 12: Find the Largest Sum of Non-adjacent Numbers
Problem Statement:

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

Example:

const inputArray = [2, 4, 6, 2, 5];

console.log(result);
Sample Output:

13; */

/* Non-adjacent numbers refer to elements in an array that are not immediate neighbors. In other words, when you select a number from the array, you cannot select the numbers that come directly before or after it.
Let's break this down with an example:
Consider the array [2, 4, 6, 2, 5]

If you select 2 (the first element), you cannot select 4 (the second element).
If you select 4 (the second element), you cannot select 2 (the first element) or 6 (the third element).
If you select 6 (the third element), you cannot select 4 (the second element) or 2 (the fourth element).

And so on...
In the context of our problem, we're trying to find the largest sum we can create by selecting numbers from the array, with the constraint that we can't select adjacent numbers. This leads to some interesting choices:

We could select [2, 6, 5] (first, third, and fifth elements) for a sum of 13.
Or we could select [4, 5] (second and fifth elements) for a sum of 9.
We can't select [4, 6] because they are adjacent.

The challenge is to find the combination of non-adjacent numbers that gives us the largest possible sum. In this case, [2, 6, 5] gives us the largest sum of 13, which is why this is the correct answer for our example.
This constraint of non-adjacency is what makes the problem interesting and requires a dynamic programming approach to solve efficiently. It forces us to make choices at each step: do we include this number and exclude the next, or do we skip this number for the possibility of a larger sum later? */
