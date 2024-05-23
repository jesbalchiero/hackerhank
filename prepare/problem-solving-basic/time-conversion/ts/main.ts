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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Extract the AM/PM part
    const amPm: string = s.slice(-2);
    // Extract the hour part
    let hour: number = parseInt(s.slice(0, 2), 10);
    // Extract the rest of the time (minutes and seconds)
    const minutesAndSeconds: string = s.slice(2, 8);

    // Convert hour based on AM/PM
    if (amPm === "AM") {
        if (hour === 12) {
            // Midnight case
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            // Afternoon case, add 12 hours
            hour += 12;
        }
    }

    // Format hour to always be two digits
    const hourString: string = hour.toString().padStart(2, '0');

    // Combine all parts to get the final 24-hour format time
    return hourString + minutesAndSeconds;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] as string);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
