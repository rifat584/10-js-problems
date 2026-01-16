const findFactorial = (num) => {
  let result = num; //5

  for (let i = 1; i < num; i++) {
    result = result * i;
  }
  return result;
};

const num = 5;
const result = findFactorial(num);
console.log(result);

// 5
// 5*1
// 5*2
// 10*3
// 30*4
//120