/**
 * @param {string} s
 * @return {number}
 */

const romansNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let current = romansNums[s[i]];
    const next = romansNums[s[i + 1]];

    if (next > current) {
      current = next - current;
      ++i;
    }

    result += current;
  }
  return result;
};

// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));
