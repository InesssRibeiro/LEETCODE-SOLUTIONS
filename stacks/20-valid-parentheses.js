/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairsMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === pairsMap.get(s[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length === 0) return true;

  return false;
};
