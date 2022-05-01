const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copy = arr.slice()
  let b = []
  copy.forEach((el, i, arr) => {
    if(el === -1) {
      b.push(i)
    }
  })
  copy.sort((a,b) => a-b)
  copy.splice(0, b.length)
  for(let i = 0; i < b.length; i++) {
    copy.splice(b[i], 0, -1)
  }
  return copy
}

module.exports = {
  sortByHeight
};
