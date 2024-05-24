#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    # Split the time into components
    time, period = s[:-2], s[-2:]
    hour, minute, second = map(int, time.split(':'))

    # Convert the hour based on the period
    if period == 'AM':
        if hour == 12:
            hour = 0
    else:  # period == 'PM'
        if hour != 12:
            hour += 12

    # Format and return the time in 24-hour format
    return f"{hour:02}:{minute:02}:{second:02}"

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()

