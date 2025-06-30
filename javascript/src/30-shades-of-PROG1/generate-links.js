export function generateLinks(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += '<a href="' + arr[i].url + '">' + arr[i].text + '</a>';
  }
  return result;
}


