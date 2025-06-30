export function fenceLength(n, widths) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += 4 * widths[i];
  }
  for (let i = 1; i < n; i++) {
    total -= 2 * Math.min(widths[i], widths[i - 1]);
  }
  return total;
}
