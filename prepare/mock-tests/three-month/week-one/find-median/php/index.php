<?php

// Function to find the median
function findMedian($arr) {
    // Sort the array
    sort($arr);

    // Determine the index of the middle element
    $middleIndex = floor(count($arr) / 2);

    // Return the middle element as the median
    return $arr[$middleIndex];
}

// Main function
function main() {
    $stdin = fopen('php://stdin', 'r');

    // Read the number of elements in the array
    fscanf($stdin, "%d\n", $n);

    // Read the array elements
    $arr = explode(' ', trim(fgets($stdin)));

    // Convert array elements to integers
    $arr = array_map('intval', $arr);

    // Find the median
    $result = findMedian($arr);

    // Output the result
    echo $result . PHP_EOL;

    fclose($stdin);
}

// Call the main function
main();
?>
