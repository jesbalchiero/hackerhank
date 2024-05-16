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
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static string timeConversion(string s)
    {
        // Extract the AM/PM part
        string amPm = s.Substring(s.Length - 2, 2);
        // Extract the hour part
        int hour = int.Parse(s.Substring(0, 2));
        // Extract the rest of the time (minutes and seconds)
        string minutesAndSeconds = s.Substring(2, 6);

        // Convert hour based on AM/PM
        if (amPm == "AM")
            if (hour == 12) hour = 0; // Midnight case
        else
            if (hour != 12) hour += 12; // Afternoon case, add 12 hours

        // Format hour to always be two digits
        string hourString = hour.ToString("D2");

        // Combine all parts to get the final 24-hour format time
        return hourString + minutesAndSeconds;
    }
}

class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string s = Console.ReadLine();

        string result = Result.timeConversion(s);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
