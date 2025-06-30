export function longestSeries(n, cards) {
  let maxCount = 1;
  let currentCount = 1;
  for (let i = 1; i < n; i++) {
    if (cards[i] === cards[i - 1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }
    if (currentCount > maxCount) {
      maxCount = currentCount;
    }
  }
  return maxCount;
}

