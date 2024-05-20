using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Result
{

    /*
     * Complete the 'breakingRecords' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts INTEGER_ARRAY scores as parameter.
     */

    public static List<int> breakingRecords(List<int> scores)
    {
        // Initialize variables to track highest and lowest scores
        int highest = scores[0];
        int lowest = scores[0];

        // Initialize variables to count record-breaking occurrences
        int highestCount = 0;
        int lowestCount = 0;

        // Iterate through the scores list starting from the second element
        for (int i = 1; i < scores.Count; i++)
        {
            // Check if the current score breaks the highest record
            if (scores[i] > highest)
            {
                // Update the highest score and increment the count
                highest = scores[i];
                highestCount++;
            }

            // Check if the current score breaks the lowest record
            if (scores[i] < lowest)
            {
                // Update the lowest score and increment the count
                lowest = scores[i];
                lowestCount++;
            }
        }

        // Return a list containing the counts of record-breaking occurrences
        return new List<int> { highestCount, lowestCount };
    }
}

class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> scores = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(scoresTemp => Convert.ToInt32(scoresTemp)).ToList();

        List<int> result = Result.breakingRecords(scores);

        textWriter.WriteLine(String.Join(" ", result));

        textWriter.Flush();
        textWriter.Close();
    }
}
