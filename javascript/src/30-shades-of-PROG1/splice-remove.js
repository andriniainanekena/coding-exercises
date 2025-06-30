export function spliceRemove(arr, start, deleteCount) {
  let result = [];
  for(let i=0; i<arr.length; i++) {
    if(i < start || i >= start + deleteCount) {
      result.push(arr[i]);
    }
  }
  return result;
}
