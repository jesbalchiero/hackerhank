<?php

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus($arr) {
    // Initialize counters
    $positiveCount = 0;
    $negativeCount = 0;
    $zeroCount = 0;
    
    // Get the total number of elements in the array
    $totalCount = count($arr);
    
    // Loop through the array and count positives, negatives, and zeros
    foreach ($arr as $value) {
        if ($value > 0) {
            $positiveCount++;
        } elseif ($value < 0) {
            $negativeCount++;
        } else {
            $zeroCount++;
        }
    }
    
    // Calculate the ratios
    $positiveRatio = $positiveCount / $totalCount;
    $negativeRatio = $negativeCount / $totalCount;
    $zeroRatio = $zeroCount / $totalCount;
    
    // Print the ratios with 6 decimal places
    printf("%.6f\n", $positiveRatio);
    printf("%.6f\n", $negativeRatio);
    printf("%.6f\n", $zeroRatio);
}

// Reading input (this part would be handled differently in a real application or testing environment)
$n = intval(trim(fgets(STDIN)));
$arr_temp = rtrim(fgets(STDIN));
$arr = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));

// Call the function with the input array
plusMinus($arr);