/* Challenge 9: Flatten an Array
Problem Statement:

Write a JavaScript function to flatten a nested array into a single array.

Example:

Input: [1, [2, [3, 4], 5], 6] Output: [1, 2, 3, 4, 5, 6] */

/* this way called recursion:is a functinon calling it self
repeated step here multiplay with fac */
function fact(n) {
  if (n == 1) {
    return 1;
  }

  return n * fact(n - 1);//we do the multiplay heree in the return but the normalway befor return we calculate than return the result
}
console.log(fact(5));
/* 5!=5*fact(4)
return 4*fact(3) ,
fact(3)
return 3*fact(2)
fact(2)
return 2* fact(1) 
fact(1)
if n=1 return 1 
return value is 1 
(5*4*3*2*1): (5*4!):(4*3!):(3*2!):(2*1!):1!=1 go down 
than go up      (120  ) <  (24)   <(6)   <(2) < 1

 it will go back 1 than go up to calculate each fac*/