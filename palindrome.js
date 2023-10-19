var isPalindrome = function (x) {
  if (x < 0) {
    return false; // Negative numbers cannot be palindromes
  }

  let original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
};

isPalindrome(121);
