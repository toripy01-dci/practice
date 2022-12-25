n = int(input())
current = [0,0,0]
output = "Yes"

def fnc_distance(s, t):
    distance = (abs(s[1] - t[1]) + abs(s[2] - t[2]))
    time = t[0] - s[0]
    if time < distance:
        return False
    elif time == distance:
        return True
    elif (time - distance) % 2 == 0:
        return True
    else:
        return False

for i in range(n):
    input_data = [int(w) for w in input().split(" ")]
    if fnc_distance(current, input_data):
        current = input_data
    else:
        output = "No"
        break

print(output)