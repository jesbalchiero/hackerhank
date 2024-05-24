<?php

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion($s) {
    // Extracting the AM/PM part from the input string
    $period = substr($s, -2);
    // Extracting the hour, minute, and second parts from the input string
    $hour = substr($s, 0, 2);
    $minutes = substr($s, 3, 2);
    $seconds = substr($s, 6, 2);

    // Convert hour to an integer for manipulation
    $hourInt = intval($hour);

    // Conversion rules
    if ($period == "AM") {
        if ($hourInt == 12) {
            $hourInt = 0; // Midnight case
        }
    } else {
        if ($hourInt != 12) {
            $hourInt += 12; // PM case
        }
    }

    // Format the hour back to a two-digit string
    $militaryHour = str_pad($hourInt, 2, "0", STR_PAD_LEFT);

    // Return the time in 24-hour format
    return $militaryHour . ":" . $minutes . ":" . $seconds;
}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$s = rtrim(fgets(STDIN), "\r\n");

$result = timeConversion($s);

fwrite($fptr, $result . "\n");

fclose($fptr);
?>
