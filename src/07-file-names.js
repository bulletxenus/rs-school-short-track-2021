/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const updateNames = [];
  let i = 0;
  function checked(name) {
    i += 1;
    if (updateNames.includes(name) && i !== 2) {
      return checked(`${name}(${i})`);
    }
    if (updateNames.includes(name) && i === 2) {
      return checked(`${name.match(/\w+/)}(${Number(name.match(/\d\)$/).toString().replace(')', '')) + 1})`);
    }
    i = 0;
    return updateNames.push(name);
  }
  names.forEach((el) => checked(el));
  return updateNames;
}

module.exports = renameFiles;
