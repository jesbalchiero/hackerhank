using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
    static List<int> matchingStrings(List<string> inputStrings, List<string> queries) {
        // Create a dictionary to store the frequency of each string
        Dictionary<string, int> frequencyMap = new Dictionary<string, int>();

        // Populate the frequency map with the input strings
        foreach (var str in inputStrings) {
            if (frequencyMap.ContainsKey(str)) {
                frequencyMap[str]++;
            } else {
                frequencyMap[str] = 1;
            }
        }

        // Initialize a result list to store the count of each query
        List<int> result = new List<int>();

        // For each query, get the count from the frequency map
        foreach (var query in queries) {
            int count = frequencyMap.ContainsKey(query) ? frequencyMap[query] : 0;
            result.Add(count);
        }

        return result;
    }

    static void Main(string[] args) {
        StreamReader reader = new StreamReader(Console.OpenStandardInput(), Console.InputEncoding);

        int stringsCount = int.Parse(reader.ReadLine().Trim());

        List<string> inputStrings = new List<string>();
        for (int i = 0; i < stringsCount; i++) {
            inputStrings.Add(reader.ReadLine());
        }

        int queriesCount = int.Parse(reader.ReadLine().Trim());

        List<string> queries = new List<string>();
        for (int i = 0; i < queriesCount; i++) {
            queries.Add(reader.ReadLine());
        }

        List<int> res = matchingStrings(inputStrings, queries);

        foreach (var resItem in res) {
            Console.WriteLine(resItem);
        }
    }
}
