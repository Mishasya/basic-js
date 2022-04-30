const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let copyMatrix = [...matrix]
  let arr = []
  let sum = 0
  
  for(let i = 0; i < copyMatrix.length; i++) {
    for(let j = 0; j < copyMatrix[i].length; j++) {
      if(arr.includes(j)) {
        
      } else {
          if(copyMatrix[i][j] === 0) 
          arr.push(j)
          sum += copyMatrix[i][j]
        }
      
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
