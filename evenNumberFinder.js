const evenNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};
const numberArr = [1, 2, 3, 4];
const result = evenNumbers(numberArr);
console.log(result);
