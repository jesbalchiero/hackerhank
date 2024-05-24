import os
import sys

def matchingStrings(strings, queries):
    # Create a dictionary to store the frequency of each string
    frequencyMap = {}

    # Populate the frequency map with the input strings
    for string in strings:
        frequencyMap[string] = frequencyMap.get(string, 0) + 1

    # Initialize a result list to store the count of each query
    result = []

    # For each query, get the count from the frequency map
    for query in queries:
        result.append(frequencyMap.get(query, 0))

    return result

def main():
    strings_count = int(input().strip())

    strings = []
    for _ in range(strings_count):
        strings_item = input().strip()
        strings.append(strings_item)

    queries_count = int(input().strip())

    queries = []
    for _ in range(queries_count):
        queries_item = input().strip()
        queries.append(queries_item)

    res = matchingStrings(strings, queries)

    for res_item in res:
        print(res_item)

if __name__ == '__main__':
    main()
