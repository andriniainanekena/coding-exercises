export function mixedSort(arr) {
  let numbers = [];
  let strings = [];
  for(let i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    } else {
      strings.push(arr[i]);
    }
  }
  return numbers.concat(strings);
}

