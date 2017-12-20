function noRepeat(str) {
  let unique ='';
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if(unique.indexOf(str.charAt(i)) == -1){
      unique += str[i];
    }
  }
  return unique;
}
console.log(noRepeat('absdasd'));
