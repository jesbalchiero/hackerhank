import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

    /*
     * Complete the 'findMedian' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static int findMedian(int[] arr) {
        // Sort the array
        Arrays.sort(arr);

        // Determine the index of the middle element
        int middleIndex = arr.length / 2;

        // Return the middle element as the median
        return arr[middleIndex];
    }

    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(reader.readLine());

        int[] arr = Arrays.stream(reader.readLine().split(" "))
                         .mapToInt(Integer::parseInt)
                         .toArray();

        int result = findMedian(arr);

        System.out.println(result);
    }
}
