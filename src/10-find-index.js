/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let max = array.length - 1;
  let half;

  while (start <= max) {
    half = Math.round((start + max) / 2);

    if (array[half] === value) return half;

    if (array[half] > value) {
      max = half - 1;
    }
    if (array[half] < value) {
      start = half + 1;
    }
  }
  return -1;
}

module.exports = findIndex;
