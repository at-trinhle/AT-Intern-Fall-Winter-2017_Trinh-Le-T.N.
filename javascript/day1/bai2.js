// Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple their absolute difference if the specified number is greater than 19.

// Input: a = 12
// Output: 7
// Input: a = 19
// Output: 0
// Input: a = 22
// Output: 9
function diff(n){
  if (n <= 19){
    return 19 - n;
  }else{
    return 3 * (n - 19)
  }
}
console.log(diff(12));
console.log(diff(19));
console.log(diff(22));
