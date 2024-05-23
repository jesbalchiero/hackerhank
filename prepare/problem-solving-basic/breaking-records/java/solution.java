import java.io.*;
import java.util.*;

public class Solution {

    /*
     * Complete the 'breakingRecords' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts INTEGER_ARRAY scores as parameter.
     */

    public static List<Integer> breakingRecords(List<Integer> scores) {
        // Initialize variables to track highest and lowest scores
        int highest = scores.get(0);
        int lowest = scores.get(0);

        // Initialize variables to count record-breaking occurrences
        int highestCount = 0;
        int lowestCount = 0;

        // Iterate through the scores list starting from the second element
        for (int i = 1; i < scores.size(); i++) {
            // Check if the current score breaks the highest record
            if (scores.get(i) > highest) {
                // Update the highest score and increment the count
                highest = scores.get(i);
                highestCount++;
            }

            // Check if the current score breaks the lowest record
            if (scores.get(i) < lowest) {
                // Update the lowest score and increment the count
                lowest = scores.get(i);
                lowestCount++;
            }
        }

        // Return a list containing the counts of record-breaking occurrences
        List<Integer> result = new ArrayList<>();
        result.add(highestCount);
        result.add(lowestCount);
        return result;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        String[] scoresTemp = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        List<Integer> scores = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            int scoresItem = Integer.parseInt(scoresTemp[i]);
            scores.add(scoresItem);
        }

        List<Integer> result = breakingRecords(scores);

        bufferedWriter.write(
                result.stream()
                        .map(Object::toString)
                        .collect(java.util.stream.Collectors.joining(" "))
                        + "\n"
        );

        bufferedReader.close();
        bufferedWriter.close();
    }
}
