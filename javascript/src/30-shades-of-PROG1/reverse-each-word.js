export function reverseEachWord(str) {
  let words = str.split(' ');
  let result = [];
  for(let i=0; i<words.length; i++) {
    let reversed = '';
    for(let j=words[i].length - 1; j >= 0; j--) {
      reversed += words[i][j];
    }
    result.push(reversed);
  }
  return result.join(' ');
}

