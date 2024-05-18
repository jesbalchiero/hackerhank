'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
    // Initialize variables to track highest and lowest scores
    let highest = scores[0];
    let lowest = scores[0];

    // Initialize variables to count record-breaking occurrences
    let highestCount = 0;
    let lowestCount = 0;

    // Iterate through the scores array starting from the second element
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
    const outputPath = process.env['OUTPUT_PATH'];
    if (!outputPath) throw new Error('OUTPUT_PATH environment variable is not defined');
    
    const ws: WriteStream = createWriteStream(outputPath);

    const n: number = parseInt(readLine().trim(), 10);

    const scores: number[] = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result: number[] = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
