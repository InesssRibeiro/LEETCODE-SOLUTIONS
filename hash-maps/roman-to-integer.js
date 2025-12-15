/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const keyValues = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];

  const RomanToNum = new Map(keyValues);

  const sToArr = s.split("").reverse();
  let previous = null;
  let sum = 0;

  for (let r of sToArr) {
    if (previous && RomanToNum.get(r) < previous) {
      previous = RomanToNum.get(r);
      sum -= RomanToNum.get(r);
    } else {
      previous = RomanToNum.get(r);
      sum += RomanToNum.get(r);
    }
  }
  return sum;
};
