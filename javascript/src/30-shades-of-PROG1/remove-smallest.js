export function removeSmallest(arr) {
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[index]) {
      index = i;
    }
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      result.push(arr[i]);
    }
  }
  return result;
}
