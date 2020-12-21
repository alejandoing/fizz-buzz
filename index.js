const fizzBuzz = (arr) => arr.map(x => {
  let output = '';
  
  if (!operation(x, 3)) output+= "Fizz";
  if (!operation(x, 5)) output+= "Buzz";

  return output;
}).filter(x => x);

const operation = (dividend, divisor) => dividend % divisor;

console.log(fizzBuzz([7,100,15,20, 9]));