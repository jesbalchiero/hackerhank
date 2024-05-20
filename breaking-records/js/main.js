'use strict';

const fs = require('fs');

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an ARRAY.
 * The function accepts ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Initialize variables to track highest and lowest scores
    let highest = scores[0];
    let lowest = scores[0];

    // Initialize variables to count record-breaking occurrences
    let highestCount = 0;
    let lowestCount = 0;

    // Iterate through the scores list starting from the second element
    for (let i = 1; i < scores.length; i++) {
        // Check if the current score breaks the highest record
        if (scores[i] > highest) {
            // Update the highest score and increment the count
            highest = scores[i];
            highestCount++;
        }

        // Check if the current score breaks the lowest record
        if (scores[i] < lowest) {
            // Update the lowest score and increment the count
            lowest = scores[i];
            lowestCount++;
        }
    }

    // Return an array containing the counts of record-breaking occurrences
    return [highestCount, lowestCount];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
