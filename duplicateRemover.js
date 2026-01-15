const removeDuplicates = (numbers)=>{
let uniqueNumbers = [];
for (const number of numbers){
  if(!uniqueNumbers.includes(number)){
    uniqueNumbers.push(number);
  }
}
return uniqueNumbers;
};

const arr = [1, 2, 2, 3, 4, 4];
const result = removeDuplicates(arr);
console.log(result);