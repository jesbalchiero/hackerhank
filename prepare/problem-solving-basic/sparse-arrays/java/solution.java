import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    static List<Integer> matchingStrings(List<String> inputStrings, List<String> queries) {
        // Create a map to store the frequency of each string
        Map<String, Integer> frequencyMap = new HashMap<>();

        // Populate the frequency map with the input strings
        for (String str : inputStrings) {
            frequencyMap.put(str, frequencyMap.getOrDefault(str, 0) + 1);
        }

        // Initialize a result list to store the count of each query
        List<Integer> result = new ArrayList<>();

        // For each query, get the count from the frequency map
        for (String query : queries) {
            result.add(frequencyMap.getOrDefault(query, 0));
        }

        return result;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int stringsCount = Integer.parseInt(reader.readLine().trim());

        List<String> inputStrings = new ArrayList<>();
        for (int i = 0; i < stringsCount; i++) {
            inputStrings.add(reader.readLine());
        }

        int queriesCount = Integer.parseInt(reader.readLine().trim());

        List<String> queries = new ArrayList<>();
        for (int i = 0; i < queriesCount; i++) {
            queries.add(reader.readLine());
        }

        List<Integer> res = matchingStrings(inputStrings, queries);

        for (int resItem : res) {
            System.out.println(resItem);
        }
    }
}
