'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n: number): void {
    // Loop from 1 to n
    for (let i = 1; i <= n; i++) {
        // Check if divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { // Check if divisible by 3
            console.log("Fizz");
        } else if (i % 5 === 0) { // Check if divisible by 5
            console.log("Buzz");
        } else { // If none of the above, print the number itself
            console.log(i);
        }
    }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
