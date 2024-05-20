package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func camelCase(task, txtType, txt string) string {
	temps := ""

	// splitting is simple, just remove all capital letters
	if task == "S" {

		// since method contains () simpy remove it by using replace
		if txtType == "M" {
			txt = strings.Replace(txt, "()", "", -1)
		}

		// This is common irresptive of text type
		// This will just remove all capital letters and add a space before it
		for _, char := range txt {
			if char >= 'A' && char <= 'Z' {
				temps += " " + strings.ToLower(string(char))
			} else {
				temps += string(char)
			}
		}
		return strings.TrimSpace(temps)

	} else if task == "C" {

		hold := strings.Fields(txt)

		// for method we need to add () at the end
		if txtType == "M" {
			for i := 1; i < len(hold); i++ {
				hold[i] = strings.Title(hold[i])
			}
			temps = strings.Join(hold, "") + "()"

		} else if txtType == "C" {
			for i := 0; i < len(hold); i++ {
				hold[i] = strings.Title(hold[i])
			}
			temps = strings.Join(hold, "")

		} else {
			for i := 1; i < len(hold); i++ {
				hold[i] = strings.Title(hold[i])
			}
			temps = strings.Join(hold, "")
		}

		return strings.TrimSpace(temps)
	}

	return ""
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	for scanner.Scan() {
		line := scanner.Text()
		parts := strings.Split(line, ";")
		task := parts[0]
		txtType := parts[1]
		txt := parts[2]

		fmt.Println(camelCase(task, txtType, txt))
	}
}
