import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static String timeConversion(String s) {
        // Extracting the AM/PM part from the input string
        String period = s.substring(s.length() - 2);
        // Extracting the hour, minute, and second parts from the input string
        String hour = s.substring(0, 2);
        String minutes = s.substring(3, 5);
        String seconds = s.substring(6, 8);

        // Convert hour to an integer for manipulation
        int hourInt = Integer.parseInt(hour);

        // Conversion rules
        if (period.equals("AM")) {
            if (hourInt == 12) {
                hourInt = 0; // Midnight case
            }
        } else {
            if (hourInt != 12) {
                hourInt += 12; // PM case
            }
        }

        // Format the hour back to a two-digit string
        String militaryHour = String.format("%02d", hourInt);

        // Return the time in 24-hour format
        return militaryHour + ":" + minutes + ":" + seconds;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        String result = Result.timeConversion(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
