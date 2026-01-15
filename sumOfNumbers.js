const SumOfNumbers = (numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
const numberArr = [1, 2, 3, 4];
const result = SumOfNumbers(numberArr);
console.log(result);
