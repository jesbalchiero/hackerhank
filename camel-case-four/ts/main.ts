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

function main(): void {
    while (currentLine < inputLines.length) {
        const operation: string = readLine().trim();  // e.g., "C V variableName"
        if (operation) {
            const parts: string[] = operation.split(';');
            const type: string = parts[0]; // C (Create) or S (Split)
            const format: string = parts[1]; // V (Variable), M (Method), or C (Class)
            const input: string = parts.slice(2).join(' '); // the actual string

            if (type === 'C') 
                console.log(createCamelCase(input, format)); // Creating Camel Case
            else if (type === 'S')
                console.log(splitCamelCase(input));// Splitting Camel Case
        }
    }
}

// Function to create Camel Case from a string based on the format (Variable, Method, Class)
function createCamelCase(input: string, format: string): string {
    const words: string[] = input.split(' ');
    let camelCaseStr: string = '';

    if (format === 'C') {
        // Class name
        camelCaseStr = words.map((word: string) => capitalize(word)).join('');
    } else {
        // Variable or method name
        camelCaseStr = words[0].toLowerCase() + words.slice(1).map((word: string) => capitalize(word)).join('');
        if (format === 'M') camelCaseStr += '()'; // Append "()" for method
    }

    return camelCaseStr;
}

// Function to split a Camel Case string into words
function splitCamelCase(input: string): string {
    return input.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

// Helper function to capitalize the first letter of a word
function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
