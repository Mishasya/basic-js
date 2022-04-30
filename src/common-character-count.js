const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0
  s1 = [...s1].sort()
  s2 = [...s2].sort()
  let o = []
  let k = []

  for(let i = 0; i < s1.length; i++) {
    if(s1[i+1] === s1[i] && s1[i+1] !== s2[i+1]) {
      o.push(s1.splice(i+1, 1))
    }
    if(s1[i] === s2[i] ) {
      k.push(s1.splice(i, 1), s2.splice(i, 1))
      count++
      i--
    }
  }

  return count
}

module.exports = {
  getCommonCharacterCount
};
