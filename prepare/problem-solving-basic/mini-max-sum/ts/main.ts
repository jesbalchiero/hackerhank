"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the minimum sum by summing the first four integers
  const minSum: number = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0);

  // Calculate the maximum sum by summing the last four integers
  const maxSum: number = arr.slice(1).reduce((acc, curr) => acc + curr, 0);

  // Print the minimum and maximum sums
  console.log(`${minSum} ${maxSum}`);
}

function main() {
  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
