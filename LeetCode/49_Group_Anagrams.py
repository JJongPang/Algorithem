# Example 1:

# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
import collections

lst = ["eat", "tea", "tan", "ate", "nat", "bat"]
dic = collections.defaultdict(list)

for word in lst:
    dic[''.join(sorted(word))].append(word)

print(dic.values())
