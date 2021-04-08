/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = [[false, ...matrix[0].map(() => false), false]];
  newMatrix.push(...matrix.map((el) => [false, ...el, false]));
  newMatrix.push([false, ...matrix[0].map(() => false), false]);
  const mat = [newMatrix[0].map(() => -99),
    ...matrix.map((el) => [-99, ...el.slice().fill(0, 0), -99]), newMatrix[0].map(() => -99)];

  for (let i = 0; i < newMatrix.length; i += 1) {
    for (let j = 0; j < newMatrix[i].length; j += 1) {
      if (newMatrix[i][j]) {
        mat[i - 1][j - 1] = newMatrix[i - 1][j - 1] ? 1
          : mat[i - 1][j - 1] + 1;
        mat[i - 1][j] = newMatrix[i - 1][j] ? 1
          : mat[i - 1][j] + 1;
        mat[i - 1][j + 1] = newMatrix[i - 1][j + 1] ? 1
          : mat[i - 1][j + 1] + 1;

        mat[i][j - 1] = newMatrix[i][j - 1] ? 1 : mat[i][j - 1] + 1;
        mat[i][j] = newMatrix[i][j] ? 1 : mat[i][j] + 1;
        mat[i][j + 1] = newMatrix[i][j + 1] ? 1 : mat[i][j + 1] + 1;

        mat[i + 1][j - 1] = newMatrix[i + 1][j - 1] ? 1
          : mat[i + 1][j - 1] + 1;
        mat[i + 1][j] = newMatrix[i + 1][j] ? 1
          : mat[i + 1][j] + 1;
        mat[i + 1][j + 1] = newMatrix[i + 1][j + 1] ? 1
          : mat[i + 1][j + 1] + 1;
      }
    }
  }
  return mat.map((el) => el.filter((val) => val >= 0)).slice(1, mat.length - 1);
}

module.exports = minesweeper;
