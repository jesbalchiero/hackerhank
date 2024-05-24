package main

import (
	"fmt"
)

func fizzBuzz(n int) {
	// Loop from 1 to n
	for i := 1; i <= n; i++ {
		// Check if divisible by both 3 and 5
		if i%3 == 0 && i%5 == 0 {
			fmt.Println("FizzBuzz")
		} else if i%3 == 0 { // Check if divisible by 3
			fmt.Println("Fizz")
		} else if i%5 == 0 { // Check if divisible by 5
			fmt.Println("Buzz")
		} else { // If none of the above, print the number itself
			fmt.Println(i)
		}
	}
}

func main() {
	// Example usage
	var n int
	fmt.Scan(&n)
	fizzBuzz(n)
}
