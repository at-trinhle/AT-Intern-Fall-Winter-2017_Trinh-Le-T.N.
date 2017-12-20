// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.
// Input: a = 5, b = 10
// Output: 15

// Input: a = 5, b = 5
// Output: 30
function sumTriple (x, y){
  if (x === y){
    return 3 * (x + y);
  }else {
    return x + y;
  }
}
console.log(sumTriple(5, 10));
console.log(sumTriple(5, 5));
