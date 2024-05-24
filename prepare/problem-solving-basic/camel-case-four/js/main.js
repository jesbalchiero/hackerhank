const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function split(t, inputString) {
    let string = inputString[0].toUpperCase() + inputString.slice(1);
    if (t === 'M') {
        string = string.slice(0, -2);
    }
    let workingString = string;
    let words = [];
    for (let index = string.length - 1; index >= 0; index--) {
        const letter = string[index];
        if (letter.toUpperCase() === letter) {
            words.unshift(workingString.substring(index));
            workingString = workingString.substring(0, index);
        }
    }
    return words.map(word => word.toLowerCase());
}

function combine(t, inputString) {
    let words = inputString.split(' ');
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    if (t === 'M' || t === 'V') {
        words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);
    }
    if (t === 'M') {
        words.push("()");
    }
    return words;
}

rl.on('line', (line) => {
    const [operation, stringType, string] = line.split(';');
    if (operation === 'S') {
        const output = split(stringType, string);
        console.log(output.join(' '));
    } else if (operation === 'C') {
        const output = combine(stringType, string);
        console.log(output.join(''));
    }
});
