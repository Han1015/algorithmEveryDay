import sys
while True:
    try:
        n = int(sys.stdin.readline())
        nums = []
        for i in range(n):
            nums.append(int(sys.stdin.readline()))
        result = sorted(set(nums))
        for i in result:
            print(i)
    except:
        break
