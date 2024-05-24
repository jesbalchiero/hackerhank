using System;
using System.IO;
using System.Linq;

class Program
{
    static int DivisibleSumPairs(int n, int k, int[] ar)
    {
        int count = 0;

        for (int i = 0; i < ar.Length - 1; i++)
        {
            for (int j = i + 1; j < ar.Length; j++)
            {
                int sum = ar[i] + ar[j];
                if (sum % k == 0)
                {
                    count++;
                }
            }
        }

        return count;
    }

    static void Main(string[] args)
    {
        TextReader reader = Console.In;

        int[] firstMultipleInput = Array.ConvertAll(reader.ReadLine().Trim().Split(' '), int.Parse);
        int n = firstMultipleInput[0];
        int k = firstMultipleInput[1];

        int[] ar = Array.ConvertAll(reader.ReadLine().Trim().Split(' '), int.Parse);

        int result = DivisibleSumPairs(n, k, ar);

        Console.WriteLine(result);
    }
}
