export function splitCamelCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (i > 0 && c >= 'A' && c <= 'Z') {
      result += ' ' + c;
    } else {
      result += c;
    }
  }
  return result;
}
