//there is no 0 to  way to encoded 0 ways return 0
// ther
//we have 2 ways slice(2)or slice(1) take , 1121 : 11 21  or 1 121 
function countDecoding(Numb) { //num other example 211 : i should divide  21 1
    if (Numb.startsWith("0")) {   //211 false 
      return 0;
    }
  //if 4 --> d -->one way to decode because 1 digit
  if (Numb.length <= 1) { //this 211 not length 1  
    return 1;
  }
  let total = 0;
  if (Number(Numb.slice(0, 2)) <= 26) {//we take just 21
    total += countDecoding(Numb.slice(2)); //i take 1  the lenght will be 1 so  return 1  ,total =total +1,13
  }
  total += countDecoding(Numb.slice(1));// i take 11, 113
  return total;
}

console.log(countDecoding("111"));// we use string to use startwith or slice 
/* 2113:
13
113 */
console.log(countDecoding("211"))