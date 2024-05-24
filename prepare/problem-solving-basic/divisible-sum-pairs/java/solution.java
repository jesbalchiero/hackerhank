import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    static int divisibleSumPairs(int n, int k, int[] ar) {
        int count = 0;

        for (int i = 0; i < ar.length - 1; i++) {
            for (int j = i + 1; j < ar.length; j++) {
                int sum = ar[i] + ar[j];
                if (sum % k == 0) {
                    count++;
                }
            }
        }

        return count;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String[] firstMultipleInput = reader.readLine().trim().split(" ");
        int n = Integer.parseInt(firstMultipleInput[0]);
        int k = Integer.parseInt(firstMultipleInput[1]);

        String[] arTemp = reader.readLine().trim().split(" ");
        int[] ar = new int[n];
        for (int i = 0; i < n; i++) {
            ar[i] = Integer.parseInt(arTemp[i]);
        }

        int result = divisibleSumPairs(n, k, ar);

        System.out.println(result);
    }
}
