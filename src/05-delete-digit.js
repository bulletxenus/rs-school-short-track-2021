/**
 * Given some integer, find the maximal number you can с
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
  return Math.max(...[...n.toString()].map((el) => n.toString().replace(el, '')));
}

module.exports = deleteDigit;
