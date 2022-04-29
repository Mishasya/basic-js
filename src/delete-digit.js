const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digit = [...String(n)]
  let a = Math.min(...digit)

  digit.forEach((elem, i) => {
    if(elem == a) {
      digit.splice(i, 1)
    }
  })
  return +digit.join('')
}

module.exports = {
  deleteDigit
};
