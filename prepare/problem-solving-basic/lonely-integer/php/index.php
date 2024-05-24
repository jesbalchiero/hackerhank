<?php

error_reporting(E_ALL);

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger($a) {
    $result = 0;

    foreach ($a as $num) {
        $result ^= $num;
    }

    return $result;
}

// Read input from STDIN
$stdin = fopen("php://stdin", "r");

// Output to STDOUT
$stdout = fopen(getenv("OUTPUT_PATH"), "w");

$n = intval(trim(fgets($stdin)));

$a_temp = rtrim(fgets($stdin));
$a = array_map('intval', preg_split('/\s+/', $a_temp, -1, PREG_SPLIT_NO_EMPTY));

$result = lonelyinteger($a);

fwrite($stdout, $result . "\n");

fclose($stdin);
fclose($stdout);
?>
