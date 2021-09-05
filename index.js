/**
 * Remove trailing substring
 * @param {string} str - input string
 * @param {string} substr - substring to remove
 * @param {string} flag - regex flag (for example i to ignore Case, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)
 * @returns {string}
 */
const rmTrailing = function rmTrailing(str, substr, flag) {
  const pattern = '[' + substr + ']+$';
  const regex = RegExp(pattern + '$', flag);
  return str.replace(regex, '');
};

module.exports = rmTrailing;
