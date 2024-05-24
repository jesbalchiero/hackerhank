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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Calculate the total sum of the array
    const totalSum = arr.reduce((acc, num) => acc + num, 0);
    
    // Initialize minSum and maxSum with large and small values respectively
    let minSum = Number.MAX_SAFE_INTEGER;
    let maxSum = Number.MIN_SAFE_INTEGER;
    
    // Iterate over the array to find min and max sums of four elements
    for (let i = 0; i < arr.length; i++) {
        const currentSum = totalSum - arr[i]; // Sum of four elements excluding arr[i]

        if (currentSum < minSum) minSum = currentSum;
        if (currentSum > maxSum) maxSum = currentSum;
    }
    
    // Print the min and max sums
    console.log(minSum + ' ' + maxSum);
}

function main() {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}
