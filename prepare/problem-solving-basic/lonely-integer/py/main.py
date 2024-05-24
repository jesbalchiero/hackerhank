import os
import sys

"""
Complete the 'lonelyinteger' function below.

The function is expected to return an INTEGER.
The function accepts INTEGER_ARRAY a as parameter.
"""

def lonelyinteger(a):
    result = 0
    for num in a:
        result ^= num
    return result

# Read input from STDIN
input_string = sys.stdin.read().splitlines()

n = int(input_string[0])
a = list(map(int, input_string[1].split()))

result = lonelyinteger(a)

# Write output to STDOUT
sys.stdout.write(str(result) + '\n')
