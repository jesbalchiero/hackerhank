using System;
using System.IO;
using System.Linq;

class Solution
{
    /*
     * Complete the 'findMedian' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static int findMedian(int[] arr)
    {
        // Sort the array
        Array.Sort(arr);

        // Determine the index of the middle element
        int middleIndex = arr.Length / 2;

        // Return the middle element as the median
        return arr[middleIndex];
    }

    static void Main(string[] args)
    {
        TextReader reader = Console.In;

        int n = Convert.ToInt32(reader.ReadLine());

        int[] arr = Array.ConvertAll(reader.ReadLine().Split(' '), Convert.ToInt32);

        int result = findMedian(arr);

        Console.WriteLine(result);
    }
}
