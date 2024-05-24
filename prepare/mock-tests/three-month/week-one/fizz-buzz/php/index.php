<?php

function fizzBuzz($n) {
    // Loop from 1 to n
    for ($i = 1; $i <= $n; $i++) {
        // Check if divisible by both 3 and 5
        if ($i % 3 == 0 && $i % 5 == 0) {
            echo "FizzBuzz\n";
        } elseif ($i % 3 == 0) { // Check if divisible by 3
            echo "Fizz\n";
        } elseif ($i % 5 == 0) { // Check if divisible by 5
            echo "Buzz\n";
        } else { // If none of the above, print the number itself
            echo "$i\n";
        }
    }
}

function main() {
    // Read input from standard input
    $handle = fopen("php://stdin", "r");
    $n = intval(trim(fgets($handle)));
    fclose($handle);

    // Call fizzBuzz with the parsed input
    fizzBuzz($n);
}

// Example usage
main();
