export function scramble(str1, str2) {
  let count = {};
  for(let i=0; i<str1.length; i++) {
    let c = str1[i];
    count[c] = (count[c] || 0) + 1;
  }
  for(let i=0; i<str2.length; i++) {
    let c = str2[i];
    if(!count[c]) {
      return false;
    }
    count[c]--;
  }
  return true;
}
