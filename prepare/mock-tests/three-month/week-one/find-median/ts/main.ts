import * as readline from 'readline';

// Function to find the median
function findMedian(arr: number[]): number {
    // Sort the array
    arr.sort((a, b) => a - b);

    // Determine the index of the middle element
    const middleIndex = Math.floor(arr.length / 2);

    // Return the middle element as the median
    return arr[middleIndex];
}

// Main function
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('', n => {
        rl.question('', data => {
            const arr: number[] = data.split(' ').map(Number);
            const result: number = findMedian(arr);
            console.log(result);
            rl.close();
        });
    });
}

// Call the main function
main();
