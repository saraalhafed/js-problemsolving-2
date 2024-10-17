// finding out if the word is the same if read from backward and forward

const input = "racecar";
const reversed = input.split("").reverse().join("");
function ifpal(input,reversed){

    if (reversed === input) {
    //   console.log(`${input} is a palindrome`);
    return true
    } else {
    //   console.log(`${input} is not a palindrome`);
    return false
    }
}
console.log(ifpal(input.reversed));//we need console because we returning
