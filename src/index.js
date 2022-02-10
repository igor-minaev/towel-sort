
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else {
    const newMatrix = matrix.map((item, i) => (i % 2 !== 0) ? matrix[i].reverse() : item);
  return newMatrix.flat();
  }
}
