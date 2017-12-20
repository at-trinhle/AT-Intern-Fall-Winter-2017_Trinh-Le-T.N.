function merge(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let len = arr.length;
  for (let i = 0; i < len - 1; i++){
    for (let j = i + 1; j < len; j++) {
      if (arr[j] === arr[i]) {
        arr[j] = arr[j+1];
        len--;
      }
    }
  }
  let sortArr = arr.sort();
  let Result = sortArr.slice(0,len);
  return Result;
}
console.log(merge([1,2,3,4],[9,5,2,1]));
