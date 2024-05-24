import * as fs from 'fs';

function matchingStrings(strings: string[], queries: string[]): number[] {
    // Create a map to store the frequency of each string
    const frequencyMap: { [key: string]: number } = {};

    // Populate the frequency map with the input strings
    for (const str of strings) {
        frequencyMap[str] = (frequencyMap[str] || 0) + 1;
    }

    // Initialize a result array to store the count of each query
    const result: number[] = [];

    // For each query, get the count from the frequency map
    for (const query of queries) {
        result.push(frequencyMap[query] || 0);
    }

    return result;
}

function main() {
    const input: string[] = fs.readFileSync(0, 'utf-8').split('\n');
    const stringsCount: number = parseInt(input[0].trim());
    const strings: string[] = input.slice(1, stringsCount + 1);
    const queriesCount: number = parseInt(input[stringsCount + 1].trim());
    const queries: string[] = input.slice(stringsCount + 2, stringsCount + 2 + queriesCount);

    const res: number[] = matchingStrings(strings, queries);

    process.stdout.write(res.join('\n') + '\n');
}

main();
