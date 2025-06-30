export function sumDiagonals(matrix) {
  let sum = 0;
  let n = matrix.length;
  for(let i=0; i<n; i++) {
    sum += matrix[i][i];
    sum += matrix[i][n - i - 1];
  }
  if(n % 2 === 1) {
    sum -= matrix[Math.floor(n/2)][Math.floor(n/2)];
  }
  return sum;
}
