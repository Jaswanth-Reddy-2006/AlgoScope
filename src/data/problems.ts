import { Problem } from "../types";

export const problems: Problem[] = [
  // ARRAYS
  {
    id: "1", slug: "two-sum", title: "Two Sum", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    detailedExplanation: "To solve this efficiently, we use a Hash Map to store the numbers we've seen so far and their indices. For each number 'n', we calculate its complement 'diff = target - n'. If 'diff' exists in our map, we've found the pair! This reduces the time complexity from O(n²) to O(n) because map lookups are O(1) on average.",
    edgeCases: [
      "Array contains negative numbers",
      "Multiple pairs add up to target (problem states only one exists)",
      "Target is twice the same number (cannot use the same element twice)",
      "Large array size (O(n) is necessary)"
    ],
    examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]" }],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists."
    ],
    complexity: {
      time: "O(n)",
      space: "O(n)"
    },
    defaultInput: { nums: [2, 7, 11, 15], target: 9 },
    topics: ["Array", "Hash Table"],
    hints: [
      { id: "two-sum-hint-1", text: "Think about what data structure allows O(1) lookup time.", isUnlocked: false },
      { id: "two-sum-hint-2", text: "For each number, calculate its complement (target - number) and check if you've seen it before.", isUnlocked: false },
      { id: "two-sum-hint-3", text: "Use a hash map to store numbers you've seen along with their indices.", isUnlocked: false }
    ],
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expectedOutput: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expectedOutput: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, expectedOutput: [0, 1] },
      { input: { nums: [-1, -2, -3, -4, -5], target: -8 }, expectedOutput: [2, 4] },
      { input: { nums: [0, 4, 3, 0], target: 0 }, expectedOutput: [0, 3] },
      { input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9], target: 17 }, expectedOutput: [7, 8], isHidden: true },
      { input: { nums: [230, 863, 916, 585, 981, 404, 316, 785, 88, 12, 70, 435, 384, 778, 887, 755, 740, 337, 86, 92], target: 542 }, expectedOutput: [4, 8], isHidden: true }
    ],
    starterCode: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if nums[i] + nums[j] == target:\n                    return [i, j]",
      javascript: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    for (let i = 0; i < nums.length; i++) {\n        for (let j = i + 1; j < nums.length; j++) {\n            if (nums[i] + nums[j] === target) return [i, j];\n        }\n    }\n};",
      cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = i + 1; j < nums.size(); j++) {\n                if (nums[i] + nums[j] == target) return {i, j};\n            }\n        }\n        return {};\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        prevMap = {} # val : index\n\n        for i, n in enumerate(nums):\n            diff = target - n\n            if diff in prevMap:\n                return [prevMap[diff], i]\n            prevMap[n] = i",
      javascript: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const diff = target - nums[i];\n        if (map.has(diff)) return [map.get(diff), i];\n        map.set(nums[i], i);\n    }\n};",
      cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> prevMap;\n        for (int i = 0; i < nums.size(); i++) {\n            int diff = target - nums[i];\n            if (prevMap.count(diff)) return {prevMap[diff], i};\n            prevMap[nums[i]] = i;\n        }\n        return {};\n    }\n};"
    }
  },
  {
    id: "217", slug: "contains-duplicate", title: "Contains Duplicate", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    description: "Return true if any value appears at least twice in the array.",
    examples: [{ input: "nums = [1,2,3,1]", output: "true" }],
    defaultInput: { nums: [1, 2, 3, 1] },
    starterCode: "class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        pass"
  },
  {
    id: "238", slug: "product-of-array-except-self", title: "Product of Array Except Self", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    examples: [{ input: "nums = [1,2,3,4]", output: "[24,12,8,6]" }],
    defaultInput: { nums: [1, 2, 3, 4] },
    starterCode: "class Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        pass"
  },
  {
    id: "53", slug: "maximum-subarray", title: "Maximum Subarray", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Find the contiguous subarray which has the largest sum.",
    examples: [{ input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" }],
    defaultInput: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] },
    starterCode: "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        pass"
  },
  {
    id: "152", slug: "maximum-product-subarray", title: "Maximum Product Subarray", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Find a contiguous non-empty subarray within an integer array that has the largest product.",
    examples: [{ input: "nums = [2,3,-2,4]", output: "6" }],
    starterCode: "class Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        pass"
  },
  {
    id: "128", slug: "longest-consecutive-sequence", title: "Longest Consecutive Sequence", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
    examples: [{ input: "nums = [100,4,200,1,3,2]", output: "4" }],
    starterCode: "class Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        pass"
  },
  {
    id: "347", slug: "top-k-frequent-elements", title: "Top K Frequent Elements", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Given an integer array nums and an integer k, return the k most frequent elements.",
    examples: [{ input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" }],
    defaultInput: { nums: [1, 1, 1, 2, 2, 3], k: 2 },
    codes: {
      python: "class Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        count = {}\n        freq = [[] for i in range(len(nums) + 1)]\n\n        for n in nums:\n            count[n] = 1 + count.get(n, 0)\n        for n, c in count.items():\n            freq[c].append(n)\n\n        res = []\n        for i in range(len(freq) - 1, 0, -1):\n            for n in freq[i]:\n                res.append(n)\n                if len(res) == k:\n                    return res",
      javascript: "var topKFrequent = function(nums, k) {\n    const map = new Map();\n    for (let n of nums) map.set(n, (map.get(n) || 0) + 1);\n    const freq = Array.from({ length: nums.length + 1 }, () => []);\n    for (let [n, c] of map) freq[c].push(n);\n    const res = [];\n    for (let i = freq.length - 1; i > 0; i--) {\n        for (let n of freq[i]) {\n            res.push(n);\n            if (res.length === k) return res;\n        }\n    }\n};"
    }
  },
  {
    id: "49", slug: "group-anagrams", title: "Group Anagrams", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Given an array of strings strs, group the anagrams together.",
    examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }],
    defaultInput: { strs: ["eat", "tea", "tan", "ate", "nat", "bat"] },
    codes: {
      python: "class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        res = defaultdict(list)\n        for s in strs:\n            count = [0] * 26\n            for c in s:\n                count[ord(c) - ord('a')] += 1\n            res[tuple(count)].append(s)\n        return res.values()",
      javascript: "var groupAnagrams = function(strs) {\n    const map = {};\n    for (let s of strs) {\n        let key = s.split('').sort().join('');\n        if (!map[key]) map[key] = [];\n        map[key].push(s);\n    }\n    return Object.values(map);\n};"
    }
  },
  {
    id: "36", slug: "valid-sudoku", title: "Valid Sudoku", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Determine if a 9 x 9 Sudoku board is valid.",
    examples: [{ input: "board = [...]", output: "true" }],
    defaultInput: { board: [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]] },
    codes: {
      python: "class Solution:\n    def isValidSudoku(self, board: List[List[str]]) -> bool:\n        cols = collections.defaultdict(set)\n        rows = collections.defaultdict(set)\n        squares = collections.defaultdict(set)\n\n        for r in range(9):\n            for c in range(9):\n                if board[r][c] == \".\":\n                    continue\n                if (board[r][c] in rows[r] or\n                    board[r][c] in cols[c] or\n                    board[r][c] in squares[(r // 3, c // 3)]):\n                    return False\n                cols[c].add(board[r][c])\n                rows[r].add(board[r][c])\n                squares[(r // 3, c // 3)].add(board[r][c])\n        return True"
    }
  },
  {
    id: "271", slug: "encode-and-decode-strings", title: "Encode and Decode Strings", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
    examples: [{ input: 'strs = ["lint","code","love","you"]', output: '["lint","code","love","you"]' }],
    defaultInput: { strs: ["lint", "code", "love", "you"] },
    codes: {
      python: "class Solution:\n    def encode(self, strs: List[str]) -> str:\n        res = \"\"\n        for s in strs:\n            res += str(len(s)) + \"#\" + s\n        return res\n\n    def decode(self, s: str) -> List[str]:\n        res, i = [], 0\n        while i < len(s):\n            j = i\n            while s[j] != \"#\":\n                j += 1\n            length = int(s[i:j])\n            res.append(s[j + 1 : j + 1 + length])\n            i = j + 1 + length\n        return res",
      javascript: "var encode = function(strs) {\n    return strs.map(s => s.length + '#' + s).join('');\n};\n\nvar decode = function(s) {\n    const res = [];\n    let i = 0;\n    while (i < s.length) {\n        let j = i;\n        while (s[j] !== '#') j++;\n        let len = parseInt(s.substring(i, j));\n        res.push(s.substring(j + 1, j + 1 + len));\n        i = j + 1 + len;\n    }\n    return res;\n};"
    }
  },
  {
    id: "26", slug: "remove-duplicates-from-sorted-array", title: "Remove Duplicates", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    description: "Remove duplicates from a sorted array in-place such that each element appears only once.",
    examples: [{ input: "nums = [1,1,2]", output: "2, nums = [1,2,_]" }],
    defaultInput: { nums: [1, 1, 2, 2, 3, 3] },
    codes: {
      python: "class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        l = 1\n        for r in range(1, len(nums)):\n            if nums[r] != nums[r - 1]:\n                nums[l] = nums[r]\n                l += 1\n        return l",
      javascript: "var removeDuplicates = function(nums) {\n    let l = 1;\n    for (let r = 1; r < nums.length; r++) {\n        if (nums[r] !== nums[r-1]) {\n            nums[l] = nums[r];\n            l++;\n        }\n    }\n    return l;\n};"
    }
  },
  {
    id: "27", slug: "remove-element", title: "Remove Element", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    description: "Remove all occurrences of val in nums in-place.",
    examples: [{ input: "nums = [3,2,2,3], val = 3", output: "2, nums = [2,2,_,_]" }],
    defaultInput: { nums: [3, 2, 2, 3], val: 3 },
    codes: {
      python: "class Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        k = 0\n        for i in range(len(nums)):\n            if nums[i] != val:\n                nums[k] = nums[i]\n                k += 1\n        return k",
      javascript: "var removeElement = function(nums, val) {\n    let k = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (nums[i] !== val) {\n            nums[k] = nums[i];\n            k++;\n        }\n    }\n    return k;\n};"
    }
  },
  {
    id: "35", slug: "search-insert-position", title: "Search Insert Position", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    examples: [{ input: "nums = [1,3,5,6], target = 5", output: "2" }],
    defaultInput: { nums: [1, 3, 5, 6], target: 5 },
    codes: {
      python: "class Solution:\n    def searchInsert(self, nums: List[int], target: int) -> int:\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target:\n                return mid\n            if nums[mid] < target:\n                l = mid + 1\n            else:\n                r = mid - 1\n        return l",
      javascript: "var searchInsert = function(nums, target) {\n    let l = 0, r = nums.length - 1;\n    while (l <= r) {\n        let mid = Math.floor((l + r) / 2);\n        if (nums[mid] === target) return mid;\n        if (nums[mid] < target) l = mid + 1;\n        else r = mid - 1;\n    }\n    return l;\n};"
    }
  },
  {
    id: "88", slug: "merge-sorted-array", title: "Merge Sorted Array", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    description: "Merge two sorted arrays nums1 and nums2 into nums1 as one sorted array.",
    examples: [{ input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" }],
    defaultInput: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 },
    codes: {
      python: "class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        last = m + n - 1\n        while m > 0 and n > 0:\n            if nums1[m - 1] > nums2[n - 1]:\n                nums1[last] = nums1[m - 1]\n                m -= 1\n            else:\n                nums1[last] = nums2[n - 1]\n                n -= 1\n            last -= 1\n        while n > 0:\n            nums1[last] = nums2[n - 1]\n            n, last = n - 1, last - 1",
      javascript: "var merge = function(nums1, m, nums2, n) {\n    let last = m + n - 1;\n    while (m > 0 && n > 0) {\n        if (nums1[m - 1] > nums2[n - 1]) {\n            nums1[last] = nums1[m - 1];\n            m--;\n        } else {\n            nums1[last] = nums2[n - 1];\n            n--;\n        }\n        last--;\n    }\n    while (n > 0) {\n        nums1[last] = nums2[n - 1];\n        n--;\n        last--;\n    }\n};"
    }
  },
  {
    id: "118", slug: "pascals-triangle", title: "Pascal's Triangle", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    description: "Given an integer numRows, return the first numRows of Pascal's triangle.",
    examples: [{ input: "numRows = 5", output: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]" }],
    defaultInput: { n: 5 },
    codes: {
      python: "class Solution:\n    def generate(self, numRows: int) -> List[List[int]]:\n        res = [[1]]\n        for i in range(numRows - 1):\n            temp = [0] + res[-1] + [0]\n            row = []\n            for j in range(len(res[-1]) + 1):\n                row.append(temp[j] + temp[j + 1])\n            res.append(row)\n        return res",
      javascript: "var generate = function(numRows) {\n    const res = [[1]];\n    for (let i = 0; i < numRows - 1; i++) {\n        let prev = res[res.length - 1];\n        let row = [1];\n        for (let j = 0; j < prev.length - 1; j++) {\n            row.push(prev[j] + prev[j+1]);\n        }\n        row.push(1);\n        res.push(row);\n    }\n    return res;\n};"
    }
  },
  {
    id: "1752", slug: "check-if-array-is-sorted-and-rotated", title: "Is Sorted and Rotated", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    description: "Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions.",
    examples: [{ input: "nums = [3,4,5,1,2]", output: "true" }],
    defaultInput: { nums: [3, 4, 5, 1, 2] },
    codes: {
      python: "class Solution:\n    def check(self, nums: List[int]) -> bool:\n        count = 0\n        n = len(nums)\n        for i in range(n):\n            if nums[i] > nums[(i + 1) % n]:\n                count += 1\n        return count <= 1",
      javascript: "var check = function(nums) {\n    let count = 0;\n    let n = nums.length;\n    for (let i = 0; i < n; i++) {\n        if (nums[i] > nums[(i + 1) % n]) count++;\n    }\n    return count <= 1;\n};"
    }
  },

  // TWO POINTERS
  {
    id: "125", slug: "valid-palindrome", title: "Valid Palindrome", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    description: "Determine if a string is a palindrome, considering only alphanumeric characters and ignoring cases.",
    examples: [{ input: 's = "A man, a plan, a canal: Panama"', output: "true" }],
    defaultInput: { s: "A man, a plan, a canal: Panama" },
    starterCode: "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        pass"
  },
  {
    id: "15", slug: "3sum", title: "3Sum", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    description: "Find all unique triplets in the array which gives the sum of zero.",
    examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }],
    starterCode: "class Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        pass"
  },
  {
    id: "11", slug: "container-with-most-water", title: "Container With Most Water", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    description: "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }],
    starterCode: "class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        pass"
  },
  {
    id: "167", slug: "two-sum-ii", title: "Two Sum II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    description: "Two Sum where the input array is already sorted.",
    examples: [{ input: "numbers = [2,7,11,15], target = 9", output: "[1,2]" }],
    starterCode: "class Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        pass"
  },
  {
    id: "42", slug: "trapping-rain-water", title: "Trapping Rain Water", difficulty: "Hard", diffClass: "difficulty-hard", category: "Two Pointers",
    description: "Compute how much water an elevation map can trap after raining.",
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }],
    starterCode: "class Solution:\n    def trap(self, height: List[int]) -> int:\n        pass"
  },
  {
    id: "18", slug: "4sum", title: "4Sum", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    description: "Find all unique quadruplets in the array which gives the sum of target.",
    examples: [{ input: "nums = [1,0,-1,0,-2,2], target = 0", output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" }],
    defaultInput: { nums: [1, 0, -1, 0, -2, 2], target: 0 },
    codes: {
      python: "class Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        nums.sort()\n        res, quad = [], []\n        def kSum(k, start, target):\n            if k > 2:\n                for i in range(start, len(nums) - k + 1):\n                    if i > start and nums[i] == nums[i - 1]:\n                        continue\n                    quad.append(nums[i])\n                    kSum(k - 1, i + 1, target - nums[i])\n                    quad.pop()\n                return\n            l, r = start, len(nums) - 1\n            while l < r:\n                if nums[l] + nums[r] < target:\n                    l += 1\n                elif nums[l] + nums[r] > target:\n                    r -= 1\n                else:\n                    res.append(quad + [nums[l], nums[r]])\n                    l += 1\n                    while l < r and nums[l] == nums[l - 1]:\n                        l += 1\n        kSum(4, 0, target)\n        return res"
    }
  },
  {
    id: "16", slug: "3sum-closest", title: "3Sum Closest", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    description: "Find three integers in nums such that the sum is closest to target.",
    examples: [{ input: "nums = [-1,2,1,-4], target = 1", output: "2" }],
    defaultInput: { nums: [-1, 2, 1, -4], target: 1 },
    codes: {
      python: "class Solution:\n    def threeSumClosest(self, nums: List[int], target: int) -> int:\n        nums.sort()\n        res = nums[0] + nums[1] + nums[2]\n        for i in range(len(nums) - 2):\n            l, r = i + 1, len(nums) - 1\n            while l < r:\n                s = nums[i] + nums[l] + nums[r]\n                if s == target:\n                    return s\n                if abs(s - target) < abs(res - target):\n                    res = s\n                if s < target:\n                    l += 1\n                else:\n                    r -= 1\n        return res"
    }
  },
  {
    id: "80", slug: "remove-duplicates-from-sorted-array-ii", title: "Remove Duplicates II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    description: "Remove duplicates such that each element appears at most twice.",
    examples: [{ input: "nums = [1,1,1,2,2,3]", output: "5, nums = [1,1,2,2,3,_]" }],
    defaultInput: { nums: [1, 1, 1, 2, 2, 3] },
    codes: {
      python: "class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        l, r = 0, 0\n        while r < len(nums):\n            count = 1\n            while r + 1 < len(nums) and nums[r] == nums[r + 1]:\n                r += 1\n                count += 1\n            for i in range(min(2, count)):\n                nums[l] = nums[r]\n                l += 1\n            r += 1\n        return l"
    }
  },
  {
    id: "680", slug: "valid-palindrome-ii", title: "Valid Palindrome II", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    description: "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
    examples: [{ input: 's = "aba"', output: "true" }],
    defaultInput: { s: "abca" },
    codes: {
      python: "class Solution:\n    def validPalindrome(self, s: str) -> bool:\n        l, r = 0, len(s) - 1\n        while l < r:\n            if s[l] != s[r]:\n                skipL, skipR = s[l + 1 : r + 1], s[l:r]\n                return skipL == skipL[::-1] or skipR == skipR[::-1]\n            l, r = l + 1, r - 1\n        return True"
    }
  },

  {
    id: "392", slug: "is-subsequence", title: "Is Subsequence", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    description: "Given two strings s and t, return true if s is a subsequence of t.",
    examples: [{ input: 's = "abc", t = "ahbgdc"', output: "true" }],
    defaultInput: { s: "abc", t: "ahbgdc" },
    codes: {
      python: "class Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        i, j = 0, 0\n        while i < len(s) and j < len(t):\n            if s[i] == t[j]:\n                i += 1\n            j += 1\n        return i == len(s)",
      javascript: "var isSubsequence = function(s, t) {\n    let i = 0, j = 0;\n    while (i < s.length && j < t.length) {\n        if (s[i] === t[j]) i++;\n        j++;\n    }\n    return i === s.length;\n};"
    }
  },
  {
    id: "844", slug: "backspace-string-compare", title: "Backspace String Compare", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    description: "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.",
    examples: [{ input: 's = "ab#c", t = "ad#c"', output: "true" }],
    defaultInput: { s: "ab#c", t: "ad#c" },
    codes: {
      python: "class Solution:\n    def backspaceCompare(self, s: str, t: str) -> bool:\n        def build(S):\n            ans = []\n            for c in S:\n                if c != '#':\n                    ans.append(c)\n                elif ans:\n                    ans.pop()\n            return \"\".join(ans)\n        return build(s) == build(t)"
    }
  },
  {
    id: "283", slug: "move-zeroes", title: "Move Zeroes", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    description: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
    examples: [{ input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }],
    defaultInput: { nums: [0, 1, 0, 3, 12] },
    codes: {
      python: "class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        l = 0\n        for r in range(len(nums)):\n            if nums[r]:\n                nums[l], nums[r] = nums[r], nums[l]\n                l += 1",
      javascript: "var moveZeroes = function(nums) {\n    let l = 0;\n    for (let r = 0; r < nums.length; r++) {\n        if (nums[r]) {\n            [nums[l], nums[r]] = [nums[r], nums[l]];\n            l++;\n        }\n    }\n};"
    }
  },
  {
    id: "344", slug: "reverse-string", title: "Reverse String", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    description: "Write a function that reverses a string. The input string is given as an array of characters s.",
    examples: [{ input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' }],
    defaultInput: { chars: ["h", "e", "l", "l", "o"] },
    codes: {
      python: "class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        l, r = 0, len(s) - 1\n        while l < r:\n            s[l], s[r] = s[r], s[l]\n            l, r = l + 1, r - 1",
      javascript: "var reverseString = function(s) {\n    let l = 0, r = s.length - 1;\n    while (l < r) {\n        [s[l], s[r]] = [s[r], s[l]];\n        l++; r--;\n    }\n};"
    }
  },
  {
    id: "977", slug: "squares-of-a-sorted-array", title: "Squares of Sorted Array", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    description: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
    examples: [{ input: "nums = [-4,-1,0,3,10]", output: "[0,1,9,16,100]" }],
    defaultInput: { nums: [-4, -1, 0, 3, 10] },
    codes: {
      python: "class Solution:\n    def sortedSquares(self, nums: List[int]) -> List[int]:\n        res = [0] * len(nums)\n        l, r = 0, len(nums) - 1\n        for i in range(len(nums) - 1, -1, -1):\n            if abs(nums[l]) > abs(nums[r]):\n                res[i] = nums[l] ** 2\n                l += 1\n            else:\n                res[i] = nums[r] ** 2\n                r -= 1\n        return res"
    }
  },
  {
    id: "941", slug: "valid-mountain-array", title: "Valid Mountain Array", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    description: "Check if an array is a valid mountain array.",
    examples: [{ input: "arr = [0,3,2,1]", output: "true" }],
    defaultInput: { nums: [0, 3, 2, 1] },
    codes: {
      python: "class Solution:\n    def validMountainArray(self, arr: List[int]) -> bool:\n        if len(arr) < 3:\n            return False\n        i = 0\n        while i + 1 < len(arr) and arr[i] < arr[i + 1]:\n            i += 1\n        if i == 0 or i == len(arr) - 1:\n            return False\n        while i + 1 < len(arr) and arr[i] > arr[i + 1]:\n            i += 1\n        return i == len(arr) - 1"
    }
  },

  // SLIDING WINDOW
  {
    id: "121", slug: "best-time-to-buy-and-sell-stock", title: "Best Time to Buy/Sell Stock", difficulty: "Easy", diffClass: "difficulty-easy", category: "Sliding Window",
    description: "Maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock.",
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5" }],
    starterCode: "class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        pass"
  },
  {
    id: "3", slug: "longest-substring-without-repeating-characters", title: "Longest Substring Without Repeating", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Find the length of the longest substring without repeating characters.",
    examples: [{ input: 's = "abcabcbb"', output: "3" }],
    starterCode: "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        pass"
  },
  {
    id: "424", slug: "longest-repeating-character-replacement", title: "Longest Repeating Replacement", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Find the length of the longest substring containing the same letter you can get after performing at most k character replacements.",
    examples: [{ input: 's = "ABAB", k = 2', output: "4" }],
    starterCode: "class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        pass"
  },
  {
    id: "76", slug: "minimum-window-substring", title: "Minimum Window Substring", difficulty: "Hard", diffClass: "difficulty-hard", category: "Sliding Window",
    description: "Given two strings s and t, return the minimum window in s which will contain all the characters in t.",
    examples: [{ input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' }],
    starterCode: "class Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        pass"
  },

  {
    id: "567", slug: "permutation-in-string", title: "Permutation in String", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Given two strings s1 and s2, return true if s2 contains a permutation of s1.",
    examples: [{ input: 's1 = "ab", s2 = "eidbaooo"', output: "true" }],
    defaultInput: { s1: "ab", s2: "eidbaooo" },
    codes: {
      python: "class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        if len(s1) > len(s2): return False\n        s1Count, s2Count = [0] * 26, [0] * 26\n        for i in range(len(s1)):\n            s1Count[ord(s1[i]) - ord('a')] += 1\n            s2Count[ord(s2[i]) - ord('a')] += 1\n        matches = 0\n        for i in range(26):\n            matches += (1 if s1Count[i] == s2Count[i] else 0)\n        l = 0\n        for r in range(len(s1), len(s2)):\n            if matches == 26: return True\n            index = ord(s2[r]) - ord('a')\n            s2Count[index] += 1\n            if s1Count[index] == s2Count[index]: matches += 1\n            elif s1Count[index] + 1 == s2Count[index]: matches -= 1\n            index = ord(s2[l]) - ord('a')\n            s2Count[index] -= 1\n            if s1Count[index] == s2Count[index]: matches += 1\n            elif s1Count[index] - 1 == s2Count[index]: matches -= 1\n            l += 1\n        return matches == 26"
    }
  },
  {
    id: "239", slug: "sliding-window-maximum", title: "Sliding Window Maximum", difficulty: "Hard", diffClass: "difficulty-hard", category: "Sliding Window",
    description: "Return the maximum in each sliding window of size k.",
    examples: [{ input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" }],
    defaultInput: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
    codes: {
      python: "class Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        output = []\n        q = collections.deque()\n        l = r = 0\n        while r < len(nums):\n            while q and nums[q[-1]] < nums[r]:\n                q.pop()\n            q.append(r)\n            if l > q[0]:\n                q.popleft()\n            if (r + 1) >= k:\n                output.append(nums[q[0]])\n                l += 1\n            r += 1\n        return output"
    }
  },
  {
    id: "904", slug: "fruit-into-baskets", title: "Fruit Into Baskets", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Find the maximum amount of fruit you can collect in two baskets.",
    examples: [{ input: "fruits = [1,2,1]", output: "3" }],
    defaultInput: { nums: [1, 2, 1] },
    codes: {
      python: "class Solution:\n    def totalFruit(self, fruits: List[int]) -> int:\n        count = collections.defaultdict(int)\n        l, total, res = 0, 0, 0\n        for r in range(len(fruits)):\n            count[fruits[r]] += 1\n            total += 1\n            while len(count) > 2:\n                count[fruits[l]] -= 1\n                total -= 1\n                if not count[fruits[l]]:\n                    count.pop(fruits[l])\n                l += 1\n            res = max(res, total)\n        return res"
    }
  },
  {
    id: "1004", slug: "max-consecutive-ones-iii", title: "Max Consecutive Ones III", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
    examples: [{ input: "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2", output: "6" }],
    defaultInput: { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2 },
    codes: {
      python: "class Solution:\n    def longestOnes(self, nums: List[int], k: int) -> int:\n        l = 0\n        for r in range(len(nums)):\n            if nums[r] == 0:\n                k -= 1\n            if k < 0:\n                if nums[l] == 0:\n                    k += 1\n                l += 1\n        return r - l + 1"
    }
  },

  {
    id: "159", slug: "longest-substring-at-most-two-distinct-characters", title: "Two Distinct Characters", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Given a string s, return the length of the longest substring that contains at most two distinct characters.",
    examples: [{ input: 's = "eceba"', output: "3" }],
    defaultInput: { s: "eceba" },
    codes: {
      python: "class Solution:\n    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:\n        count = collections.defaultdict(int)\n        l, res = 0, 0\n        for r in range(len(s)):\n            count[s[r]] += 1\n            while len(count) > 2:\n                count[s[l]] -= 1\n                if not count[s[l]]:\n                    count.pop(s[l])\n                l += 1\n            res = max(res, r - l + 1)\n        return res"
    }
  },
  {
    id: "480", slug: "sliding-window-median", title: "Sliding Window Median", difficulty: "Hard", diffClass: "difficulty-hard", category: "Sliding Window",
    description: "Find the median value for each sliding window of size k in an array.",
    examples: [{ input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[1,-1,-1,3,5,6]" }],
    defaultInput: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
    codes: {
      python: "class Solution:\n    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:\n        from sortedcontainers import SortedList\n        res = []\n        window = SortedList(nums[:k])\n        res.append((window[k//2] + window[(k-1)//2]) / 2)\n        for i in range(k, len(nums)):\n            window.remove(nums[i-k])\n            window.add(nums[i])\n            res.append((window[k//2] + window[(k-1)//2]) / 2)\n        return res"
    }
  },
  {
    id: "187", slug: "repeated-dna-sequences", title: "Repeated DNA Sequences", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.",
    examples: [{ input: 's = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"', output: '["AAAAACCCCC","CCCCCAAAAA"]' }],
    defaultInput: { s: "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT" },
    codes: {
      python: "class Solution:\n    def findRepeatedDnaSequences(self, s: str) -> List[str]:\n        seen, res = set(), set()\n        for l in range(len(s) - 9):\n            cur = s[l : l + 10]\n            if cur in seen:\n                res.add(cur)\n            seen.add(cur)\n        return list(res)"
    }
  },
  {
    id: "1838", slug: "frequency-of-the-most-frequent-element", title: "Most Frequent Element", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Given an integer array nums and an integer k, return the maximum possible frequency of an element after at most k increments.",
    examples: [{ input: "nums = [1,2,4], k = 5", output: "3" }],
    defaultInput: { nums: [1, 2, 4], k: 5 },
    codes: {
      python: "class Solution:\n    def maxFrequency(self, nums: List[int], k: int) -> int:\n        nums.sort()\n        l, r = 0, 0\n        res, total = 0, 0\n        while r < len(nums):\n            total += nums[r]\n            while nums[r] * (r - l + 1) > total + k:\n                total -= nums[l]\n                l += 1\n            res = max(res, r - l + 1)\n            r += 1\n        return res"
    }
  },
  {
    id: "209", slug: "minimum-size-subarray-sum", title: "Minimum Size Subarray Sum", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray of which the sum is greater than or equal to target.",
    examples: [{ input: "target = 7, nums = [2,3,1,2,4,3]", output: "2" }],
    defaultInput: { nums: [2, 3, 1, 2, 4, 3], target: 7 },
    codes: {
      python: "class Solution:\n    def minSubArrayLen(self, target: int, nums: List[int]) -> int:\n        l, total = 0, 0\n        res = float(\"inf\")\n        for r in range(len(nums)):\n            total += nums[r]\n            while total >= target:\n                res = min(r - l + 1, res)\n                total -= nums[l]\n                l += 1\n        return 0 if res == float(\"inf\") else res"
    }
  },
  {
    id: "1456", slug: "maximum-number-of-vowels-in-a-substring-of-given-length", title: "Maximum Vowels", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    description: "Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.",
    examples: [{ input: 's = "abciiidef", k = 3', output: "3" }],
    defaultInput: { s: "abciiidef", k: 3 },
    codes: {
      python: "class Solution:\n    def maxVowels(self, s: str, k: int) -> int:\n        vowels = {'a', 'e', 'i', 'o', 'u'}\n        l, cnt, res = 0, 0, 0\n        for r in range(len(s)):\n            cnt += 1 if s[r] in vowels else 0\n            if r - l + 1 > k:\n                cnt -= 1 if s[l] in vowels else 0\n                l += 1\n            res = max(res, cnt)\n        return res"
    }
  },

  // STACK
  {
    id: "20", slug: "valid-parentheses", title: "Valid Parentheses", difficulty: "Easy", diffClass: "difficulty-easy", category: "Stack",
    description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [{ input: 's = "()"', output: "true" }],
    starterCode: "class Solution:\n    def isValid(self, s: str) -> bool:\n        pass"
  },
  {
    id: "155", slug: "min-stack", title: "Min Stack", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Design a stack that supports retrieve the minimum element in constant time.",
    examples: [{ input: '["MinStack","push","push","getMin"] \n [[],[-2],[0],[]]', output: "[null,null,null,-2]" }],
    starterCode: "class MinStack:\n    def __init__(self):\n        pass"
  },
  {
    id: "150", slug: "evaluate-reverse-polish-notation", title: "Evaluate RPN", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
    examples: [{ input: 'tokens = ["2","1","+","3","*"]', output: "9" }],
    defaultInput: { nums: ["2", "1", "+", "3", "*"] },
    starterCode: "class Solution:\n    def evalRPN(self, tokens: List[str]) -> int:\n        pass"
  },
  {
    id: "22", slug: "generate-parentheses", title: "Generate Parentheses", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    examples: [{ input: "n = 3", output: '["((()))","(()())","(())()","()(())","()()()"]' }],
    starterCode: "class Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        pass"
  },
  {
    id: "739", slug: "daily-temperatures", title: "Daily Temperatures", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
    examples: [{ input: "temperatures = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" }],
    starterCode: "class Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        pass"
  },

  {
    id: "84", slug: "largest-rectangle-in-histogram", title: "Largest Rectangle in Histogram", difficulty: "Hard", diffClass: "difficulty-hard", category: "Stack",
    description: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    examples: [{ input: "heights = [2,1,5,6,2,3]", output: "10" }],
    defaultInput: { nums: [2, 1, 5, 6, 2, 3] },
    codes: {
      python: "class Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        maxArea = 0\n        stack = [] # pair: (index, height)\n        for i, h in enumerate(heights):\n            start = i\n            while stack and stack[-1][1] > h:\n                index, height = stack.pop()\n                maxArea = max(maxArea, height * (i - index))\n                start = index\n            stack.append((start, h))\n\n        for i, h in stack:\n            maxArea = max(maxArea, h * (len(heights) - i))\n        return maxArea"
    }
  },
  {
    id: "853", slug: "car-fleet", title: "Car Fleet", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "n cars are going to the same destination along a one-lane road. The destination is target miles away.",
    examples: [{ input: "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]", output: "3" }],
    defaultInput: { target: 12, positions: [10, 8, 0, 5, 3], speeds: [2, 4, 1, 1, 3] },
    codes: {
      python: "class Solution:\n    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:\n        pair = [[p, s] for p, s in zip(position, speed)]\n        stack = []\n        for p, s in sorted(pair)[::-1]:\n            stack.append((target - p) / s)\n            if len(stack) >= 2 and stack[-1] <= stack[-2]:\n                stack.pop()\n        return len(stack)"
    }
  },
  {
    id: "901", slug: "online-stock-span", title: "Online Stock Span", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.",
    examples: [{ input: '["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]\n[[], [100], [80], [60], [70], [60], [75], [85]]', output: "[null, 1, 1, 1, 2, 1, 4, 6]" }],
    defaultInput: { nums: [100, 80, 60, 70, 60, 75, 85] },
    codes: {
      python: "class StockSpanner:\n    def __init__(self):\n        self.stack = [] # (price, span)\n\n    def next(self, price: int) -> int:\n        span = 1\n        while self.stack and self.stack[-1][0] <= price:\n            span += self.stack.pop()[1]\n        self.stack.append((price, span))\n        return span"
    }
  },
  {
    id: "71", slug: "simplify-path", title: "Simplify Path", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Given a string path, which is an absolute path (starting with a slash '/') for a file or directory in a Unix-style file system, convert it to the simplified canonical path.",
    examples: [{ input: 'path = "/home/"', output: '"/home"' }],
    defaultInput: { s: "/home//foo/" },
    codes: {
      python: "class Solution:\n    def simplifyPath(self, path: str) -> str:\n        stack = []\n        for part in path.split(\"/\"):\n            if part == \"..\":\n                if stack:\n                    stack.pop()\n            elif part and part != \".\":\n                stack.append(part)\n        return \"/\" + \"/\".join(stack)"
    }
  },
  {
    id: "735", slug: "asteroid-collision", title: "Asteroid Collision", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Find out the state of the asteroids after all collisions.",
    examples: [{ input: "asteroids = [5,10,-5]", output: "[5,10]" }],
    defaultInput: { nums: [5, 10, -5] },
    codes: {
      python: "class Solution:\n    def asteroidCollision(self, asteroids: List[int]) -> List[int]:\n        stack = []\n        for a in asteroids:\n            while stack and a < 0 and stack[-1] > 0:\n                diff = a + stack[-1]\n                if diff < 0:\n                    stack.pop()\n                elif diff > 0:\n                    a = 0\n                else:\n                    a = 0\n                    stack.pop()\n            if a:\n                stack.append(a)\n        return stack"
    }
  },
  {
    id: "1047", slug: "remove-all-adjacent-duplicates-in-string", title: "Remove Adjacent Duplicates", difficulty: "Easy", diffClass: "difficulty-easy", category: "Stack",
    description: "Remove all adjacent duplicates from a string repeatedly.",
    examples: [{ input: 's = "abbaca"', output: '"ca"' }],
    defaultInput: { s: "abbaca" },
    codes: {
      python: "class Solution:\n    def removeDuplicates(self, s: str) -> str:\n        stack = []\n        for c in s:\n            if stack and stack[-1] == c:\n                stack.pop()\n            else:\n                stack.append(c)\n        return \"\".join(stack)"
    }
  },
  {
    id: "227", slug: "basic-calculator-ii", title: "Basic Calculator II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Implement a basic calculator to evaluate a simple expression string containing non-negative integers, '+', '-', '*', '/' operators.",
    examples: [{ input: 's = "3+2*2"', output: "7" }],
    defaultInput: { s: "3+2*2" },
    codes: {
      python: "class Solution:\n    def calculate(self, s: str) -> int:\n        if not s: return 0\n        stack, cur, op = [], 0, \"+\"\n        all_ops = {\"+\", \"-\", \"*\", \"/\"}\n        for i in range(len(s)):\n            if s[i].isdigit():\n                cur = cur * 10 + int(s[i])\n            if s[i] in all_ops or i == len(s) - 1:\n                if op == \"+\":\n                    stack.append(cur)\n                elif op == \"-\":\n                    stack.append(-cur)\n                elif op == \"*\":\n                    stack.append(stack.pop() * cur)\n                elif op == \"/\":\n                    stack.append(int(stack.pop() / cur))\n                op = s[i]\n                cur = 0\n        return sum(stack)"
    }
  },
  {
    id: "496", slug: "next-greater-element-i", title: "Next Greater Element I", difficulty: "Easy", diffClass: "difficulty-easy", category: "Stack",
    description: "Find the next greater element for each value in subset nums1 in array nums2.",
    examples: [{ input: "nums1 = [4,1,2], nums2 = [1,3,4,2]", output: "[-1,3,-1]" }],
    defaultInput: { nums1: [4, 1, 2], nums2: [1, 3, 4, 2] },
    codes: {
      python: "class Solution:\n    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        nums1Idx = { n:i for i, n in enumerate(nums1) }\n        res = [-1] * len(nums1)\n        stack = []\n        for i in range(len(nums2)):\n            cur = nums2[i]\n            while stack and cur > stack[-1]:\n                val = stack.pop()\n                idx = nums1Idx[val]\n                res[idx] = cur\n            if cur in nums1Idx:\n                stack.append(cur)\n        return res"
    }
  },
  {
    id: "856", slug: "score-of-parentheses", title: "Score of Parentheses", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Given a balanced parentheses string s, return the score of the string.",
    examples: [{ input: 's = "(()())"', output: "6" }],
    defaultInput: { s: "(()())" },
    codes: {
      python: "class Solution:\n    def scoreOfParentheses(self, s: str) -> int:\n        stack = [0]\n        for c in s:\n            if c == \"(\":\n                stack.append(0)\n            else:\n                v = stack.pop()\n                stack[-1] += max(2 * v, 1)\n        return stack.pop()"
    }
  },
  {
    id: "946", slug: "validate-stack-sequences", title: "Validate Stack Sequences", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    description: "Given pushed and popped sequences with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.",
    examples: [{ input: "pushed = [1,2,3,4,5], popped = [4,5,3,2,1]", output: "true" }],
    defaultInput: { pushed: [1, 2, 3, 4, 5], popped: [4, 5, 3, 2, 1] },
    codes: {
      python: "class Solution:\n    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:\n        stack = []\n        i = 0\n        for x in pushed:\n            stack.append(x)\n            while stack and i < len(popped) and stack[-1] == popped[i]:\n                stack.pop()\n                i += 1\n        return i == len(popped)"
    }
  },

  // BINARY SEARCH
  {
    id: "704", slug: "binary-search", title: "Binary Search", difficulty: "Easy", diffClass: "difficulty-easy", category: "Binary Search",
    description: "Standard binary search implementation on a sorted array.",
    examples: [{ input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" }],
    defaultInput: { nums: [-1, 0, 3, 5, 9, 12], target: 9 },
    starterCode: "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        pass"
  },
  {
    id: "74", slug: "search-a-2d-matrix", title: "Search a 2D Matrix", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Search for a value in an m x n integer matrix that is sorted row and column-wise.",
    examples: [{ input: "matrix = [[1,3,5,7],[10,11,16,20]], target = 3", output: "true" }],
    defaultInput: { grid: [[1, 3, 5, 7], [10, 11, 16, 20]], target: 3 },
    starterCode: "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        pass"
  },
  {
    id: "875", slug: "koko-eating-bananas", title: "Koko Eating Bananas", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Find the minimum integer k such that Koko can eat all bananas within h hours.",
    examples: [{ input: "piles = [3,6,7,11], h = 8", output: "4" }],
    starterCode: "class Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        pass"
  },
  {
    id: "33", slug: "search-in-rotated-sorted-array", title: "Search Rotated Sorted Array", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Search for a target in a sorted array that has been rotated.",
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }],
    starterCode: "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        pass"
  },
  {
    id: "153", slug: "find-minimum-in-rotated-sorted-array", title: "Find Min in Rotated Array", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Find the minimum element in a sorted array that has been rotated.",
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1" }],
    starterCode: "class Solution:\n    def findMin(self, nums: List[int]) -> int:\n        pass"
  },

  {
    id: "81", slug: "search-in-rotated-sorted-array-ii", title: "Search Rotated Array II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Search for a target in a sorted array that has been rotated, where the array may contain duplicates.",
    examples: [{ input: "nums = [2,5,6,0,0,1,2], target = 0", output: "true" }],
    defaultInput: { nums: [2, 5, 6, 0, 0, 1, 2], target: 0 },
    codes: {
      python: "class Solution:\n    def search(self, nums: List[int], target: int) -> bool:\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target: return True\n            if nums[l] == nums[mid] == nums[r]:\n                l += 1; r -= 1\n            elif nums[l] <= nums[mid]:\n                if nums[l] <= target < nums[mid]: r = mid - 1\n                else: l = mid + 1\n            else:\n                if nums[mid] < target <= nums[r]: l = mid + 1\n                else: r = mid - 1\n        return False"
    }
  },
  {
    id: "34", slug: "find-first-and-last-position-of-element-in-sorted-array", title: "First/Last in Sorted Array", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Find the starting and ending position of a given target value in a non-decreasing array.",
    examples: [{ input: "nums = [5,7,7,8,8,10], target = 8", output: "[3,4]" }],
    defaultInput: { nums: [5, 7, 7, 8, 8, 10], target: 8 },
    codes: {
      python: "class Solution:\n    def searchRange(self, nums: List[int], target: int) -> List[int]:\n        def bin(isLeft):\n            l, r, i = 0, len(nums) - 1, -1\n            while l <= r:\n                m = (l + r) // 2\n                if nums[m] < target: l = m + 1\n                elif nums[m] > target: r = m - 1\n                else:\n                    i = m\n                    if isLeft: r = m - 1\n                    else: l = m + 1\n            return i\n        return [bin(True), bin(False)]"
    }
  },
  {
    id: "240", slug: "search-a-2d-matrix-ii", title: "Search a 2D Matrix II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Search for a target value in an m x n integer matrix where each row and column is sorted.",
    examples: [{ input: "matrix = [...], target = 5", output: "true" }],
    defaultInput: { grid: [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target: 5 },
    codes: {
      python: "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        r, c = 0, len(matrix[0]) - 1\n        while r < len(matrix) and c >= 0:\n            if matrix[r][c] == target: return True\n            if matrix[r][c] > target: c -= 1\n            else: r += 1\n        return False"
    }
  },
  {
    id: "4", slug: "median-of-two-sorted-arrays", title: "Median of Two Sorted Arrays", difficulty: "Hard", diffClass: "difficulty-hard", category: "Binary Search",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays in O(log(m+n)) time.",
    examples: [{ input: "nums1 = [1,3], nums2 = [2]", output: "2.00000" }],
    defaultInput: { nums1: [1, 3], nums2: [2] },
    codes: {
      python: "class Solution:\n    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n        A, B = nums1, nums2\n        total = len(nums1) + len(nums2)\n        half = total // 2\n        if len(B) < len(A): A, B = B, A\n        l, r = 0, len(A) - 1\n        while True:\n            i = (l + r) // 2\n            j = half - i - 2\n            Aleft = A[i] if i >= 0 else float(\"-inf\")\n            Aright = A[i + 1] if (i + 1) < len(A) else float(\"inf\")\n            Bleft = B[j] if j >= 0 else float(\"-inf\")\n            Bright = B[j + 1] if (j + 1) < len(B) else float(\"inf\")\n            if Aleft <= Bright and Bleft <= Aright:\n                if total % 2:\n                    return min(Aright, Bright)\n                return (max(Aleft, Bleft) + min(Aright, Bright)) / 2\n            elif Aleft > Bright:\n                r = i - 1\n            else:\n                l = i + 1"
    }
  },

  {
    id: "852", slug: "peak-index-in-a-mountain-array", title: "Peak Index in Mountain Array", difficulty: "Easy", diffClass: "difficulty-easy", category: "Binary Search",
    description: "Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].",
    examples: [{ input: "arr = [0,1,0]", output: "1" }],
    defaultInput: { nums: [0, 10, 5, 2] },
    codes: {
      python: "class Solution:\n    def peakIndexInMountainArray(self, arr: List[int]) -> int:\n        l, r = 0, len(arr) - 1\n        while l < r:\n            m = (l + r) // 2\n            if arr[m] < arr[m + 1]: l = m + 1\n            else: r = m\n        return l"
    }
  },
  {
    id: "162", slug: "find-peak-element", title: "Find Peak Element", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Find a peak element in an array and return its index.",
    examples: [{ input: "nums = [1,2,3,1]", output: "2" }],
    defaultInput: { nums: [1, 2, 3, 1] },
    codes: {
      python: "class Solution:\n    def findPeakElement(self, nums: List[int]) -> int:\n        l, r = 0, len(nums) - 1\n        while l < r:\n            m = (l + r) // 2\n            if nums[m] < nums[m + 1]: l = m + 1\n            else: r = m\n        return l"
    }
  },
  {
    id: "540", slug: "single-element-in-a-sorted-array", title: "Single Element in Sorted Array", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Find the single element in a sorted array where every other element appears exactly twice.",
    examples: [{ input: "nums = [1,1,2,3,3,4,4,8,8]", output: "2" }],
    defaultInput: { nums: [1, 1, 2, 3, 3, 4, 4, 8, 8] },
    codes: {
      python: "class Solution:\n    def singleNonDuplicate(self, nums: List[int]) -> int:\n        l, r = 0, len(nums) - 1\n        while l < r:\n            m = (l + r) // 2\n            if m % 2 == 1: m -= 1\n            if nums[m] == nums[m + 1]: l = m + 2\n            else: r = m\n        return nums[l]"
    }
  },
  {
    id: "1011", slug: "capacity-to-ship-packages-within-d-days", title: "Ship Packages", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Find the minimum weight capacity of a ship that will result in all the packages on the conveyor belt being shipped within days days.",
    examples: [{ input: "weights = [1,2,3,4,5,6,7,8,9,10], days = 5", output: "15" }],
    defaultInput: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 5 },
    codes: {
      python: "class Solution:\n    def shipWithinDays(self, weights: List[int], days: int) -> int:\n        l, r = max(weights), sum(weights)\n        res = r\n        while l <= r:\n            cap = (l + r) // 2\n            if self.canShip(weights, cap, days):\n                res = cap\n                r = cap - 1\n            else: l = cap + 1\n        return res\n\n    def canShip(self, weights, cap, days):\n        ships, curCap = 1, cap\n        for w in weights:\n            if curCap - w < 0:\n                ships += 1\n                curCap = cap\n            curCap -= w\n        return ships <= days"
    }
  },
  {
    id: "981", slug: "time-based-key-value-store", title: "Time Based Key-Value Store", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.",
    examples: [{ input: '["TimeMap","set","get","get","set","get","get"]\n[[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]', output: '[null,null,"bar","bar",null,"bar2","bar2"]' }],
    defaultInput: { keys: ["set", "get", "get"], vals: [["foo", "bar", 1], ["foo", 1], ["foo", 3]] },
    codes: {
      python: "class TimeMap:\n    def __init__(self):\n        self.store = {} # key : list of [val, timestamp]\n\n    def set(self, key: str, value: str, timestamp: int) -> None:\n        if key not in self.store: self.store[key] = []\n        self.store[key].append([value, timestamp])\n\n    def get(self, key: str, timestamp: int) -> str:\n        res = \"\"\n        values = self.store.get(key, [])\n        l, r = 0, len(values) - 1\n        while l <= r:\n            m = (l + r) // 2\n            if values[m][1] <= timestamp:\n                res = values[m][0]\n                l = m + 1\n            else: r = m - 1\n        return res"
    }
  },
  {
    id: "2300", slug: "successful-pairs-of-spells-and-potions", title: "Successful Pairs of Spells/Potions", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    description: "Given spells and potions arrays, return an array pairs where pairs[i] is the number of potions that form a successful pair with the ith spell.",
    examples: [{ input: "spells = [5,1,3], potions = [1,2,3,4,5], success = 7", output: "[4,0,3]" }],
    defaultInput: { spells: [5, 1, 3], potions: [1, 2, 3, 4, 5], success: 7 },
    codes: {
      python: "class Solution:\n    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:\n        potions.sort()\n        res = []\n        for s in spells:\n            l, r = 0, len(potions) - 1\n            idx = len(potions)\n            while l <= r:\n                m = (l + r) // 2\n                if s * potions[m] >= success:\n                    idx = m\n                    r = m - 1\n                else: l = m + 1\n            res.append(len(potions) - idx)\n        return res"
    }
  },
  {
    id: "206", slug: "reverse-linked-list", title: "Reverse Linked List", difficulty: "Easy", diffClass: "difficulty-easy", category: "Linked List",
    description: "Reverse a singly linked list.",
    detailedExplanation: "To reverse a linked list in-place, we use three pointers: 'prev', 'curr', and 'next'. In each step, we save the next node, reverse the current node's pointer to point to 'prev', and then advance 'prev' and 'curr'. By the end, 'prev' will be pointing to the new head of the reversed list.",
    edgeCases: [
      "Empty list (head is null)",
      "List with only one node",
      "List with two nodes",
      "Very long list (recursive approach might cause stack overflow)"
    ],
    examples: [{ input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" }],
    starterCode: "class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        pass"
  },
  {
    id: "21", slug: "merge-two-sorted-lists", title: "Merge Two Sorted Lists", difficulty: "Easy", diffClass: "difficulty-easy", category: "Linked List",
    description: "Merge two sorted linked lists into one sorted list.",
    examples: [{ input: "l1 = [1,2,4], l2 = [1,3,4]", output: "[1,1,2,3,4,4]" }],
    starterCode: "class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        pass"
  },
  {
    id: "141", slug: "linked-list-cycle", title: "Linked List Cycle", difficulty: "Easy", diffClass: "difficulty-easy", category: "Linked List",
    description: "Determine if a linked list has a cycle.",
    examples: [{ input: "head = [3,2,0,-4], pos = 1", output: "true" }],
    starterCode: "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        pass"
  },
  {
    id: "143", slug: "reorder-list", title: "Reorder List", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    description: "Reorder the list such that it follows: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...",
    examples: [{ input: "head = [1,2,3,4]", output: "[1,4,2,3]" }],
    starterCode: "class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        pass"
  },
  {
    id: "19", slug: "remove-nth-node-from-end-of-list", title: "Remove Nth Node From End", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    description: "Remove the nth node from the end of the list and return its head.",
    examples: [{ input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" }],
    starterCode: "class Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        pass"
  },
  {
    id: "138", slug: "copy-list-with-random-pointer", title: "Copy List with Random Pointer", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    description: "A deep copy of a list where each node has a random pointer.",
    examples: [{ input: "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]", output: "[[7,null],[13,0],[11,4],[10,2],[1,0]]" }],
    starterCode: "class Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        pass"
  },

  {
    id: "2", slug: "add-two-numbers", title: "Add Two Numbers", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    description: "Add two numbers represented by linked lists in reverse order.",
    examples: [{ input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" }],
    defaultInput: { l1Nodes: [2, 4, 3], l2Nodes: [5, 6, 4] },
    codes: {
      python: "class Solution:\n    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode()\n        cur = dummy\n        carry = 0\n        while l1 or l2 or carry:\n            v1 = l1.val if l1 else 0\n            v2 = l2.val if l2 else 0\n            val = v1 + v2 + carry\n            carry = val // 10\n            val = val % 10\n            cur.next = ListNode(val)\n            cur = cur.next\n            l1 = l1.next if l1 else None\n            l2 = l2.next if l2 else None\n        return dummy.next"
    }
  },
  {
    id: "142", slug: "linked-list-cycle-ii", title: "Linked List Cycle II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    description: "Given a linked list, return the node where the cycle begins. If there is no cycle, return null.",
    examples: [{ input: "head = [3,2,0,-4], pos = 1", output: "tail connects to node index 1" }],
    defaultInput: { nodes: [3, 2, 0, -4], pos: 1 },
    codes: {
      python: "class Solution:\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        slow, fast = head, head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n            if slow == fast:\n                slow = head\n                while slow != fast:\n                    slow = slow.next\n                    fast = fast.next\n                return slow\n        return None"
    }
  },
  {
    id: "160", slug: "intersection-of-two-linked-lists", title: "Intersection of Two Lists", difficulty: "Easy", diffClass: "difficulty-easy", category: "Linked List",
    description: "Find the node at which the intersection of two singly linked lists begins.",
    examples: [{ input: "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3", output: "Reference of node with value 8" }],
    defaultInput: { l1Nodes: [4, 1, 8, 4, 5], l2Nodes: [5, 6, 1, 8, 4, 5] },
    codes: {
      python: "class Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:\n        l1, l2 = headA, headB\n        while l1 != l2:\n            l1 = l1.next if l1 else headB\n            l2 = l2.next if l2 else headA\n        return l1"
    }
  },
  {
    id: "203", slug: "remove-linked-list-elements", title: "Remove Elements", difficulty: "Easy", diffClass: "difficulty-easy", category: "Linked List",
    description: "Remove all elements from a linked list of integers that have value val.",
    examples: [{ input: "head = [1,2,6,3,4,5,6], val = 6", output: "[1,2,3,4,5]" }],
    defaultInput: { nodes: [1, 2, 6, 3, 4, 5, 6], val: 6 },
    codes: {
      python: "class Solution:\n    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:\n        dummy = ListNode(next=head)\n        prev, cur = dummy, head\n        while cur:\n            if cur.val == val:\n                prev.next = cur.next\n            else:\n                prev = cur\n            cur = cur.next\n        return dummy.next"
    }
  },
  {
    id: "234", slug: "palindrome-linked-list", title: "Palindrome Linked List", difficulty: "Easy", diffClass: "difficulty-easy", category: "Linked List",
    description: "Given the head of a singly linked list, return true if it is a palindrome.",
    examples: [{ input: "head = [1,2,2,1]", output: "true" }],
    defaultInput: { nodes: [1, 2, 2, 1] },
    codes: {
      python: "class Solution:\n    def isPalindrome(self, head: Optional[ListNode]) -> bool:\n        # 1. Find the middle node\n        fast = head\n        slow = head\n        while fast and fast.next:\n            fast = fast.next.next\n            slow = slow.next\n        # 2. Reverse the second half\n        prev = None\n        while slow:\n            tmp = slow.next\n            slow.next = prev\n            prev = slow\n            slow = tmp\n        # 3. Check palindrome\n        left, right = head, prev\n        while right:\n            if left.val != right.val: return False\n            left = left.next\n            right = right.next\n        return True"
    }
  },

  {
    id: "328", slug: "odd-even-linked-list", title: "Odd Even Linked List", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    description: "Group all odd nodes together followed by the even nodes.",
    examples: [{ input: "head = [1,2,3,4,5]", output: "[1,3,5,2,4]" }],
    defaultInput: { nodes: [1, 2, 3, 4, 5] },
    codes: {
      python: "class Solution:\n    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        if not head: return None\n        odd = head\n        even = head.next\n        evenHead = even\n        while even and even.next:\n            odd.next = even.next\n            odd = odd.next\n            even.next = odd.next\n            even = even.next\n        odd.next = evenHead\n        return head"
    }
  },
  {
    id: "148", slug: "sort-list", title: "Sort List", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    description: "Sort a linked list in O(n log n) time using constant space complexity.",
    examples: [{ input: "head = [4,2,1,3]", output: "[1,2,3,4]" }],
    defaultInput: { nodes: [4, 2, 1, 3] },
    codes: {
      python: "class Solution:\n    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        if not head or not head.next: return head\n        # split the list into two halves\n        left = head\n        right = self.getMid(head)\n        tmp = right.next\n        right.next = None\n        right = tmp\n        left = self.sortList(left)\n        right = self.sortList(right)\n        return self.merge(left, right)\n\n    def getMid(self, head):\n        slow, fast = head, head.next\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n        return slow\n\n    def merge(self, list1, list2):\n        dummy = ListNode()\n        tail = dummy\n        while list1 and list2:\n            if list1.val < list2.val:\n                tail.next = list1\n                list1 = list1.next\n            else:\n                tail.next = list2\n                list2 = list2.next\n            tail = tail.next\n        if list1: tail.next = list1\n        if list2: tail.next = list2\n        return dummy.next"
    }
  },
  {
    id: "23", slug: "merge-k-sorted-lists", title: "Merge k Sorted Lists", difficulty: "Hard", diffClass: "difficulty-hard", category: "Linked List",
    description: "Merge k sorted linked lists and return it as one sorted list.",
    examples: [{ input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }],
    defaultInput: { lNodes: [[1, 4, 5], [1, 3, 4], [2, 6]] },
    codes: {
      python: "class Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        if not lists or len(lists) == 0: return None\n        while len(lists) > 1:\n            mergedLists = []\n            for i in range(0, len(lists), 2):\n                l1 = lists[i]\n                l2 = lists[i + 1] if (i + 1) < len(lists) else None\n                mergedLists.append(self.mergeList(l1, l2))\n            lists = mergedLists\n        return lists[0]\n\n    def mergeList(self, l1, l2):\n        dummy = ListNode()\n        tail = dummy\n        while l1 and l2:\n            if l1.val < l2.val:\n                tail.next = l1\n                l1 = l1.next\n            else:\n                tail.next = l2\n                l2 = l2.next\n            tail = tail.next\n        if l1: tail.next = l1\n        if l2: tail.next = l2\n        return dummy.next"
    }
  },
  {
    id: "25", slug: "reverse-nodes-in-k-group", title: "Reverse Nodes in k-Group", difficulty: "Hard", diffClass: "difficulty-hard", category: "Linked List",
    description: "Reverse the nodes of a linked list k at a time and return its modified list.",
    examples: [{ input: "head = [1,2,3,4,5], k = 2", output: "[2,1,4,3,5]" }],
    defaultInput: { nodes: [1, 2, 3, 4, 5], k: 2 },
    codes: {
      python: "class Solution:\n    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        dummy = ListNode(0, head)\n        groupPrev = dummy\n        while True:\n            kth = self.getKth(groupPrev, k)\n            if not kth: break\n            groupNext = kth.next\n            # reverse group\n            prev, curr = kth.next, groupPrev.next\n            while curr != groupNext:\n                tmp = curr.next\n                curr.next = prev\n                prev = curr\n                curr = tmp\n            tmp = groupPrev.next\n            groupPrev.next = kth\n            groupPrev = tmp\n        return dummy.next\n\n    def getKth(self, curr, k):\n        while curr and k > 0:\n            curr = curr.next\n            k -= 1\n        return curr"
    }
  },

  // TREES
  {
    id: "226", slug: "invert-binary-tree", title: "Invert Binary Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    description: "Invert a binary tree.",
    examples: [{ input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" }],
    defaultInput: { treeLevels: [[{ val: '4', isActive: true }], [{ val: '2' }, { val: '7' }], [{ val: '1' }, { val: '3' }, { val: '6' }, { val: '9' }]] },
    starterCode: "class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        pass"
  },
  {
    id: "104", slug: "maximum-depth-of-binary-tree", title: "Max Depth of Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    description: "Return the maximum depth of a binary tree.",
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "3" }],
    starterCode: "class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        pass"
  },
  {
    id: "543", slug: "diameter-of-binary-tree", title: "Diameter of Binary Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    description: "The diameter of a binary tree is the length of the longest path between any two nodes.",
    examples: [{ input: "root = [1,2,3,4,5]", output: "3" }],
    starterCode: "class Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        pass"
  },
  {
    id: "110", slug: "balanced-binary-tree", title: "Balanced Binary Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    description: "Determine if a binary tree is height-balanced.",
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "true" }],
    starterCode: "class Solution:\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        pass"
  },
  {
    id: "100", slug: "same-tree", title: "Same Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    description: "Check if two binary trees are the same.",
    examples: [{ input: "p = [1,2,3], q = [1,2,3]", output: "true" }],
    starterCode: "class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        pass"
  },
  {
    id: "572", slug: "subtree-of-another-tree", title: "Subtree of Another Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    description: "Check if one tree is a subtree of another tree.",
    examples: [{ input: "root = [3,4,5,1,2], subRoot = [4,1,2]", output: "true" }],
    starterCode: "class Solution:\n    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\n        pass"
  },
  {
    id: "235", slug: "lowest-common-ancestor-of-a-binary-search-tree", title: "LCA of BST", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Find the lowest common ancestor node of two given nodes in a BST.",
    examples: [{ input: "root = [6,2,8,0,4,7,9], p = 2, q = 8", output: "6" }],
    starterCode: "class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        pass"
  },
  {
    id: "102", slug: "binary-tree-level-order-traversal", title: "Level Order Traversal", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Return the level order traversal of a tree's nodes' values.",
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }],
    starterCode: "class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        pass"
  },

  {
    id: "199", slug: "binary-tree-right-side-view", title: "Binary Tree Right Side View", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
    examples: [{ input: "root = [1,2,3,null,5,null,4]", output: "[1,3,4]" }],
    defaultInput: { treeLevels: [[{ val: '1', isActive: true }], [{ val: '2' }, { val: '3' }], [{ val: 'null' }, { val: '5' }, { val: 'null' }, { val: '4' }]] },
    codes: {
      python: "class Solution:\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\n        res = []\n        q = collections.deque([root])\n        while q:\n            rightNode = None\n            qLen = len(q)\n            for i in range(qLen):\n                node = q.popleft()\n                if node:\n                    rightNode = node\n                    q.append(node.left)\n                    q.append(node.right)\n            if rightNode:\n                res.append(rightNode.val)\n        return res"
    }
  },
  {
    id: "1448", slug: "count-good-nodes-in-binary-tree", title: "Count Good Nodes", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "In a binary tree, a node x is named good if in the path from root to x, there are no nodes with a value greater than x.",
    examples: [{ input: "root = [3,1,4,3,null,1,5]", output: "4" }],
    defaultInput: { treeLevels: [[{ val: '3', isActive: true }], [{ val: '1' }, { val: '4' }], [{ val: '3' }, { val: 'null' }, { val: '1' }, { val: '5' }]] },
    codes: {
      python: "class Solution:\n    def goodNodes(self, root: TreeNode) -> int:\n        def dfs(node, maxVal):\n            if not node: return 0\n            res = 1 if node.val >= maxVal else 0\n            maxVal = max(maxVal, node.val)\n            res += dfs(node.left, maxVal)\n            res += dfs(node.right, maxVal)\n            return res\n        return dfs(root, root.val)"
    }
  },
  {
    id: "98", slug: "validate-binary-search-tree", title: "Validate BST", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Determine if a binary tree is a valid binary search tree (BST).",
    examples: [{ input: "root = [2,1,3]", output: "true" }],
    defaultInput: { treeLevels: [[{ val: '2', isActive: true }], [{ val: '1' }, { val: '3' }]] },
    codes: {
      python: "class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        def valid(node, left, right):\n            if not node: return True\n            if not (left < node.val < right): return False\n            return valid(node.left, left, node.val) and valid(node.right, node.val, right)\n        return valid(root, float(\"-inf\"), float(\"inf\"))"
    }
  },
  {
    id: "230", slug: "kth-smallest-element-in-a-bst", title: "Kth Smallest in BST", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Find the kth smallest element in a binary search tree.",
    examples: [{ input: "root = [3,1,4,null,2], k = 1", output: "1" }],
    defaultInput: { treeLevels: [[{ val: '3', isActive: true }], [{ val: '1' }, { val: '4' }], [{ val: 'null' }, { val: '2' }]], k: 1 },
    codes: {
      python: "class Solution:\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\n        stack = []\n        curr = root\n        while curr or stack:\n            while curr:\n                stack.append(curr)\n                curr = curr.left\n            curr = stack.pop()\n            k -= 1\n            if k == 0: return curr.val\n            curr = curr.right"
    }
  },
  {
    id: "105", slug: "construct-binary-tree-from-preorder-and-inorder-traversal", title: "Build Tree from Pre/Inorder", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Given preorder and inorder traversal of a tree, construct the binary tree.",
    examples: [{ input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]", output: "[3,9,20,null,null,15,7]" }],
    defaultInput: { preorder: [3, 9, 20, 15, 7], inorder: [9, 3, 15, 20, 7] },
    codes: {
      python: "class Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        if not preorder or not inorder: return None\n        root = TreeNode(preorder[0])\n        mid = inorder.index(preorder[0])\n        root.left = self.buildTree(preorder[1 : mid + 1], inorder[:mid])\n        root.right = self.buildTree(preorder[mid + 1 :], inorder[mid + 1 :])\n        return root"
    }
  },
  {
    id: "124", slug: "binary-tree-maximum-path-sum", title: "Binary Tree Max Path Sum", difficulty: "Hard", diffClass: "difficulty-hard", category: "Trees",
    description: "Find the maximum path sum of any non-empty path in a binary tree.",
    examples: [{ input: "root = [-10,9,20,null,null,15,7]", output: "42" }],
    defaultInput: { treeLevels: [[{ val: '-10', isActive: true }], [{ val: '9' }, { val: '20' }], [{ val: 'null' }, { val: 'null' }, { val: '15' }, { val: '7' }]] },
    codes: {
      python: "class Solution:\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\n        res = [root.val]\n        def dfs(node):\n            if not node: return 0\n            leftMax = max(dfs(node.left), 0)\n            rightMax = max(dfs(node.right), 0)\n            res[0] = max(res[0], node.val + leftMax + rightMax)\n            return node.val + max(leftMax, rightMax)\n        dfs(root)\n        return res[0]"
    }
  },
  {
    id: "297", slug: "serialize-and-deserialize-binary-tree", title: "Serialize/Deserialize Tree", difficulty: "Hard", diffClass: "difficulty-hard", category: "Trees",
    description: "Design an algorithm to serialize and deserialize a binary tree.",
    examples: [{ input: "root = [1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]" }],
    defaultInput: { treeLevels: [[{ val: '1', isActive: true }], [{ val: '2' }, { val: '3' }], [{ val: 'null' }, { val: 'null' }, { val: '4' }, { val: '5' }]] },
    codes: {
      python: "class Codec:\n    def serialize(self, root):\n        res = []\n        def dfs(node):\n            if not node:\n                res.append(\"N\")\n                return\n            res.append(str(node.val))\n            dfs(node.left)\n            dfs(node.right)\n        dfs(root)\n        return \",\".join(res)\n\n    def deserialize(self, data):\n        vals = data.split(\",\")\n        self.i = 0\n        def dfs():\n            if vals[self.i] == \"N\":\n                self.i += 1\n                return None\n            node = TreeNode(int(vals[self.i]))\n            self.i += 1\n            node.left = dfs()\n            node.right = dfs()\n            return node\n        return dfs()"
    }
  },

  {
    id: "116", slug: "populating-next-right-pointers-in-each-node", title: "Populating Next Right Pointers", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.",
    examples: [{ input: "root = [1,2,3,4,5,6,7]", output: "[1,#,2,3,#,4,5,6,7,#]" }],
    defaultInput: { treeLevels: [[{ val: '1', isActive: true }], [{ val: '2' }, { val: '3' }], [{ val: '4' }, { val: '5' }, { val: '6' }, { val: '7' }]] },
    codes: {
      python: "class Solution:\n    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':\n        cur, nxt = root, root.left if root else None\n        while cur and nxt:\n            cur.left.next = cur.right\n            if cur.next: cur.right.next = cur.next.left\n            cur = cur.next\n            if not cur:\n                cur = nxt\n                nxt = cur.left\n        return root"
    }
  },
  {
    id: "117", slug: "populating-next-right-pointers-in-each-node-ii", title: "Populating Next Right Pointers II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Populate each next pointer to point to its next right node in any binary tree.",
    examples: [{ input: "root = [1,2,3,4,5,null,7]", output: "[1,#,2,3,#,4,5,7,#]" }],
    defaultInput: { treeLevels: [[{ val: '1', isActive: true }], [{ val: '2' }, { val: '3' }], [{ val: '4' }, { val: '5' }, { val: 'null' }, { val: '7' }]] },
    codes: {
      python: "class Solution:\n    def connect(self, root: 'Node') -> 'Node':\n        if not root: return None\n        q = collections.deque([root])\n        while q:\n            prev = None\n            for i in range(len(q)):\n                curr = q.popleft()\n                if prev: prev.next = curr\n                prev = curr\n                if curr.left: q.append(curr.left)\n                if curr.right: q.append(curr.right)\n        return root"
    }
  },
  {
    id: "129", slug: "sum-root-to-leaf-numbers", title: "Sum Root to Leaf Numbers", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Each root-to-leaf path in the tree represents a number. Return the total sum of all root-to-leaf numbers.",
    examples: [{ input: "root = [1,2,3]", output: "25" }],
    defaultInput: { treeLevels: [[{ val: '1', isActive: true }], [{ val: '2' }, { val: '3' }]] },
    codes: {
      python: "class Solution:\n    def sumNumbers(self, root: Optional[TreeNode]) -> int:\n        def dfs(cur, num):\n            if not cur: return 0\n            num = num * 10 + cur.val\n            if not cur.left and not cur.right: return num\n            return dfs(cur.left, num) + dfs(cur.right, num)\n        return dfs(root, 0)"
    }
  },
  {
    id: "113", slug: "path-sum-ii", title: "Path Sum II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum.",
    examples: [{ input: "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22", output: "[[5,4,11,2],[5,8,4,5]]" }],
    defaultInput: { treeLevels: [[{ val: '5', isActive: true }], [{ val: '4' }, { val: '8' }], [{ val: '11' }, { val: 'null' }, { val: '13' }, { val: '4' }]], target: 22 },
    codes: {
      python: "class Solution:\n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:\n        res = []\n        def dfs(node, curSum, path):\n            if not node: return\n            curSum += node.val\n            path.append(node.val)\n            if not node.left and not node.right and curSum == targetSum:\n                res.append(list(path))\n            dfs(node.left, curSum, path)\n            dfs(node.right, curSum, path)\n            path.pop()\n        dfs(root, 0, [])\n        return res"
    }
  },
  {
    id: "513", slug: "find-bottom-left-tree-value", title: "Find Bottom Left Tree Value", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    description: "Given the root of a binary tree, return the leftmost value in the last row of the tree.",
    examples: [{ input: "root = [2,1,3]", output: "1" }],
    defaultInput: { treeLevels: [[{ val: '2', isActive: true }], [{ val: '1' }, { val: '3' }]] },
    codes: {
      python: "class Solution:\n    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:\n        q = collections.deque([root])\n        while q:\n            node = q.popleft()\n            if node.right: q.append(node.right)\n            if node.left: q.append(node.left)\n        return node.val"
    }
  },

  // TRIES
  {
    id: "208", slug: "implement-trie-prefix-tree", title: "Implement Trie", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Implement a trie with insert, search, and startsWith methods.",
    examples: [{ input: 'trie.insert("apple"); trie.search("apple");', output: "true" }],
    defaultInput: { words: ["apple", "app", "apricot"] },
    starterCode: "class Trie:\n    def __init__(self):\n        pass"
  },
  {
    id: "211", slug: "design-add-and-search-words-data-structure", title: "Design Word Dictionary", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Add words and search words where '.' can match any letter.",
    examples: [{ input: 'wd.addWord("bad"); wd.search(".ad");', output: "true" }],
    starterCode: "class WordDictionary:\n    def __init__(self):\n        pass"
  },
  {
    id: "212", slug: "word-search-ii", title: "Word Search II", difficulty: "Hard", diffClass: "difficulty-hard", category: "Tries",
    description: "Given a board of characters and a list of words, find all words on the board.",
    examples: [{ input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["eat","oath"]' }],
    starterCode: "class Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        pass"
  },

  {
    id: "1268", slug: "search-suggestions-system", title: "Search Suggestions System", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Design a system that suggests at most three product names from repository after each character of searchWord is typed.",
    examples: [{ input: 'products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"', output: '[["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]' }],
    defaultInput: { words: ["mobile", "mouse", "moneypot", "monitor", "mousepad"], search: "mouse" },
    codes: {
      python: "class Solution:\n    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:\n        res = []\n        products.sort()\n        l, r = 0, len(products) - 1\n        for i in range(len(searchWord)):\n            c = searchWord[i]\n            while l <= r and (len(products[l]) <= i or products[l][i] != c):\n                l += 1\n            while l <= r and (len(products[r]) <= i or products[r][i] != c):\n                r -= 1\n            res.append([])\n            remain = r - l + 1\n            for j in range(min(3, remain)):\n                res[-1].append(products[l + j])\n        return res"
    }
  },
  {
    id: "421", slug: "maximum-xor-of-two-numbers-in-an-array", title: "Maximum XOR of Two Numbers", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.",
    examples: [{ input: "nums = [3,10,5,25,2,8]", output: "28" }],
    defaultInput: { nums: [3, 10, 5, 25, 2, 8] },
    codes: {
      python: "class Solution:\n    def findMaximumXOR(self, nums: List[int]) -> int:\n        L = len(bin(max(nums))) - 2\n        max_xor = 0\n        for i in range(L - 1, -1, -1):\n            max_xor <<= 1\n            curr_xor = max_xor | 1\n            prefixes = {num >> i for num in nums}\n            if any(curr_xor ^ p in prefixes for p in prefixes):\n                max_xor = curr_xor\n        return max_xor"
    }
  },
  {
    id: "677", slug: "map-sum-pairs", title: "Map Sum Pairs", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Design a map that allows you to sum all the values of keys with a given prefix.",
    examples: [{ input: 'mapSum.insert("apple", 3); mapSum.sum("ap")', output: "3" }],
    defaultInput: { operations: [["insert", "apple", 3], ["sum", "ap"]] },
    codes: {
      python: "class MapSum:\n    def __init__(self):\n        self.root = {} # children, valSum\n        self.map = {}\n\n    def insert(self, key: str, val: int) -> None:\n        delta = val - self.map.get(key, 0)\n        self.map[key] = val\n        curr = self.root\n        for c in key:\n            if c not in curr:\n                curr[c] = {\"valSum\": 0}\n            curr = curr[c]\n            curr[\"valSum\"] += delta\n\n    def sum(self, prefix: str) -> int:\n        curr = self.root\n        for c in prefix:\n            if c not in curr:\n                return 0\n            curr = curr[c]\n        return curr[\"valSum\"]"
    }
  },
  {
    id: "648", slug: "replace-words", title: "Replace Words", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Replace words in a sentence with the shortest root that is a prefix of the word.",
    examples: [{ input: 'dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"', output: '"the cat was rat by the bat"' }],
    defaultInput: { dic: ["cat", "bat", "rat"], sentence: "the cattle was rattled by the battery" },
    codes: {
      python: "class Solution:\n    def replaceWords(self, dictionary: List[str], sentence: str) -> str:\n        trie = {}\n        for root in dictionary:\n            curr = trie\n            for c in root:\n                if c not in curr: curr[c] = {}\n                curr = curr[c]\n            curr[\"#\"] = root\n\n        def getRoot(word):\n            curr = trie\n            for c in word:\n                if c not in curr: break\n                curr = curr[c]\n                if \"#\" in curr: return curr[\"#\"]\n            return word\n\n        return \" \".join(map(getRoot, sentence.split()))"
    }
  },
  {
    id: "720", slug: "longest-word-in-dictionary", title: "Longest Word in Dictionary", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Find the longest word in words that can be built one character at a time by other words in words.",
    examples: [{ input: 'words = ["w","wo","wor","worl","world"]', output: '"world"' }],
    defaultInput: { words: ["w", "wo", "wor", "worl", "world"] },
    codes: {
      python: "class Solution:\n    def longestWord(self, words: List[str]) -> str:\n        trie = {}\n        for w in words:\n            curr = trie\n            for c in w:\n                if c not in curr: curr[c] = {}\n                curr = curr[c]\n            curr[\"$\"] = w\n\n        res = \"\"\n        q = collections.deque([trie])\n        while q:\n            curr = q.popleft()\n            for child in curr:\n                if child != \"$\" and \"$\" in curr[child]:\n                    word = curr[child][\"$\"]\n                    if len(word) > len(res) or (len(word) == len(res) and word < res):\n                        res = word\n                    q.append(curr[child])\n        return res"
    }
  },
  {
    id: "1065", slug: "index-pairs-of-a-string", title: "index Pairs of a String", difficulty: "Easy", diffClass: "difficulty-easy", category: "Tries",
    description: "Find all index pairs [i, j] such that the substring s[i...j] is in the list of words.",
    examples: [{ input: 'text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]', output: "[[3,7],[9,13],[10,17]]" }],
    defaultInput: { s: "thestoryofleetcodeandme", words: ["story", "fleet", "leetcode"] },
    codes: {
      python: "class Solution:\n    def indexPairs(self, text: str, words: List[str]) -> List[List[int]]:\n        trie = {}\n        for w in words:\n            curr = trie\n            for c in w:\n                if c not in curr: curr[c] = {}\n                curr = curr[c]\n            curr[\"#\"] = True\n\n        res = []\n        for i in range(len(text)):\n            curr = trie\n            for j in range(i, len(text)):\n                if text[j] not in curr: break\n                curr = curr[text[j]]\n                if \"#\" in curr: res.append([i, j])\n        return res"
    }
  },
  {
    id: "642", slug: "design-search-autocomplete-system", title: "Search Autocomplete System", difficulty: "Hard", diffClass: "difficulty-hard", category: "Tries",
    description: "Design a search autocomplete system for a search engine.",
    examples: [{ input: 'AutocompleteSystem(["i love you", "island", "ironman", "i love leetcode"], [5, 3, 2, 2]); input("i");', output: '["i love you", "island", "i love leetcode"]' }],
    defaultInput: { sentences: ["i love you", "island", "ironman", "i love leetcode"], times: [5, 3, 2, 2] },
    codes: {
      python: "class AutocompleteSystem:\n    def __init__(self, sentences: List[str], times: List[int]):\n        self.trie = {}\n        self.cur_sentence = \"\"\n        for s, t in zip(sentences, times):\n            self.add(s, t)\n\n    def add(self, s, t):\n        curr = self.trie\n        for c in s:\n            if c not in curr: curr[c] = {}\n            curr = curr[c]\n        curr[\"#\"] = curr.get(\"#\", 0) + t\n\n    def input(self, c: str) -> List[str]:\n        if c == \"#\":\n            self.add(self.cur_sentence, 1)\n            self.cur_sentence = \"\"\n            return []\n        self.cur_sentence += c\n        curr = self.trie\n        for char in self.cur_sentence:\n            if char not in curr: return []\n            curr = curr[char]\n        res = []\n        self.dfs(curr, self.cur_sentence, res)\n        res.sort(key=lambda x: (-x[1], x[0]))\n        return [x[0] for x in res[:3]]\n\n    def dfs(self, curr, path, res):\n        if \"#\" in curr: res.append((path, curr[\"#\"]))\n        for c in curr:\n            if c != \"#\": self.dfs(curr[c], path + c, res)"
    }
  },
  {
    id: "703", slug: "kth-largest-element-in-a-stream", title: "Kth Largest element in stream", difficulty: "Easy", diffClass: "difficulty-easy", category: "Heap",
    description: "Design a class to find the kth largest element in a stream.",
    examples: [{ input: '["KthLargest", "add", "add"] \n [[3, [4, 5, 8, 2]], [3], [5]]', output: "[null, 4, 5]" }],
    starterCode: "class KthLargest:\n    def __init__(self, k: int, nums: List[int]):\n        pass"
  },
  {
    id: "1046", slug: "last-stone-weight", title: "Last Stone Weight", difficulty: "Easy", diffClass: "difficulty-easy", category: "Heap",
    description: "Combine stones until at most one is left.",
    examples: [{ input: "stones = [2,7,4,1,8,1]", output: "1" }],
    starterCode: "class Solution:\n    def lastStoneWeight(self, stones: List[int]) -> int:\n        pass"
  },
  {
    id: "973", slug: "k-closest-points-to-origin", title: "K Closest Points to Origin", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Find the k closest points to the origin on a 2D plane.",
    examples: [{ input: "points = [[1,3],[-2,2]], k = 1", output: "[[-2,2]]" }],
    starterCode: "class Solution:\n    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:\n        pass"
  },
  {
    id: "215", slug: "kth-largest-element-in-an-array", title: "Kth Largest Element", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Find the kth largest element in an unsorted array.",
    examples: [{ input: "nums = [3,2,3,1,2,4,5,5,6], k = 4", output: "4" }],
    starterCode: "class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        pass"
  },
  {
    id: "621", slug: "task-scheduler", title: "Task Scheduler", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Find the least number of units of time to finish all tasks given a cooling period n.",
    examples: [{ input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: "8" }],
    starterCode: "class Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        pass"
  },

  {
    id: "355", slug: "design-twitter", title: "Design Twitter", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed.",
    examples: [{ input: 'twitter.postTweet(1, 5); twitter.getNewsFeed(1); twitter.follow(1, 2);', output: "[5]" }],
    defaultInput: { userId: 1, tweets: [[1, 5]], follows: [[1, 2]] },
    codes: {
      python: "class Twitter:\n    def __init__(self):\n        self.count = 0\n        self.tweetMap = collections.defaultdict(list) # userId -> list of [count, tweetId]\n        self.followMap = collections.defaultdict(set) # userId -> set of followeeId\n\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        self.tweetMap[userId].append([self.count, tweetId])\n        self.count -= 1\n\n    def getNewsFeed(self, userId: int) -> List[int]:\n        res = []\n        minHeap = []\n        self.followMap[userId].add(userId)\n        for followeeId in self.followMap[userId]:\n            if followeeId in self.tweetMap:\n                index = len(self.tweetMap[followeeId]) - 1\n                count, tweetId = self.tweetMap[followeeId][index]\n                heapq.heappush(minHeap, [count, tweetId, followeeId, index - 1])\n        while minHeap and len(res) < 10:\n            count, tweetId, followeeId, index = heapq.heappop(minHeap)\n            res.append(tweetId)\n            if index >= 0:\n                count, tweetId = self.tweetMap[followeeId][index]\n                heapq.heappush(minHeap, [count, tweetId, followeeId, index - 1])\n        return res"
    }
  },
  {
    id: "295", slug: "find-median-from-data-stream", title: "Find Median from Data Stream", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "Design a data structure that supports adding integers from a data stream and finding the median of all elements so far.",
    examples: [{ input: 'addNum(1); addNum(2); findMedian();', output: "1.5" }],
    defaultInput: { nums: [1, 2, 3] },
    codes: {
      python: "class MedianFinder:\n    def __init__(self):\n        self.small, self.large = [], []\n\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.small, -1 * num)\n        if self.small and self.large and (-1 * self.small[0]) > self.large[0]:\n            val = -1 * heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        if len(self.small) > len(self.large) + 1:\n            val = -1 * heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        if len(self.large) > len(self.small) + 1:\n            val = heapq.heappop(self.large)\n            heapq.heappush(self.small, -1 * val)\n\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large): return -1 * self.small[0]\n        if len(self.large) > len(self.small): return self.large[0]\n        return (-1 * self.small[0] + self.large[0]) / 2"
    }
  },
  {
    id: "632", slug: "smallest-range-covering-elements-from-k-lists", title: "Smallest Range K Lists", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "Find the smallest range that includes at least one number from each of the k lists.",
    examples: [{ input: "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]", output: "[20,24]" }],
    defaultInput: { lNodes: [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]] },
    codes: {
      python: "class Solution:\n    def smallestRange(self, nums: List[List[int]]) -> List[int]:\n        minHeap = [(row[0], i, 0) for i, row in enumerate(nums)]\n        heapq.heapify(minHeap)\n        res = [float('-inf'), float('inf')]\n        right = max(row[0] for row in nums)\n        while minHeap:\n            left, r, c = heapq.heappop(minHeap)\n            if right - left < res[1] - res[0]:\n                res = [left, right]\n            if c + 1 == len(nums[r]): return res\n            v = nums[r][c + 1]\n            right = max(right, v)\n            heapq.heappush(minHeap, (v, r, c + 1))"
    }
  },
  {
    id: "767", slug: "reorganize-string", title: "Reorganize String", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Rearrange the characters of a string so that any two adjacent characters are not the same.",
    examples: [{ input: 's = "aab"', output: '"aba"' }],
    defaultInput: { s: "aab" },
    codes: {
      python: "class Solution:\n    def reorganizeString(self, s: str) -> str:\n        count = collections.Counter(s)\n        maxHeap = [[-cnt, char] for char, cnt in count.items()]\n        heapq.heapify(maxHeap)\n        prev = None\n        res = \"\"\n        while maxHeap or prev:\n            if not maxHeap and prev: return \"\"\n            cnt, char = heapq.heappop(maxHeap)\n            res += char\n            cnt += 1\n            if prev:\n                heapq.heappush(maxHeap, prev)\n                prev = None\n            if cnt != 0:\n                prev = [cnt, char]\n        return res"
    }
  },
  {
    id: "692", slug: "top-k-frequent-words", title: "Top K Frequent Words", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Given a list of strings words and an integer k, return the k most frequent strings.",
    examples: [{ input: 'words = ["i","love","leetcode","i","love","coding"], k = 2', output: '["i","love"]' }],
    defaultInput: { words: ["i", "love", "leetcode", "i", "love", "coding"], k: 2 },
    codes: {
      python: "class Solution:\n    def topKFrequent(self, words: List[str], k: int) -> List[str]:\n        count = collections.Counter(words)\n        maxHeap = [[-cnt, word] for word, cnt in count.items()]\n        heapq.heapify(maxHeap)\n        res = []\n        for _ in range(k):\n            res.append(heapq.heappop(maxHeap)[1])\n        return res"
    }
  },
  {
    id: "1834", slug: "single-threaded-cpu", title: "Single-Threaded CPU", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Find the order in which the CPU will process the tasks given their enqueue and processing times.",
    examples: [{ input: "tasks = [[1,2],[2,4],[3,2],[4,1]]", output: "[0,2,3,1]" }],
    defaultInput: { tasks: [[1, 2], [2, 4], [3, 2], [4, 1]] },
    codes: {
      python: "class Solution:\n    def getOrder(self, tasks: List[List[int]]) -> List[int]:\n        for i, t in enumerate(tasks): t.append(i)\n        tasks.sort()\n        res, minHeap = [], []\n        i, time = 0, tasks[0][0]\n        while minHeap or i < len(tasks):\n            while i < len(tasks) and time >= tasks[i][0]:\n                heapq.heappush(minHeap, [tasks[i][1], tasks[i][2]])\n                i += 1\n            if not minHeap:\n                time = tasks[i][0]\n            else:\n                procTime, index = heapq.heappop(minHeap)\n                time += procTime\n                res.append(index)\n        return res"
    }
  },
  {
    id: "1425", slug: "constrained-subsequence-sum", title: "Constrained Subsequence Sum", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "Find the maximum sum of a non-empty subsequence of an array such that for every two consecutive integers in the subsequence, their indices in the array differ by at most k.",
    examples: [{ input: "nums = [10,2,-10,5,20], k = 2", output: "37" }],
    defaultInput: { nums: [10, 2, -10, 5, 20], k: 2 },
    codes: {
      python: "class Solution:\n    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:\n        maxHeap = [[-nums[0], 0]]\n        res = nums[0]\n        for i in range(1, len(nums)):\n            while i - maxHeap[0][1] > k:\n                heapq.heappop(maxHeap)\n            curr = max(0, -maxHeap[0][0]) + nums[i]\n            res = max(res, curr)\n            heapq.heappush(maxHeap, [-curr, i])\n        return res"
    }
  },
  {
    id: "857", slug: "minimum-cost-to-hire-k-workers", title: "Min Cost to Hire K Workers", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "Find the least amount of money needed to form a paid group of k workers given their quality and wage expectations.",
    examples: [{ input: "quality = [10,20,5], wage = [70,50,30], k = 2", output: "105.00000" }],
    defaultInput: { quality: [10, 20, 5], wage: [70, 50, 30], k: 2 },
    codes: {
      python: "class Solution:\n    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:\n        res = float('inf')\n        workers = sorted([(w / q, q) for w, q in zip(wage, quality)])\n        maxHeap = []\n        totalQuality = 0\n        for ratio, q in workers:\n            heapq.heappush(maxHeap, -q)\n            totalQuality += q\n            if len(maxHeap) > k:\n                totalQuality += heapq.heappop(maxHeap)\n            if len(maxHeap) == k:\n                res = min(res, ratio * totalQuality)\n        return res"
    }
  },
  {
    id: "502", slug: "ipo", title: "IPO", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "Find the maximum total capital after finishing at most k distinct projects.",
    examples: [{ input: "k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]", output: "4" }],
    defaultInput: { k: 2, w: 0, profits: [1, 2, 3], capital: [0, 1, 1] },
    codes: {
      python: "class Solution:\n    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:\n        maxProfits = []\n        minCapital = [(c, p) for c, p in zip(capital, profits)]\n        heapq.heapify(minCapital)\n        for _ in range(k):\n            while minCapital and minCapital[0][0] <= w:\n                 c, p = heapq.heappop(minCapital)\n                 heapq.heappush(maxProfits, -p)\n            if not maxProfits: break\n            w += -heapq.heappop(maxProfits)\n        return w"
    }
  },
  {
    id: "1405", slug: "longest-happy-string", title: "Longest Happy String", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Find the longest string s such that s contains at most a, b, and c letters and does not contain 'aaa', 'bbb', or 'ccc'.",
    examples: [{ input: "a = 1, b = 1, c = 7", output: '"ccaccbcc"' }],
    defaultInput: { a: 1, b: 1, c: 7 },
    codes: {
      python: "class Solution:\n    def longestDiverseString(self, a: int, b: int, c: int) -> str:\n        res, maxHeap = \"\", []\n        for count, char in [[a, 'a'], [b, 'b'], [c, 'c']]:\n            if count > 0: heapq.heappush(maxHeap, (-count, char))\n        while maxHeap:\n            count, char = heapq.heappop(maxHeap)\n            if len(res) > 1 and res[-1] == res[-2] == char:\n                if not maxHeap: break\n                count2, char2 = heapq.heappop(maxHeap)\n                res += char2\n                count2 += 1\n                if count2 < 0: heapq.heappush(maxHeap, (count2, char2))\n                heapq.heappush(maxHeap, (count, char))\n            else:\n                res += char\n                count += 1\n                if count < 0: heapq.heappush(maxHeap, (count, char))\n        return res"
    }
  },
  {
    id: "78", slug: "subsets", title: "Subsets", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Return all possible subsets (the power set) of unique elements.",
    examples: [{ input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }],
    starterCode: "class Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        pass"
  },
  {
    id: "39", slug: "combination-sum", title: "Combination Sum", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Find all unique combinations in a list of candidates that sum up to a target.",
    examples: [{ input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" }],
    starterCode: "class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        pass"
  },
  {
    id: "46", slug: "permutations", title: "Permutations", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Return all possible permutations of distinct integers.",
    examples: [{ input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }],
    starterCode: "class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        pass"
  },
  {
    id: "90", slug: "subsets-ii", title: "Subsets II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Power set where the input array may contain duplicates.",
    examples: [{ input: "nums = [1,2,2]", output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]" }],
    starterCode: "class Solution:\n    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:\n        pass"
  },
  {
    id: "79", slug: "word-search", title: "Word Search", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Check if a word exists in a grid of characters.",
    examples: [{ input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" }],
    starterCode: "class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        pass"
  },
  {
    id: "131", slug: "palindrome-partitioning", title: "Palindrome Partitioning", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Partition a string such that every substring of the partition is a palindrome.",
    examples: [{ input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]' }],
    starterCode: "class Solution:\n    def partition(self, s: str) -> List[List[str]]:\n        pass"
  },

  {
    id: "17", slug: "letter-combinations-of-a-phone-number", title: "Letter Combinations of Phone Number", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
    examples: [{ input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' }],
    defaultInput: { s: "23" },
    codes: {
      python: "class Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        res = []\n        digitToChar = {\"2\": \"abc\", \"3\": \"def\", \"4\": \"ghi\", \"5\": \"jkl\", \"6\": \"mno\", \"7\": \"pqrs\", \"8\": \"tuv\", \"9\": \"wxyz\"}\n        def backtrack(i, curStr):\n            if len(curStr) == len(digits):\n                res.append(curStr)\n                return\n            for c in digitToChar[digits[i]]:\n                backtrack(i + 1, curStr + c)\n        if digits: backtrack(0, \"\")\n        return res"
    }
  },
  {
    id: "40", slug: "combination-sum-ii", title: "Combination Sum II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Find all unique combinations in a list of candidates where each number may only be used once in the combination.",
    examples: [{ input: "candidates = [10,1,2,7,6,1,5], target = 8", output: "[[1,1,6],[1,2,5],[1,7],[2,6]]" }],
    defaultInput: { nums: [10, 1, 2, 7, 6, 1, 5], target: 8 },
    codes: {
      python: "class Solution:\n    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:\n        candidates.sort()\n        res = []\n        def backtrack(cur, pos, target):\n            if target == 0: res.append(cur[:]); return\n            if target <= 0: return\n            prev = -1\n            for i in range(pos, len(candidates)):\n                if candidates[i] == prev: continue\n                cur.append(candidates[i])\n                backtrack(cur, i + 1, target - candidates[i])\n                cur.pop()\n                prev = candidates[i]\n        backtrack([], 0, target)\n        return res"
    }
  },
  {
    id: "77", slug: "combinations", title: "Combinations", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.",
    examples: [{ input: "n = 4, k = 2", output: "[[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]" }],
    defaultInput: { n: 4, k: 2 },
    codes: {
      python: "class Solution:\n    def combine(self, n: int, k: int) -> List[List[int]]:\n        res = []\n        def backtrack(start, comb):\n            if len(comb) == k:\n                res.append(comb[:])\n                return\n            for i in range(start, n + 1):\n                comb.append(i)\n                backtrack(i + 1, comb)\n                comb.pop()\n        backtrack(1, [])\n        return res"
    }
  },
  {
    id: "51", slug: "n-queens", title: "N-Queens", difficulty: "Hard", diffClass: "difficulty-hard", category: "Backtracking",
    description: "Find all distinct solutions to the n-queens puzzle.",
    examples: [{ input: "n = 4", output: '[[" .Q..","...Q","Q...","..Q. "],["..Q.","Q...","...Q",".Q.."]]' }],
    defaultInput: { n: 4 },
    codes: {
      python: "class Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        col = set()\n        posDiag = set() # (r + c)\n        negDiag = set() # (r - c)\n        res = []\n        board = [[\".\"] * n for _ in range(n)]\n        def backtrack(r):\n            if r == n:\n                copy = [\"\".join(row) for row in board]\n                res.append(copy)\n                return\n            for c in range(n):\n                if c in col or (r + c) in posDiag or (r - c) in negDiag:\n                    continue\n                col.add(c)\n                posDiag.add(r + c)\n                negDiag.add(r - c)\n                board[r][c] = \"Q\"\n                backtrack(r + 1)\n                col.remove(c)\n                posDiag.remove(r + c)\n                negDiag.remove(r - c)\n                board[r][c] = \".\"\n        backtrack(0)\n        return res"
    }
  },
  {
    id: "52", slug: "n-queens-ii", title: "N-Queens II", difficulty: "Hard", diffClass: "difficulty-hard", category: "Backtracking",
    description: "Return the number of distinct solutions to the n-queens puzzle.",
    examples: [{ input: "n = 4", output: "2" }],
    defaultInput: { n: 4 },
    codes: {
      python: "class Solution:\n    def totalNQueens(self, n: int) -> int:\n        col = set()\n        posDiag = set()\n        negDiag = set()\n        res = 0\n        def backtrack(r):\n            if r == n: \n                nonlocal res\n                res += 1\n                return\n            for c in range(n):\n                if c in col or (r + c) in posDiag or (r - c) in negDiag:\n                    continue\n                col.add(c)\n                posDiag.add(r + c)\n                negDiag.add(r - c)\n                backtrack(r + 1)\n                col.remove(c)\n                posDiag.remove(r + c)\n                negDiag.remove(r - c)\n        backtrack(0)\n        return res"
    }
  },
  {
    id: "37", slug: "sudoku-solver", title: "Sudoku Solver", difficulty: "Hard", diffClass: "difficulty-hard", category: "Backtracking",
    description: "Write a program to solve a Sudoku puzzle by filling the empty cells.",
    examples: [{ input: "board = [...]", output: "board = [solved]" }],
    defaultInput: { grid: [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]] },
    codes: {
      python: "class Solution:\n    def solveSudoku(self, board: List[List[str]]) -> None:\n        def isValid(r, c, char):\n            for i in range(9):\n                if board[i][c] == char: return False\n                if board[r][i] == char: return False\n                if board[3 * (r // 3) + i // 3][3 * (c // 3) + i % 3] == char: return False\n            return True\n        def solve():\n            for r in range(9):\n                for c in range(9):\n                    if board[r][c] == \".\":\n                        for char in \"123456789\":\n                            if isValid(r, c, char):\n                                board[r][c] = char\n                                if solve(): return True\n                                board[r][c] = \".\"\n                        return False\n            return True\n        solve()"
    }
  },
  {
    id: "93", slug: "restore-ip-addresses", title: "Restore IP Addresses", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s.",
    examples: [{ input: 's = "25525511135"', output: '["255.255.11.135","255.255.111.35"]' }],
    defaultInput: { s: "25525511135" },
    codes: {
      python: "class Solution:\n    def restoreIpAddresses(self, s: str) -> List[str]:\n        res = []\n        if len(s) > 12: return res\n        def backtrack(i, dots, curIP):\n            if dots == 4 and i == len(s):\n                res.append(curIP[:-1])\n                return\n            if dots > 4: return\n            for j in range(i, min(i + 3, len(s))):\n                if int(s[i:j+1]) < 256 and (i == j or s[i] != \"0\"):\n                    backtrack(j + 1, dots + 1, curIP + s[i:j+1] + \".\")\n        backtrack(0, 0, \"\")\n        return res"
    }
  },
  {
    id: "140", slug: "word-break-ii", title: "Word Break II", difficulty: "Hard", diffClass: "difficulty-hard", category: "Backtracking",
    description: "Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word.",
    examples: [{ input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]', output: '["cats and dog","cat sand dog"]' }],
    defaultInput: { s: "catsanddog", words: ["cat", "cats", "and", "sand", "dog"] },
    codes: {
      python: "class Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:\n        wordSet = set(wordDict)\n        res = []\n        def backtrack(i, cur):\n            if i == len(s):\n                res.append(\" \".join(cur))\n                return\n            for j in range(i, len(s)):\n                w = s[i : j + 1]\n                if w in wordSet:\n                    cur.append(w)\n                    backtrack(j + 1, cur)\n                    cur.pop()\n        backtrack(0, [])\n        return res"
    }
  },
  {
    id: "47", slug: "permutations-ii", title: "Permutations II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Backtracking",
    description: "Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.",
    examples: [{ input: "nums = [1,1,2]", output: "[[1,1,2], [1,2,1], [2,1,1]]" }],
    defaultInput: { nums: [1, 1, 2] },
    codes: {
      python: "class Solution:\n    def permuteUnique(self, nums: List[int]) -> List[List[int]]:\n        res = []\n        perm = []\n        count = { n:0 for n in nums }\n        for n in nums: count[n] += 1\n        def backtrack():\n            if len(perm) == len(nums):\n                res.append(perm[:])\n                return\n            for n in count:\n                if count[n] > 0:\n                    perm.append(n)\n                    count[n] -= 1\n                    backtrack()\n                    count[n] += 1\n                    perm.pop()\n        backtrack()\n        return res"
    }
  },
  {
    id: "200", slug: "number-of-islands", title: "Number of Islands", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Return the number of islands in an m x n binary grid.",
    examples: [{ input: 'grid = [["1","1","0","0","0"],["0","1","0","0","1"]]', output: "2" }],
    starterCode: "class Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        pass"
  },
  {
    id: "133", slug: "clone-graph", title: "Clone Graph", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Clone a connected undirected graph.",
    examples: [{ input: "adjList = [[2,4],[1,3]]", output: "[[2,4],[1,3]]" }],
    starterCode: "class Solution:\n    def cloneGraph(self, node: 'Node') -> 'Node':\n        pass"
  },
  {
    id: "695", slug: "max-area-of-island", title: "Max Area of Island", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find the maximum area of an island in a given grid.",
    examples: [{ input: "grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0]]", output: "6" }],
    starterCode: "class Solution:\n    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:\n        pass"
  },
  {
    id: "417", slug: "pacific-atlantic-water-flow", title: "Pacific Atlantic Water Flow", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find all grid coordinates from which water can flow to both Pacific and Atlantic oceans.",
    examples: [{ input: "heights = [[1,2,2,3,5],[3,2,3,4,4]]", output: "[[0,4],[1,3],[1,4]]" }],
    starterCode: "class Solution:\n    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:\n        pass"
  },
  {
    id: "130", slug: "surrounded-regions", title: "Surrounded Regions", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Capture all regions surrounded by 'X'.",
    examples: [{ input: 'board = [["X","X","X","X"],["X","O","O","X"]]', output: '[["X","X","X","X"],["X","X","X","X"]]' }],
    starterCode: "class Solution:\n    def solve(self, board: List[List[str]]) -> None:\n        pass"
  },
  {
    id: "994", slug: "rotting-oranges", title: "Rotting Oranges", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find the minimum time until no fresh orange is left.",
    examples: [{ input: "grid = [[2,1,1],[1,1,0],[0,1,1]]", output: "4" }],
    starterCode: "class Solution:\n    def orangesRotting(self, grid: List[List[int]]) -> int:\n        pass"
  },

  {
    id: "207", slug: "course-schedule", title: "Course Schedule", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Determine if it is possible to finish all courses given the prerequisites.",
    examples: [{ input: "numCourses = 2, prerequisites = [[1,0]]", output: "true" }],
    defaultInput: { n: 2, edges: [[1, 0]] },
    codes: {
      python: "class Solution:\n    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:\n        preMap = { i:[] for i in range(numCourses) }\n        for crs, pre in prerequisites: preMap[crs].append(pre)\n        visitSet = set()\n        def dfs(crs):\n            if crs in visitSet: return False\n            if preMap[crs] == []: return True\n            visitSet.add(crs)\n            for pre in preMap[crs]:\n                if not dfs(pre): return False\n            visitSet.remove(crs)\n            preMap[crs] = []\n            return True\n        for crs in range(numCourses):\n            if not dfs(crs): return False\n        return True"
    }
  },
  {
    id: "210", slug: "course-schedule-ii", title: "Course Schedule II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Return the ordering of courses you should take to finish all courses.",
    examples: [{ input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]", output: "[0,1,2,3]" }],
    defaultInput: { n: 4, edges: [[1, 0], [2, 0], [3, 1], [3, 2]] },
    codes: {
      python: "class Solution:\n    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:\n        preMap = { i:[] for i in range(numCourses) }\n        for crs, pre in prerequisites: preMap[crs].append(pre)\n        output = []\n        visit, cycle = set(), set()\n        def dfs(crs):\n            if crs in cycle: return False\n            if crs in visit: return True\n            cycle.add(crs)\n            for pre in preMap[crs]:\n                if not dfs(pre): return False\n            cycle.remove(crs)\n            visit.add(crs)\n            output.append(crs)\n            return True\n        for c in range(numCourses):\n            if not dfs(c): return []\n        return output"
    }
  },
  {
    id: "684", slug: "redundant-connection", title: "Redundant Connection", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find an edge that can be removed so that the resulting graph is a tree of n nodes.",
    examples: [{ input: "edges = [[1,2],[1,3],[2,3]]", output: "[2,3]" }],
    defaultInput: { edges: [[1, 2], [1, 3], [2, 3]] },
    codes: {
      python: "class Solution:\n    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:\n        par = [i for i in range(len(edges) + 1)]\n        rank = [1] * (len(edges) + 1)\n        def find(n):\n            p = par[n]\n            while p != par[p]:\n                par[p] = par[par[p]]\n                p = par[p]\n            return p\n        def union(n1, n2):\n            p1, p2 = find(n1), find(n2)\n            if p1 == p2: return False\n            if rank[p1] > rank[p2]:\n                par[p2] = p1\n                rank[p1] += rank[p2]\n            else:\n                par[p1] = p2\n                rank[p2] += rank[p1]\n            return True\n        for n1, n2 in edges:\n            if not union(n1, n2): return [n1, n2]"
    }
  },
  {
    id: "323", slug: "number-of-connected-components-in-an-undirected-graph", title: "Number of Connected Components", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find the number of connected components in an undirected graph.",
    examples: [{ input: "n = 5, edges = [[0,1],[1,2],[3,4]]", output: "2" }],
    defaultInput: { n: 5, edges: [[0, 1], [1, 2], [3, 4]] },
    codes: {
      python: "class Solution:\n    def countComponents(self, n: int, edges: List[List[int]]) -> int:\n        par = [i for i in range(n)]\n        rank = [1] * n\n        def find(n1):\n            res = n1\n            while res != par[res]:\n                par[res] = par[par[res]]\n                res = par[res]\n            return res\n        def union(n1, n2):\n            p1, p2 = find(n1), find(n2)\n            if p1 == p2: return 0\n            if rank[p1] > rank[p2]:\n                par[p2] = p1\n                rank[p1] += rank[p2]\n            else:\n                par[p1] = p2\n                rank[p2] += rank[p1]\n            return 1\n        res = n\n        for n1, n2 in edges: res -= union(n1, n2)\n        return res"
    }
  },
  {
    id: "261", slug: "graph-valid-tree", title: "Graph Valid Tree", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Check if the edges of a given graph make up a valid tree.",
    examples: [{ input: "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]", output: "true" }],
    defaultInput: { n: 5, edges: [[0, 1], [0, 2], [0, 3], [1, 4]] },
    codes: {
      python: "class Solution:\n    def validTree(self, n: int, edges: List[List[int]]) -> bool:\n        if not n: return True\n        adj = { i:[] for i in range(n) }\n        for n1, n2 in edges:\n            adj[n1].append(n2)\n            adj[n2].append(n1)\n        visit = set()\n        def dfs(i, prev):\n            if i in visit: return False\n            visit.add(i)\n            for j in adj[i]:\n                if j == prev: continue\n                if not dfs(j, i): return False\n            return True\n        return dfs(0, -1) and n == len(visit)"
    }
  },
  {
    id: "127", slug: "word-ladder", title: "Word Ladder", difficulty: "Hard", diffClass: "difficulty-hard", category: "Graphs",
    description: "Find the length of the shortest transformation sequence from beginWord to endWord.",
    examples: [{ input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: "5" }],
    defaultInput: { s: "hit", target: "cog", words: ["hot", "dot", "dog", "lot", "log", "cog"] },
    codes: {
      python: "class Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        if endWord not in wordList: return 0\n        nei = collections.defaultdict(list)\n        wordList.append(beginWord)\n        for word in wordList:\n            for j in range(len(word)):\n                pattern = word[:j] + \"*\" + word[j+1:]\n                nei[pattern].append(word)\n        visit = set([beginWord])\n        q = collections.deque([beginWord])\n        res = 1\n        while q:\n            for i in range(len(q)):\n                word = q.popleft()\n                if word == endWord: return res\n                for j in range(len(word)):\n                    pattern = word[:j] + \"*\" + word[j+1:]\n                    for neiWord in nei[pattern]:\n                        if neiWord not in visit:\n                            visit.add(neiWord)\n                            q.append(neiWord)\n            res += 1\n        return 0"
    }
  },
  {
    id: "286", slug: "walls-and-gates", title: "Walls and Gates", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Fill each empty cell with the distance to its nearest gate.",
    examples: [{ input: "rooms = [[2147483647,-1,0,2147483647]]", output: "[[3,-1,0,1]]" }],
    defaultInput: { grid: [[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]] },
    codes: {
      python: "class Solution:\n    def wallsAndGates(self, rooms: List[List[int]]) -> None:\n        ROWS, COLS = len(rooms), len(rooms[0])\n        visit = set()\n        q = collections.deque()\n        for r in range(ROWS):\n            for c in range(COLS):\n                if rooms[r][c] == 0:\n                    q.append((r, c))\n                    visit.add((r, c))\n        dist = 0\n        while q:\n            for i in range(len(q)):\n                r, c = q.popleft()\n                rooms[r][c] = dist\n                for dr, dc in [[1,0], [-1,0], [0,1], [0,-1]]:\n                    nr, nc = r + dr, c + dc\n                    if nr in range(ROWS) and nc in range(COLS) and (nr, nc) not in visit and rooms[nr][nc] != -1:\n                        visit.add((nr, nc))\n                        q.append((nr, nc))\n            dist += 1"
    }
  },
  {
    id: "953", slug: "verifying-an-alien-dictionary", title: "Verifying an Alien Dictionary", difficulty: "Easy", diffClass: "difficulty-easy", category: "Graphs",
    description: "Check if the given words are sorted lexicographically according to the alien order.",
    examples: [{ input: 'words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"', output: "true" }],
    defaultInput: { words: ["hello", "leetcode"], s: "hlabcdefgijkmnopqrstuvwxyz" },
    codes: {
      python: "class Solution:\n    def isAlienSorted(self, words: List[str], order: str) -> bool:\n        orderInd = { c:i for i, c in enumerate(order) }\n        for i in range(len(words) - 1):\n            w1, w2 = words[i], words[i+1]\n            for j in range(len(w1)):\n                if j == len(w2): return False\n                if w1[j] != w2[j]:\n                    if orderInd[w1[j]] > orderInd[w2[j]]: return False\n                    break\n        return True"
    }
  },
  {
    id: "2477", slug: "minimum-fuel-cost-to-report-to-the-capital", title: "Min Fuel Cost to Capital", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find the minimum fuel cost to report to the capital (node 0).",
    examples: [{ input: "roads = [[0,1],[0,2],[0,3]], seats = 5", output: "3" }],
    defaultInput: { edges: [[0, 1], [0, 2], [0, 3]], k: 5 },
    codes: {
      python: "class Solution:\n    def minimumFuelCost(self, roads: List[List[int]], seats: int) -> int:\n        adj = collections.defaultdict(list)\n        for u, v in roads: \n            adj[u].append(v)\n            adj[v].append(u)\n        res = 0\n        def dfs(node, prev):\n            nonlocal res\n            passengers = 1\n            for child in adj[node]:\n                if child != prev:\n                    p = dfs(child, node)\n                    passengers += p\n                    res += math.ceil(p / seats)\n            return passengers\n        dfs(0, -1)\n        return res"
    }
  },
  {
    id: "1584", slug: "min-cost-to-connect-all-points", title: "Min Cost to Connect All Points", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find the minimum cost to connect all points such that there is only one connected component.",
    examples: [{ input: "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]", output: "20" }],
    defaultInput: { edges: [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]] },
    codes: {
      python: "class Solution:\n    def minCostConnectPoints(self, points: List[List[int]]) -> int:\n        N = len(points)\n        adj = { i:[] for i in range(N) }\n        for i in range(N):\n            x1, y1 = points[i]\n            for j in range(i + 1, N):\n                x2, y2 = points[j]\n                dist = abs(x1 - x2) + abs(y1 - y2)\n                adj[i].append([dist, j])\n                adj[j].append([dist, i])\n        res, visit, minH = 0, set(), [[0, 0]]\n        while len(visit) < N:\n            d, i = heapq.heappop(minH)\n            if i in visit: continue\n            res += d\n            visit.add(i)\n            for neiD, nei in adj[i]:\n                if nei not in visit: heapq.heappush(minH, [neiD, nei])\n        return res"
    }
  },
  {
    id: "743", slug: "network-delay-time", title: "Network Delay Time", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find the minimum time it takes for all nodes to receive a signal from a source node.",
    examples: [{ input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2", output: "2" }],
    defaultInput: { edges: [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n: 4, k: 2 },
    codes: {
      python: "class Solution:\n    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:\n        adj = collections.defaultdict(list)\n        for u, v, w in times: adj[u].append((v, w))\n        minH, visit, t = [(0, k)], set(), 0\n        while minH:\n            w1, n1 = heapq.heappop(minH)\n            if n1 in visit: continue\n            visit.add(n1)\n            t = max(t, w1)\n            for n2, w2 in adj[n1]:\n                if n2 not in visit: heapq.heappush(minH, (w1 + w2, n2))\n        return t if len(visit) == n else -1"
    }
  },
  {
    id: "752", slug: "open-the-lock", title: "Open the Lock", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find the minimum total number of turns required to open the lock from '0000' to a target.",
    examples: [{ input: 'deadends = ["0201","0101","0102","1212","2002"], target = "0202"', output: "6" }],
    defaultInput: { words: ["0201", "0101", "0102", "1212", "2002"], target: "0202" },
    codes: {
      python: "class Solution:\n    def openLock(self, deadends: List[str], target: str) -> int:\n        if \"0000\" in deadends: return -1\n        def children(lock):\n            res = []\n            for i in range(4):\n                digit = str((int(lock[i]) + 1) % 10)\n                res.append(lock[:i] + digit + lock[i+1:])\n                digit = str((int(lock[i]) - 1 + 10) % 10)\n                res.append(lock[:i] + digit + lock[i+1:])\n            return res\n        q, visit = collections.deque([(\"0000\", 0)]), set(deadends)\n        while q:\n            lock, turns = q.popleft()\n            if lock == target: return turns\n            for child in children(lock):\n                if child not in visit:\n                    visit.add(child)\n                    q.append((child, turns + 1))\n        return -1"
    }
  },
  {
    id: "787", slug: "cheapest-flights-within-k-stops", title: "Cheapest Flights", difficulty: "Medium", diffClass: "difficulty-medium", category: "Graphs",
    description: "Find the cheapest price from src to dst with at most k stops.",
    examples: [{ input: "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1", output: "200" }],
    defaultInput: { n: 3, edges: [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src: 0, dst: 2, k: 1 },
    codes: {
      python: "class Solution:\n    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:\n        prices = [float(\"inf\")] * n\n        prices[src] = 0\n        for i in range(k + 1):\n            tmpPrices = prices[:]\n            for s, d, p in flights:\n                if prices[s] != float(\"inf\") and prices[s] + p < tmpPrices[d]:\n                    tmpPrices[d] = prices[s] + p\n            prices = tmpPrices\n        return prices[dst] if prices[dst] != float(\"inf\") else -1"
    }
  },
  {
    id: "516", slug: "longest-palindromic-subsequence", title: "Longest Palindromic Subseq", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find the length of the longest palindromic subsequence in s.",
    examples: [{ input: 's = "bbbab"', output: "4" }],
    defaultInput: { s: "bbbab" },
    codes: {
      python: "class Solution:\n    def longestPalindromeSubseq(self, s: str) -> int:\n        dp = [[0] * (len(s) + 1) for _ in range(len(s) + 1)]\n        res = s[::-1]\n        for i in range(len(s) - 1, -1, -1):\n            for j in range(len(s) - 1, -1, -1):\n                if s[i] == res[j]:\n                    dp[i][j] = 1 + dp[i + 1][j + 1]\n                else:\n                    dp[i][j] = max(dp[i + 1][j], dp[i][j + 1])\n        return dp[0][0]"
    }
  },
  {
    id: "518", slug: "coin-change-ii", title: "Coin Change II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Return the number of combinations that make up that amount.",
    examples: [{ input: "amount = 5, coins = [1,2,5]", output: "4" }],
    defaultInput: { amount: 5, nums: [1, 2, 5] },
    codes: {
      python: "class Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        dp = [0] * (amount + 1)\n        dp[0] = 1\n        for coin in coins:\n            for x in range(coin, amount + 1):\n                dp[x] += dp[x - coin]\n        return dp[amount]"
    }
  },
  {
    id: "70", slug: "climbing-stairs", title: "Climbing Stairs", difficulty: "Easy", diffClass: "difficulty-easy", category: "Dynamic Programming",
    description: "Calculate how many distinct ways you can climb n steps.",
    examples: [{ input: "n = 2", output: "2" }],
    starterCode: "class Solution:\n    def climbStairs(self, n: int) -> int:\n        pass"
  },
  {
    id: "746", slug: "min-cost-climbing-stairs", title: "Min Cost Climbing Stairs", difficulty: "Easy", diffClass: "difficulty-easy", category: "Dynamic Programming",
    description: "Find the minimum cost to reach the top of the floor.",
    examples: [{ input: "cost = [10,15,20]", output: "15" }],
    starterCode: "class Solution:\n    def minCostClimbingStairs(self, cost: List[int]) -> int:\n        pass"
  },
  {
    id: "198", slug: "house-robber", title: "House Robber", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find the maximum amount of money you can rob without alerting the police.",
    examples: [{ input: "nums = [1,2,3,1]", output: "4" }],
    starterCode: "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        pass"
  },
  {
    id: "213", slug: "house-robber-ii", title: "House Robber II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "House Robber on a circular street.",
    examples: [{ input: "nums = [2,3,2]", output: "3" }],
    starterCode: "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        pass"
  },
  {
    id: "5", slug: "longest-palindromic-substring", title: "Longest Palindromic Substring", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find the longest palindromic substring in a string.",
    examples: [{ input: 's = "babad"', output: '"bab"' }],
    starterCode: "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        pass"
  },
  {
    id: "322", slug: "coin-change", title: "Coin Change", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Fewest number of coins that you need to make up an amount.",
    examples: [{ input: "coins = [1,2,5], amount = 11", output: "3" }],
    starterCode: "class Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        pass"
  },
  {
    id: "139", slug: "word-break", title: "Word Break", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Check if a string can be segmented into a space-separated sequence of dictionary words.",
    examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" }],
    starterCode: "class Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\n        pass"
  },
  {
    id: "300", slug: "longest-increasing-subsequence", title: "LIS", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find the length of the longest strictly increasing subsequence.",
    examples: [{ input: "nums = [10,9,2,5,3,7,101,18]", output: "4" }],
    starterCode: "class Solution:\n    def lengthOfLIS(self, nums: List[int]) -> int:\n        pass"
  },
  {
    id: "1143", slug: "longest-common-subsequence", title: "LCS", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find the length of the longest common subsequence of two strings.",
    examples: [{ input: 'text1 = "abcde", text2 = "ace"', output: "3" }],
    starterCode: "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        pass"
  },

  {
    id: "152", slug: "maximum-product-subarray", title: "Maximum Product Subarray", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find a contiguous non-empty subarray within an integer array that has the largest product.",
    examples: [{ input: "nums = [2,3,-2,4]", output: "6" }],
    defaultInput: { nums: [2, 3, -2, 4] },
    codes: {
      python: "class Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        res = max(nums)\n        curMin, curMax = 1, 1\n        for n in nums:\n            tmp = curMax * n\n            curMax = max(n * curMax, n * curMin, n)\n            curMin = min(tmp, n * curMin, n)\n            res = max(res, curMax)\n        return res"
    }
  },
  {
    id: "416", slug: "partition-equal-subset-sum", title: "Partition Equal Subset Sum", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Check if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.",
    examples: [{ input: "nums = [1,5,11,5]", output: "true" }],
    defaultInput: { nums: [1, 5, 11, 5] },
    codes: {
      python: "class Solution:\n    def canPartition(self, nums: List[int]) -> bool:\n        if sum(nums) % 2: return False\n        dp = set()\n        dp.add(0)\n        target = sum(nums) // 2\n        for i in range(len(nums) - 1, -1, -1):\n            nextDP = set()\n            for t in dp:\n                if (t + nums[i]) == target: return True\n                nextDP.add(t + nums[i])\n                nextDP.add(t)\n            dp = nextDP\n        return True if target in dp else False"
    }
  },
  {
    id: "91", slug: "decode-ways", title: "Decode Ways", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Determine the total number of ways to decode a string of digits.",
    examples: [{ input: 's = "12"', output: "2" }],
    defaultInput: { s: "12" },
    codes: {
      python: "class Solution:\n    def numDecodings(self, s: str) -> int:\n        dp = { len(s): 1 }\n        def dfs(i):\n            if i in dp: return dp[i]\n            if s[i] == \"0\": return 0\n            res = dfs(i + 1)\n            if i + 1 < len(s) and (s[i] == \"1\" or s[i] == \"2\" and s[i + 1] in \"0123456\"):\n                res += dfs(i + 2)\n            dp[i] = res\n            return res\n        return dfs(0)"
    }
  },
  {
    id: "72", slug: "edit-distance", title: "Edit Distance", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find the minimum number of operations required to convert one word to another.",
    examples: [{ input: 'word1 = "horse", word2 = "ros"', output: "3" }],
    defaultInput: { word1: "horse", word2: "ros" },
    codes: {
      python: "class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        cache = [[float(\"inf\")] * (len(word2) + 1) for _ in range(len(word1) + 1)]\n        for j in range(len(word2) + 1): cache[len(word1)][j] = len(word2) - j\n        for i in range(len(word1) + 1): cache[i][len(word2)] = len(word1) - i\n        for i in range(len(word1) - 1, -1, -1):\n            for j in range(len(word2) - 1, -1, -1):\n                if word1[i] == word2[j]:\n                    cache[i][j] = cache[i + 1][j + 1]\n                else:\n                    cache[i][j] = 1 + min(cache[i + 1][j], cache[i][j + 1], cache[i + 1][j + 1])\n        return cache[0][0]"
    }
  },
  {
    id: "62", slug: "unique-paths", title: "Unique Paths", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find the total number of unique paths to reach the bottom-right corner of a grid.",
    examples: [{ input: "m = 3, n = 7", output: "28" }],
    defaultInput: { m: 3, n: 7 },
    codes: {
      python: "class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        row = [1] * n\n        for i in range(m - 1):\n            newRow = [1] * n\n            for j in range(n - 2, -1, -1):\n                newRow[j] = newRow[j + 1] + row[j]\n            row = newRow\n        return row[0]"
    }
  },
  {
    id: "494", slug: "target-sum", title: "Target Sum", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find the number of ways to assign signs to elements to reach the target sum.",
    examples: [{ input: "nums = [1,1,1,1,1], target = 3", output: "5" }],
    defaultInput: { nums: [1, 1, 1, 1, 1], target: 3 },
    codes: {
      python: "class Solution:\n    def findTargetSumWays(self, nums: List[int], target: int) -> int:\n        dp = {} # (index, total)\n        def backtrack(i, total):\n            if i == len(nums):\n                return 1 if total == target else 0\n            if (i, total) in dp: return dp[i, total]\n            dp[(i, total)] = backtrack(i + 1, total + nums[i]) + backtrack(i + 1, total - nums[i])\n            return dp[(i, total)]\n        return backtrack(0, 0)"
    }
  },

  {
    id: "516", slug: "longest-palindromic-subsequence", title: "Longest Palindromic Subseq", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Find the length of the longest palindromic subsequence in s.",
    examples: [{ input: 's = "bbbab"', output: "4" }],
    defaultInput: { s: "bbbab" },
    codes: {
      python: "class Solution:\n    def longestPalindromeSubseq(self, s: str) -> int:\n        dp = [[0] * (len(s) + 1) for _ in range(len(s) + 1)]\n        res = s[::-1]\n        for i in range(len(s) - 1, -1, -1):\n            for j in range(len(s) - 1, -1, -1):\n                if s[i] == res[j]:\n                    dp[i][j] = 1 + dp[i + 1][j + 1]\n                else:\n                    dp[i][j] = max(dp[i + 1][j], dp[i][j + 1])\n        return dp[0][0]"
    }
  },
  {
    id: "518", slug: "coin-change-ii", title: "Coin Change II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Return the number of combinations that make up that amount.",
    examples: [{ input: "amount = 5, coins = [1,2,5]", output: "4" }],
    defaultInput: { amount: 5, nums: [1, 2, 5] },
    codes: {
      python: "class Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        dp = [0] * (amount + 1)\n        dp[0] = 1\n        for coin in coins:\n            for x in range(coin, amount + 1):\n                dp[x] += dp[x - coin]\n        return dp[amount]"
    }
  },
  {
    id: "97", slug: "interleaving-string", title: "Interleaving String", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Check if s3 is formed by an interleaving of s1 and s2.",
    examples: [{ input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"', output: "true" }],
    defaultInput: { s1: "aabcc", s2: "dbbca", s3: "aadbbcbcac" },
    codes: {
      python: "class Solution:\n    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:\n        if len(s1) + len(s2) != len(s3): return False\n        dp = [[False] * (len(s2) + 1) for _ in range(len(s1) + 1)]\n        dp[len(s1)][len(s2)] = True\n        for i in range(len(s1), -1, -1):\n            for j in range(len(s2), -1, -1):\n                if i < len(s1) and s1[i] == s3[i + j] and dp[i + 1][j]:\n                    dp[i][j] = True\n                if j < len(s2) and s2[j] == s3[i + j] and dp[i][j + 1]:\n                    dp[i][j] = True\n        return dp[0][0]"
    }
  },
  {
    id: "10", slug: "regular-expression-matching", title: "Regular Expression Matching", difficulty: "Hard", diffClass: "difficulty-hard", category: "Dynamic Programming",
    description: "Implement regular expression matching with support for '.' and '*'.",
    examples: [{ input: 's = "aa", p = "a*"', output: "true" }],
    defaultInput: { s: "aa", p: "a*" },
    codes: {
      python: "class Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        cache = {}\n        def dfs(i, j):\n            if (i, j) in cache: return cache[(i, j)]\n            if i >= len(s) and j >= len(p): return True\n            if j >= len(p): return False\n            match = i < len(s) and (s[i] == p[j] or p[j] == \".\")\n            if (j + 1) < len(p) and p[j + 1] == \"*\":\n                cache[(i, j)] = (dfs(i, j + 2) or (match and dfs(i + 1, j)))\n                return cache[(i, j)]\n            if match:\n                cache[(i, j)] = dfs(i + 1, j + 1)\n                return cache[(i, j)]\n            cache[(i, j)] = False\n            return False\n        return dfs(0, 0)"
    }
  },

  // GREEDY
  {
    id: "55", slug: "jump-game", title: "Jump Game", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Check if you are able to reach the last index.",
    examples: [{ input: "nums = [2,3,1,1,4]", output: "true" }],
    defaultInput: { nums: [2, 3, 1, 1, 4] },
    starterCode: "class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        pass"
  },
  {
    id: "45", slug: "jump-game-ii", title: "Jump Game II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Minimum number of jumps to reach the last index.",
    examples: [{ input: "nums = [2,3,1,1,4]", output: "2" }],
    starterCode: "class Solution:\n    def jump(self, nums: List[int]) -> int:\n        pass"
  },
  {
    id: "134", slug: "gas-station", title: "Gas Station", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Find the starting gas station's index if you can travel around the circuit.",
    examples: [{ input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", output: "3" }],
    starterCode: "class Solution:\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\n        pass"
  },
  {
    id: "846", slug: "hand-of-straights", title: "Hand of Straights", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Check if you can rearrange cards into groups of size groupSize.",
    examples: [{ input: "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3", output: "true" }],
    starterCode: "class Solution:\n    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:\n        pass"
  },
  {
    id: "763", slug: "partition-labels", title: "Partition Labels", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Partition string into as many parts as possible so each letter appears in at most one part.",
    examples: [{ input: 's = "ababcbacadefegdehijhklij"', output: "[9,7,8]" }],
    starterCode: "class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        pass"
  },

  {
    id: "455", slug: "assign-cookies", title: "Assign Cookies", difficulty: "Easy", diffClass: "difficulty-easy", category: "Greedy",
    description: "Assign cookies to children such that the number of content children is maximized.",
    examples: [{ input: "g = [1,2,3], s = [1,1]", output: "1" }],
    defaultInput: { g: [1, 2, 3], s: [1, 1] },
    codes: {
      python: "class Solution:\n    def findContentChildren(self, g: List[int], s: List[int]) -> int:\n        g.sort()\n        s.sort()\n        i, j = 0, 0\n        while i < len(g) and j < len(s):\n            if s[j] >= g[i]:\n                i += 1\n            j += 1\n        return i"
    }
  },
  {
    id: "1899", slug: "merge-triplets-to-form-target-triplet", title: "Merge Triplets", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Check if you can form a target triplet by merging existing triplets.",
    examples: [{ input: "triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]", output: "true" }],
    defaultInput: { triplets: [[2, 5, 3], [1, 8, 4], [1, 7, 5]], target: [2, 7, 5] },
    codes: {
      python: "class Solution:\n    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:\n        good = set()\n        for t in triplets:\n            if t[0] > target[0] or t[1] > target[1] or t[2] > target[2]:\n                continue\n            for i, v in enumerate(t):\n                if v == target[i]:\n                    good.add(i)\n        return len(good) == 3"
    }
  },
  {
    id: "678", slug: "valid-parenthesis-string", title: "Valid Parenthesis String", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Check if a string is valid given it contains '(', ')' and '*'.",
    examples: [{ input: 's = "(*)"', output: "true" }],
    defaultInput: { s: "(*)" },
    codes: {
      python: "class Solution:\n    def checkValidString(self, s: str) -> bool:\n        leftMin, leftMax = 0, 0\n        for c in s:\n            if c == \"(\":\n                leftMin, leftMax = leftMin + 1, leftMax + 1\n            elif c == \")\":\n                leftMin, leftMax = leftMin - 1, leftMax - 1\n            else:\n                leftMin, leftMax = leftMin - 1, leftMax + 1\n            if leftMax < 0: return False\n            if leftMin < 0: leftMin = 0\n        return leftMin == 0"
    }
  },
  {
    id: "135", slug: "candy", title: "Candy", difficulty: "Hard", diffClass: "difficulty-hard", category: "Greedy",
    description: "Find the minimum number of candies you must give to children satisfying two constraints.",
    examples: [{ input: "ratings = [1,0,2]", output: "5" }],
    defaultInput: { nums: [1, 0, 2] },
    codes: {
      python: "class Solution:\n    def candy(self, ratings: List[int]) -> int:\n        res = [1] * len(ratings)\n        for i in range(1, len(ratings)):\n            if ratings[i] > ratings[i - 1]:\n                res[i] = res[i - 1] + 1\n        for i in range(len(ratings) - 2, -1, -1):\n            if ratings[i] > ratings[i + 1]:\n                res[i] = max(res[i], res[i + 1] + 1)\n        return sum(res)"
    }
  },
  {
    id: "1326", slug: "minimum-number-of-taps-to-open-to-water-a-garden", title: "Min Taps to Water Garden", difficulty: "Hard", diffClass: "difficulty-hard", category: "Greedy",
    description: "Find the minimum number of taps that can be open to water the garden [0, n].",
    examples: [{ input: "n = 5, ranges = [3,4,1,1,0,0]", output: "1" }],
    defaultInput: { n: 5, nums: [3, 4, 1, 1, 0, 0] },
    codes: {
      python: "class Solution:\n    def minTaps(self, n: int, ranges: List[int]) -> int:\n        max_range = [0] * (n + 1)\n        for i, r in enumerate(ranges):\n            left = max(0, i - r)\n            right = min(n, i + r)\n            max_range[left] = max(max_range[left], right)\n        res, cur_end, next_end = 0, 0, 0\n        for i in range(n):\n            next_end = max(next_end, max_range[i])\n            if i == cur_end:\n                res += 1\n                cur_end = next_end\n            if cur_end >= n: break\n        return res if cur_end >= n else -1"
    }
  },
  {
    id: "435", slug: "non-overlapping-intervals", title: "Non-overlapping Intervals", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
    examples: [{ input: "intervals = [[1,2],[2,3],[3,4],[1,3]]", output: "1" }],
    defaultInput: { edges: [[1, 2], [2, 3], [3, 4], [1, 3]] },
    codes: {
      python: "class Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        intervals.sort()\n        res = 0\n        prevEnd = intervals[0][1]\n        for start, end in intervals[1:]:\n            if start >= prevEnd:\n                prevEnd = end\n            else:\n                res += 1\n                prevEnd = min(end, prevEnd)\n        return res"
    }
  },
  {
    id: "452", slug: "minimum-number-of-arrows-to-burst-balloons", title: "Min Arrows to Burst Balloons", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Find the minimum number of arrows that must be shot to burst all balloons.",
    examples: [{ input: "points = [[10,16],[2,8],[1,6],[7,12]]", output: "2" }],
    defaultInput: { edges: [[10, 16], [2, 8], [1, 6], [7, 12]] },
    codes: {
      python: "class Solution:\n    def findMinArrowShots(self, points: List[List[int]]) -> int:\n        points.sort()\n        res = 1\n        prevEnd = points[0][1]\n        for start, end in points[1:]:\n            if start > prevEnd:\n                res += 1\n                prevEnd = end\n            else:\n                prevEnd = min(prevEnd, end)\n        return res"
    }
  },
  {
    id: "406", slug: "queue-reconstruction-by-height", title: "Queue Reconstruction", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Reconstruct the queue based on pairs of (height, k).",
    examples: [{ input: "people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]", output: "[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]" }],
    defaultInput: { edges: [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]] },
    codes: {
      python: "class Solution:\n    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:\n        people.sort(key=lambda x: (-x[0], x[1]))\n        res = []\n        for p in people: res.insert(p[1], p)\n        return res"
    }
  },
  {
    id: "630", slug: "course-schedule-iii", title: "Course Schedule III", difficulty: "Hard", diffClass: "difficulty-hard", category: "Greedy",
    description: "Find the maximum number of courses that you can take.",
    examples: [{ input: "courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]", output: "3" }],
    defaultInput: { edges: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]] },
    codes: {
      python: "class Solution:\n    def scheduleCourse(self, courses: List[List[int]]) -> int:\n        courses.sort(key=lambda x: x[1])\n        maxHeap = []\n        time = 0\n        for dur, end in courses:\n            heapq.heappush(maxHeap, -dur)\n            time += dur\n            if time > end:\n                time += heapq.heappop(maxHeap)\n        return len(maxHeap)"
    }
  },
  {
    id: "1029", slug: "two-city-scheduling", title: "Two City Scheduling", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Find the minimum cost to fly every person to a city such that n people arrive in each city.",
    examples: [{ input: "costs = [[10,20],[30,200],[400,50],[30,20]]", output: "110" }],
    defaultInput: { edges: [[10, 20], [30, 200], [400, 50], [30, 20]] },
    codes: {
      python: "class Solution:\n    def twoCitySchedCost(self, costs: List[List[int]]) -> int:\n        diffs = []\n        for c1, c2 in costs: diffs.append([c2 - c1, c1, c2])\n        diffs.sort()\n        res = 0\n        for i in range(len(diffs)):\n            if i < len(diffs) // 2: res += diffs[i][2]\n            else: res += diffs[i][1]\n        return res"
    }
  },
  {
    id: "136", slug: "single-number", title: "Single Number", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Find the element that appears only once.",
    examples: [{ input: "nums = [2,2,1]", output: "1" }],
    starterCode: "class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        pass"
  },
  {
    id: "191", slug: "number-of-1-bits", title: "Number of 1 Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Return the number of '1' bits.",
    examples: [{ input: "n = 11", output: "3" }],
    starterCode: "class Solution:\n    def hammingWeight(self, n: int) -> int:\n        pass"
  },
  {
    id: "338", slug: "counting-bits", title: "Counting Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Return an array of the number of 1-bits for each number from 0 to n.",
    examples: [{ input: "n = 2", output: "[0,1,1]" }],
    starterCode: "class Solution:\n    def countBits(self, n: int) -> List[int]:\n        pass"
  },
  {
    id: "190", slug: "reverse-bits", title: "Reverse Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Reverse bits of a given 32 bits unsigned integer.",
    examples: [{ input: "n = 00000010100101000001111010011100", output: "964176192" }],
    starterCode: "class Solution:\n    def reverseBits(self, n: int) -> int:\n        pass"
  },
  {
    id: "268", slug: "missing-number", title: "Missing Number", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Find the only number in the range that is missing from the array.",
    examples: [{ input: "nums = [3,0,1]", output: "2" }],
    starterCode: "class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        pass"
  },

  {
    id: "371", slug: "sum-of-two-integers", title: "Sum of Two Integers", difficulty: "Medium", diffClass: "difficulty-medium", category: "Bit Manipulation",
    description: "Calculate the sum of two integers a and b without using the operators + and -.",
    examples: [{ input: "a = 1, b = 2", output: "3" }],
    defaultInput: { a: 1, b: 2 },
    codes: {
      python: "class Solution:\n    def getSum(self, a: int, b: int) -> int:\n        mask = 0xffffffff\n        while b & mask != 0:\n            a, b = (a ^ b), (a & b) << 1\n        return a & mask if b > 0 else a"
    }
  },
  {
    id: "231", slug: "power-of-two", title: "Power of Two", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Determine if an integer is a power of two.",
    examples: [{ input: "n = 1", output: "true" }],
    defaultInput: { n: 1 },
    codes: {
      python: "class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        return n > 0 and (n & (n - 1)) == 0"
    }
  },
  {
    id: "461", slug: "hamming-distance", title: "Hamming Distance", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Find the number of positions at which the corresponding bits of two integers are different.",
    examples: [{ input: "x = 1, y = 4", output: "2" }],
    defaultInput: { x: 1, y: 4 },
    codes: {
      python: "class Solution:\n    def hammingDistance(self, x: int, y: int) -> int:\n        xor = x ^ y\n        res = 0\n        while xor:\n            res += xor & 1\n            xor >>= 1\n        return res"
    }
  },
  {
    id: "1342", slug: "number-of-steps-to-reduce-a-number-to-zero", title: "Steps to Reduce to Zero", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Find the number of steps to reduce a number to zero by dividing by 2 if even or subtracting 1 if odd.",
    examples: [{ input: "num = 14", output: "6" }],
    defaultInput: { n: 14 },
    codes: {
      python: "class Solution:\n    def numberOfSteps(self, num: int) -> int:\n        res = 0\n        while num:\n            if num % 2 == 0: num //= 2\n            else: num -= 1\n            res += 1\n        return res"
    }
  },
  {
    id: "1356", slug: "sort-integers-by-the-number-of-1-bits", title: "Sort by 1 Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Sort integers in an array in ascending order by the number of 1's in their binary representation.",
    examples: [{ input: "arr = [0,1,2,3,4,5,6,7,8]", output: "[0,1,2,4,8,3,5,6,7]" }],
    defaultInput: { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
    codes: {
      python: "class Solution:\n    def sortByBits(self, arr: List[int]) -> List[int]:\n        arr.sort(key=lambda x: (bin(x).count('1'), x))\n        return arr"
    }
  },
  {
    id: "201", slug: "bitwise-and-of-numbers-range", title: "Bitwise AND of Range", difficulty: "Medium", diffClass: "difficulty-medium", category: "Bit Manipulation",
    description: "Return the bitwise AND of all numbers in the range [left, right], inclusive.",
    examples: [{ input: "left = 5, right = 7", output: "4" }],
    defaultInput: { l: 5, r: 7 },
    codes: {
      python: "class Solution:\n    def rangeBitwiseAnd(self, left: int, right: int) -> int:\n        i = 0\n        while left != right:\n            left >>= 1\n            right >>= 1\n            i += 1\n        return left << i"
    }
  },
  {
    id: "1720", slug: "decode-xored-array", title: "Decode XORed Array", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Given an encoded array and a first element, decode the original array.",
    examples: [{ input: "encoded = [1,2,3], first = 1", output: "[1,0,2,1]" }],
    defaultInput: { nums: [1, 2, 3], n: 1 },
    codes: {
      python: "class Solution:\n    def decode(self, encoded: List[int], first: int) -> List[int]:\n        res = [first]\n        for x in encoded: res.append(res[-1] ^ x)\n        return res"
    }
  },
  {
    id: "693", slug: "binary-number-with-alternating-bits", title: "Alternating Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Check if a positive integer has alternating bits.",
    examples: [{ input: "n = 5", output: "true" }],
    defaultInput: { n: 5 },
    codes: {
      python: "class Solution:\n    def hasAlternatingBits(self, n: int) -> bool:\n        n = n ^ (n >> 1)\n        return (n & (n + 1)) == 0"
    }
  },
  {
    id: "137", slug: "single-number-ii", title: "Single Number II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Bit Manipulation",
    description: "Find the element that appears only once, while all others appear three times.",
    examples: [{ input: "nums = [2,2,3,2]", output: "3" }],
    defaultInput: { nums: [2, 2, 3, 2] },
    codes: {
      python: "class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        ones, twos = 0, 0\n        for n in nums:\n            ones = (ones ^ n) & (~twos)\n            twos = (twos ^ n) & (~ones)\n        return ones"
    }
  },
  {
    id: "260", slug: "single-number-iii", title: "Single Number III", difficulty: "Medium", diffClass: "difficulty-medium", category: "Bit Manipulation",
    description: "Find the two elements that appear only once, while all others appear exactly twice.",
    examples: [{ input: "nums = [1,2,1,3,2,5]", output: "[3,5]" }],
    defaultInput: { nums: [1, 2, 1, 3, 2, 5] },
    codes: {
      python: "class Solution:\n    def singleNumber(self, nums: List[int]) -> List[int]:\n        xor = 0\n        for n in nums: xor ^= n\n        diff = xor & -xor\n        a, b = 0, 0\n        for n in nums:\n            if n & diff: a ^= n\n            else: b ^= n\n        return [a, b]"
    }
  },
  {
    id: "48", slug: "rotate-image", title: "Rotate Image", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Rotate an n x n 2D matrix by 90 degrees.",
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" }],
    starterCode: "class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        pass"
  },
  {
    id: "54", slug: "spiral-matrix", title: "Spiral Matrix", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Return all elements of the matrix in spiral order.",
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }],
    starterCode: "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        pass"
  },
  {
    id: "73", slug: "set-matrix-zeroes", title: "Set Matrix Zeroes", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "If an element is 0, set its entire row and column to 0's.",
    examples: [{ input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" }],
    starterCode: "class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        pass"
  },
  {
    id: "202", slug: "happy-number", title: "Happy Number", difficulty: "Easy", diffClass: "difficulty-easy", category: "Math",
    description: "Determine if a number is happy.",
    examples: [{ input: "n = 19", output: "true" }],
    starterCode: "class Solution:\n    def isHappy(self, n: int) -> bool:\n        pass"
  },
  {
    id: "66", slug: "plus-one", title: "Plus One", difficulty: "Easy", diffClass: "difficulty-easy", category: "Math",
    description: "Increment the large integer by one and return the resulting array of digits.",
    examples: [{ input: "digits = [1,2,3]", output: "[1,2,4]" }],
    defaultInput: { nums: [1, 2, 3] },
    starterCode: "class Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        pass"
  },
  {
    id: "50", slug: "powx-n", title: "Pow(x, n)", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
    examples: [{ input: "x = 2.00000, n = 10", output: "1024.00000" }],
    defaultInput: { x: 2, n: 10 },
    codes: {
      python: "class Solution:\n    def myPow(self, x: float, n: int) -> float:\n        def helper(x, n):\n            if x == 0: return 0\n            if n == 0: return 1\n            res = helper(x, n // 2)\n            res = res * res\n            return x * res if n % 2 else res\n        res = helper(x, abs(n))\n        return res if n >= 0 else 1 / res"
    }
  },
  {
    id: "43", slug: "multiply-strings", title: "Multiply Strings", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.",
    examples: [{ input: 'num1 = "2", num2 = "3"', output: '"6"' }],
    defaultInput: { s1: "2", s2: "3" },
    codes: {
      python: "class Solution:\n    def multiply(self, num1: str, num2: str) -> str:\n        if \"0\" in [num1, num2]: return \"0\"\n        res = [0] * (len(num1) + len(num2))\n        num1, num2 = num1[::-1], num2[::-1]\n        for i1 in range(len(num1)):\n            for i2 in range(len(num2)):\n                digit = int(num1[i1]) * int(num2[i2])\n                res[i1 + i2] += digit\n                res[i1 + i2 + 1] += (res[i1 + i2] // 10)\n                res[i1 + i2] %= 10\n        skip, res = 0, res[::-1]\n        while skip < len(res) and res[skip] == 0: skip += 1\n        res = map(str, res[skip:])\n        return \"\".join(res)"
    }
  },
  {
    id: "2013", slug: "detect-squares", title: "Detect Squares", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Design an algorithm that adds points from a query stream and counts squares with the added points.",
    examples: [{ input: 'add([3, 10]); add([11, 2]); add([3, 2]); count([11, 10]);', output: "1" }],
    defaultInput: { edges: [[3, 10], [11, 2], [3, 2]], target: [11, 10] },
    codes: {
      python: "class DetectSquares:\n    def __init__(self):\n        self.ptsCount = collections.defaultdict(int)\n        self.pts = []\n\n    def add(self, point: List[int]) -> None:\n        self.ptsCount[tuple(point)] += 1\n        self.pts.append(point)\n\n    def count(self, point: List[int]) -> int:\n        res = 0\n        px, py = point\n        for x, y in self.pts:\n            if (abs(py - y) != abs(px - x)) or x == px or y == py: continue\n            res += self.ptsCount[(x, py)] * self.ptsCount[(px, y)]\n        return res"
    }
  },
  {
    id: "779", slug: "k-th-symbol-in-grammar", title: "K-th Symbol in Grammar", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Find the k-th symbol in the n-th row of a table constructed by replacing 0 with 01 and 1 with 10.",
    examples: [{ input: "n = 2, k = 1", output: "0" }],
    defaultInput: { n: 2, k: 1 },
    codes: {
      python: "class Solution:\n    def kthGrammar(self, n: int, k: int) -> int:\n        cur = 0\n        left, right = 1, 2**(n-1)\n        for _ in range(n - 1):\n            mid = (left + right) // 2\n            if k <= mid:\n                right = mid\n            else:\n                left = mid + 1\n                cur = 0 if cur else 1\n        return cur"
    }
  },
  {
    id: "204", slug: "count-primes", title: "Count Primes", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Given an integer n, return the number of prime numbers that are strictly less than n.",
    examples: [{ input: "n = 10", output: "4" }],
    defaultInput: { n: 10 },
    codes: {
      python: "class Solution:\n    def countPrimes(self, n: int) -> int:\n        if n <= 2: return 0\n        primes = [True] * n\n        primes[0] = primes[1] = False\n        for i in range(2, int(n**0.5) + 1):\n            if primes[i]:\n                for j in range(i*i, n, i):\n                    primes[j] = False\n        return sum(primes)"
    }
  },
  {
    id: "1041", slug: "robot-bounded-in-circle", title: "Robot Bounded In Circle", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Determine if there exists a circle in the plane such that the robot never leaves the circle.",
    examples: [{ input: 'instructions = "GGLLGG"', output: "true" }],
    defaultInput: { s: "GGLLGG" },
    codes: {
      python: "class Solution:\n    def isRobotBounded(self, instructions: str) -> bool:\n        dirX, dirY = 0, 1\n        x, y = 0, 0\n        for d in instructions:\n            if d == \"G\": x, y = x + dirX, y + dirY\n            elif d == \"L\": dirX, dirY = -dirY, dirX\n            else: dirX, dirY = dirY, -dirX\n        return (x == 0 and y == 0) or (dirX, dirY) != (0, 1)"
    }
  },
  {
    id: "858", slug: "mirror-reflection", title: "Mirror Reflection", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Find the number of the receptor that the ray hits first.",
    examples: [{ input: "p = 2, q = 1", output: "2" }],
    defaultInput: { p: 2, q: 1 },
    codes: {
      python: "class Solution:\n    def mirrorReflection(self, p: int, q: int) -> int:\n        while p % 2 == 0 and q % 2 == 0:\n            p //= 2\n            q //= 2\n        if p % 2 == 0: return 2\n        if q % 2 == 0: return 0\n        return 1"
    }
  },
  {
    id: "166", slug: "fraction-to-recurring-decimal", title: "Fraction to Decimal", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.",
    examples: [{ input: "numerator = 1, denominator = 2", output: '"0.5"' }],
    defaultInput: { n: 1, k: 2 },
    codes: {
      python: "class Solution:\n    def fractionToDecimal(self, numerator: int, denominator: int) -> str:\n        if numerator == 0: return \"0\"\n        res = []\n        if (numerator < 0) ^ (denominator < 0): res.append(\"-\")\n        num, den = abs(numerator), abs(denominator)\n        res.append(str(num // den))\n        remainder = num % den\n        if remainder == 0: return \"\".join(res)\n        res.append(\".\")\n        dic = {}\n        while remainder != 0:\n            if remainder in dic:\n                res.insert(dic[remainder], \"(\")\n                res.append(\")\")\n                break\n            dic[remainder] = len(res)\n            remainder *= 10\n            res.append(str(remainder // den))\n            remainder %= den\n        return \"\".join(res)"
    }
  },
  {
    id: "12", slug: "integer-to-roman", title: "Integer to Roman", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Convert an integer to a roman numeral.",
    examples: [{ input: "num = 3", output: '"III"' }],
    defaultInput: { n: 3 },
    codes: {
      python: "class Solution:\n    def intToRoman(self, num: int) -> str:\n        symList = [[\"I\", 1], [\"IV\", 4], [\"V\", 5], [\"IX\", 9], [\"X\", 10], [\"XL\", 40], [\"L\", 50], [\"XC\", 90], [\"C\", 100], [\"CD\", 400], [\"D\", 500], [\"CM\", 900], [\"M\", 1000]]\n        res = \"\"\n        for sym, val in reversed(symList):\n            if num // val:\n                count = num // val\n                res += (sym * count)\n                num = num % val\n        return res"
    }
  },
  {
    id: "13", slug: "roman-to-integer", title: "Roman to Integer", difficulty: "Easy", diffClass: "difficulty-easy", category: "Math",
    description: "Convert a roman numeral to an integer.",
    examples: [{ input: 's = "III"', output: "3" }],
    defaultInput: { s: "III" },
    codes: {
      python: "class Solution:\n    def romanToInt(self, s: str) -> int:\n        roman = {\"I\": 1, \"V\": 5, \"X\": 10, \"L\": 50, \"C\": 100, \"D\": 500, \"M\": 1000}\n        res = 0\n        for i in range(len(s)):\n            if i + 1 < len(s) and roman[s[i]] < roman[s[i + 1]]:\n                res -= roman[s[i]]\n            else:\n                res += roman[s[i]]\n        return res"
    }
  }
];
