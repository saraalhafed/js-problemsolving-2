/* Problem Statement:

Write a JavaScript function to find all prime numbers less than or equal to a given positive integer n.

Example:

Input: 10 Output: [2, 3, 5, 7] */
// 1-prime numbers
// prime numbers are the number divisble by only them selves or 1 : 2, 3, 5,7
// Input: 10 Output: [2, 3, 5, 7]

function isPrime(number) {
    for (let i = 2; i < number; i++) {
      // 4/2=2 the remander is 0 so that means that 4 is not a prime so i will return false
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(5));
  let input = 10;
  const primes = [];
  
  for (let i = 2; i <= input; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  console.log(primes);
/* we can use tow for but  this is not good for performance  */  

