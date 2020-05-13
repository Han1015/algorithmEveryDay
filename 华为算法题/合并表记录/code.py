import sys
while True:
    try:
        numbers, out_dict = int(input()), {}
        for i in range(numbers):
            key, value = map(int, sys.stdin.readline().split(' '))
            if key in out_dict:
                out_dict[key] = out_dict[key] + value
            else:
                out_dict[key] = value
        for j in sorted(out_dict.keys()):
            print(j, out_dict[j])
    except:
        break

