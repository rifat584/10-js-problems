const removeDuplicates = (numbers)=>{
let uniqueNumbers = [];
for (const number of numbers){
  if(!uniqueNumbers.includes(number)){
    uniqueNumbers.push(number);
  }
}
return uniqueNumbers;
};

const arr = [1,1,1,1,1,0,20,30,10,45];
const result = removeDuplicates(arr);
console.log(result);