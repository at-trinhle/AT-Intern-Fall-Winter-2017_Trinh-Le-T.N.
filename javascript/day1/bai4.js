function DivBy6 (num) {
  if (num % 6 === 0) return true;
  return false;
}
function maskedNumber (chuoi) {
  let result = [];
  for (let i = 0; i < 10; i++) {
    string = chuoi.replace('*', i);
    if (DivBy6(string)){
      result.push(string);
    }
  }
  console.log(result);
}
maskedNumber("1234567890*");
maskedNumber("1*9");
