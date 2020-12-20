nums = [2, 7, 11, 15]
target = 9
# [0,1]

# 1.브루트포스 계산
# for i in range(len(nums)):
#     for j in range(i + 1, len(nums)):
#         if nums[i] + nums[j] == target:
#             print([i, j])


# 2. in을 이용한 탐색
# for i, n in enumerate(nums):
#     complement = target - n

#     if complement in nums[i+1:]:
#       print(nums.index(n), nums[i+1:].index(complement) + (i+1))

# 3. 첫 번째 수를 뺀 결과 키 조회
# nums_map = {}

# for i, num in enumerate(nums):
#     nums_map[num] = i

# for i, num in enumerate(nums):
#     if target - num in nums_map and i != nums_map[target - num]:
#         print(nums.index(num), nums_map[target-num])

# 4. 조회 구조 개선
# nums_map = {}
# for i, num in enumerate(nums):
#     if target - num in nums_map:
#         return [nums_map[target - num], i]

#     nums_map[num] = i

# 5. 투 포인터 이용
# left, right = 0, len(nums) - 1
# while not left == right:
#     if nums[left] + nums[right] < target:
#         left += 1
#     elif nums[left] + nums[right] > target:
#         right -= 1
#     else:
#         return left, right
