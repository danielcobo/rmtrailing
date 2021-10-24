/**
 * Remove trailing substring
 * @public
 * @param {string} str - input string
 * @param {string} substr - leading string to remove
 * @param {boolean} [flag=false] - true/false for case insensitive
 * @returns {string} - input string without the leading substring
 */
module.exports = function rmTrailing(str, substr, flag) {
  if (typeof substr !== 'string') {
    throw new TypeError(
      'Substring argument must be a string, instead received: ' + typeof substr
    );
  }

  let input = str;
  let sub = substr;
  if (flag) {
    input = str.toLocaleLowerCase();
    sub = substr.toLocaleLowerCase();
  }
  let pos = input.lastIndexOf(sub);
  while (pos > -1 && input.slice(pos) === sub) {
    input = input.slice(0, pos);
    pos = input.lastIndexOf(sub);
  }

  return input;
};