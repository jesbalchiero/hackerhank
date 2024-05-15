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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
 let positiveCount: number = 0;
    let negativeCount: number = 0;
    let zeroCount: number = 0;

    // Count positive, negative, and zero elements
    arr.forEach(num => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    });

    const totalElements: number = arr.length;

    // Calculate fractions
    const positiveFraction: number = positiveCount / totalElements;
    const negativeFraction: number = negativeCount / totalElements;
    const zeroFraction: number = zeroCount / totalElements;

    // Print fractions to console
    console.log(positiveFraction.toFixed(6));
    console.log(negativeFraction.toFixed(6));
    console.log(zeroFraction.toFixed(6));
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}