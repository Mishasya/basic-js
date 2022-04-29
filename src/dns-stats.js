const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let copy = domains.slice()
  let arr = copy.map((el) => el.split('.'))
  let startArr = []
  let middleArr = []
  let endArr = []
  let obj = {}
  let start = ''
  let end = ''
  let middle = ''
  
  arr.forEach((el) => {
    if(el.length - 1 !== undefined) {
      end = el[el.length - 1]
      endArr.push(end)
    }
    if(el.length - 2 !== undefined) {
      middle = el[el.length - 2]
      middleArr.push(middle)
    }
    if(el.length - 3 !== undefined) {
      start = el[el.length - 3]
      startArr.push(start)
    }
  })

  startArr = startArr.filter(Boolean)
  middleArr = middleArr.filter(Boolean)
  endArr = endArr.filter(Boolean)
  
  if(endArr.length) {
    obj[`.${end}`] = endArr.length
  }
  if(middleArr.length) {
    obj[`.${end}.${middle}`] = middleArr.length
  }
  if(startArr.length) {
    obj[`.${end}.${middle}.${start}`] = startArr.length
  }
  return obj
}

module.exports = {
  getDNSStats
};
