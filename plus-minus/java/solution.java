import java.io.*;
import java.util.*;
import java.util.stream.*;

class Result {

    /*
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */
    public static void plusMinus(List<Integer> arr) {
        // Initialize counters
        int positiveCount = 0;
        int negativeCount = 0;
        int zeroCount = 0;
        
        // Get the total number of elements in the list
        int totalCount = arr.size();
        
        // Loop through the list and count positives, negatives, and zeros
        for (int value : arr) {
            if (value > 0) {
                positiveCount++;
            } else if (value < 0) {
                negativeCount++;
            } else {
                zeroCount++;
            }
        }
        
        // Calculate the ratios
        double positiveRatio = (double) positiveCount / totalCount;
        double negativeRatio = (double) negativeCount / totalCount;
        double zeroRatio = (double) zeroCount / totalCount;
        
        // Print the ratios with 6 decimal places
        System.out.printf("%.6f\n", positiveRatio);
        System.out.printf("%.6f\n", negativeRatio);
        System.out.printf("%.6f\n", zeroRatio);
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        
        int n = Integer.parseInt(bufferedReader.readLine().trim());
        
        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(Collectors.toList());
        
        Result.plusMinus(arr);
        
        bufferedReader.close();
    }
}
