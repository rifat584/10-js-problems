const findLargestNumber = (arr) => {
  const sortArr = arr.sort((a, b) => b - a);
  const largestNumber = sortArr[0];
  return largestNumber;
};
const numberArr = [10, 322, 3453, 4657, 576];
const result = findLargestNumber(numberArr);
console.log(result);
