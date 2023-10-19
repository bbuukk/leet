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

function getRomanValue(char) {
  return romansNums[char] || 0; // Return 0 if the character is not found
}

var romanToInt = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let current = getRomanValue(s[i]);
    const next = getRomanValue(s[i + 1]);

    if (next > current) {
      current = next - current;
      ++i;
    }

    result += current;
  }
  return result;
};

console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
