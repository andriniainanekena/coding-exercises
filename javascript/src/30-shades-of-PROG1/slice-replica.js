export function sliceReplica(arr, start, end) {
  let result = [];
  let len = arr.length;
  if (start < 0) {
    start = len + start;
  }
  if (end === undefined || end > len) {
    end = len;
  }
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

