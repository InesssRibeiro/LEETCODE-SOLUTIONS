/**
 * @param {string[]} strs
 * @return {string}
 */

/* Initial solution, not optimized: */

var longestCommonPrefix = function (strs) {
  const sortedArr = strs.sort((a, b) => a.length - b.length);
  const compareWord = sortedArr[0];
  const longestPre = [];

  for (let i = 0; i < compareWord.length; i++) {
    let allSame = true;
    for (let j = 1; j < sortedArr.length; j++) {
      if (compareWord[i] === sortedArr[j][i]) {
        continue;
      } else {
        allSame = false;
        return longestPre.join("");
      }
    }
    if (allSame) longestPre.push(compareWord[i]);
  }

  return longestPre.join("");
};

/*Optimized solution, 0ms runtime: */

var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};
