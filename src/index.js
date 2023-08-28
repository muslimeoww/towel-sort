module.exports = function towelSort (matrix = []) {
  let furry = [];
  for (let i = 0; i < matrix.length; i++) {
    if ( i % 2 === 0) {
      let matrixInd = matrix[i];
      furry = [...furry, ...matrixInd];
    } else if ( i % 2 !== 0) {
      let matrixInd = matrix[i].reverse();
      furry = [...furry, ...matrixInd];
    }
    
  }
  return furry;
}