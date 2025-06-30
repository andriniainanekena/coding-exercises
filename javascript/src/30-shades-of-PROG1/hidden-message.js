export function hiddenMessage(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > i) {
      result += arr[i][i];
    }
  }
  return result;
}

