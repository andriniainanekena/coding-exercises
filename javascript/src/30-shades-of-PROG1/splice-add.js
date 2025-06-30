export function spliceAdd(arr, start, ...items) {
  let result = [];
  for(let i=0; i<start; i++) {
    result.push(arr[i]);
  }
  for(let i=0; i<items.length; i++) {
    result.push(items[i]);
  }
  for(let i=start; i<arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

