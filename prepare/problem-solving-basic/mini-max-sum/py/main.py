def miniMaxSum(arr):
    # Calculate the total sum of the array
    total_sum = sum(arr)
    
    # Initialize min_sum and max_sum with large and small values respectively
    min_sum = float('inf')
    max_sum = float('-inf')
    
    # Iterate over the array to find min and max sums of four elements
    for num in arr:
        current_sum = total_sum - num  # Sum of four elements excluding num
        if current_sum < min_sum:
            min_sum = current_sum
        if current_sum > max_sum:
            max_sum = current_sum
    
    # Print the min and max sums
    print(min_sum, max_sum)

if __name__ == '__main__':
    import sys
    input = sys.stdin.read
    
    # Read input line, split by spaces, and parse into integers
    arr = list(map(int, input().strip().split()))
    
    # Call the miniMaxSum function with the parsed array
    miniMaxSum(arr)
