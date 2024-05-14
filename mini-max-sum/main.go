package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"sort"
	"strconv"
	"strings"
)

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

func miniMaxSum(arr []int32) {
	// Sort the array in ascending order
	sort.Slice(arr, func(i, j int) bool {
		return arr[i] < arr[j]
	})

	// Calculate the minimum sum
	var minSum int64
	for i := 0; i < 4; i++ {
		minSum += int64(arr[i])
	}

	// Calculate the maximum sum
	var maxSum int64
	for i := 1; i < 5; i++ {
		maxSum += int64(arr[i])
	}

	// Print the minimum and maximum sums
	fmt.Printf("%d %d\n", minSum, maxSum)
}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

	arrTemp := strings.Split(strings.TrimSpace(readLine(reader)), " ")

	var arr []int32

	for i := 0; i < 5; i++ {
		arrItemTemp, err := strconv.ParseInt(arrTemp[i], 10, 64)
		checkError(err)
		arrItem := int32(arrItemTemp)
		arr = append(arr, arrItem)
	}

	miniMaxSum(arr)
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
