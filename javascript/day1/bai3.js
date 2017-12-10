// A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. 
// Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
// Input: a = '1*9'
// Output: ['129', '159', '189']
// Input: a = '1234567890*'
// Output: ['12345678900', 
//  '12345678903', 
//  '12345678906', 
//  '12345678909']
function DivBy3 (num) {
  if (num % 3 === 0) return true;
  return false;
}
function maskedNumber (chuoi) {
  let result = [];
  for (let i = 0; i < 10; i++) {
    string = chuoi.replace('*', i);
    if (DivBy3(string)){
      result.push(string);
    }
  }
  console.log(result);
}
maskedNumber("1234567890*");
maskedNumber("1*9");
