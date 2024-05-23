import math
import os
import random
import re
import sys

#
# Complete the 'isBalanced' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def isBalanced(s):
    # Stack to keep track of opening brackets
    stack = []
    # Dictionary to map closing brackets to their corresponding opening brackets
    bracket_map = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in bracket_map.values():
            # It's an opening bracket, push onto stack
            stack.append(char)
        elif char in bracket_map.keys():
            # It's a closing bracket, check if stack is empty or top doesn't match
            if stack == [] or bracket_map[char] != stack.pop():
                return "NO"
        else:
            # Not a bracket (This case should not occur given the constraints)
            return "NO"
    
    # Stack should be empty if all brackets are balanced
    return "YES" if not stack else "NO"

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        s = input()

        result = isBalanced(s)

        fptr.write(result + '\n')

    fptr.close()
