const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countNumbers(numbers) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (const num of numbers) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  console.log(`Positive numbers: ${positiveCount}`);
  console.log(`Negative numbers: ${negativeCount}`);
  console.log(`Number of zeros: ${zeroCount}`);
}

rl.question('Enter numbers separated by space: ', (input) => {
  const numbers = input.split(' ').map(parseFloat);

  if (numbers.some(isNaN)) {
    console.log('Invalid input. Please enter valid numbers separated by space.');
  } else {
    rl.close();
    countNumbers(numbers);
  }
});

/* output 

Enter numbers separated by space: 1 2 3 4 5 6 -1 -2 -2 0 0 0
Positive numbers: 6
Negative numbers: 3
Number of zeros: 3


*/