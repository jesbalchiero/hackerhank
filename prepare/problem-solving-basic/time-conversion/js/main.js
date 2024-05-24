"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Extracting the AM/PM part from the input string
  const period = s.slice(-2);
  // Extracting the hour, minute, and second parts from the input string
  let hour = s.slice(0, 2);
  const minutes = s.slice(3, 5);
  const seconds = s.slice(6, 8);

  // Convert hour to an integer for manipulation
  let hourInt = parseInt(hour);

  // Conversion rules
  if (period === "AM") {
    if (hourInt === 12) hourInt = 0; // Midnight case
  } else {
    if (hourInt !== 12) hourInt += 12; // PM case
  }

  // Format the hour back to a two-digit string
  const militaryHour = hourInt.toString().padStart(2, "0");

  // Return the time in 24-hour format
  return `${militaryHour}:${minutes}:${seconds}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
