<?php

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY $scores as parameter.
 */

function breakingRecords($scores) {
    // Initialize variables to track highest and lowest scores
    $highest = $scores[0];
    $lowest = $scores[0];

    // Initialize variables to count record-breaking occurrences
    $highestCount = 0;
    $lowestCount = 0;

    // Iterate through the scores list starting from the second element
    for ($i = 1; $i < count($scores); $i++) {
        // Check if the current score breaks the highest record
        if ($scores[$i] > $highest) {
            // Update the highest score and increment the count
            $highest = $scores[$i];
            $highestCount++;
        }

        // Check if the current score breaks the lowest record
        if ($scores[$i] < $lowest) {
            // Update the lowest score and increment the count
            $lowest = $scores[$i];
            $lowestCount++;
        }
    }

    // Return an array containing the counts of record-breaking occurrences
    return [$highestCount, $lowestCount];
}

// Read input from STDIN
$stdin = fopen("php://stdin", "r");

$n = intval(trim(fgets($stdin)));

$scores_temp = rtrim(fgets($stdin));
$scores = array_map('intval', preg_split('/\s+/', $scores_temp, -1, PREG_SPLIT_NO_EMPTY));

// Call the breakingRecords function and print the result
$result = breakingRecords($scores);
echo implode(" ", $result) . "\n";

fclose($stdin);
?>
