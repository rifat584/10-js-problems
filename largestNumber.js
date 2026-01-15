const findLargestNumber = (arr)=>{
const sortArr= arr.sort((a,b)=>b-a);
return sortArr[0];
};
const numberArr = [10,322,3453,4657,576];
const result = findLargestNumber(numberArr);
console.log(result);