import os

def breakingRecords(scores):
    # Initialize variables to track highest and lowest scores
    highest = scores[0]
    lowest = scores[0]

    # Initialize variables to count record-breaking occurrences
    highest_count = 0
    lowest_count = 0

    # Iterate through the scores list starting from the second element
    for score in scores[1:]:
        # Check if the current score breaks the highest record
        if score > highest:
            # Update the highest score and increment the count
            highest = score
            highest_count += 1

        # Check if the current score breaks the lowest record
        if score < lowest:
            # Update the lowest score and increment the count
            lowest = score
            lowest_count += 1

    # Return a list containing the counts of record-breaking occurrences
    return [highest_count, lowest_count]


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    scores = list(map(int, input().rstrip().split()))

    result = breakingRecords(scores)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
