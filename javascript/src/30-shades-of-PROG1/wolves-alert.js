export function wolvesAlert(arr) {
  let pos = arr.indexOf("wolf");
  let count = arr.length - pos - 1;
  if (pos === arr.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return "Oi! Sheep number " + count + "! You are about to be eaten by a wolf!";
  }
}
