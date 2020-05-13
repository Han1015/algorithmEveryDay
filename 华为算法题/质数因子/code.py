a, res = int(input()), []
for i in range(2, int(a // 0.5 + 1)):
    while a % i == 0:
        a = a / i
        res.append(i)
print(" ".join(map(str, res)) + " " if res else str(a) + " ")