#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    # Initialize counters
    positive_count = 0
    negative_count = 0
    zero_count = 0
    
    # Get the total number of elements in the array
    total_count = len(arr)
    
    # Loop through the array and count positives, negatives, and zeros
    for value in arr:
        if value > 0:
            positive_count += 1
        elif value < 0:
            negative_count += 1
        else:
            zero_count += 1
    
    # Calculate the ratios
    positive_ratio = positive_count / total_count
    negative_ratio = negative_count / total_count
    zero_ratio = zero_count / total_count
    
    # Print the ratios with 6 decimal places
    print(f"{positive_ratio:.6f}")
    print(f"{negative_ratio:.6f}")
    print(f"{zero_ratio:.6f}")

if __name__ == '__main__':
    n = int(input().strip())
    arr = list(map(int, input().rstrip().split()))
    plusMinus(arr)
