export function accum(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let c = str[i].toUpperCase();
    let repeated = '';
    for (let j = 0; j < i; j++) {
      repeated += str[i].toLowerCase();
    }
    result += c + repeated;
    if (i < str.length - 1) {
      result += '-';
    }
  }
  return result;
}
