const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let copyStr = str
  let elems = []
  let count = 0
  
  for(let i = 0; i < copyStr.length; i++) {
    if(copyStr[i] === copyStr[i+1]) {
      count++
    } else {
      count++
      if(count > 1) {
        elems.push([count, copyStr[i]])
      } else {
        elems.push([copyStr[i]])
      }
      count = 0
    }
  }
  return elems.flat().join('')
}

module.exports = {
  encodeLine
};
