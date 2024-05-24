<?php

function miniMaxSum($arr) {
    // Calculate the total sum of the array
    $totalSum = array_sum($arr);
    
    // Initialize minSum and maxSum with large and small values respectively
    $minSum = PHP_INT_MAX;
    $maxSum = PHP_INT_MIN;
    
    // Iterate over the array to find min and max sums of four elements
    foreach ($arr as $num) {
        $currentSum = $totalSum - $num; // Sum of four elements excluding num
        if ($currentSum < $minSum) {
            $minSum = $currentSum;
        }
        if ($currentSum > $maxSum) {
            $maxSum = $currentSum;
        }
    }
    
    // Print the min and max sums
    echo $minSum . " " . $maxSum;
}

// Read input from standard input
$handle = fopen("php://stdin", "r");
$input = fgets($handle);
fclose($handle);

// Parse input into an array of integers
$arr = array_map('intval', explode(' ', trim($input)));

// Call the miniMaxSum function with the parsed array
miniMaxSum($arr);

