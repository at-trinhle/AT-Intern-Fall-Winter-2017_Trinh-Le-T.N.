function checkType(value) {
  let types = [Object, Boolean, Function, Number, String], i, len;
  if (typeof value === "object" || typeof value === "function") {
    for (i = 0, len = types.length; i < len; i++) {
      if (value instanceof types[i]) {
      return types[i];
      }
    }
  }
  return typeof value;
}
console.log(checkType(12));
console.log(checkType('FRONTEND'));
console.log(checkType(false));
console.log(checkType());
