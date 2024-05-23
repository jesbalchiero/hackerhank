using System;
using System.Text.RegularExpressions;

class Solution
{
    static string CamelCase(string task, string txtType, string txt)
    {
        string result = "";

        if (task == "S")
        {
            // Splitting camel case
            if (txtType == "M") txt = txt.Replace("()", "");

            foreach (char c in txt)
            {
                if (char.IsUpper(c))
                    result += " " + char.ToLower(c);
                else
                    result += c;
            }
            result = result.Trim();
        }
        else if (task == "C")
        {
            // Creating camel case
            string[] words = txt.Split(' ');

            if (txtType == "M")
            {
                for (int i = 1; i < words.Length; i++)
                {
                    words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1);
                }
                result = string.Join("", words) + "()";
            }
            else if (txtType == "C")
            {
                for (int i = 0; i < words.Length; i++)
                {
                    words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1);
                }
                result = string.Join("", words);
            }
            else
            {
                for (int i = 1; i < words.Length; i++)
                {
                    words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1);
                }
                result = string.Join("", words);
            }
        }

        return result;
    }

    static void Main(String[] args)
    {
        string line;
        while ((line = Console.ReadLine()) != null)
        {
            string[] parts = line.Split(';');
            string task = parts[0];
            string txtType = parts[1];
            string txt = parts[2];

            Console.WriteLine(CamelCase(task, txtType, txt));
        }
    }
}
