# Function to find the median
def find_median(arr):
    # Sort the array
    arr.sort()

    # Determine the index of the middle element
    middle_index = len(arr) // 2

    # Return the middle element as the median
    return arr[middle_index]

# Main function
def main():
    # Read the number of elements in the array
    n = int(input())

    # Read the array elements
    arr = list(map(int, input().split()))

    # Find the median
    result = find_median(arr)

    # Output the result
    print(result)

# Call the main function
if __name__ == "__main__":
    main()
