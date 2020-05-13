import sys

strs = []
for i in range(2):
    strs.append(sys.stdin.readline().strip())
for val in strs:
    while len(val)>=8:
        print(val[:8])
        val = val[8:]
    if 0 < len(val) < 8:
        print(str(val) + '0' * (8 - len(val)))
