export function duplicateEncoder(str) {
  let lowerStr = str.toLowerCase();
  let result = '';
  for(let i=0; i<lowerStr.length; i++) {
    let c = lowerStr[i];
    if(lowerStr.indexOf(c) === lowerStr.lastIndexOf(c)) {
      result += '(';
    } else {
      result += ')';
    }
  }
  return result;
}
