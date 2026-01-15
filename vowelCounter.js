const countVowels = (str) => {
  const loweredCaseStr = str.toLowerCase();
  let vowelCounter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (const singleChar of loweredCaseStr) {
    if (vowels.includes(singleChar)) {
      vowelCounter++;
    }
  }
  return vowelCounter;
};

const result = countVowels("programming");
console.log(result);
