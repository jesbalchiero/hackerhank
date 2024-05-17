package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

func breakingRecords(scores []int32) []int32 {
	// Initialize variables to track highest and lowest scores
	highest := scores[0]
	lowest := scores[0]

	// Initialize variables to count record-breaking occurrences
	highestCount := int32(0)
	lowestCount := int32(0)

	// Iterate through the scores array starting from the second element
	for i := 1; i < len(scores); i++ {
		// Check if the current score breaks the highest record
		if scores[i] > highest {
			// Update the highest score and increment the count
			highest = scores[i]
			highestCount++
		}
		// Check if the current score breaks the lowest record
		if scores[i] < lowest {
			// Update the lowest score and increment the count
			lowest = scores[i]
			lowestCount++
		}
	}

	// Return an array containing the counts of record-breaking occurrences
	return []int32{highestCount, lowestCount}
}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

	stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
	checkError(err)

	defer stdout.Close()

	writer := bufio.NewWriterSize(stdout, 16*1024*1024)

	nTemp, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
	checkError(err)
	n := int32(nTemp)

	scoresTemp := strings.Split(strings.TrimSpace(readLine(reader)), " ")

	var scores []int32

	for i := 0; i < int(n); i++ {
		scoresItemTemp, err := strconv.ParseInt(scoresTemp[i], 10, 64)
		checkError(err)
		scoresItem := int32(scoresItemTemp)
		scores = append(scores, scoresItem)
	}

	result := breakingRecords(scores)

	for i, resultItem := range result {
		fmt.Fprintf(writer, "%d", resultItem)

		if i != len(result)-1 {
			fmt.Fprintf(writer, " ")
		}
	}

	fmt.Fprintf(writer, "\n")

	writer.Flush()
}

func readLine(reader *bufio.Reader) string {
	str, _, err := reader.ReadLine()
	if err == io.EOF {
		return ""
	}

	return strings.TrimRight(string(str), "\r\n")
}

func checkError(err error) {
	if err != nil {
		panic(err)
	}
}
