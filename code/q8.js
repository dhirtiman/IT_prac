const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumAvg(numbers) {
    let sum = 0;
    let count = 0;
    let avg;

    for (const num of numbers) {
        sum += num;
        count++;
    }

    avg = sum / count;

    console.log('Sum:', sum);
    console.log('Average:', avg);
}


rl.question('Enter numbers separated by space: ', (input) => {
    const numbers = input.split(' ').map(parseFloat);

    if (numbers.some(isNaN)) {
        console.log('Invalid input. Please enter valid numbers separated by space.');
    } else {
        rl.close();
        sumAvg(numbers);
    }
});

/* output 

Enter numbers separated by space: 1 2 3 4 5 6 7 8 9 10
Sum: 55     
Average: 5.5


*/