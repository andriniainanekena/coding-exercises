export function toPascalCase(str) {
  let words = str.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.length > 0) {
      result += w[0].toUpperCase() + w.slice(1).toLowerCase();
    }
  }
  return result;
}
