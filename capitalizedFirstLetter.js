const capitalizedLetter = (str) => {
  const allWords = str.split(" "); //["hello", "world"]
  let result = [];

  for (const word of allWords) {
    const uppercaseWord = word.slice(0, 1).toUpperCase() + word.slice(1);
    result.push(uppercaseWord);
  }
  return result.join(" ");
};

const str = "hello world!";
const result = capitalizedLetter(str);
console.log(result);
