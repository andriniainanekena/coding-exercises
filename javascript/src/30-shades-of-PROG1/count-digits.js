export function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (!isNaN(c) && c >= '0' && c <= '9') {
      count = count + 1;
    }
  }
  return count;
}

