/* Challenge 11: Unique Ways to Climb Stairs
Problem Statement:

Given a staircase with N steps, where you can climb up either 1 or 2 steps at a time, write a function in JavaScript that returns the number of unique ways you can climb the staircase.

Example:

Input: N = 4 Output: 5 (Possible ways: 1111, 22, 112, 121, 211) */

function count(n) {
    if (n <= 1) { //1 step
      return 1;//just one way we will have
    }
  //to know howmany 1 or 2  to go in the tree posibel
    ///if we have more than one step

  //if we gonna take one step at a time
  const onestep = count(n - 1); //i count the ways for step 1,here the step 1 can have those way (1111 , )
  //if we gonna take 2 steps
  const twostep = count(n - 2);//i count the ways for step 2
  return twostep + onestep;
}

console.log(count(4)); // 5 ways

  /* count(4-1)=(count(3))go one step 

   */