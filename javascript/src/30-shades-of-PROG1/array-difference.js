export function arrayDifference(arr1, arr2) {
  let result = [];
  for(let i=0; i<arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }
  return result;
}

