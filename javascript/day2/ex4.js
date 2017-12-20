function countWord(str, b) {
  let count = 0;
  const len = str.length;
  for (let i = 0; i < len; i++){
    if (str.charAt(i) == b){
      count ++;
    }
  }
  return count;
}
console.log(countWord('JavaScript function','t'));
