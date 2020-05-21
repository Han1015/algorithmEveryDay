a = [1, 8, 2, 6, 4, 5]
res = [1]
for i in range(1, len(a)):
    temp = []
    for j in range(0, i):
        if a[i] > a[j]:
            temp.append(res[j] + 1)
    res.append(max(temp))
def lengthOfLIS(nums):
        if not nums:
            return 0
        res = [1]
        for i in range(1, len(nums)):
            temp = []
            for j in range(0, i):
                if nums[i] > nums[j]:
                    temp.append(res[j]  + 1)
            res.append(max(temp))
        return max(res)

print(lengthOfLIS(a))

    