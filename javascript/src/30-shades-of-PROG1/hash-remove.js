export function hashRemove(str) {
  let result = '';
  for(let i=0; i<str.length; i++) {
    if(str[i] === '#') {
      if(result.length > 0) {
        result = result.slice(0, -1);
      }
    } else {
      result += str[i];
    }
  }
  return result;
}
