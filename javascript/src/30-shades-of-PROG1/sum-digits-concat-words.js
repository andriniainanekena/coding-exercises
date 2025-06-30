export function sumDigitsConcatWords(arr) {
  let sum = 0;
  let words = [];
  for(let i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum = sum + arr[i];
    } else if (typeof arr[i] === 'string') {
      words.push(arr[i]);
    }
  }
  return [sum, words.join(' ')];
}

