import java.util.Scanner;

public class FizzBuzz {

    public static void fizzBuzz(int n) {
        // Loop from 1 to n
        for (int i = 1; i <= n; i++) {
            // Check if divisible by both 3 and 5
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) { // Check if divisible by 3
                System.out.println("Fizz");
            } else if (i % 5 == 0) { // Check if divisible by 5
                System.out.println("Buzz");
            } else { // If none of the above, print the number itself
                System.out.println(i);
            }
        }
    }

    public static void main(String[] args) {
        // Example usage
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        fizzBuzz(n);
    }
}
