const readline = require('readline');

// Function to find the median
function findMedian(arr) {
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
            const arr = data.split(' ').map(Number);
            const result = findMedian(arr);
            console.log(result);
            rl.close();
        });
    });
}

main();
