function upperCase(string){
  let arr = string.split(' ');
  const len = arr.length;
  let newArr = [];
  for (let i = 0; i < len; i++){
    newArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
  return newArr.join(' ');
}
console.log(upperCase('im a super coder'));
