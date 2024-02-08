// Based on FizzBuzz description from: https://en.wikipedia.org/wiki/Fizz_buzz
function fizzbuzz(val) {
    let output = '';
    
    if (val % 3 === 0) { output += 'Fizz'; }
    if (val % 5 === 0) { output += 'Buzz'; }
    
    if (output === '') { output = `${val}`; }
    
    return output;
}

function runner(iterations) {
    for (i = 1; i <= iterations; i++) {
        const result = fizzbuzz(i);
        console.log(`${i}: ${result}`);
    }
}

runner(100);
