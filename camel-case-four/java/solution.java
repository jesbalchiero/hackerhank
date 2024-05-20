import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNextLine()) {
            String[] input = scanner.nextLine().split(";");
            String operation = input[0];
            String stringType = input[1];
            String string = input[2];

            if (operation.equals("S")) {
                String[] output = split(stringType, string);
                System.out.println(String.join(" ", output));
            } else if (operation.equals("C")) {
                String[] output = combine(stringType, string);
                System.out.println(String.join("", output));
            }
        }

        scanner.close();
    }

    public static String[] split(String t, String inputString) {
        String string = inputString.substring(0, 1).toUpperCase() + inputString.substring(1);
        if (t.equals("M")) {
            string = string.substring(0, string.length() - 2);
        }
        String workingString = string;
        List<String> words = new ArrayList<>();
        for (int index = string.length() - 1; index >= 0; index--) {
            char letter = string.charAt(index);
            if (Character.isUpperCase(letter)) {
                words.add(0, workingString.substring(index));
                workingString = workingString.substring(0, index);
            }
        }
        return words.stream().map(String::toLowerCase).toArray(String[]::new);
    }

    public static String[] combine(String t, String inputString) {
        String[] words = inputString.split(" ");
        for (int i = 0; i < words.length; i++) {
            words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
        }
        if (t.equals("M") || t.equals("V")) {
            words[0] = words[0].substring(0, 1).toLowerCase() + words[0].substring(1);
        }
        if (t.equals("M")) {
            words[words.length - 1] += "()";
        }
        return words;
    }
}
