const prompt = require("prompt");

const fizzBuzz = (arr) => arr.map(x => {
  let output = '';
  
  if (!operation(x, 3)) output+= "Fizz";
  if (!operation(x, 5)) output+= "Buzz";

  return output;
}).filter(x => x);

const operation = (dividend, divisor) => dividend % divisor;
const createListNumbers = (str) => str.split(",").map((x) => Number(x));
const printList = (list, title) => console.log(`\nList of ${title}: (${list})`);

console.log("Enter numbers separated by commas");

prompt.start();

prompt.get(["numbers"], function (err, result) {
  const numbers = createListNumbers(result.numbers);
  const fizzBuzzList = fizzBuzz(numbers);

  printList(numbers, "Numbers");
  printList(fizzBuzzList, "Fizz Buzz");
});