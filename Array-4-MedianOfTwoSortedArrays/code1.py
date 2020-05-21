
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        mergeArray = []
        i = 0
        j = 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] <= nums2[j]:
                mergeArray.append(nums1[i])
                i += 1
            else:
                mergeArray.append(nums2[j])
                j += 1
        if i < len(nums1):
            mergeArray.extend(nums1[i:])
        if j < len(nums2):
             mergeArray.extend(nums2[j:])
        if len(mergeArray) % 2 == 0:
            po = int(len(mergeArray) / 2)
            temp = mergeArray[po] + mergeArray[po-1]
            return temp / 2
        else:
            po = int((len(mergeArray) - 1) / 2)
            return mergeArray[po]
        

        