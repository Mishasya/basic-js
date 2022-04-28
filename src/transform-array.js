const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr)
  if(!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  let cloneArr = arr.slice()
  
  const instruction = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ]

  for(let i = 0; i < cloneArr.length; i++) {
    if(cloneArr[i] === instruction[0]) {
      cloneArr.splice(i, 2)
    }
    if(cloneArr[i] === instruction[1]) {
      cloneArr.splice(i, 1)
      if(cloneArr[i - 1]) {
        cloneArr.splice(cloneArr[i - 2], 1)
      }
    }
    if(cloneArr[i] === instruction[2]) {
      cloneArr.splice(i, 1)
      if(cloneArr[i + 1]) {
        cloneArr.splice(cloneArr[i], 0, cloneArr[i])
      }
    }
    if(cloneArr[i] === instruction[3]) {
      cloneArr.splice(i, 1)
      if(cloneArr[i - 1]) {
        cloneArr.splice(cloneArr[i - 1], 0, cloneArr[i - 1])
      }
    }
  }
  return cloneArr
}

module.exports = {
  transform
};
