export function isPangram(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  str = str.toLowerCase();
  for(let i=0; i<alphabet.length; i++) {
    if(str.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

