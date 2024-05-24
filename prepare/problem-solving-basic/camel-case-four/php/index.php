<?php

function split($t, $inputString) {
    $string = ucfirst($inputString);
    if ($t === 'M') {
        $string = substr($string, 0, -2);
    }
    $workingString = $string;
    $words = [];
    for ($index = strlen($string) - 1; $index >= 0; $index--) {
        $letter = $string[$index];
        if (strtoupper($letter) === $letter) {
            array_unshift($words, substr($workingString, $index));
            $workingString = substr($workingString, 0, $index);
        }
    }
    return array_map('strtolower', $words);
}

function combine($t, $inputString) {
    $words = explode(' ', $inputString);
    $words = array_map('ucfirst', $words);
    if ($t === 'M' || $t === 'V') {
        $words[0] = lcfirst($words[0]);
    }
    if ($t === 'M') {
        $words[] = "()";
    }
    return $words;
}

$handle = fopen("php://stdin", "r");

while (($line = fgets($handle)) !== false) {
    $line = trim($line);
    $params = explode(';', $line);
    $operation = $params[0];
    $stringType = $params[1];
    $string = $params[2];

    if ($operation === 'S') {
        $output = split($stringType, $string);
        echo implode(' ', $output) . "\n";
    } else if ($operation === 'C') {
        $output = combine($stringType, $string);
        echo implode('', $output) . "\n";
    }
}

fclose($handle);
?>
