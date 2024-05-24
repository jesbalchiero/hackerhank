<?php

function divisibleSumPairs($n, $k, $ar) {
    $count = 0;

    for ($i = 0; $i < count($ar) - 1; $i++) {
        for ($j = $i + 1; $j < count($ar); $j++) {
            $sum = $ar[$i] + $ar[$j];
            if ($sum % $k === 0) {
                $count++;
            }
        }
    }

    return $count;
}

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%[^\n]", $first_multiple_input_temp);
$first_multiple_input = explode(' ', $first_multiple_input_temp);

$n = intval($first_multiple_input[0]);
$k = intval($first_multiple_input[1]);

fscanf($stdin, "%[^\n]", $ar_temp);
$ar = array_map('intval', preg_split('/ /', $ar_temp, -1, PREG_SPLIT_NO_EMPTY));

$result = divisibleSumPairs($n, $k, $ar);

echo $result;

fclose($stdin);

?>
