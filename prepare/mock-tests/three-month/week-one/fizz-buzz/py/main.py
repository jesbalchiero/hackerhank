def fizzBuzz(n):
    # Loop from 1 to n
    for i in range(1, n + 1):
        # Check if divisible by both 3 and 5
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:  # Check if divisible by 3
            print("Fizz")
        elif i % 5 == 0:  # Check if divisible by 5
            print("Buzz")
        else:  # If none of the above, print the number itself
            print(i)

def main():
    # Read input
    n = int(input().strip())
    fizzBuzz(n)

# Example usage
if __name__ == "__main__":
    main()
