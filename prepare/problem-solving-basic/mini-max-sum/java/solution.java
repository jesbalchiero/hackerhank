import java.io.*;
import java.util.*;

public class MiniMaxSum {

    public static void main(String[] args) throws IOException {
        // Set up buffered reader for input
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        
        // Read input line, split by spaces, and parse into integers
        String[] input = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");
        int[] arr = new int[input.length];
        for (int i = 0; i < input.length; i++) {
            arr[i] = Integer.parseInt(input[i]);
        }
        
        // Call the miniMaxSum function with the parsed array
        miniMaxSum(arr);
        
        // Close the buffered reader
        bufferedReader.close();
    }

    public static void miniMaxSum(int[] arr) {
        // Calculate the total sum of the array
        long totalSum = 0;
        for (int num : arr) {
            totalSum += num;
        }
        
        // Initialize minSum and maxSum with large and small values respectively
        long minSum = Long.MAX_VALUE;
        long maxSum = Long.MIN_VALUE;
        
        // Iterate over the array to find min and max sums of four elements
        for (int num : arr) {
            long currentSum = totalSum - num; // Sum of four elements excluding num
            if (currentSum < minSum) {
                minSum = currentSum;
            }
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
        
        // Print the min and max sums
        System.out.println(minSum + " " + maxSum);
    }
}
