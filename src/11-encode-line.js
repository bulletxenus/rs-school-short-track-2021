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
  return str.length === 0 ? '' : str.match(/(\w)\1*/g).map((el) => (el.length > 1 ? `${el.length}${el[0]}` : el[0])).join('');
}

module.exports = encodeLine;
