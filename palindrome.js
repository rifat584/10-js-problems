const checkPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  if (str !== reversedStr) {
    return false;
  }
  return true;
};

const result = checkPalindrome("madam");
console.log(result);
