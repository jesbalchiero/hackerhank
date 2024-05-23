'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Initialize counters
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    // Get the total number of elements in the array
    const totalCount = arr.length;
    
    // Loop through the array and count positives, negatives, and zeros
    for (const value of arr) {
        if (value > 0) {
            positiveCount++;
        } else if (value < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }
    
    // Calculate the ratios
    const positiveRatio = positiveCount / totalCount;
    const negativeRatio = negativeCount / totalCount;
    const zeroRatio = zeroCount / totalCount;
    
    // Print the ratios with 6 decimal places
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}
