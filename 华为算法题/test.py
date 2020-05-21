a = [0]
b = [1]
for i in range(1, 100):
    if b[i-1] == 1:
        b.append(0)
        a.append(a[i-1]+1)
    else:
        b.append(1)
        a.append(a[i-1])


