def split(t, string):
    string = string[0].upper() + string[1:]
    if t == 'M':
        string = string[:-2]
    working_string = str(string)
    words = []
    for index, letter in reversed(list(enumerate(string))):
        if letter.isupper():
            words.append(working_string[index:])
            working_string = working_string[:index]
    return list(reversed([word.lower() for word in words]))
    
def combine(t, string):
    words = list(string.split(' '))
    words = [word.capitalize() for word in words]
    if t == 'M' or t == 'V':
        words[0] = words[0].lower()
    if t == 'M':
        words.append("()")
    return words

while True:
    try:
        operation, string_type, string = input().replace('\r', '').split(';')
        if operation == 'S':
            output = split(string_type, string)
            print(*output, sep=' ')
        elif operation == 'C':
            output = combine(string_type, string)
            print(*output, sep='')
    except:
        break
        