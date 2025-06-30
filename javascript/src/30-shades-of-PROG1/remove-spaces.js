export function removeSpaces(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result = result + str[i];
    }
  }
  return result;
}

