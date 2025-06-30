export function sumMatrices(mat1, mat2) {
  let result = [];
  for (let i = 0; i < mat1.length; i++) {
    let row = [];
    for (let j = 0; j < mat1[i].length; j++) {
      row.push(mat1[i][j] + mat2[i][j]);
    }
    result.push(row);
  }
  return result;
}

