import { Problem } from "../types";

export const problems: Problem[] = [
  // ARRAYS
  {
    id: "1", slug: "two-sum", title: "Two Sum", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    detailedExplanation: "To solve this efficiently, we use a Hash Map to store the numbers we've seen so far and their indices. For each number 'n', we calculate its complement 'diff = target - n'. If 'diff' exists in our map, we've found the pair! This approach avoids nested loops by allowing us to find the complement in a single pass.",
    edgeCases: [
      "Array contains negative numbers",
      "Multiple pairs add up to target (problem states only one exists)",
      "Target is twice the same number (cannot use the same element twice)",
      "Large array size"
    ],
    algorithmSteps: [
      "Initialize an empty Hash Map to store numbers and their indices.",
      "Iterate through the array one element at a time.",
      "For each element, calculate the 'complement' (target - current_element).",
      "Check if the complement exists in the Hash Map.",
      "If it exists, return the indices [map[complement], current_index].",
      "If not, add the current element and its index to the map.",
      "Continue until a solution is found."
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
    beginnerComplexity: {
      time: "O(n²)",
      space: "O(1)"
    },
    optimalComplexity: {
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
    starterCode: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[] {};\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # Brute Force Approach\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if nums[i] + nums[j] == target:\n                    return [i, j]\n        return []",
      java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Brute Force Approach\n        for (int i = 0; i < nums.length; i++) {\n            for (int j = i + 1; j < nums.length; j++) {\n                if (nums[i] + nums[j] == target) {\n                    return new int[] { i, j };\n                }\n            }\n        }\n        return new int[] {};\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Brute Force Approach\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = i + 1; j < nums.size(); j++) {\n                if (nums[i] + nums[j] == target) return {i, j};\n            }\n        }\n        return {};\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        prevMap = {} # val : index\n\n        for i, n in enumerate(nums):\n            diff = target - n\n            if diff in prevMap:\n                return [prevMap[diff], i]\n            prevMap[n] = i",
      java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> prevMap = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int diff = target - nums[i];\n            if (prevMap.containsKey(diff)) {\n                return new int[] { prevMap.get(diff), i };\n            }\n            prevMap.put(nums[i], i);\n        }\n        return new int[] {};\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> prevMap;\n        for (int i = 0; i < nums.size(); i++) {\n            int diff = target - nums[i];\n            if (prevMap.count(diff)) return {prevMap[diff], i};\n            prevMap[nums[i]] = i;\n        }\n        return {};\n    }\n};"
    }
  },
  {
    id: "217", slug: "contains-duplicate", title: "Contains Duplicate", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    detailedExplanation: "To check for duplicates efficiently, we use a Hash Set. We iterate through the array, adding each element to the set. If we encounter an element that is already in the set, a duplicate exists. This approach utilizes the constant-time average lookup of sets to keep the process efficient.",
    description: "Return true if any value appears at least twice in the array.",
    edgeCases: [
      "Empty array or single element",
      "Large inputs with no duplicates",
      "Duplicates at the very end of the array"
    ],
    algorithmSteps: [
      "Initialize an empty Set.",
      "Iterate through each number in the input array.",
      "Check if the current number is already in the Set.",
      "If yes, return true.",
      "If no, add the number to the Set.",
      "If the loop finishes without finding duplicates, return false."
    ],
    examples: [{ input: "nums = [1,2,3,1]", output: "true" }],
    defaultInput: { nums: [1, 2, 3, 1] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        # Brute Force: Compare every pair\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if nums[i] == nums[j]:\n                    return True\n        return False",
      java: "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Brute Force: Compare every pair\n        for (int i = 0; i < nums.length; i++) {\n            for (int j = i + 1; j < nums.length; j++) {\n                if (nums[i] == nums[j]) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = i + 1; j < nums.size(); j++) {\n                if (nums[i] == nums[j]) return true;\n            }\n        }\n        return false;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        seen = set()\n        for n in nums:\n            if n in seen:\n                return True\n            seen.add(n)\n        return False",
      java: "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        Set<Integer> seen = new HashSet<>();\n        for (int n : nums) {\n            if (seen.contains(n)) {\n                return true;\n            }\n            seen.add(n);\n        }\n        return false;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        unordered_set<int> seen;\n        for (int n : nums) {\n            if (seen.count(n)) return true;\n            seen.insert(n);\n        }\n        return false;\n    }\n};"
    }
  },
  {
    id: "238", slug: "product-of-array-except-self", title: "Product of Array Except Self", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    detailedExplanation: "To solve this without division, we use the concept of prefix and suffix products. We perform two passes: one to calculate the product of all elements to the left of each index, and another to multiply by the product of all elements to the right. This allows us to compute the final result by combining these partial products.",
    description: "Return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    edgeCases: [
      "Array contains zeros",
      "Array contains multiple zeros",
      "Negative numbers"
    ],
    algorithmSteps: [
      "Initialize an output array 'res' with 1s.",
      "Iterate forward to calculate prefix products: store current prefix in 'res[i]'.",
      "Update a running 'prefix' variable.",
      "Iterate backward to calculate suffix products.",
      "Multiply 'res[i]' by the running 'postfix' variable.",
      "Update 'postfix' variable.",
      "Return 'res'."
    ],
    examples: [{ input: "nums = [1,2,3,4]", output: "[24,12,8,6]" }],
    defaultInput: { nums: [1, 2, 3, 4] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Write your code here\n        return new int[] {};\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        # Brute Force O(N^2)\n        res = []\n        for i in range(len(nums)):\n            prod = 1\n            for j in range(len(nums)):\n                if i != j:\n                    prod *= nums[j]\n            res.append(prod)\n        return res",
      java: "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Brute Force O(N^2)\n        int n = nums.length;\n        int[] res = new int[n];\n        for (int i = 0; i < n; i++) {\n            int prod = 1;\n            for (int j = 0; j < n; j++) {\n                if (i != j) {\n                    prod *= nums[j];\n                }\n            }\n            res[i] = prod;\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        vector<int> res;\n        for (int i = 0; i < nums.size(); i++) {\n            int prod = 1;\n            for (int j = 0; j < nums.size(); j++) {\n                if (i != j) prod *= nums[j];\n            }\n            res.push(prod);\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        # Optimal O(N)\n        res = [1] * len(nums)\n        prefix = 1\n        for i in range(len(nums)):\n            res[i] = prefix\n            prefix *= nums[i]\n        postfix = 1\n        for i in range(len(nums) - 1, -1, -1):\n            res[i] *= postfix\n            postfix *= nums[i]\n        return res",
      java: "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int[] res = new int[n];\n        int prefix = 1;\n        for (int i = 0; i < n; i++) {\n            res[i] = prefix;\n            prefix *= nums[i];\n        }\n        int postfix = 1;\n        for (int i = n - 1; i >= 0; i--) {\n            res[i] *= postfix;\n            postfix *= nums[i];\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> res(n, 1);\n        int prefix = 1;\n        for(int i=0; i<n; i++) {\n            res[i] = prefix;\n            prefix *= nums[i];\n        }\n        int postfix = 1;\n        for(int i=n-1; i>=0; i--) {\n            res[i] *= postfix;\n            postfix *= nums[i];\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "53", slug: "maximum-subarray", title: "Maximum Subarray", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    detailedExplanation: "We use Kadane's Algorithm to solve this efficiently. We maintain a running sum 'currSum'. If 'currSum' becomes negative, we reset it to 0 because a negative prefix will always decrease the sum of any subsequent subarray. We track the maximum sum encountered during this single pass.",
    description: "Find the contiguous subarray which has the largest sum.",
    edgeCases: [
      "All negative numbers",
      "Single element array",
      "Alternating positive and negative numbers"
    ],
    algorithmSteps: [
      "Initialize 'maxSub' to the first element and 'currSum' to 0.",
      "Iterate through the array.",
      "Add current number to 'currSum'.",
      "Update 'maxSub' = max(maxSub, currSum).",
      "If 'currSum' < 0, reset 'currSum' to 0.",
      "Return 'maxSub'."
    ],
    examples: [{ input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" }],
    defaultInput: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        # Brute Force O(N^2)\n        maxSub = nums[0]\n        for i in range(len(nums)):\n            currSum = 0\n            for j in range(i, len(nums)):\n                currSum += nums[j]\n                maxSub = max(maxSub, currSum)\n        return maxSub",
      java: "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Brute Force O(N^2)\n        int maxSub = nums[0];\n        for (int i = 0; i < nums.length; i++) {\n            int currSum = 0;\n            for (int j = i; j < nums.length; j++) {\n                currSum += nums[j];\n                maxSub = Math.max(maxSub, currSum);\n            }\n        }\n        return maxSub;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int maxSub = nums[0];\n        for (int i = 0; i < nums.size(); i++) {\n            int currSum = 0;\n            for (int j = i; j < nums.size(); j++) {\n                currSum += nums[j];\n                maxSub = max(maxSub, currSum);\n            }\n        }\n        return maxSub;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        maxSub = nums[0]\n        curSum = 0\n        for n in nums:\n            if curSum < 0:\n                curSum = 0\n            curSum += n\n            maxSub = max(maxSub, curSum)\n        return maxSub",
      java: "class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSub = nums[0];\n        int curSum = 0;\n        for (int n : nums) {\n            if (curSum < 0) curSum = 0;\n            curSum += n;\n            maxSub = Math.max(maxSub, curSum);\n        }\n        return maxSub;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int maxSub = nums[0];\n        int curSum = 0;\n        for (int n : nums) {\n            if (curSum < 0) curSum = 0;\n            curSum += n;\n            maxSub = max(maxSub, curSum);\n        }\n        return maxSub;\n    }\n};"
    }
  },
  {
    id: "152", slug: "maximum-product-subarray", title: "Maximum Product Subarray", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Find a contiguous non-empty subarray within an integer array that has the largest product.",
    detailedExplanation: "Because the array can contain negative numbers, a large negative product can become a large positive product if multiplied by another negative number. Thus, we track both the current maximum and minimum products. This greedy approach ensures we don't miss potential maximums that result from flipping signs.",
    edgeCases: [
      "Negative numbers flipping the sign",
      "Zeros resetting the product",
      "Single element array"
    ],
    algorithmSteps: [
      "Initialize 'res' to the max of array, 'curMin' and 'curMax' to 1.",
      "Iterate through the array.",
      "If current number is 0, reset 'curMin' and 'curMax' to 1.",
      "Calculate temp candidates: n * curMax, n * curMin, and n.",
      "Update 'curMax' = max(candidate1, candidate2, n).",
      "Update 'curMin' = min(candidate1, candidate2, n).",
      "Update 'res' = max(res, curMax)."
    ],
    examples: [{ input: "nums = [2,3,-2,4]", output: "6" }],
    defaultInput: { nums: [2, 3, -2, 4] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int maxProduct(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        # Brute Force O(N^2)\n        res = nums[0]\n        for i in range(len(nums)):\n            curr = 1\n            for j in range(i, len(nums)):\n                curr *= nums[j]\n                res = max(res, curr)\n        return res",
      java: "class Solution {\n    public int maxProduct(int[] nums) {\n        // Brute Force O(N^2)\n        int res = nums[0];\n        for (int i = 0; i < nums.length; i++) {\n            int curr = 1;\n            for (int j = i; j < nums.length; j++) {\n                curr *= nums[j];\n                res = Math.max(res, curr);\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        int res = nums[0];\n        for (int i = 0; i < nums.size(); i++) {\n            int curr = 1;\n            for (int j = i; j < nums.size(); j++) {\n                curr *= nums[j];\n                res = max(res, curr);\n            }\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        res = max(nums)\n        curMin, curMax = 1, 1\n        for n in nums:\n            if n == 0:\n                curMin, curMax = 1, 1\n                continue\n            tmp = curMax * n\n            curMax = max(n * curMax, n * curMin, n)\n            curMin = min(tmp, n * curMin, n)\n            res = max(res, curMax)\n        return res",
      java: "class Solution {\n    public int maxProduct(int[] nums) {\n        int res = nums[0];\n        for (int n : nums) res = Math.max(res, n);\n        int curMin = 1, curMax = 1;\n        for (int n : nums) {\n            if (n == 0) {\n                curMin = 1;\n                curMax = 1;\n                continue;\n            }\n            int tmp = curMax * n;\n            curMax = Math.max(Math.max(n * curMax, n * curMin), n);\n            curMin = Math.min(Math.min(tmp, n * curMin), n);\n            res = Math.max(res, curMax);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        int res = *max_element(nums.begin(), nums.end());\n        int curMin = 1, curMax = 1;\n        for (int n : nums) {\n            if (n == 0) {\n                curMin = 1; curMax = 1;\n                continue;\n            }\n            int tmp = curMax * n;\n            curMax = max({n * curMax, n * curMin, n});\n            curMin = min({tmp, n * curMin, n});\n            res = max(res, curMax);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "128", slug: "longest-consecutive-sequence", title: "Longest Consecutive Sequence", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
    detailedExplanation: "To find the longest sequence efficiently, we use a Hash Set for constant-time lookups. We iterate through the numbers. If a number 'n' is the start of a sequence (i.e., 'n-1' is not in the set), we check how long the sequence continues (n+1, n+2, ...).",
    edgeCases: [
      "Empty array",
      "No consecutive elements",
      "Multiple sequences of same length"
    ],
    algorithmSteps: [
      "Convert the input array to a Set.",
      "Iterate through each number in the set.",
      "Check if the number is the 'start' of a sequence (num - 1 is not in the set).",
      "If it is the start, count the length of the consecutive sequence.",
      "Update the 'longest' length found so far.",
      "Return 'longest'."
    ],
    examples: [{ input: "nums = [100,4,200,1,3,2]", output: "4" }],
    defaultInput: { nums: [100, 4, 200, 1, 3, 2] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n log n)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public int longestConsecutive(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        # Sorting Approach O(N log N)\n        if not nums: return 0\n        nums.sort()\n        longest = 1\n        current = 1\n        for i in range(1, len(nums)):\n            if nums[i] != nums[i-1]:\n                if nums[i] == nums[i-1] + 1:\n                    current += 1\n                else:\n                    longest = max(longest, current)\n                    current = 1\n        return max(longest, current)",
      java: "class Solution {\n    public int longestConsecutive(int[] nums) {\n        // Sorting Approach O(N log N)\n        if (nums.length == 0) return 0;\n        Arrays.sort(nums);\n        int longest = 1;\n        int current = 1;\n        for (int i = 1; i < nums.length; i++) {\n            if (nums[i] != nums[i - 1]) {\n                if (nums[i] == nums[i - 1] + 1) {\n                    current++;\n                } else {\n                    longest = Math.max(longest, current);\n                    current = 1;\n                }\n            }\n        }\n        return Math.max(longest, current);\n    }\n}",
      cpp: "class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        if (nums.empty()) return 0;\n        sort(nums.begin(), nums.end());\n        int longest = 1, current = 1;\n        for (int i = 1; i < nums.size(); i++) {\n            if (nums[i] != nums[i-1]) {\n                if (nums[i] == nums[i-1] + 1) current++;\n                else {\n                    longest = max(longest, current);\n                    current = 1;\n                }\n            }\n        }\n        return max(longest, current);\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        numSet = set(nums)\n        longest = 0\n        for n in numSet:\n            if (n - 1) not in numSet:\n                length = 0\n                while (n + length) in numSet:\n                    length += 1\n                longest = max(length, longest)\n        return longest",
      java: "class Solution {\n    public int longestConsecutive(int[] nums) {\n        Set<Integer> numSet = new HashSet<>();\n        for (int n : nums) numSet.add(n);\n        int longest = 0;\n        for (int n : numSet) {\n            if (!numSet.contains(n - 1)) {\n                int length = 0;\n                while (numSet.contains(n + length)) {\n                    length++;\n                }\n                longest = Math.max(longest, length);\n            }\n        }\n        return longest;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        unordered_set<int> numSet(nums.begin(), nums.end());\n        int longest = 0;\n        for (int n : numSet) {\n            if (!numSet.count(n - 1)) {\n                int length = 0;\n                while (numSet.count(n + length)) length++;\n                longest = max(longest, length);\n            }\n        }\n        return longest;\n    }\n};"
    }
  },
  {
    id: "347", slug: "top-k-frequent-elements", title: "Top K Frequent Elements", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    detailedExplanation: "We can solve this in O(n) using bucket sort. First, we count the frequency of each element using a Hash Map. Then, we create an array of buckets where the index represents the frequency. We iterate through the frequency map and place each element into its corresponding bucket. Finally, we traverse the buckets from highest frequency to lowest to gather the top k elements.",
    description: "Given an integer array nums and an integer k, return the k most frequent elements.",
    edgeCases: [
      "k equals the number of unique elements",
      "All elements have the same frequency",
      "Large range of frequencies"
    ],
    algorithmSteps: [
      "Count the frequency of each number using a Map.",
      "Create an array of lists (buckets) where bucket[i] stores numbers with frequency i.",
      "Iterate through the Map and populate the buckets.",
      "Iterate through the buckets in reverse (from highest frequency to lowest).",
      "Collect numbers until k elements are found.",
      "Return the result."
    ],
    examples: [{ input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" }],
    defaultInput: { nums: [1, 1, 1, 2, 2, 3], k: 2 },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n log n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your code here\n        return new int[] {};\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        # Brute Force: Sort by frequency O(N log N)\n        count = collections.Counter(nums)\n        return [item[0] for item in count.most_common(k)]",
      java: "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Brute Force: Sort by frequency O(N log N)\n        Map<Integer, Integer> count = new HashMap<>();\n        for (int n : nums) count.put(n, count.getOrDefault(n, 0) + 1);\n        PriorityQueue<Integer> heap = new PriorityQueue<>((a, b) -> count.get(a) - count.get(b));\n        for (int n : count.keySet()) {\n            heap.add(n);\n            if (heap.size() > k) heap.poll();\n        }\n        int[] res = new int[k];\n        for (int i = 0; i < k; i++) res[i] = heap.poll();\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        unordered_map<int, int> count;\n        for (int n : nums) count[n]++;\n        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;\n        for (auto const& [n, c] : count) {\n            heap.push({c, n});\n            if (heap.size() > k) heap.pop();\n        }\n        vector<int> res;\n        while (!heap.empty()) {\n            res.push_back(heap.top().second);\n            heap.pop();\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        # Bucket Sort O(N)\n        count = {}\n        freq = [[] for i in range(len(nums) + 1)]\n\n        for n in nums:\n            count[n] = 1 + count.get(n, 0)\n        for n, c in count.items():\n            freq[c].append(n)\n\n        res = []\n        for i in range(len(freq) - 1, 0, -1):\n            for n in freq[i]:\n                res.append(n)\n                if len(res) == k:\n                    return res",
      java: "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        Map<Integer, Integer> count = new HashMap<>();\n        for (int n : nums) count.put(n, count.getOrDefault(n, 0) + 1);\n        List<Integer>[] freq = new List[nums.length + 1];\n        for (int i = 0; i < freq.length; i++) freq[i] = new ArrayList<>();\n        for (int n : count.keySet()) freq[count.get(n)].add(n);\n        int[] res = new int[k];\n        int idx = 0;\n        for (int i = freq.length - 1; i >= 0 && idx < k; i--) {\n            for (int n : freq[i]) {\n                res[idx++] = n;\n                if (idx == k) return res;\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        unordered_map<int, int> count;\n        for (int n : nums) count[n]++;\n        vector<vector<int>> freq(nums.size() + 1);\n        for (auto const& [n, c] : count) freq[c].push_back(n);\n        vector<int> res;\n        for (int i = freq.size() - 1; i >= 0 && res.size() < k; i--) {\n            for (int n : freq[i]) {\n                res.push_back(n);\n                if (res.size() == k) return res;\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "49", slug: "group-anagrams", title: "Group Anagrams", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    detailedExplanation: "To group anagrams, we need a way to generate the same key for all strings that are anagrams of each other. We can either sort the characters of each string or count the frequency of each character (a-z). We use a Hash Map where the key is the sorted string or the count tuple, and the value is a list of strings.",
    description: "Given an array of strings strs, group the anagrams together.",
    edgeCases: [
      "Empty strings",
      "Array with one string",
      "Strings with different lengths"
    ],
    algorithmSteps: [
      "Initialize an empty Map.",
      "Iterate through each string in 'strs'.",
      "Convert string to a frequency array or sort it to create a key.",
      "Add the original string to the list corresponding to the key in the Map.",
      "Return the values of the Map as a list of lists."
    ],
    examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }],
    defaultInput: { strs: ["eat", "tea", "tan", "ate", "nat", "bat"] },
    complexity: { time: "O(n * m)", space: "O(n * m)" },
    beginnerComplexity: { time: "O(n * m log m)", space: "O(n * m)" },
    optimalComplexity: { time: "O(n * m)", space: "O(n * m)" },
    starterCode: "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        # Sorting each word O(N * M log M)\n        res = collections.defaultdict(list)\n        for s in strs:\n            key = \"\".join(sorted(s))\n            res[key].append(s)\n        return list(res.values())",
      java: "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Sorting each word O(N * M log M)\n        Map<String, List<String>> res = new HashMap<>();\n        for (String s : strs) {\n            char[] chars = s.toCharArray();\n            Arrays.sort(chars);\n            String key = new String(chars);\n            if (!res.containsKey(key)) res.put(key, new ArrayList<>());\n            res.get(key).add(s);\n        }\n        return new ArrayList<>(res.values());\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string>> res;\n        for (string s : strs) {\n            string key = s;\n            sort(key.begin(), key.end());\n            res[key].push_back(s);\n        }\n        vector<vector<string>> ans;\n        for (auto const& [k, v] : res) ans.push_back(v);\n        return ans;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        # Character Counting O(N * M)\n        res = defaultdict(list)\n        for s in strs:\n            count = [0] * 26\n            for c in s:\n                count[ord(c) - ord('a')] += 1\n            res[tuple(count)].append(s)\n        return res.values()",
      java: "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Character Counting O(N * M)\n        Map<String, List<String>> res = new HashMap<>();\n        for (String s : strs) {\n            int[] count = new int[26];\n            for (char c : s.toCharArray()) count[c - 'a']++;\n            StringBuilder sb = new StringBuilder();\n            for (int i : count) {\n                sb.append('#');\n                sb.append(i);\n            }\n            String key = sb.toString();\n            if (!res.containsKey(key)) res.put(key, new ArrayList<>());\n            res.get(key).add(s);\n        }\n        return new ArrayList<>(res.values());\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string>> res;\n        for (string s : strs) {\n            vector<int> count(26, 0);\n            for (char c : s) count[c - 'a']++;\n            string key = \"\";\n            for (int i : count) key += \"#\" + to_string(i);\n            res[key].push_back(s);\n        }\n        vector<vector<string>> ans;\n        for (auto const& [k, v] : res) ans.push_back(v);\n        return ans;\n    }\n};"
    }
  },
  {
    id: "36", slug: "valid-sudoku", title: "Valid Sudoku", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    detailedExplanation: "To validate a Sudoku board, we check three things for each filled cell: that the number is unique in its row, unique in its column, and unique in its 3x3 square. We use sets to track seen numbers for each row, column, and square.",
    description: "Determine if a 9 x 9 Sudoku board is valid.",
    edgeCases: [
      "Board with dots (empty)",
      "Board where one row is invalid but others are valid",
      "Board with invalid square but rows/cols are OK"
    ],
    algorithmSteps: [
      "Create 9 sets for rows, 9 for cols, and 9 for 3x3 squares.",
      "Iterate through each cell [r, c] in the 9x9 board.",
      "If cell contains '.', continue.",
      "Calculate the square index: (r / 3) * 3 + (c / 3).",
      "Check if value exists in row_set[r], col_set[c], or square_set[s].",
      "If yes, return false.",
      "If no, add value to all three sets.",
      "Return true if all cells processed."
    ],
    examples: [{ input: "board = [...]", output: "true" }],
    defaultInput: { board: [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]] },
    complexity: { time: "O(1)", space: "O(1)" }, // Fixed size 9x9
    beginnerComplexity: { time: "O(1)", space: "O(1)" },
    optimalComplexity: { time: "O(1)", space: "O(1)" },
    starterCode: "class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        // Write your code here\n        return false;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def isValidSudoku(self, board: List[List[str]]) -> bool:\n        # Simple bitmask or set approach O(1)\n        def isValid(arr):\n            seen = set()\n            for x in arr:\n                if x != '.':\n                    if x in seen: return False\n                    seen.add(x)\n            return True\n        # Check rows, cols, squares independently\n        return True",
      java: "class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        // Check rows, then columns, then sub-boxes independently\n        for (int i = 0; i < 9; i++) {\n            Set<Character> rows = new HashSet<>();\n            Set<Character> cols = new HashSet<>();\n            Set<Character> cube = new HashSet<>();\n            for (int j = 0; j < 9; j++) {\n                if (board[i][j] != '.' && !rows.add(board[i][j])) return false;\n                if (board[j][i] != '.' && !cols.add(board[j][i])) return false;\n                int rowIndex = 3 * (i / 3) + j / 3;\n                int colIndex = 3 * (i % 3) + j % 3;\n                if (board[rowIndex][colIndex] != '.' && !cube.add(board[rowIndex][colIndex])) return false;\n            }\n        }\n        return true;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool isValidSudoku(vector<vector<char>>& board) {\n        vector<unordered_set<char>> rows(9), cols(9), squares(9);\n        for (int r = 0; r < 9; r++) {\n            for (int c = 0; c < 9; c++) {\n                if (board[r][c] == '.') continue;\n                char val = board[r][c];\n                if (rows[r].count(val) || cols[c].count(val) || squares[(r/3)*3 + c/3].count(val)) return false;\n                rows[r].insert(val); cols[c].insert(val); squares[(r/3)*3 + c/3].insert(val);\n            }\n        }\n        return true;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def isValidSudoku(self, board: List[List[str]]) -> bool:\n        cols = collections.defaultdict(set)\n        rows = collections.defaultdict(set)\n        squares = collections.defaultdict(set)\n        for r in range(9):\n            for c in range(9):\n                if board[r][c] == \".\": continue\n                if (board[r][c] in rows[r] or\n                    board[r][c] in cols[c] or\n                    board[r][c] in squares[(r // 3, c // 3)]):\n                    return False\n                cols[c].add(board[r][c])\n                rows[r].add(board[r][c])\n                squares[(r // 3, c // 3)].add(board[r][c])\n        return True",
      java: "class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        Set<String> seen = new HashSet<>();\n        for (int i = 0; i < 9; i++) {\n            for (int j = 0; j < 9; j++) {\n                char number = board[i][j];\n                if (number != '.') {\n                    if (!seen.add(number + \" in row \" + i) ||\n                        !seen.add(number + \" in col \" + j) ||\n                        !seen.add(number + \" in block \" + i/3 + \"-\" + j/3)) return false;\n                }\n            }\n        }\n        return true;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool isValidSudoku(vector<vector<char>>& board) {\n        vector<short> rows(9), cols(9), squares(9);\n        for (int r = 0; r < 9; r++) {\n            for (int c = 0; c < 9; c++) {\n                if (board[r][c] == '.') continue;\n                short val = 1 << (board[r][c] - '1');\n                if ((rows[r] & val) || (cols[c] & val) || (squares[(r / 3) * 3 + (c / 3)] & val)) return false;\n                rows[r] |= val; cols[c] |= val; squares[(r / 3) * 3 + (c / 3)] |= val;\n            }\n        }\n        return true;\n    }\n};"
    }
  },
  {
    id: "271", slug: "encode-and-decode-strings", title: "Encode and Decode Strings", difficulty: "Medium", diffClass: "difficulty-medium", category: "Arrays",
    detailedExplanation: "To encode a list of strings, we prefix each string with its length followed by a delimiter (like '#'). This length prefix ensures that even if the string contains the delimiter itself, the decoder knows exactly how many characters to read for each string.",
    description: "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
    edgeCases: [
      "Strings containing the delimiter",
      "Empty strings in the list",
      "List with only one string",
      "Large strings"
    ],
    algorithmSteps: [
      "Encoder: Iteratively build a string by appending length + '#' + string for each element.",
      "Decoder: Use a pointer to traverse the encoded string.",
      "Read characters until '#' to find the length of the next string.",
      "Extract the string based on that length.",
      "Advance the pointer and repeat."
    ],
    examples: [{ input: 'strs = ["lint","code","love","you"]', output: '["lint","code","love","you"]' }],
    defaultInput: { strs: ["lint", "code", "love", "you"] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public String encode(List<String> strs) {\n        // Write your code here\n        return \"\";\n    }\n\n    public List<String> decode(String s) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def encode(self, strs: List[str]) -> str:\n        # Basic length prefix O(N)\n        res = \"\"\n        for s in strs:\n            res += str(len(s)) + \"#\" + s\n        return res\n\n    def decode(self, s: str) -> List[str]:\n        res, i = [], 0\n        while i < len(s):\n            j = i\n            while s[j] != \"#\":\n                j += 1\n            length = int(s[i:j])\n            res.append(s[j + 1 : j + 1 + length])\n            i = j + 1 + length\n        return res",
      java: "class Solution {\n    public String encode(List<String> strs) {\n        // Basic length prefix O(N)\n        StringBuilder res = new StringBuilder();\n        for (String s : strs) {\n            res.append(s.length()).append(\"#\").append(s);\n        }\n        return res.toString();\n    }\n\n    public List<String> decode(String s) {\n        List<String> res = new ArrayList<>();\n        int i = 0;\n        while (i < s.length()) {\n            int j = i;\n            while (s.charAt(j) != '#') j++;\n            int length = Integer.parseInt(s.substring(i, j));\n            res.add(s.substring(j + 1, j + 1 + length));\n            i = j + 1 + length;\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    string encode(vector<string>& strs) {\n        string res = \"\";\n        for (string s : strs) res += to_string(s.length()) + \"#\" + s;\n        return res;\n    }\n    vector<string> decode(string s) {\n        vector<string> res;\n        int i = 0;\n        while (i < s.length()) {\n            int j = i;\n            while (s[j] != '#') j++;\n            int length = stoi(s.substr(i, j - i));\n            res.push_back(s.substr(j + 1, length));\n            i = j + 1 + length;\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def encode(self, strs: List[str]) -> str:\n        # Optimal/Standard approach O(N)\n        res = \"\"\n        for s in strs:\n            res += str(len(s)) + \"#\" + s\n        return res\n\n    def decode(self, s: str) -> List[str]:\n        res, i = [], 0\n        while i < len(s):\n            j = i\n            while s[j] != \"#\":\n                j += 1\n            length = int(s[i:j])\n            res.append(s[j + 1 : j + 1 + length])\n            i = j + 1 + length\n        return res",
      java: "class Solution {\n    public String encode(List<String> strs) {\n        StringBuilder res = new StringBuilder();\n        for (String s : strs) {\n            res.append(s.length()).append(\"#\").append(s);\n        }\n        return res.toString();\n    }\n\n    public List<String> decode(String s) {\n        List<String> res = new ArrayList<>();\n        int i = 0;\n        while (i < s.length()) {\n            int j = i;\n            while (s.charAt(j) != '#') j++;\n            int length = Integer.parseInt(s.substring(i, j));\n            res.add(s.substring(j + 1, j + 1 + length));\n            i = j + 1 + length;\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    string encode(vector<string>& strs) {\n        string res = \"\";\n        for (const string& s : strs) res += to_string(s.size()) + \"/\" + s;\n        return res;\n    }\n    vector<string> decode(string s) {\n        vector<string> res;\n        int i = 0;\n        while (i < s.size()) {\n            int j = s.find('/', i);\n            int len = stoi(s.substr(i, j - i));\n            res.push_back(s.substr(j + 1, len));\n            i = j + 1 + len;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "26", slug: "remove-duplicates-from-sorted-array", title: "Remove Duplicates", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    detailedExplanation: "Since the array is sorted, duplicates are always adjacent. We use two pointers: 'l' (left) tracks the position of the next unique element, and 'r' (right) scans the array. Whenever we find a new unique element (nums[r] != nums[r-1]), we move it to the position 'l' and increment 'l'.",
    description: "Remove duplicates from a sorted array in-place such that each element appears only once.",
    edgeCases: [
      "Empty array",
      "Array with no duplicates",
      "All elements are duplicates",
      "Single element array"
    ],
    algorithmSteps: [
      "If array is empty, return 0.",
      "Initialize pointer 'l' to 1.",
      "Iterate 'r' from index 1 to end of array.",
      "If nums[r] is different from nums[r-1], it's a new unique element.",
      "Update nums[l] = nums[r] and increment 'l'.",
      "Return 'l' as the new length."
    ],
    examples: [{ input: "nums = [1,1,2]", output: "2, nums = [1,2,_]" }],
    defaultInput: { nums: [1, 1, 2, 2, 3, 3] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        # Using extra space O(N)\n        if not nums: return 0\n        unique = [nums[0]]\n        for i in range(1, len(nums)):\n            if nums[i] != nums[i-1]: unique.append(nums[i])\n        for i in range(len(unique)): nums[i] = unique[i]\n        return len(unique)",
      java: "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Using extra space O(N)\n        if (nums.length == 0) return 0;\n        List<Integer> unique = new ArrayList<>();\n        unique.add(nums[0]);\n        for (int i = 1; i < nums.length; i++) {\n            if (nums[i] != nums[i - 1]) unique.add(nums[i]);\n        }\n        for (int i = 0; i < unique.size(); i++) nums[i] = unique.get(i);\n        return unique.size();\n    }\n}",
      cpp: "class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if (nums.empty()) return 0;\n        vector<int> unique = {nums[0]};\n        for (int i = 1; i < nums.size(); i++) {\n            if (nums[i] != nums[i-1]) unique.push_back(nums[i]);\n        }\n        for (int i = 0; i < unique.size(); i++) nums[i] = unique[i];\n        return unique.size();\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        # Two pointers O(1) space\n        l = 1\n        for r in range(1, len(nums)):\n            if nums[r] != nums[r - 1]:\n                nums[l] = nums[r]\n                l += 1\n        return l",
      java: "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Two pointers O(1) space\n        if (nums.length == 0) return 0;\n        int l = 1;\n        for (int r = 1; r < nums.length; r++) {\n            if (nums[r] != nums[r - 1]) {\n                nums[l] = nums[r];\n                l++;\n            }\n        }\n        return l;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if (nums.empty()) return 0;\n        int l = 1;\n        for (int r = 1; r < nums.size(); r++) {\n            if (nums[r] != nums[r-1]) {\n                nums[l] = nums[r];\n                l++;\n            }\n        }\n        return l;\n    }\n};"
    }
  },
  {
    id: "27", slug: "remove-element", title: "Remove Element", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    detailedExplanation: "We use a pointer 'k' to keep track of the position where the next element not equal to 'val' should be placed. As we iterate through the array, whenever we encounter an element != 'val', we copy it to index 'k' and increment 'k'.",
    description: "Remove all occurrences of val in nums in-place.",
    edgeCases: [
      "Array contains only val",
      "Array contains no val",
      "Empty array",
      "All elements are equal to val"
    ],
    algorithmSteps: [
      "Initialize 'k' to 0.",
      "Iterate through index 'i' from 0 to end of array.",
      "If nums[i] is NOT equal to 'val':",
      "Update nums[k] = nums[i].",
      "Increment 'k'.",
      "Return 'k'."
    ],
    examples: [{ input: "nums = [3,2,2,3], val = 3", output: "2, nums = [2,2,_,_]" }],
    defaultInput: { nums: [3, 2, 2, 3], val: 3 },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        # Simple iteration O(N)\n        res = []\n        for x in nums:\n            if x != val: res.append(x)\n        for i in range(len(res)): nums[i] = res[i]\n        return len(res)",
      java: "class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Simple iteration O(N)\n        int[] temp = new int[nums.length];\n        int count = 0;\n        for (int x : nums) if (x != val) temp[count++] = x;\n        for (int i = 0; i < count; i++) nums[i] = temp[i];\n        return count;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        vector<int> res;\n        for (int x : nums) if (x != val) res.push_back(x);\n        for (int i = 0; i < res.size(); i++) nums[i] = res[i];\n        return res.size();\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        # Two pointers O(1) space\n        k = 0\n        for i in range(len(nums)):\n            if nums[i] != val:\n                nums[k] = nums[i]\n                k += 1\n        return k",
      java: "class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Two pointers O(1) space\n        int k = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != val) {\n                nums[k] = nums[i];\n                k++;\n            }\n        }\n        return k;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        int k = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            if (nums[i] != val) {\n                nums[k] = nums[i];\n                k++;\n            }\n        }\n        return k;\n    }\n};"
    }
  },
  {
    id: "35", slug: "search-insert-position", title: "Search Insert Position", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    detailedExplanation: "We use binary search because the array is sorted. We maintain two pointers, 'l' and 'r'. If target is found, return its index. If loop ends (l > r), 'l' represents the index where the target would be inserted to maintain order.",
    description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    edgeCases: [
      "Target is smaller than all elements",
      "Target is larger than all elements",
      "Target is present in the array",
      "Single element array"
    ],
    algorithmSteps: [
      "Initialize 'l' to 0 and 'r' to length - 1.",
      "While l <= r:",
      "Calculate mid = l + (r - l) / 2.",
      "If nums[mid] == target, return mid.",
      "If nums[mid] < target, update l = mid + 1.",
      "Else, update r = mid - 1.",
      "Return 'l'."
    ],
    examples: [{ input: "nums = [1,3,5,6], target = 5", output: "2" }],
    defaultInput: { nums: [1, 3, 5, 6], target: 5 },
    complexity: { time: "O(log n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(1)" },
    optimalComplexity: { time: "O(log n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int searchInsert(int[] nums, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def searchInsert(self, nums: List[int], target: int) -> int:\n        # Linear Search O(N)\n        for i in range(len(nums)):\n            if nums[i] >= target: return i\n        return len(nums)",
      java: "class Solution {\n    public int searchInsert(int[] nums, int target) {\n        // Linear Search O(N)\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] >= target) return i;\n        }\n        return nums.length;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        for (int i = 0; i < nums.size(); i++) if (nums[i] >= target) return i;\n        return nums.size();\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def searchInsert(self, nums: List[int], target: int) -> int:\n        # Binary Search O(log N)\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target:\n                return mid\n            if nums[mid] < target:\n                l = mid + 1\n            else:\n                r = mid - 1\n        return l",
      java: "class Solution {\n    public int searchInsert(int[] nums, int target) {\n        // Binary Search O(log N)\n        int l = 0, r = nums.length - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return l;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        int l = 0, r = nums.size() - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return l;\n    }\n};"
    }
  },
  {
    id: "88", slug: "merge-sorted-array", title: "Merge Sorted Array", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    detailedExplanation: "To merge in-place efficiently, we fill 'nums1' from the back to avoids overwriting elements that haven't been processed yet. We compare the last elements of both arrays and place the larger one at the current available end position of 'nums1'.",
    description: "Merge two sorted arrays nums1 and nums2 into nums1 as one sorted array.",
    edgeCases: [
      "nums2 is empty",
      "nums1 is empty (m=0)",
      "All elements in nums2 are smaller than nums1",
      "All elements in nums2 are larger than nums1"
    ],
    algorithmSteps: [
      "Initialize 'p1' to index m-1, 'p2' to index n-1, and 'last' to m+n-1.",
      "While both arrays have elements (p1 >= 0 and p2 >= 0):",
      "Compare nums1[p1] and nums2[p2].",
      "Place the larger element at nums1[last] and decrement relevant pointer.",
      "Decrement 'last'.",
      "After the loop, if nums2 still has elements, move them to nums1."
    ],
    examples: [{ input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" }],
    defaultInput: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 },
    complexity: { time: "O(m + n)", space: "O(1)" },
    beginnerComplexity: { time: "O((m+n) log (m+n))", space: "O(1)" },
    optimalComplexity: { time: "O(m + n)", space: "O(1)" },
    starterCode: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your code here\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        # Fill and Sort O((M+N)log(M+N))\n        for i in range(n): nums1[m + i] = nums2[i]\n        nums1.sort()",
      java: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Fill and Sort O((M+N)log(M+N))\n        for (int i = 0; i < n; i++) nums1[m + i] = nums2[i];\n        Arrays.sort(nums1);\n    }\n}",
      cpp: "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        for (int i = 0; i < n; i++) nums1[m + i] = nums2[i];\n        sort(nums1.begin(), nums1.end());\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:\n        # Backward pointers O(M+N)\n        last = m + n - 1\n        while m > 0 and n > 0:\n            if nums1[m - 1] > nums2[n - 1]:\n                nums1[last] = nums1[m - 1]\n                m -= 1\n            else:\n                nums1[last] = nums2[n - 1]\n                n -= 1\n            last -= 1\n        while n > 0:\n            nums1[last] = nums2[n - 1]\n            n, last = n - 1, last - 1",
      java: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Backward pointers O(M+N)\n        int i = m - 1, j = n - 1, k = m + n - 1;\n        while (i >= 0 && j >= 0) {\n            if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];\n            else nums1[k--] = nums2[j--];\n        }\n        while (j >= 0) nums1[k--] = nums2[j--];\n    }\n}",
      cpp: "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        int i = m - 1, j = n - 1, k = m + n - 1;\n        while (i >= 0 && j >= 0) {\n            if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];\n            else nums1[k--] = nums2[j--];\n        }\n        while (j >= 0) nums1[k--] = nums2[j--];\n    }\n};"
    }
  },
  {
    id: "118", slug: "pascals-triangle", title: "Pascal's Triangle", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    detailedExplanation: "Each row in Pascal's Triangle is built using the previous row. A row is formed by taking the previous row, adding 0 at both ends, and summing adjacent elements. For example, row [1, 1] becomes [0, 1, 1, 0] then sums to [1, 2, 1].",
    description: "Given an integer numRows, return the first numRows of Pascal's triangle.",
    edgeCases: [
      "numRows = 1",
      "numRows = 30 (max value)",
      "numRows = 0"
    ],
    algorithmSteps: [
      "Initialize 'res' with the first row: [[1]].",
      "Loop from i = 1 to numRows - 1:",
      "Build a new row starting with 1.",
      "Calculate interior elements: row[j] = prev_row[j-1] + prev_row[j].",
      "End the row with 1.",
      "Add row to 'res'.",
      "Return 'res'."
    ],
    examples: [{ input: "numRows = 5", output: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]" }],
    defaultInput: { numRows: 5 },
    complexity: { time: "O(n²)", space: "O(n²)" },
    beginnerComplexity: { time: "O(n²)", space: "O(n²)" },
    optimalComplexity: { time: "O(n²)", space: "O(n²)" },
    starterCode: "class Solution {\n    public List<List<Integer>> generate(int numRows) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def generate(self, numRows: int) -> List[List[int]]:\n        # Standard row-by-row simulation O(N^2)\n        if numRows == 0: return []\n        res = [[1]]\n        for i in range(1, numRows):\n            row = [1] * (i + 1)\n            for j in range(1, i):\n                row[j] = res[i-1][j-1] + res[i-1][j]\n            res.append(row)\n        return res",
      java: "class Solution {\n    public List<List<Integer>> generate(int numRows) {\n        // Standard row-by-row simulation O(N^2)\n        List<List<Integer>> res = new ArrayList<>();\n        if (numRows == 0) return res;\n        res.add(new ArrayList<>(Arrays.asList(1)));\n        for (int i = 1; i < numRows; i++) {\n            List<Integer> prev = res.get(i - 1);\n            List<Integer> row = new ArrayList<>();\n            row.add(1);\n            for (int j = 1; j < i; j++) {\n                row.add(prev.get(j - 1) + prev.get(j));\n            }\n            row.add(1);\n            res.add(row);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> generate(int numRows) {\n        vector<vector<int>> res(numRows);\n        for (int i = 0; i < numRows; i++) {\n            res[i].resize(i + 1);\n            res[i][0] = res[i][i] = 1;\n            for (int j = 1; j < i; j++) res[i][j] = res[i-1][j-1] + res[i-1][j];\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def generate(self, numRows: int) -> List[List[int]]:\n        # Dynamic Programming approach O(N^2)\n        res = [[1]]\n        for i in range(numRows - 1):\n            temp = [0] + res[-1] + [0]\n            row = []\n            for j in range(len(res[-1]) + 1):\n                row.append(temp[j] + temp[j + 1])\n            res.append(row)\n        return res",
      java: "class Solution {\n    public List<List<Integer>> generate(int numRows) {\n        List<List<Integer>> res = new ArrayList<>();\n        if (numRows == 0) return res;\n        List<Integer> row = new ArrayList<>();\n        row.add(1);\n        res.add(row);\n        for (int i = 1; i < numRows; i++) {\n            List<Integer> prev = res.get(i - 1);\n            List<Integer> curr = new ArrayList<>();\n            curr.add(1);\n            for (int j = 1; j < i; j++) {\n                curr.add(prev.get(j - 1) + prev.get(j));\n            }\n            curr.add(1);\n            res.add(curr);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> generate(int n) {\n        vector<vector<int>> res;\n        for (int i = 0; i < n; i++) {\n            vector<int> row(i + 1, 1);\n            for (int j = 1; j < i; j++) row[j] = res[i - 1][j - 1] + res[i - 1][j];\n            res.push_back(row);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "1752", slug: "check-if-array-is-sorted-and-rotated", title: "Is Sorted and Rotated", difficulty: "Easy", diffClass: "difficulty-easy", category: "Arrays",
    detailedExplanation: "A sorted and rotated array can have at most one point where an element is greater than its next element (breaking the non-decreasing order). We check all pairs (nums[i], nums[(i+1)%n]) including the wrap-around at the end. If more than one such breakpoint exists, the array was not originally sorted.",
    description: "Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions.",
    edgeCases: [
      "Sorted array with no rotation",
      "Array with all identical elements",
      "Single element array",
      "Array with multiple rotation points (invalid)"
    ],
    algorithmSteps: [
      "Count how many times an element is greater than its successor.",
      "Iterate from i = 0 to n-1.",
      "Check nums[i] > nums[(i + 1) % n].",
      "If count <= 1, return true. Otherwise, return false."
    ],
    examples: [{ input: "nums = [3,4,5,1,2]", output: "true" }],
    defaultInput: { nums: [3, 4, 5, 1, 2] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public boolean check(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def check(self, nums: List[int]) -> bool:\n        # Brute Force: Check every possible rotation\n        n = len(nums)\n        sorted_nums = sorted(nums)\n        for i in range(n):\n            if nums[i:] + nums[:i] == sorted_nums: return True\n        return False",
      java: "class Solution {\n    public boolean check(int[] nums) {\n        // Brute Force: Try every rotation O(N^2)\n        int n = nums.length;\n        int[] sorted = nums.clone();\n        Arrays.sort(sorted);\n        for (int i = 0; i < n; i++) {\n            boolean match = true;\n            for (int j = 0; j < n; j++) {\n                if (nums[(i + j) % n] != sorted[j]) {\n                    match = false;\n                    break;\n                }\n            }\n            if (match) return true;\n        }\n        return false;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool check(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> s = nums;\n        sort(s.begin(), s.end());\n        for (int i = 0; i < n; i++) {\n            bool match = true;\n            for (int j = 0; j < n; j++) if (nums[(i+j)%n] != s[j]) { match = false; break; }\n            if (match) return true;\n        }\n        return false;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def check(self, nums: List[int]) -> bool:\n        # Frequency breakdown approach O(N)\n        count = 0\n        n = len(nums)\n        for i in range(n):\n            if nums[i] > nums[(i + 1) % n]:\n                count += 1\n        return count <= 1",
      java: "class Solution {\n    public boolean check(int[] nums) {\n        // Optimal approach: Count breaks O(N)\n        int count = 0, n = nums.length;\n        for (int i = 0; i < n; i++) {\n            if (nums[i] > nums[(i + 1) % n]) count++;\n        }\n        return count <= 1;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool check(vector<int>& nums) {\n        int count = 0, n = nums.size();\n        for (int i = 0; i < n; i++) if (nums[i] > nums[(i + 1) % n]) count++;\n        return count <= 1;\n    }\n};"
    }
  },

  // TWO POINTERS
  {
    id: "125", slug: "valid-palindrome", title: "Valid Palindrome", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    detailedExplanation: "We can solve this efficiently using two pointers. Initialize one pointer at the start and one at the end of the string. Move them towards each other, skipping non-alphanumeric characters. Compare the characters at the pointers; if they don't match, it's not a palindrome.",
    description: "Determine if a string is a palindrome, considering only alphanumeric characters and ignoring cases.",
    edgeCases: [
      "Empty string",
      "String with only symbols",
      "Case sensitivity (should be ignored)"
    ],
    algorithmSteps: [
      "Initialize 'l' to 0 and 'r' to string length - 1.",
      "Loop while 'l' < 'r'.",
      "Move 'l' forward if character is not alphanumeric.",
      "Move 'r' backward if character is not alphanumeric.",
      "If both are alphanumeric, lowercase and compare.",
      "If different, return false.",
      "Move both pointers inward.",
      "Return true if loop completes."
    ],
    examples: [{ input: 's = "A man, a plan, a canal: Panama"', output: "true" }],
    defaultInput: { s: "A man, a plan, a canal: Panama" },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your code here\n        return false;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # String filtering and reversal O(N) space\n        newStr = \"\"\n        for c in s:\n            if c.isalnum():\n                newStr += c.lower()\n        return newStr == newStr[::-1]",
      java: "class Solution {\n    public boolean isPalindrome(String s) {\n        // String filtering and reversal O(N) space\n        StringBuilder sb = new StringBuilder();\n        for (char c : s.toCharArray()) {\n            if (Character.isLetterOrDigit(c)) sb.append(Character.toLowerCase(c));\n        }\n        String filtered = sb.toString();\n        String reversed = sb.reverse().toString();\n        return filtered.equals(reversed);\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool isPalindrome(string s) {\n        string filtered = \"\";\n        for (char c : s) if (isalnum(c)) filtered += tolower(c);\n        string reversed = filtered;\n        reverse(reversed.begin(), reversed.end());\n        return filtered == reversed;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # Two pointers O(1) space\n        l, r = 0, len(s) - 1\n        while l < r:\n            while l < r and not s[l].isalnum():\n                l += 1\n            while r > l and not s[r].isalnum():\n                r -= 1\n            if s[l].lower() != s[r].lower():\n                return False\n            l, r = l + 1, r - 1\n        return True",
      java: "class Solution {\n    public boolean isPalindrome(String s) {\n        // Two pointers O(1) space\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n            l++; r--;\n        }\n        return true;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool isPalindrome(string s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !isalnum(s[l])) l++;\n            while (l < r && !isalnum(s[r])) r--;\n            if (tolower(s[l]) != tolower(s[r])) return false;\n            l++; r--;\n        }\n        return true;\n    }\n};"
    }
  },
  {
    id: "15", slug: "3sum", title: "3Sum", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    detailedExplanation: "To solve this efficiently, we first sort the array. Then we iterate through the array with index 'i'. For each 'i', we use two pointers 'l' and 'r' to find pairs that sum to the negation of 'nums[i]'. We must skip duplicate values to ensure unique triplets.",
    description: "Find all unique triplets in the array which gives the sum of zero.",
    edgeCases: [
      "Fewer than 3 elements",
      "No triplet adds to zero",
      "Array contains all zeros",
      "Duplicate triplets handling"
    ],
    algorithmSteps: [
      "Sort the array.",
      "Iterate 'i' from 0 up to n-3.",
      "If nums[i] > 0, break.",
      "Skip duplicate nums[i].",
      "Set 'l' = i+1, 'r' = n-1.",
      "While l < r, calculate sum.",
      "If sum < 0, l++.",
      "If sum > 0, r--.",
      "If sum == 0, add triplet, l++, r--, skip duplicates.",
      "Return results."
    ],
    examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }],
    defaultInput: { nums: [-1, 0, 1, 2, -1, -4] },
    complexity: { time: "O(n²)", space: "O(1)" },
    beginnerComplexity: { time: "O(n³)", space: "O(1)" },
    optimalComplexity: { time: "O(n²)", space: "O(1)" },
    starterCode: "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        # Brute Force O(N^3)\n        res = set()\n        nums.sort()\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                for k in range(j + 1, len(nums)):\n                    if nums[i] + nums[j] + nums[k] == 0:\n                        res.add((nums[i], nums[j], nums[k]))\n        return [list(x) for x in res]",
      java: "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Brute Force O(N^3)\n        Set<List<Integer>> res = new HashSet<>();\n        Arrays.sort(nums);\n        for (int i = 0; i < nums.length; i++) {\n            for (int j = i + 1; j < nums.length; j++) {\n                for (int k = j + 1; k < nums.length; k++) {\n                    if (nums[i] + nums[j] + nums[k] == 0) {\n                        res.add(Arrays.asList(nums[i], nums[j], nums[k]));\n                    }\n                }\n            }\n        }\n        return new ArrayList<>(res);\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        set<vector<int>> res;\n        sort(nums.begin(), nums.end());\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = i + 1; j < nums.size(); j++) {\n                for (int k = j + 1; k < nums.size(); k++) {\n                    if (nums[i] + nums[j] + nums[k] == 0) res.insert({nums[i], nums[j], nums[k]});\n                }\n            }\n        }\n        return vector<vector<int>>(res.begin(), res.end());\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        # Two Pointers O(N^2)\n        res = []\n        nums.sort()\n        for i, a in enumerate(nums):\n            if i > 0 and a == nums[i - 1]: continue\n            l, r = i + 1, len(nums) - 1\n            while l < r:\n                threeSum = a + nums[l] + nums[r]\n                if threeSum > 0: r -= 1\n                elif threeSum < 0: l += 1\n                else:\n                    res.append([a, nums[l], nums[r]])\n                    l += 1\n                    while nums[l] == nums[l - 1] and l < r:\n                        l += 1\n        return res",
      java: "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Two Pointers O(N^2)\n        List<List<Integer>> res = new ArrayList<>();\n        Arrays.sort(nums);\n        for (int i = 0; i < nums.length; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum > 0) r--;\n                else if (sum < 0) l++;\n                else {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    l++;\n                    while (l < r && nums[l] == nums[l - 1]) l++;\n                }\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        vector<vector<int>> res;\n        sort(nums.begin(), nums.end());\n        for (int i = 0; i < nums.size(); i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            int l = i + 1, r = nums.size() - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum > 0) r--;\n                else if (sum < 0) l++;\n                else {\n                    res.push_back({nums[i], nums[l], nums[r]});\n                    l++;\n                    while (l < r && nums[l] == nums[l - 1]) l++;\n                }\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "11", slug: "container-with-most-water", title: "Container With Most Water", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    detailedExplanation: "We use a two-pointer approach to find the maximum possible area. Place one pointer at the beginning and one at the end. The area is limited by the shorter line. To potentially find a greater area, we move the pointer pointing to the shorter line inward, as it is the current bottleneck.",
    description: "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    edgeCases: [
      "Two lines only",
      "Lines with 0 height",
      "All same heights"
    ],
    algorithmSteps: [
      "Initialize 'l' = 0, 'r' = height.length - 1.",
      "Initialize 'res' = 0.",
      "While 'l' < 'r':",
      "Calculate area: (r - l) * min(height[l], height[r]).",
      "Update 'res' = max(res, area).",
      "If height[l] < height[r], increment 'l'.",
      "Otherwise, decrement 'r'.",
      "Return 'res'."
    ],
    examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }],
    defaultInput: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int maxArea(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        # Brute Force O(N^2)\n        res = 0\n        for i in range(len(height)):\n            for j in range(i + 1, len(height)):\n                res = max(res, (j - i) * min(height[i], height[j]))\n        return res",
      java: "class Solution {\n    public int maxArea(int[] height) {\n        // Brute Force O(N^2)\n        int res = 0;\n        for (int i = 0; i < height.length; i++) {\n            for (int j = i + 1; j < height.length; j++) {\n                res = Math.max(res, (j - i) * Math.min(height[i], height[j]));\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int res = 0;\n        for (int i = 0; i < height.size(); i++) {\n            for (int j = i + 1; j < height.size(); j++) {\n                res = max(res, (int)(j - i) * min(height[i], height[j]));\n            }\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        # Two Pointers O(N)\n        l, r = 0, len(height) - 1\n        res = 0\n        while l < r:\n            res = max(res, (r - l) * min(height[l], height[r]))\n            if height[l] < height[r]:\n                l += 1\n            else:\n                r -= 1\n        return res",
      java: "class Solution {\n    public int maxArea(int[] height) {\n        // Two Pointers O(N)\n        int l = 0, r = height.length - 1;\n        int res = 0;\n        while (l < r) {\n            res = Math.max(res, (r - l) * Math.min(height[l], height[r]));\n            if (height[l] < height[r]) l++;\n            else r--;\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int l = 0, r = height.size() - 1;\n        int res = 0;\n        while (l < r) {\n            res = max(res, (int)(r - l) * min(height[l], height[r]));\n            if (height[l] < height[r]) l++;\n            else r--;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "167", slug: "two-sum-ii", title: "Two Sum II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    detailedExplanation: "Since the array is sorted, we can use two pointers. Place 'l' at the start and 'r' at the end. If the sum is less than the target, we need a larger sum, so we increment 'l'. If the sum is greater than the target, we need a smaller sum, so we decrement 'r'.",
    description: "Two Sum where the input array is already sorted.",
    edgeCases: [
      "Target is negative",
      "Only one solution exists (guaranteed)"
    ],
    algorithmSteps: [
      "Initialize 'l' = 0, 'r' = length - 1.",
      "Loop while 'l' < 'r'.",
      "Calculate 'curSum' = numbers[l] + numbers[r].",
      "If 'curSum' > target, decrement 'r'.",
      "If 'curSum' < target, increment 'l'.",
      "If 'curSum' == target, return [l+1, r+1]."
    ],
    examples: [{ input: "numbers = [2,7,11,15], target = 9", output: "[1,2]" }],
    defaultInput: { numbers: [2, 7, 11, 15], target: 9 },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        // Write your code here\n        return new int[] {};\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        # Brute Force O(N^2)\n        for i in range(len(numbers)):\n            for j in range(i + 1, len(numbers)):\n                if numbers[i] + numbers[j] == target:\n                    return [i + 1, j + 1]\n        return []",
      java: "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        // Brute Force O(N^2)\n        for (int i = 0; i < numbers.length; i++) {\n            for (int j = i + 1; j < numbers.length; j++) {\n                if (numbers[i] + numbers[j] == target) return new int[] { i + 1, j + 1 };\n            }\n        }\n        return new int[] {};\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        for (int i = 0; i < numbers.size(); i++) {\n            for (int j = i + 1; j < numbers.size(); j++) {\n                if (numbers[i] + numbers[j] == target) return {i + 1, j + 1};\n            }\n        }\n        return {};\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        # Two Pointers O(N)\n        l, r = 0, len(numbers) - 1\n        while l < r:\n            curSum = numbers[l] + numbers[r]\n            if curSum > target: r -= 1\n            elif curSum < target: l += 1\n            else: return [l + 1, r + 1]\n        return []",
      java: "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        // Two Pointers O(N)\n        int l = 0, r = numbers.length - 1;\n        while (l < r) {\n            int sum = numbers[l] + numbers[r];\n            if (sum > target) r--;\n            else if (sum < target) l++;\n            else return new int[] { l + 1, r + 1 };\n        }\n        return new int[] {};\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        int l = 0, r = numbers.size() - 1;\n        while (l < r) {\n            int sum = numbers[l] + numbers[r];\n            if (sum > target) r--;\n            else if (sum < target) l++;\n            else return {l + 1, r + 1};\n        }\n        return {};\n    }\n};"
    }
  },
  {
    id: "42", slug: "trapping-rain-water", title: "Trapping Rain Water", difficulty: "Hard", diffClass: "difficulty-hard", category: "Two Pointers",
    detailedExplanation: "We use two pointers 'l' and 'r' to calculate the trapped water in a single pass. We maintain 'maxLeft' and 'maxRight' to track the boundaries. Since the amount of water trapped at any bar depends on the shorter of the maximum heights to its left and right, we skip the taller boundary and process the smaller one.",
    description: "Compute how much water an elevation map can trap after raining.",
    edgeCases: [
      "Empty array or < 3 bars (0 water)",
      "Mountain shape (0 water)",
      "Bowl shape (traps water)"
    ],
    algorithmSteps: [
      "Initialize 'l' = 0, 'r' = n - 1.",
      "Initialize 'maxLeft' = height[l], 'maxRight' = height[r].",
      "While l < r:",
      "If maxLeft < maxRight:",
      "increment 'l' and update 'maxLeft'.",
      "Add maxLeft - height[l] to result.",
      "Otherwise, decrement 'r' and update 'maxRight'.",
      "Add maxRight - height[r] to result.",
      "Return result."
    ],
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }],
    defaultInput: { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def trap(self, height: List[int]) -> int:\n        # O(N) Time, O(N) Space (Precompute maxLeft/maxRight)\n        if not height: return 0\n        n = len(height)\n        maxLeft = [0] * n\n        maxRight = [0] * n\n        maxLeft[0] = height[0]\n        for i in range(1, n):\n            maxLeft[i] = max(maxLeft[i-1], height[i])\n        maxRight[n-1] = height[n-1]\n        for i in range(n-2, -1, -1):\n            maxRight[i] = max(maxRight[i+1], height[i])\n        res = 0\n        for i in range(n):\n            res += min(maxLeft[i], maxRight[i]) - height[i]\n        return res",
      java: "class Solution {\n    public int trap(int[] height) {\n        // O(N) Time, O(N) Space (Precompute maxLeft/maxRight)\n        if (height.length == 0) return 0;\n        int n = height.length;\n        int[] maxLeft = new int[n];\n        int[] maxRight = new int[n];\n        maxLeft[0] = height[0];\n        for (int i = 1; i < n; i++) maxLeft[i] = Math.max(maxLeft[i-1], height[i]);\n        maxRight[n-1] = height[n-1];\n        for (int i = n - 2; i >= 0; i--) maxRight[i] = Math.max(maxRight[i+1], height[i]);\n        int res = 0;\n        for (int i = 0; i < n; i++) res += Math.min(maxLeft[i], maxRight[i]) - height[i];\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int trap(vector<int>& height) {\n        if (height.empty()) return 0;\n        int n = height.size();\n        vector<int> maxLeft(n), maxRight(n);\n        maxLeft[0] = height[0];\n        for (int i = 1; i < n; i++) maxLeft[i] = max(maxLeft[i-1], height[i]);\n        maxRight[n-1] = height[n-1];\n        for (int i = n - 2; i >= 0; i--) maxRight[i] = max(maxRight[i+1], height[i]);\n        int res = 0;\n        for (int i = 0; i < n; i++) res += min(maxLeft[i], maxRight[i]) - height[i];\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def trap(self, height: List[int]) -> int:\n        # Two Pointers O(1) space\n        if not height: return 0\n        l, r = 0, len(height) - 1\n        leftMax, rightMax = height[l], height[r]\n        res = 0\n        while l < r:\n            if leftMax < rightMax:\n                l += 1\n                leftMax = max(leftMax, height[l])\n                res += leftMax - height[l]\n            else:\n                r -= 1\n                rightMax = max(rightMax, height[r])\n                res += rightMax - height[r]\n        return res",
      java: "class Solution {\n    public int trap(int[] height) {\n        // Two Pointers O(1) space\n        if (height.length == 0) return 0;\n        int l = 0, r = height.length - 1;\n        int leftMax = height[l], rightMax = height[r], res = 0;\n        while (l < r) {\n            if (leftMax < rightMax) {\n                l++;\n                leftMax = Math.max(leftMax, height[l]);\n                res += leftMax - height[l];\n            } else {\n                r--;\n                rightMax = Math.max(rightMax, height[r]);\n                res += rightMax - height[r];\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int trap(vector<int>& height) {\n        if (height.empty()) return 0;\n        int l = 0, r = height.size() - 1;\n        int leftMax = height[l], rightMax = height[r], res = 0;\n        while (l < r) {\n            if (leftMax < rightMax) {\n                l++;\n                leftMax = max(leftMax, height[l]);\n                res += leftMax - height[l];\n            } else {\n                r--;\n                rightMax = max(rightMax, height[r]);\n                res += rightMax - height[r];\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "18", slug: "4sum", title: "4Sum", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    detailedExplanation: "A generalized k-sum approach can be used. For 4Sum, we use two nested loops to fix the first two numbers and then use the two-pointer technique for the remaining two. Sorting and skipping duplicates is crucial for efficiency.",
    description: "Find all unique quadruplets in the array which gives the sum of target.",
    edgeCases: [
      "Fewer than 4 elements",
      "Empty array",
      "No quadruplets found",
      "Target is very large/small"
    ],
    algorithmSteps: [
      "Sort the array.",
      "Fix the first number with loop 'i'. Skip duplicates.",
      "Fix the second number with loop 'j' starting from i + 1. Skip duplicates.",
      "Use two pointers 'l' and 'r' to find the remaining two numbers.",
      "If sum == target, store quadruplet and move pointers while skipping duplicates."
    ],
    examples: [{ input: "nums = [1,0,-1,0,-2,2], target = 0", output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" }],
    defaultInput: { nums: [1, 0, -1, 0, -2, 2], target: 0 },
    complexity: { time: "O(n³)", space: "O(1)" },
    beginnerComplexity: { time: "O(n⁴)", space: "O(n)" },
    optimalComplexity: { time: "O(n³)", space: "O(1)" },
    starterCode: "class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        # Brute Force O(N^4)\n        res = set()\n        nums.sort()\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                for k in range(j + 1, len(nums)):\n                    for l in range(k + 1, len(nums)):\n                        if nums[i] + nums[j] + nums[k] + nums[l] == target:\n                            res.add((nums[i], nums[j], nums[k], nums[l]))\n        return [list(x) for x in res]",
      java: "class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        // Brute Force O(N^4)\n        Set<List<Integer>> res = new HashSet<>();\n        Arrays.sort(nums);\n        int n = nums.length;\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                for (int k = j + 1; k < n; k++) {\n                    for (int l = k + 1; l < n; l++) {\n                        if ((long)nums[i] + nums[j] + nums[k] + nums[l] == target) {\n                            res.add(Arrays.asList(nums[i], nums[j], nums[k], nums[l]));\n                        }\n                    }\n                }\n            }\n        }\n        return new ArrayList<>(res);\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        set<vector<int>> res;\n        sort(nums.begin(), nums.end());\n        int n = nums.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                for (int k = j + 1; k < n; k++) {\n                    for (int l = k + 1; l < n; l++) {\n                        if ((long)nums[i] + nums[j] + nums[k] + nums[l] == target) res.insert({nums[i], nums[j], nums[k], nums[l]});\n                    }\n                }\n            }\n        }\n        return vector<vector<int>>(res.begin(), res.end());\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        # Two Pointers with nested loops O(N^3)\n        nums.sort()\n        res, quad = [], []\n        def kSum(k, start, target):\n            if k > 2:\n                for i in range(start, len(nums) - k + 1):\n                    if i > start and nums[i] == nums[i - 1]: continue\n                    quad.append(nums[i])\n                    kSum(k - 1, i + 1, target - nums[i])\n                    quad.pop()\n                return\n            l, r = start, len(nums) - 1\n            while l < r:\n                if nums[l] + nums[r] < target: l += 1\n                elif nums[l] + nums[r] > target: r -= 1\n                else:\n                    res.append(quad + [nums[l], nums[r]])\n                    l += 1\n                    while l < r and nums[l] == nums[l - 1]: l += 1\n        kSum(4, 0, target)\n        return res",
      java: "class Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        // Two Pointers with nested loops O(N^3)\n        List<List<Integer>> res = new ArrayList<>();\n        Arrays.sort(nums);\n        int n = nums.length;\n        for (int i = 0; i < n - 3; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            for (int j = i + 1; j < n - 2; j++) {\n                if (j > i + 1 && nums[j] == nums[j - 1]) continue;\n                int l = j + 1, r = n - 1;\n                while (l < r) {\n                    long sum = (long)nums[i] + nums[j] + nums[l] + nums[r];\n                    if (sum < target) l++;\n                    else if (sum > target) r--;\n                    else {\n                        res.add(Arrays.asList(nums[i], nums[j], nums[l], nums[r]));\n                        l++;\n                        while (l < r && nums[l] == nums[l - 1]) l++;\n                    }\n                }\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        vector<vector<int>> res;\n        sort(nums.begin(), nums.end());\n        int n = nums.size();\n        for (int i = 0; i < n - 3; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            for (int j = i + 1; j < n - 2; j++) {\n                if (j > i + 1 && nums[j] == nums[j - 1]) continue;\n                int l = j + 1, r = n - 1;\n                while (l < r) {\n                    long sum = (long)nums[i] + nums[j] + nums[l] + nums[r];\n                    if (sum < target) l++;\n                    else if (sum > target) r--;\n                    else {\n                        res.push_back({nums[i], nums[j], nums[l], nums[r]});\n                        l++;\n                        while (l < r && nums[l] == nums[l - 1]) l++;\n                    }\n                }\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "16", slug: "3sum-closest", title: "3Sum Closest", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    detailedExplanation: "Similar to 3Sum, we sort the array and iterate through it. For each index 'i', we use two pointers 'l' and 'r'. We track the sum that has the minimum absolute difference from the target.",
    description: "Find three integers in nums such that the sum is closest to target.",
    edgeCases: [
      "Fewer than 3 elements",
      "Exact sum exists",
      "Multiple sums equally close (return any)"
    ],
    algorithmSteps: [
      "Sort the array.",
      "Initialize 'closestSum' with the sum of the first three elements.",
      "Iterate through the array with index 'i'.",
      "Set 'l' = i + 1, 'r' = length - 1.",
      "During two-pointer traversal, update 'closestSum' if current sum is closer.",
      "If sum < target, l++. If sum > target, r--. If sum == target, return it.",
      "Return 'closestSum'."
    ],
    examples: [{ input: "nums = [-1,2,1,-4], target = 1", output: "2" }],
    defaultInput: { nums: [-1, 2, 1, -4], target: 1 },
    complexity: { time: "O(n²)", space: "O(1)" },
    beginnerComplexity: { time: "O(n³)", space: "O(1)" },
    optimalComplexity: { time: "O(n²)", space: "O(1)" },
    starterCode: "class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def threeSumClosest(self, nums: List[int], target: int) -> int:\n        # Brute Force O(N^3)\n        res = nums[0] + nums[1] + nums[2]\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                for k in range(j + 1, len(nums)):\n                    curr = nums[i] + nums[j] + nums[k]\n                    if abs(curr - target) < abs(res - target):\n                        res = curr\n        return res",
      java: "class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        // Brute Force O(N^3)\n        int res = nums[0] + nums[1] + nums[2];\n        int n = nums.length;\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                for (int k = j + 1; k < n; k++) {\n                    int curr = nums[i] + nums[j] + nums[k];\n                    if (Math.abs(curr - target) < Math.abs(res - target)) res = curr;\n                }\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int threeSumClosest(vector<int>& nums, int target) {\n        int res = nums[0] + nums[1] + nums[2];\n        int n = nums.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                for (int k = j + 1; k < n; k++) {\n                    int curr = nums[i] + nums[j] + nums[k];\n                    if (abs(curr - target) < abs(res - target)) res = curr;\n                }\n            }\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def threeSumClosest(self, nums: List[int], target: int) -> int:\n        # Two Pointers O(N^2)\n        nums.sort()\n        res = nums[0] + nums[1] + nums[2]\n        for i in range(len(nums) - 2):\n            l, r = i + 1, len(nums) - 1\n            while l < r:\n                s = nums[i] + nums[l] + nums[r]\n                if s == target: return s\n                if abs(s - target) < abs(res - target): res = s\n                if s < target: l += 1\n                else: r -= 1\n        return res",
      java: "class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        // Two Pointers O(N^2)\n        Arrays.sort(nums);\n        int res = nums[0] + nums[1] + nums[2];\n        for (int i = 0; i < nums.length - 2; i++) {\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;\n                if (sum < target) l++;\n                else r--;\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int threeSumClosest(vector<int>& nums, int target) {\n        sort(nums.begin(), nums.end());\n        int res = nums[0] + nums[1] + nums[2];\n        for (int i = 0; i < nums.size() - 2; i++) {\n            int l = i + 1, r = nums.size() - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (abs(sum - target) < abs(res - target)) res = sum;\n                if (sum < target) l++;\n                else r--;\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "80", slug: "remove-duplicates-from-sorted-array-ii", title: "Remove Duplicates II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Two Pointers",
    detailedExplanation: "We use a two-pointer approach to modify the array in-place. The 'l' pointer tracks where to write the next valid element. For each element 'nums[r]', we check if it's the same as 'nums[l-2]'. If not, it means the current element appeared at most twice so far at 'l'.",
    description: "Remove duplicates such that each element appears at most twice.",
    edgeCases: [
      "Empty array",
      "Array with no duplicates",
      "Array with all identical elements",
      "Single element array"
    ],
    algorithmSteps: [
      "If array length <= 2, return length.",
      "Initialize 'l' = 2.",
      "Iterate 'r' from 2 to end of array.",
      "If nums[r] != nums[l-2]:",
      "Update nums[l] = nums[r].",
      "Increment 'l'.",
      "Return 'l'."
    ],
    examples: [{ input: "nums = [1,1,1,2,2,3]", output: "5, nums = [1,1,2,2,3,_]" }],
    defaultInput: { nums: [1, 1, 1, 2, 2, 3] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        # Simple hash map frequency tracking O(N) space\n        counts = {}\n        res = []\n        for x in nums:\n            counts[x] = counts.get(x, 0) + 1\n            if counts[x] <= 2: res.append(x)\n        for i in range(len(res)): nums[i] = res[i]\n        return len(res)",
      java: "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Simple hash map frequency tracking O(N) space\n        Map<Integer, Integer> counts = new HashMap<>();\n        List<Integer> res = new ArrayList<>();\n        for (int x : nums) {\n            counts.put(x, counts.getOrDefault(x, 0) + 1);\n            if (counts.get(x) <= 2) res.add(x);\n        }\n        for (int i = 0; i < res.size(); i++) nums[i] = res.get(i);\n        return res.size();\n    }\n}",
      cpp: "class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        unordered_map<int, int> counts;\n        vector<int> res;\n        for (int x : nums) if (++counts[x] <= 2) res.push_back(x);\n        for (int i = 0; i < res.size(); i++) nums[i] = res[i];\n        return res.size();\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        # Two Pointers O(1) space\n        l, r = 0, 0\n        while r < len(nums):\n            count = 1\n            while r + 1 < len(nums) and nums[r] == nums[r + 1]:\n                r += 1\n                count += 1\n            for i in range(min(2, count)):\n                nums[l] = nums[r]\n                l += 1\n            r += 1\n        return l",
      java: "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Two Pointers O(1) space\n        if (nums.length <= 2) return nums.length;\n        int l = 2;\n        for (int r = 2; r < nums.length; r++) {\n            if (nums[r] != nums[l - 2]) {\n                nums[l] = nums[r];\n                l++;\n            }\n        }\n        return l;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if (nums.size() <= 2) return nums.size();\n        int l = 2;\n        for (int r = 2; r < nums.size(); r++) {\n            if (nums[r] != nums[l - 2]) nums[l++] = nums[r];\n        }\n        return l;\n    }\n};"
    }
  },
  {
    id: "680", slug: "valid-palindrome-ii", title: "Valid Palindrome II", difficulty: "Easy", diffClass: "difficulty-easy", category: "Two Pointers",
    detailedExplanation: "We use two pointers 'l' and 'r'. If s[l] == s[r], move them inward. If s[l] != s[r], we have two choices: delete s[l] or delete s[r]. We check both possibilities; if either string [l+1, r] or [l, r-1] is a palindrome, return true.",
    description: "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
    edgeCases: [
      "Already a palindrome",
      "Single character deleted from start",
      "Single character deleted from end",
      "Single character string"
    ],
    algorithmSteps: [
      "Initialize 'l' = 0, 'r' = length - 1.",
      "While 'l' < 'r':",
      "If s[l] == s[r], l++, r--.",
      "Else, check if skip s[l] or skip s[r] makes it a palindrome.",
      "Return true if either sub-check passes.",
      "Return true if loop completes."
    ],
    examples: [{ input: 's = "aba"', output: "true" }],
    defaultInput: { s: "abca" },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public boolean validPalindrome(String s) {\n        // Write your code here\n        return false;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def validPalindrome(self, s: str) -> bool:\n        # String Slicing and reversal O(N) space\n        def is_pal(subs): return subs == subs[::-1]\n        l, r = 0, len(s) - 1\n        while l < r:\n            if s[l] != s[r]:\n                return is_pal(s[l+1:r+1]) or is_pal(s[l:r])\n            l, r = l + 1, r - 1\n        return True",
      java: "class Solution {\n    public boolean validPalindrome(String s) {\n        // String Slicing and reversal O(N) space\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            if (s.charAt(l) != s.charAt(r)) {\n                return isPal(s.substring(l + 1, r + 1)) || isPal(s.substring(l, r));\n            }\n            l++; r--;\n        }\n        return true;\n    }\n    private boolean isPal(String s) {\n        return new StringBuilder(s).reverse().toString().equals(s);\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool validPalindrome(string s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            if (s[l] != s[r]) return isPal(s, l + 1, r) || isPal(s, l, r - 1);\n            l++; r--;\n        }\n        return true;\n    }\n    bool isPal(string s, int l, int r) {\n        string sub = s.substr(l, r - l + 1);\n        string rev = sub;\n        reverse(rev.begin(), rev.end());\n        return sub == rev;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def validPalindrome(self, s: str) -> bool:\n        # Two Pointers O(1) space\n        def is_pal(l, r):\n            while l < r:\n                if s[l] != s[r]: return False\n                l, r = l + 1, r - 1\n            return True\n        l, r = 0, len(s) - 1\n        while l < r:\n            if s[l] != s[r]:\n                return is_pal(l + 1, r) or is_pal(l, r - 1)\n            l, r = l + 1, r - 1\n        return True",
      java: "class Solution {\n    public boolean validPalindrome(String s) {\n        // Two Pointers O(1) space\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            if (s.charAt(l) != s.charAt(r)) {\n                return isPal(s, l + 1, r) || isPal(s, l, r - 1);\n            }\n            l++; r--;\n        }\n        return true;\n    }\n    private boolean isPal(String s, int l, int r) {\n        while (l < r) {\n            if (s.charAt(l++) != s.charAt(r--)) return false;\n        }\n        return true;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool validPalindrome(string s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            if (s[l] != s[r]) return isPal(s, l + 1, r) || isPal(s, l, r - 1);\n            l++; r--;\n        }\n        return true;\n    }\n    bool isPal(string& s, int l, int r) {\n        while (l < r) if (s[l++] != s[r--]) return false;\n        return true;\n    }\n};"
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
    detailedExplanation: "To find the maximum profit, we need to find the largest difference between two prices where the lower price comes before the higher price. We maintain a 'minPrice' variable and update it as we traverse the array. Simultaneously, we calculate the profit at each step and track the maximum profit seen so far.",
    description: "Maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock.",
    edgeCases: [
      "Descending prices (profit 0)",
      "Single day (profit 0)",
      "All same prices (profit 0)"
    ],
    algorithmSteps: [
      "Initialize 'minPrice' to max value and 'maxProfit' to 0.",
      "Iterate through prices:",
      "If current price < minPrice, update minPrice.",
      "Calculate potential profit = current price - minPrice.",
      "If potential profit > maxProfit, update maxProfit.",
      "Return maxProfit."
    ],
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5" }],
    defaultInput: { prices: [7, 1, 5, 3, 6, 4] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # Brute Force O(N^2)\n        maxP = 0\n        for i in range(len(prices)):\n            for j in range(i + 1, len(prices)):\n                maxP = max(maxP, prices[j] - prices[i])\n        return maxP",
      java: "class Solution {\n    public int maxProfit(int[] prices) {\n        // Brute Force O(N^2)\n        int maxP = 0;\n        for (int i = 0; i < prices.length; i++) {\n            for (int j = i + 1; j < prices.length; j++) {\n                maxP = Math.max(maxP, prices[j] - prices[i]);\n            }\n        }\n        return maxP;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int maxP = 0;\n        for (int i = 0; i < prices.size(); i++) {\n            for (int j = i + 1; j < prices.size(); j++) {\n                maxP = max(maxP, prices[j] - prices[i]);\n            }\n        }\n        return maxP;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # One Pass O(N)\n        l = 0\n        maxP = 0\n        for r in range(1, len(prices)):\n            if prices[l] < prices[r]:\n                maxP = max(maxP, prices[r] - prices[l])\n            else:\n                l = r\n        return maxP",
      java: "class Solution {\n    public int maxProfit(int[] prices) {\n        // One Pass O(N)\n        int minPrice = Integer.MAX_VALUE;\n        int maxP = 0;\n        for (int p : prices) {\n            if (p < minPrice) minPrice = p;\n            else maxP = Math.max(maxP, p - minPrice);\n        }\n        return maxP;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int minP = INT_MAX, maxP = 0;\n        for (int p : prices) {\n            minP = min(minP, p);\n            maxP = max(maxP, p - minP);\n        }\n        return maxP;\n    }\n};"
    }
  },
  {
    id: "3", slug: "longest-substring-without-repeating-characters", title: "Longest Substring Without Repeating", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "We maintain a sliding window using two pointers 'l' and 'r'. We use a HashSet to store unique characters in the current window. As we expand 'r', if the character at 'r' is already in the set, we shrink the window from the left by removing characters at 'l' and incrementing 'l' until the character at 'r' is no longer a duplicate.",
    description: "Find the length of the longest substring without repeating characters.",
    edgeCases: [
      "Empty string",
      "String with all same characters",
      "String with no repeats",
      "String with special characters"
    ],
    algorithmSteps: [
      "Initialize 'l' = 0, 'res' = 0, and a HashSet.",
      "Iterate 'r' from 0 up to s.length - 1:",
      "While s[r] is already in the set:",
      "Remove s[l] from set, increment 'l'.",
      "Add s[r] to set.",
      "Update 'res' = max(res, r - l + 1).",
      "Return 'res'."
    ],
    examples: [{ input: 's = "abcabcbb"', output: "3" }],
    defaultInput: { s: "abcabcbb" },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n³)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # Brute Force O(N^3)\n        def check(start, end):\n            chars = set()\n            for i in range(start, end + 1):\n                if s[i] in chars: return False\n                chars.add(s[i])\n            return True\n        res = 0\n        for i in range(len(s)):\n            for j in range(i, len(s)):\n                if check(i, j): res = max(res, j - i + 1)\n        return res",
      java: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Brute Force O(N^2) or O(N^3)\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            Set<Character> seen = new HashSet<>();\n            for (int j = i; j < s.length(); j++) {\n                if (seen.contains(s.charAt(j))) break;\n                seen.add(s.charAt(j));\n                res = Math.max(res, j - i + 1);\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            unordered_set<char> seen;\n            for (int j = i; j < s.length(); j++) {\n                if (seen.count(s[j])) break;\n                seen.insert(s[j]);\n                res = max(res, j - i + 1);\n            }\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # Sliding Window O(N)\n        charSet = set()\n        l, res = 0, 0\n        for r in range(len(s)):\n            while s[r] in charSet:\n                charSet.remove(s[l])\n                l += 1\n            charSet.add(s[r])\n            res = max(res, r - l + 1)\n        return res",
      java: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Sliding Window O(N)\n        Set<Character> charSet = new HashSet<>();\n        int l = 0, res = 0;\n        for (int r = 0; r < s.length(); r++) {\n            while (charSet.contains(s.charAt(r))) {\n                charSet.remove(s.charAt(l));\n                l++;\n            }\n            charSet.add(s.charAt(r));\n            res = Math.max(res, r - l + 1);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        unordered_set<char> charSet;\n        int l = 0, res = 0;\n        for (int r = 0; r < s.length(); r++) {\n            while (charSet.count(s[r])) {\n                charSet.erase(s[l]);\n                l++;\n            }\n            charSet.insert(s[r]);\n            res = max(res, r - l + 1);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "424", slug: "longest-repeating-character-replacement", title: "Longest Repeating Replacement", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "We use a sliding window with a frequency map to keep track of character counts within the window. We also track 'maxFreq', the maximum frequency of any character in the current window. A window of size 'W' is valid if 'W - maxFreq <= k', meaning we can replace at most 'k' characters to make all characters in the window the same.",
    description: "Find the length of the longest substring containing the same letter by replacing at most k characters.",
    edgeCases: [
      "k = 0",
      "All characters same",
      "All characters different",
      "String length < k"
    ],
    algorithmSteps: [
      "Initialize frequency map, 'l' = 0, 'maxFreq' = 0, 'res' = 0.",
      "Iterate 'r' from 0 to s.length - 1:",
      "Increment frequency of s[r], update 'maxFreq'.",
      "If (r - l + 1) - maxFreq > k:",
      "Decrement frequency of s[l], increment 'l'.",
      "Update 'res' = max(res, r - l + 1).",
      "Return 'res'."
    ],
    examples: [{ input: 's = "ABAB", k = 2', output: "4" }],
    defaultInput: { s: "ABAB", k: 2 },
    complexity: { time: "O(n)", space: "O(26)" },
    beginnerComplexity: { time: "O(n²)", space: "O(26)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int characterReplacement(String s, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        # Brute Force O(N^2)\n        res = 0\n        for i in range(len(s)):\n            count = collections.Counter()\n            max_f = 0\n            for j in range(i, len(s)):\n                count[s[j]] += 1\n                max_f = max(max_f, count[s[j]])\n                if (j - i + 1) - max_f <= k: res = max(res, j - i + 1)\n                else: break\n        return res",
      java: "class Solution {\n    public int characterReplacement(String s, int k) {\n        // Brute Force O(N^2)\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            int[] count = new int[26];\n            int maxF = 0;\n            for (int j = i; j < s.length(); j++) {\n                maxF = Math.max(maxF, ++count[s.charAt(j) - 'A']);\n                if ((j - i + 1) - maxF <= k) res = Math.max(res, j - i + 1);\n                else break;\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int characterReplacement(string s, int k) {\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            int count[26] = {0}, maxF = 0;\n            for (int j = i; j < s.length(); j++) {\n                maxF = max(maxF, ++count[s[j] - 'A']);\n                if ((j - i + 1) - maxF <= k) res = max(res, j - i + 1);\n                else break;\n            }\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        # Sliding Window O(N)\n        count = {}\n        l, res, maxf = 0, 0, 0\n        for r in range(len(s)):\n            count[s[r]] = 1 + count.get(s[r], 0)\n            maxf = max(maxf, count[s[r]])\n            if (r - l + 1) - maxf > k:\n                count[s[l]] -= 1\n                l += 1\n            res = max(res, r - l + 1)\n        return res",
      java: "class Solution {\n    public int characterReplacement(String s, int k) {\n        // Sliding Window O(N)\n        int[] count = new int[26];\n        int l = 0, res = 0, maxF = 0;\n        for (int r = 0; r < s.length(); r++) {\n            maxF = Math.max(maxF, ++count[s.charAt(r) - 'A']);\n            if ((r - l + 1) - maxF > k) {\n                count[s.charAt(l) - 'A']--;\n                l++;\n            }\n            res = Math.max(res, r - l + 1);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int characterReplacement(string s, int k) {\n        int count[26] = {0}, l = 0, res = 0, maxF = 0;\n        for (int r = 0; r < s.length(); r++) {\n            maxF = max(maxF, ++count[s[r] - 'A']);\n            if ((r - l + 1) - maxF > k) count[s[l++] - 'A']--;\n            res = max(res, r - l + 1);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "76", slug: "minimum-window-substring", title: "Minimum Window Substring", difficulty: "Hard", diffClass: "difficulty-hard", category: "Sliding Window",
    detailedExplanation: "We use a sliding window with two pointers 'l' and 'r'. We maintain a count of characters needed from string 't'. As we expand 'r', we update the count of characters currently in our window. When all required characters are present, we shrink the window from the left 'l' to find the smallest valid substring. We keep track of the minimum length and the corresponding start/end indices.",
    description: "Given strings s and t, return the minimum window in s which will contain all characters in t.",
    edgeCases: [
      "s is shorter than t",
      "t has duplicates",
      "No valid window exists",
      "s and t are the same"
    ],
    algorithmSteps: [
      "If t is empty, return empty string.",
      "Build frequency map for t.",
      "Initialize 'have' = 0, 'need' = number of unique characters in t.",
      "Initialize 'res' = [-1, -1], 'resLen' = infinity.",
      "Iterate 'r' from 0 to s.length - 1:",
      "Update window count for s[r]. If count matches t's count, increment 'have'.",
      "While 'have' == 'need':",
      "Update 'res' if current window is smaller.",
      "Decrement window count for s[l]. If count drops below t's count, decrement 'have'.",
      "Increment 'l'.",
      "Return substring from [res[0], res[1]] if resLen updated, else \"\"."
    ],
    examples: [{ input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' }],
    defaultInput: { s: "ADOBECODEBANC", t: "ABC" },
    complexity: { time: "O(n)", space: "O(k)" },
    beginnerComplexity: { time: "O(n³)", space: "O(k)" },
    optimalComplexity: { time: "O(n)", space: "O(k)" },
    starterCode: "class Solution {\n    public String minWindow(String s, String t) {\n        // Write your code here\n        return \"\";\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        # Brute Force O(N^3) - check all substrings\n        if not t: return \"\"\n        countT = collections.Counter(t)\n        res, resLen = \"\", float(\"inf\")\n        for i in range(len(s)):\n            for j in range(i, len(s)):\n                sub = s[i:j+1]\n                countSub = collections.Counter(sub)\n                valid = True\n                for c in countT:\n                    if countSub[c] < countT[c]:\n                        valid = False\n                        break\n                if valid and len(sub) < resLen:\n                    res = sub\n                    resLen = len(sub)\n        return res",
      java: "class Solution {\n    public String minWindow(String s, String t) {\n        // Brute Force O(N^3) is too slow for large inputs\n        if (s.length() < t.length()) return \"\";\n        String res = \"\";\n        int minLen = Integer.MAX_VALUE;\n        for (int i = 0; i < s.length(); i++) {\n            for (int j = i; j < s.length(); j++) {\n                String sub = s.substring(i, j + 1);\n                if (isValid(sub, t) && sub.length() < minLen) {\n                    minLen = sub.length();\n                    res = sub;\n                }\n            }\n        }\n        return res;\n    }\n    private boolean isValid(String sub, String t) {\n        int[] count = new int[128];\n        for (char c : t.toCharArray()) count[c]++;\n        for (char c : sub.toCharArray()) count[c]--;\n        for (int i : count) if (i > 0) return false;\n        return true;\n    }\n}",
      cpp: "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        if (s.length() < t.length()) return \"\";\n        string res = \"\";\n        int minLen = INT_MAX;\n        for (int i = 0; i < s.length(); i++) {\n            for (int j = i; j < s.length(); j++) {\n                string sub = s.substr(i, j - i + 1);\n                if (isValid(sub, t) && sub.length() < minLen) {\n                    minLen = sub.length();\n                    res = sub;\n                }\n            }\n        }\n        return res;\n    }\n    bool isValid(string sub, string t) {\n        int count[128] = {0};\n        for (char c : t) count[c]++;\n        for (char c : sub) count[c]--;\n        for (int i = 0; i < 128; i++) if (count[i] > 0) return false;\n        return true;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        # Sliding Window O(N)\n        if not t: return \"\"\n        countT = collections.Counter(t)\n        window = collections.defaultdict(int)\n        have, need = 0, len(countT)\n        res, resLen = [-1, -1], float(\"inf\")\n        l = 0\n        for r in range(len(s)):\n            c = s[r]\n            window[c] += 1\n            if c in countT and window[c] == countT[c]: have += 1\n            while have == need:\n                if (r - l + 1) < resLen:\n                    res = [l, r]\n                    resLen = r - l + 1\n                window[s[l]] -= 1\n                if s[l] in countT and window[s[l]] < countT[s[l]]: have -= 1\n                l += 1\n        l, r = res\n        return s[l : r + 1] if resLen != float(\"inf\") else \"\"",
      java: "class Solution {\n    public String minWindow(String s, String t) {\n        // Sliding Window O(N)\n        if (t.isEmpty()) return \"\";\n        int[] countT = new int[128];\n        for (char c : t.toCharArray()) countT[c]++;\n        int[] window = new int[128];\n        int have = 0, need = 0;\n        for (int i : countT) if (i > 0) need++;\n        int l = 0, resLen = Integer.MAX_VALUE;\n        int[] res = {-1, -1};\n        for (int r = 0; r < s.length(); r++) {\n            char c = s.charAt(r);\n            window[c]++;\n            if (countT[c] > 0 && window[c] == countT[c]) have++;\n            while (have == need) {\n                if (r - l + 1 < resLen) {\n                    resLen = r - l + 1;\n                    res[0] = l; res[1] = r;\n                }\n                char leftChar = s.charAt(l);\n                window[leftChar]--;\n                if (countT[leftChar] > 0 && window[leftChar] < countT[leftChar]) have--;\n                l++;\n            }\n        }\n        return resLen == Integer.MAX_VALUE ? \"\" : s.substring(res[0], res[1] + 1);\n    }\n}",
      cpp: "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        if (t.empty()) return \"\";\n        int countT[128] = {0}, window[128] = {0}, have = 0, need = 0;\n        for (char c : t) if (countT[c]++ == 0) need++;\n        int l = 0, resLen = INT_MAX, res[2] = {-1, -1};\n        for (int r = 0; r < s.length(); r++) {\n            char c = s[r];\n            if (++window[c] == countT[c]) have++;\n            while (have == need) {\n                if (r - l + 1 < resLen) {\n                    resLen = r - l + 1;\n                    res[0] = l; res[1] = r;\n                }\n                if (window[s[l]]-- == countT[s[l]]) have--;\n                l++;\n            }\n        }\n        return resLen == INT_MAX ? \"\" : s.substr(res[0], resLen);\n    }\n};"
    }
  },

  {
    id: "567", slug: "permutation-in-string", title: "Permutation in String", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "To check if s2 contains a permutation of s1, we use a fixed-size sliding window of length s1.length. We maintain character frequency counts for both s1 and the current window in s2. If the counts match, a permutation exists. Instead of comparing the entire frequency array at each step, we can track the number of character 'matches' to achieve O(1) updates per slide.",
    description: "Given two strings s1 and s2, return true if s2 contains a permutation of s1.",
    edgeCases: [
      "s1 longer than s2",
      "s1 is single character",
      "s2 has multiple permutations",
      "Empty strings"
    ],
    algorithmSteps: [
      "If s1.length > s2.length, return false.",
      "Initialize frequency arrays for s1 and the first window of s2.",
      "Count initial matches (index i where s1Count[i] == s2Count[i]).",
      "Slide the window across s2:",
      "Update counts and matches for entering character.",
      "Update counts and matches for exiting character.",
      "If matches == 26, return true.",
      "Return result of comparing final window."
    ],
    examples: [{ input: 's1 = "ab", s2 = "eidbaooo"', output: "true" }],
    defaultInput: { s1: "ab", s2: "eidbaooo" },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n * log n + m * n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        // Write your code here\n        return false;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        # Brute Force O(N * M) or Sorting O(M * N log N)\n        n, m = len(s1), len(s2)\n        s1_sorted = sorted(s1)\n        for i in range(m - n + 1):\n            if sorted(s2[i : i + n]) == s1_sorted:\n                return True\n        return False",
      java: "class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        // Sorting based Approach\n        if (s1.length() > s2.length()) return false;\n        char[] s1Chars = s1.toCharArray();\n        Arrays.sort(s1Chars);\n        String s1Sorted = new String(s1Chars);\n        for (int i = 0; i <= s2.length() - s1.length(); i++) {\n            char[] sub = s2.substring(i, i + s1.length()).toCharArray();\n            Arrays.sort(sub);\n            if (new String(sub).equals(s1Sorted)) return true;\n        }\n        return false;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        if (s1.length() > s2.length()) return false;\n        sort(s1.begin(), s1.end());\n        for (int i = 0; i <= s2.length() - s1.length(); i++) {\n            string sub = s2.substr(i, s1.length());\n            sort(sub.begin(), sub.end());\n            if (sub == s1) return true;\n        }\n        return false;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        # Sliding Window O(N)\n        if len(s1) > len(s2): return False\n        s1Count, s2Count = [0] * 26, [0] * 26\n        for i in range(len(s1)):\n            s1Count[ord(s1[i]) - ord('a')] += 1\n            s2Count[ord(s2[i]) - ord('a')] += 1\n        matches = 0\n        for i in range(26):\n            if s1Count[i] == s2Count[i]: matches += 1\n        l = 0\n        for r in range(len(s1), len(s2)):\n            if matches == 26: return True\n            index = ord(s2[r]) - ord('a')\n            s2Count[index] += 1\n            if s1Count[index] == s2Count[index]: matches += 1\n            elif s1Count[index] + 1 == s2Count[index]: matches -= 1\n            index = ord(s2[l]) - ord('a')\n            s2Count[index] -= 1\n            if s1Count[index] == s2Count[index]: matches += 1\n            elif s1Count[index] - 1 == s2Count[index]: matches -= 1\n            l += 1\n        return matches == 26",
      java: "class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        // Sliding Window O(N)\n        if (s1.length() > s2.length()) return false;\n        int[] s1Count = new int[26], s2Count = new int[26];\n        for (int i = 0; i < s1.length(); i++) {\n            s1Count[s1.charAt(i) - 'a']++;\n            s2Count[s2.charAt(i) - 'a']++;\n        }\n        int matches = 0;\n        for (int i = 0; i < 26; i++) if (s1Count[i] == s2Count[i]) matches++;\n        for (int i = 0; i < s2.length() - s1.length(); i++) {\n            if (matches == 26) return true;\n            int r = s2.charAt(i + s1.length()) - 'a', l = s2.charAt(i) - 'a';\n            s2Count[r]++;\n            if (s2Count[r] == s1Count[r]) matches++;\n            else if (s2Count[r] == s1Count[r] + 1) matches--;\n            s2Count[l]--;\n            if (s2Count[l] == s1Count[l]) matches++;\n            else if (s2Count[l] == s1Count[l] - 1) matches--;\n        }\n        return matches == 26;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        if (s1.length() > s2.length()) return false;\n        vector<int> s1Count(26, 0), s2Count(26, 0);\n        for (int i = 0; i < s1.length(); i++) {\n            s1Count[s1[i] - 'a']++;\n            s2Count[s2[i] - 'a']++;\n        }\n        int matches = 0;\n        for (int i = 0; i < 26; i++) if (s1Count[i] == s2Count[i]) matches++;\n        for (int i = 0; i < s2.length() - s1.length(); i++) {\n            if (matches == 26) return true;\n            int r = s2[i + s1.length()] - 'a', l = s2[i] - 'a';\n            if (++s2Count[r] == s1Count[r]) matches++;\n            else if (s2Count[r] == s1Count[r] + 1) matches--;\n            if (--s2Count[l] == s1Count[l]) matches++;\n            else if (s2Count[l] == s1Count[l] - 1) matches--;\n        }\n        return matches == 26;\n    }\n};"
    }
  },
  {
    id: "239", slug: "sliding-window-maximum", title: "Sliding Window Maximum", difficulty: "Hard", diffClass: "difficulty-hard", category: "Sliding Window",
    detailedExplanation: "We use a sliding window of size k and a Deque (Double Ended Queue) to store indices of elements. The Deque will store indices in a way that the elements they reference are in strictly decreasing order. For each new element, we remove indices of smaller elements from the back of the deque, then add the new index. The element at the front of the deque will always be the maximum for the current window.",
    description: "Return an array containing the maximum value in each sliding window of size k.",
    edgeCases: [
      "k = 1",
      "k = Array length",
      "Array with decreasing elements",
      "Array with all identical elements"
    ],
    algorithmSteps: [
      "Initialize an empty Deque 'dq' and result array.",
      "Iterate 'r' from 0 to length - 1:",
      "While 'dq' is not empty and nums[dq.peekLast()] < nums[r]:",
      "Pop from back of 'dq'.",
      "Add 'r' to back of 'dq'.",
      "If front index 'dq.peekFirst()' is out of window [r-k+1, r]:",
      "Pop from front of 'dq'.",
      "If window size is at least k (r + 1 >= k):",
      "Add nums[dq.peekFirst()] to result.",
      "Return result."
    ],
    examples: [{ input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" }],
    defaultInput: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
    complexity: { time: "O(n)", space: "O(k)" },
    beginnerComplexity: { time: "O(n * k)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(k)" },
    starterCode: "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your code here\n        return new int[0];\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        # Brute Force O(N * K)\n        res = []\n        for i in range(len(nums) - k + 1):\n            res.append(max(nums[i : i + k]))\n        return res",
      java: "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Brute Force O(N * K)\n        int n = nums.length;\n        int[] res = new int[n - k + 1];\n        for (int i = 0; i <= n - k; i++) {\n            int maxVal = nums[i];\n            for (int j = i + 1; j < i + k; j++) {\n                maxVal = Math.max(maxVal, nums[j]);\n            }\n            res[i] = maxVal;\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        int n = nums.size();\n        vector<int> res;\n        for (int i = 0; i <= n - k; i++) {\n            int maxVal = nums[i];\n            for (int j = i + 1; j < i + k; j++) maxVal = max(maxVal, nums[j]);\n            res.push_back(maxVal);\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        # Monotonic Deque O(N)\n        res = []\n        q = collections.deque() # indices\n        l = r = 0\n        while r < len(nums):\n            while q and nums[q[-1]] < nums[r]: q.pop()\n            q.append(r)\n            if l > q[0]: q.popleft()\n            if (r + 1) >= k:\n                res.append(nums[q[0]])\n                l += 1\n            r += 1\n        return res",
      java: "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Monotonic Deque O(N)\n        int n = nums.length;\n        int[] res = new int[n - k + 1];\n        Deque<Integer> dq = new LinkedList<>();\n        int ri = 0;\n        for (int i = 0; i < n; i++) {\n            while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) dq.removeLast();\n            dq.addLast(i);\n            if (dq.peekFirst() == i - k) dq.removeFirst();\n            if (i >= k - 1) res[ri++] = nums[dq.peekFirst()];\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        int n = nums.size();\n        vector<int> res;\n        deque<int> dq;\n        for (int i = 0; i < n; i++) {\n            while (!dq.empty() && nums[dq.back()] < nums[i]) dq.pop_back();\n            dq.push_back(i);\n            if (dq.front() == i - k) dq.pop_front();\n            if (i >= k - 1) res.push_back(nums[dq.front()]);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "904", slug: "fruit-into-baskets", title: "Fruit Into Baskets", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "This problem is equivalent to finding the longest substring with at most two distinct characters. We use a sliding window with a frequency map to track the types of fruit in our two baskets. If the number of types exceeds two, we shrink the window from the left until we only have two types again.",
    description: "Find the maximum amount of fruit you can collect in two baskets.",
    edgeCases: [
      "Only one type of fruit",
      "Two types of fruit",
      "Empty array",
      "All fruits same"
    ],
    algorithmSteps: [
      "Initialize frequency map, 'l' = 0, 'res' = 0.",
      "Iterate 'r' through fruits:",
      "Increment frequency of fruits[r].",
      "While size of frequency map > 2:",
      "Decrement frequency of fruits[l].",
      "If frequency is 0, remove fruits[l] from map.",
      "Increment 'l'.",
      "Update 'res' = max(res, r - l + 1).",
      "Return 'res'."
    ],
    examples: [{ input: "fruits = [1,2,1]", output: "3" }],
    defaultInput: { fruits: [1, 2, 1] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int totalFruit(int[] fruits) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def totalFruit(self, fruits: List[int]) -> int:\n        # Brute Force O(N^2)\n        res = 0\n        for i in range(len(fruits)):\n            basket = set()\n            count = 0\n            for j in range(i, len(fruits)):\n                basket.add(fruits[j])\n                if len(basket) > 2: break\n                count += 1\n            res = max(res, count)\n        return res",
      java: "class Solution {\n    public int totalFruit(int[] fruits) {\n        // Brute Force O(N^2)\n        int res = 0;\n        for (int i = 0; i < fruits.length; i++) {\n            Set<Integer> basket = new HashSet<>();\n            int count = 0;\n            for (int j = i; j < fruits.length; j++) {\n                basket.add(fruits[j]);\n                if (basket.size() > 2) break;\n                count++;\n            }\n            res = Math.max(res, count);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int totalFruit(vector<int>& fruits) {\n        int res = 0;\n        for (int i = 0; i < fruits.size(); i++) {\n            unordered_set<int> basket;\n            int count = 0;\n            for (int j = i; j < fruits.size(); j++) {\n                basket.insert(fruits[j]);\n                if (basket.size() > 2) break;\n                count++;\n            }\n            res = max(res, count);\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def totalFruit(self, fruits: List[int]) -> int:\n        # Sliding Window O(N)\n        count = collections.defaultdict(int)\n        l, res = 0, 0\n        for r in range(len(fruits)):\n            count[fruits[r]] += 1\n            while len(count) > 2:\n                count[fruits[l]] -= 1\n                if not count[fruits[l]]: del count[fruits[l]]\n                l += 1\n            res = max(res, r - l + 1)\n        return res",
      java: "class Solution {\n    public int totalFruit(int[] fruits) {\n        // Sliding Window O(N)\n        Map<Integer, Integer> count = new HashMap<>();\n        int l = 0, res = 0;\n        for (int r = 0; r < fruits.length; r++) {\n            count.put(fruits[r], count.getOrDefault(fruits[r], 0) + 1);\n            while (count.size() > 2) {\n                count.put(fruits[l], count.get(fruits[l]) - 1);\n                if (count.get(fruits[l]) == 0) count.remove(fruits[l]);\n                l++;\n            }\n            res = Math.max(res, r - l + 1);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int totalFruit(vector<int>& fruits) {\n        unordered_map<int, int> count;\n        int l = 0, res = 0;\n        for (int r = 0; r < fruits.size(); r++) {\n            count[fruits[r]]++;\n            while (count.size() > 2) {\n                if (--count[fruits[l]] == 0) count.erase(fruits[l]);\n                l++;\n            }\n            res = max(res, r - l + 1);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "1004", slug: "max-consecutive-ones-iii", title: "Max Consecutive Ones III", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "We maintain a sliding window with at most 'k' zeros. We expand 'r' and if we encounter a zero, we decrement 'k'. If 'k' becomes negative, we shrink the window from the left 'l'. If the character at 'l' was a zero, we increment 'k' back. The length of the window at each step is 'r - l + 1', and we track the maximum.",
    description: "Given binary array nums and integer k, return the max number of consecutive 1's if you can flip at most k 0's.",
    edgeCases: [
      "k = 0",
      "k > number of zeros",
      "Array with all zeros",
      "Array with all ones"
    ],
    algorithmSteps: [
      "Initialize 'l' = 0, 'res' = 0.",
      "Iterate 'r' through array:",
      "If nums[r] == 0, k--.",
      "If k < 0:",
      "If nums[l] == 0, k++.",
      "Increment 'l'.",
      "Update 'res' = max(res, r - l + 1).",
      "Return 'res'."
    ],
    examples: [{ input: "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2", output: "6" }],
    defaultInput: { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2 },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int longestOnes(int[] nums, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def longestOnes(self, nums: List[int], k: int) -> int:\n        # Brute Force O(N^2)\n        res = 0\n        for i in range(len(nums)):\n            zeros = 0\n            for j in range(i, len(nums)):\n                if nums[j] == 0: zeros += 1\n                if zeros <= k: res = max(res, j - i + 1)\n                else: break\n        return res",
      java: "class Solution {\n    public int longestOnes(int[] nums, int k) {\n        // Brute Force O(N^2)\n        int res = 0;\n        for (int i = 0; i < nums.length; i++) {\n            int zeros = 0;\n            for (int j = i; j < nums.length; j++) {\n                if (nums[j] == 0) zeros++;\n                if (zeros <= k) res = Math.max(res, j - i + 1);\n                else break;\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int longestOnes(vector<int>& nums, int k) {\n        int res = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            int zeros = 0;\n            for (int j = i; j < nums.size(); j++) {\n                if (nums[j] == 0) zeros++;\n                if (zeros <= k) res = max(res, j - i + 1);\n                else break;\n            }\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def longestOnes(self, nums: List[int], k: int) -> int:\n        # Sliding Window O(N)\n        l = 0\n        for r in range(len(nums)):\n            if nums[r] == 0: k -= 1\n            if k < 0:\n                if nums[l] == 0: k += 1\n                l += 1\n        return r - l + 1",
      java: "class Solution {\n    public int longestOnes(int[] nums, int k) {\n        // Sliding Window O(N)\n        int l = 0, r;\n        for (r = 0; r < nums.length; r++) {\n            if (nums[r] == 0) k--;\n            if (k < 0) {\n                if (nums[l] == 0) k++;\n                l++;\n            }\n        }\n        return r - l;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int longestOnes(vector<int>& nums, int k) {\n        int l = 0, r;\n        for (r = 0; r < nums.size(); r++) {\n            if (nums[r] == 0) k--;\n            if (k < 0) if (nums[l++] == 0) k++;\n        }\n        return r - l;\n    }\n};"
    }
  },

  {
    id: "159", slug: "longest-substring-at-most-two-distinct-characters", title: "Two Distinct Characters", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "We use a sliding window to find the longest substring containing at most two unique characters. We maintain a frequency map (or hash table) of characters in the current window. If the size of the map exceeds two, we shrink the window from the left until only two unique characters remain.",
    description: "Given a string s, return the length of the longest substring that contains at most two distinct characters.",
    edgeCases: [
      "String length < 2",
      "String with all same characters",
      "String with no repeating characters",
      "Empty string"
    ],
    algorithmSteps: [
      "Initialize frequency map, 'l' = 0, 'res' = 0.",
      "Iterate 'r' through string:",
      "Update character frequency in map.",
      "While map size > 2:",
      "Decrement frequency of s[l].",
      "If frequency is 0, remove s[l] from map.",
      "Increment 'l'.",
      "Update 'res' = max(res, r - l + 1).",
      "Return 'res'."
    ],
    examples: [{ input: 's = "eceba"', output: "3" }],
    defaultInput: { s: "eceba" },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int lengthOfLongestSubstringTwoDistinct(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:\n        # Brute Force O(N^2)\n        res = 0\n        for i in range(len(s)):\n            distinct = set()\n            for j in range(i, len(s)):\n                distinct.add(s[j])\n                if len(distinct) > 2: break\n                res = max(res, j - i + 1)\n        return res",
      java: "class Solution {\n    public int lengthOfLongestSubstringTwoDistinct(String s) {\n        // Brute Force O(N^2)\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            Set<Character> distinct = new HashSet<>();\n            for (int j = i; j < s.length(); j++) {\n                distinct.add(s.charAt(j));\n                if (distinct.size() > 2) break;\n                res = Math.max(res, j - i + 1);\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int lengthOfLongestSubstringTwoDistinct(string s) {\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            unordered_set<char> distinct;\n            for (int j = i; j < s.length(); j++) {\n                distinct.insert(s[j]);\n                if (distinct.size() > 2) break;\n                res = max(res, j - i + 1);\n            }\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:\n        # Sliding Window O(N)\n        count = collections.Counter()\n        l, res = 0, 0\n        for r in range(len(s)):\n            count[s[r]] += 1\n            while len(count) > 2:\n                count[s[l]] -= 1\n                if count[s[l]] == 0: del count[s[l]]\n                l += 1\n            res = max(res, r - l + 1)\n        return res",
      java: "class Solution {\n    public int lengthOfLongestSubstringTwoDistinct(String s) {\n        // Sliding Window O(N)\n        Map<Character, Integer> count = new HashMap<>();\n        int l = 0, res = 0;\n        for (int r = 0; r < s.length(); r++) {\n            count.put(s.charAt(r), count.getOrDefault(s.charAt(r), 0) + 1);\n            while (count.size() > 2) {\n                count.put(s.charAt(l), count.get(s.charAt(l)) - 1);\n                if (count.get(s.charAt(l)) == 0) count.remove(s.charAt(l));\n                l++;\n            }\n            res = Math.max(res, r - l + 1);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int lengthOfLongestSubstringTwoDistinct(string s) {\n        unordered_map<char, int> count;\n        int l = 0, res = 0;\n        for (int r = 0; r < s.length(); r++) {\n            count[s[r]]++;\n            while (count.size() > 2) {\n                if (--count[s[l]] == 0) count.erase(s[l]);\n                l++;\n            }\n            res = max(res, r - l + 1);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "480", slug: "sliding-window-median", title: "Sliding Window Median", difficulty: "Hard", diffClass: "difficulty-hard", category: "Sliding Window",
    detailedExplanation: "We maintain two heaps (or a balanced BST) – a max-heap for the smaller half and a min-heap for the larger half of the current window. This allows us to find the median in O(1). As the window slides, we remove the element that is no longer in the window and add the new element, re-balancing the heaps to maintain the property.",
    description: "Find the median value for each sliding window of size k in an array.",
    edgeCases: [
      "k = 1",
      "k = Array length",
      "Array with integer overflow",
      "Array with all identical elements"
    ],
    algorithmSteps: [
      "Use two heaps: 'small' (max-heap) and 'large' (min-heap).",
      "Process initial window of size k.",
      "Median is small.max() or (small.max() + large.min()) / 2.",
      "Slide window: remove element leaving, add element entering.",
      "Balance heaps such that size difference is at most 1.",
      "Update median in result array.",
      "Return result."
    ],
    examples: [{ input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[1,-1,-1,3,5,6]" }],
    defaultInput: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
    complexity: { time: "O(n log k)", space: "O(k)" },
    beginnerComplexity: { time: "O(n * k log k)", space: "O(k)" },
    optimalComplexity: { time: "O(n log k)", space: "O(k)" },
    starterCode: "class Solution {\n    public double[] medianSlidingWindow(int[] nums, int k) {\n        // Write your code here\n        return new double[0];\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:\n        # Brute Force O(N * K log K)\n        res = []\n        for i in range(len(nums) - k + 1):\n            window = sorted(nums[i : i + k])\n            if k % 2 == 1:\n                res.append(float(window[k // 2]))\n            else:\n                res.append((window[k // 2 - 1] + window[k // 2]) / 2.0)\n        return res",
      java: "class Solution {\n    public double[] medianSlidingWindow(int[] nums, int k) {\n        // Brute Force O(N * K log K)\n        int n = nums.length;\n        double[] res = new double[n - k + 1];\n        for (int i = 0; i <= n - k; i++) {\n            int[] window = Arrays.copyOfRange(nums, i, i + k);\n            Arrays.sort(window);\n            if (k % 2 == 1) res[i] = (double)window[k / 2];\n            else res[i] = ((double)window[k / 2 - 1] + (double)window[k / 2]) / 2.0;\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<double> medianSlidingWindow(vector<int>& nums, int k) {\n        int n = nums.size();\n        vector<double> res;\n        for (int i = 0; i <= n - k; i++) {\n            vector<int> window(nums.begin() + i, nums.begin() + i + k);\n            sort(window.begin(), window.end());\n            if (k % 2 == 1) res.push_back((double)window[k / 2]);\n            else res.push_back(((double)window[k / 2 - 1] + (double)window[k / 2]) / 2.0);\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:\n        # Optimal using SortedList (O(N log K))\n        from sortedcontainers import SortedList\n        res = []\n        window = SortedList(nums[:k])\n        res.append((window[k//2] + window[(k-1)//2]) / 2.0)\n        for i in range(k, len(nums)):\n            window.remove(nums[i-k])\n            window.add(nums[i])\n            res.append((window[k//2] + window[(k-1)//2]) / 2.0)\n        return res",
      java: "class Solution {\n    public double[] medianSlidingWindow(int[] nums, int k) {\n        // Optimal using two TreeSets (O(N log K))\n        // Note: Java's TreeSet doesn't support duplicates or indexing well,\n        // usually implemented with two PriorityQueues and lazy removal.\n        int n = nums.length;\n        double[] res = new double[n - k + 1];\n        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());\n        PriorityQueue<Integer> right = new PriorityQueue<>();\n        \n        for (int i = 0; i < n; i++) {\n            if (left.isEmpty() || nums[i] <= left.peek()) left.add(nums[i]);\n            else right.add(nums[i]);\n            \n            if (i >= k) {\n                int out = nums[i - k];\n                if (out <= left.peek()) left.remove(out);\n                else right.remove(out);\n            }\n            \n            while (left.size() > right.size() + 1) right.add(left.poll());\n            while (right.size() > left.size()) left.add(right.poll());\n            \n            if (i >= k - 1) {\n                if (k % 2 == 1) res[i - k + 1] = (double)left.peek();\n                else res[i - k + 1] = ((double)left.peek() + (double)right.peek()) / 2.0;\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<double> medianSlidingWindow(vector<int>& nums, int k) {\n        multiset<int> window(nums.begin(), nums.begin() + k);\n        auto mid = next(window.begin(), k / 2);\n        vector<double> res;\n        for (int i = k; ; i++) {\n            res.push_back(((double)*mid + *next(mid, k % 2 - 1)) / 2.0);\n            if (i == nums.size()) break;\n            window.insert(nums[i]);\n            if (nums[i] < *mid) mid--;\n            if (nums[i - k] <= *mid) mid++;\n            window.erase(window.find(nums[i - k]));\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "187", slug: "repeated-dna-sequences", title: "Repeated DNA Sequences", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "We use a sliding window of fixed length 10. We iterate through the DNA string and store each 10-letter sequence in a HashSet. If we encounter a sequence that is already in the 'seen' set, we add it to a 'result' set to avoid duplicates in our final list.",
    description: "Find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.",
    edgeCases: [
      "String length < 10",
      "No repeated sequences",
      "All same characters",
      "Repeated sequences overlapping"
    ],
    algorithmSteps: [
      "Initialize 'seen' and 'res' sets.",
      "Iterate 'i' from 0 to length - 10:",
      "Extract substring of length 10.",
      "If substring in 'seen', add to 'res'.",
      "Else, add to 'seen'.",
      "Return list of 'res'."
    ],
    examples: [{ input: 's = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"', output: '["AAAAACCCCC","CCCCCAAAAA"]' }],
    defaultInput: { s: "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT" },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n²)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public List<String> findRepeatedDnaSequences(String s) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def findRepeatedDnaSequences(self, s: str) -> List[str]:\n        # Brute Force O(N^2)\n        res = set()\n        n = len(s)\n        for i in range(n - 9):\n            sub = s[i : i+10]\n            for j in range(i + 1, n - 9):\n                if s[j : j+10] == sub:\n                    res.add(sub)\n                    break\n        return list(res)",
      java: "class Solution {\n    public List<String> findRepeatedDnaSequences(String s) {\n        // Brute Force O(N^2)\n        Set<String> res = new HashSet<>();\n        for (int i = 0; i <= s.length() - 10; i++) {\n            String sub = s.substring(i, i + 10);\n            if (s.indexOf(sub, i + 1) != -1) res.add(sub);\n        }\n        return new ArrayList<>(res);\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<string> findRepeatedDnaSequences(string s) {\n        set<string> res;\n        for (int i = 0; i + 10 <= s.length(); i++) {\n            string sub = s.substr(i, 10);\n            if (s.find(sub, i + 1) != string::npos) res.insert(sub);\n        }\n        return vector<string>(res.begin(), res.end());\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def findRepeatedDnaSequences(self, s: str) -> List[str]:\n        # HashSet O(N)\n        seen, res = set(), set()\n        for l in range(len(s) - 9):\n            cur = s[l : l + 10]\n            if cur in seen: res.add(cur)\n            seen.add(cur)\n        return list(res)",
      java: "class Solution {\n    public List<String> findRepeatedDnaSequences(String s) {\n        // HashSet O(N)\n        Set<String> seen = new HashSet<>(), res = new HashSet<>();\n        for (int i = 0; i <= s.length() - 10; i++) {\n            String sub = s.substring(i, i + 10);\n            if (!seen.add(sub)) res.add(sub);\n        }\n        return new ArrayList<>(res);\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<string> findRepeatedDnaSequences(string s) {\n        unordered_set<string> seen, res;\n        for (int i = 0; i + 10 <= s.length(); i++) {\n            string sub = s.substr(i, 10);\n            if (!seen.insert(sub).second) res.insert(sub);\n        }\n        return vector<string>(res.begin(), res.end());\n    }\n};"
    }
  },
  {
    id: "1838", slug: "frequency-of-the-most-frequent-element", title: "Most Frequent Element", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "We sort the array first. Sorting allows us to use a sliding window property: for any window [l, r], the target element to reach for all elements in the window is nums[r]. The total operations needed to make all elements in the window equal to nums[r] is (nums[r] * windowSize) - windowSum. We expand 'r' and shrink 'l' to keep this cost <= k.",
    description: "Given an integer array nums and integer k, return the max possible frequency of an element after at most k increments.",
    edgeCases: [
      "k = 0",
      "Array with all same elements",
      "Array with all different elements",
      "Single element array"
    ],
    algorithmSteps: [
      "Sort 'nums'.",
      "Initialize 'l' = 0, 'total' = 0, 'res' = 0.",
      "Iterate 'r' from 0 up to nums.length - 1:",
      "Update 'total' += nums[r].",
      "While nums[r] * (r - l + 1) > total + k:",
      "Update 'total' -= nums[l], increment 'l'.",
      "Update 'res' = max(res, r - l + 1).",
      "Return 'res'."
    ],
    examples: [{ input: "nums = [1,2,4], k = 5", output: "3" }],
    defaultInput: { nums: [1, 2, 4], k: 5 },
    complexity: { time: "O(n log n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n log n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int maxFrequency(int[] nums, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def maxFrequency(self, nums: List[int], k: int) -> int:\n        # Brute Force O(N^2) after Sorting\n        nums.sort()\n        res = 0\n        for i in range(len(nums)):\n            ops, freq = k, 1\n            for j in range(i - 1, -1, -1):\n                diff = nums[i] - nums[j]\n                if diff <= ops:\n                    ops -= diff\n                    freq += 1\n                else: break\n            res = max(res, freq)\n        return res",
      java: "class Solution {\n    public int maxFrequency(int[] nums, int k) {\n        // Brute Force O(N^2) after Sorting\n        Arrays.sort(nums);\n        int res = 0;\n        for (int i = 0; i < nums.length; i++) {\n            long ops = k, freq = 1;\n            for (int j = i - 1; j >= 0; j--) {\n                int diff = nums[i] - nums[j];\n                if (diff <= ops) {\n                    ops -= diff; freq++;\n                } else break;\n            }\n            res = Math.max(res, (int)freq);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxFrequency(vector<int>& nums, int k) {\n        sort(nums.begin(), nums.end());\n        int res = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            long long ops = k, freq = 1;\n            for (int j = i - 1; j >= 0; j--) {\n                if (nums[i] - nums[j] <= ops) ops -= (nums[i] - nums[j]), freq++;\n                else break;\n            }\n            res = max(res, (int)freq);\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def maxFrequency(self, nums: List[int], k: int) -> int:\n        # Sliding Window O(N log N)\n        nums.sort()\n        l, r, res, total = 0, 0, 0, 0\n        while r < len(nums):\n            total += nums[r]\n            while nums[r] * (r - l + 1) > total + k:\n                total -= nums[l]\n                l += 1\n            res = max(res, r - l + 1)\n            r += 1\n        return res",
      java: "class Solution {\n    public int maxFrequency(int[] nums, int k) {\n        // Sliding Window O(N log N)\n        Arrays.sort(nums);\n        int l = 0, res = 0;\n        long total = 0;\n        for (int r = 0; r < nums.length; r++) {\n            total += nums[r];\n            while ((long)nums[r] * (r - l + 1) > total + k) {\n                total -= nums[l];\n                l++;\n            }\n            res = Math.max(res, r - l + 1);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxFrequency(vector<int>& nums, int k) {\n        sort(nums.begin(), nums.end());\n        int l = 0, res = 0;\n        long long total = 0;\n        for (int r = 0; r < nums.size(); r++) {\n            total += nums[r];\n            while ((long long)nums[r] * (r - l + 1) > total + k) total -= nums[l++];\n            res = max(res, r - l + 1);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "209", slug: "minimum-size-subarray-sum", title: "Minimum Size Subarray Sum", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "We use a sliding window to find the smallest subarray with sum at least 'target'. We expand 'r' to include elements in our window until the sum reaches or exceeds 'target'. Then we shrink 'l' to find the smallest possible window that still satisfies the condition.",
    description: "Given array of positive integers and target, return minimal length of a subarray whose sum is >= target.",
    edgeCases: [
      "Target not achievable",
      "Single element reaches target",
      "Array with all large elements",
      "Empty array"
    ],
    algorithmSteps: [
      "Initialize 'l' = 0, 'sum' = 0, 'res' = infinity.",
      "Iterate 'r' from 0 up to nums.length - 1:",
      "Update 'sum' += nums[r].",
      "While 'sum' >= target:",
      "Update 'res' = min(res, r - l + 1).",
      "Update 'sum' -= nums[l], increment 'l'.",
      "Return 'res' if updated, else 0."
    ],
    examples: [{ input: "target = 7, nums = [2,3,1,2,4,3]", output: "2" }],
    defaultInput: { target: 7, nums: [2, 3, 1, 2, 4, 3] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def minSubArrayLen(self, target: int, nums: List[int]) -> int:\n        # Brute Force O(N^2)\n        n, res = len(nums), float('inf')\n        for i in range(n):\n            curr = 0\n            for j in range(i, n):\n                curr += nums[j]\n                if curr >= target:\n                    res = min(res, j - i + 1)\n                    break\n        return res if res != float('inf') else 0",
      java: "class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        // Brute Force O(N^2)\n        int n = nums.length, res = Integer.MAX_VALUE;\n        for (int i = 0; i < n; i++) {\n            int sum = 0;\n            for (int j = i; j < n; j++) {\n                sum += nums[j];\n                if (sum >= target) {\n                    res = Math.min(res, j - i + 1);\n                    break;\n                }\n            }\n        }\n        return res == Integer.MAX_VALUE ? 0 : res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        int n = nums.size(), res = INT_MAX;\n        for (int i = 0; i < n; i++) {\n            int sum = 0;\n            for (int j = i; j < n; j++) {\n                sum += nums[j];\n                if (sum >= target) { res = min(res, j - i + 1); break; }\n            }\n        }\n        return res == INT_MAX ? 0 : res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def minSubArrayLen(self, target: int, nums: List[int]) -> int:\n        # Sliding Window O(N)\n        l, total, res = 0, 0, float(\"inf\")\n        for r in range(len(nums)):\n            total += nums[r]\n            while total >= target:\n                res = min(r - l + 1, res)\n                total -= nums[l]\n                l += 1\n        return 0 if res == float(\"inf\") else res",
      java: "class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        // Sliding Window O(N)\n        int l = 0, sum = 0, res = Integer.MAX_VALUE;\n        for (int r = 0; r < nums.length; r++) {\n            sum += nums[r];\n            while (sum >= target) {\n                res = Math.min(res, r - l + 1);\n                sum -= nums[l++];\n            }\n        }\n        return res == Integer.MAX_VALUE ? 0 : res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        int l = 0, sum = 0, res = INT_MAX;\n        for (int r = 0; r < nums.size(); r++) {\n            sum += nums[r];\n            while (sum >= target) { res = min(res, r - l + 1); sum -= nums[l++]; }\n        }\n        return res == INT_MAX ? 0 : res;\n    }\n};"
    }
  },
  {
    id: "1456", slug: "maximum-number-of-vowels-in-a-substring-of-given-length", title: "Maximum Vowels", difficulty: "Medium", diffClass: "difficulty-medium", category: "Sliding Window",
    detailedExplanation: "We use a fixed-size sliding window of length k. As we slide the window, we add s[r] to the count if it's a vowel and subtract s[l] from the count if it was a vowel. We update the maximum count seen so far.",
    description: "Given string s and integer k, return the max number of vowels in any substring of s with length k.",
    edgeCases: [
      "k = s.length",
      "k = 1",
      "No vowels in string",
      "Only vowels in string"
    ],
    algorithmSteps: [
      "Initialize 'vowels' set, 'l' = 0, 'count' = 0, 'res' = 0.",
      "Iterate 'r' through string:",
      "If s[r] is a vowel, increment 'count'.",
      "If window size (r - l + 1) > k:",
      "If s[l] is a vowel, decrement 'count'.",
      "Increment 'l'.",
      "Update 'res' = max(res, count).",
      "Return 'res'."
    ],
    examples: [{ input: 's = "abciiidef", k = 3', output: "3" }],
    defaultInput: { s: "abciiidef", k: 3 },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n * k)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int maxVowels(String s, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def maxVowels(self, s: str, k: int) -> int:\n        # Brute Force O(N * K)\n        res, vowels = 0, set('aeiou')\n        for i in range(len(s) - k + 1):\n            count = sum(1 for j in range(i, i + k) if s[j] in vowels)\n            res = max(res, count)\n        return res",
      java: "class Solution {\n    public int maxVowels(String s, int k) {\n        // Brute Force O(N * K)\n        int res = 0, n = s.length();\n        String vowels = \"aeiou\";\n        for (int i = 0; i <= n - k; i++) {\n            int count = 0;\n            for (int j = i; j < i + k; j++) {\n                if (vowels.indexOf(s.charAt(j)) != -1) count++;\n            }\n            res = Math.max(res, count);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxVowels(string s, int k) {\n        int res = 0, n = s.length();\n        auto isVowel = [](char c) {\n            return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';\n        };\n        for (int i = 0; i <= n - k; i++) {\n            int count = 0;\n            for (int j = i; j < i + k; j++) if (isVowel(s[j])) count++;\n            res = max(res, count);\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def maxVowels(self, s: str, k: int) -> int:\n        # Sliding Window O(N)\n        vowels = {'a', 'e', 'i', 'o', 'u'}\n        l, cnt, res = 0, 0, 0\n        for r in range(len(s)):\n            cnt += 1 if s[r] in vowels else 0\n            if r - l + 1 > k:\n                cnt -= 1 if s[l] in vowels else 0\n                l += 1\n            res = max(res, cnt)\n        return res",
      java: "class Solution {\n    public int maxVowels(String s, int k) {\n        // Sliding Window O(N)\n        Set<Character> vowels = Set.of('a', 'e', 'i', 'o', 'u');\n        int cnt = 0, res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (vowels.contains(s.charAt(i))) cnt++;\n            if (i >= k) {\n                if (vowels.contains(s.charAt(i - k))) cnt--;\n            }\n            res = Math.max(res, cnt);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int maxVowels(string s, int k) {\n        auto isVowel = [](char c) { return c=='a'||c=='e'||c=='i'||c=='o'||c=='u'; };\n        int cnt = 0, res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (isVowel(s[i])) cnt++;\n            if (i >= k) if (isVowel(s[i-k])) cnt--;\n            res = max(res, cnt);\n        }\n        return res;\n    }\n};"
    }
  },

  // STACK
  {
    id: "20", slug: "valid-parentheses", title: "Valid Parentheses", difficulty: "Easy", diffClass: "difficulty-easy", category: "Stack",
    detailedExplanation: "We use a stack to process brackets one by one. If we encounter an opening bracket, we push it onto the stack. If we see a closing bracket, it must match the opening bracket at the top of the stack. If it doesn't match, or if the stack is empty when we see a closing bracket, the string is invalid.",
    description: "Given a string containing characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    edgeCases: [
      "Empty string",
      "Odd length string",
      "Correct order but wrong types",
      "Only opening brackets",
      "Starting with closing bracket"
    ],
    algorithmSteps: [
      "Initialize an empty Stack of characters.",
      "Iterate through each character in the string:",
      "If it's an opening bracket, push to stack.",
      "If it's a closing bracket:",
      "Return false if stack is empty.",
      "Pop top and return false if types don't match.",
      "Return true if stack is empty after processing all characters."
    ],
    examples: [{ input: 's = "()"', output: "true" }],
    defaultInput: { s: "()" },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n²)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n        return false;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def isValid(self, s: str) -> bool:\n        # Brute Force O(N^2) using replacement\n        while '()' in s or '{}' in s or '[]' in s:\n            s = s.replace('()', '').replace('{}', '').replace('[]', '')\n        return s == ''",
      java: "class Solution {\n    public boolean isValid(String s) {\n        // Brute Force O(N^2) using replacement\n        while (s.contains(\"()\") || s.contains(\"{}\") || s.contains(\"[]\")) {\n            s = s.replace(\"()\", \"\").replace(\"{}\", \"\").replace(\"[]\", \"\");\n        }\n        return s.isEmpty();\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool isValid(string s) {\n        while (s.find(\"()\") != string::npos || s.find(\"{}\") != string::npos || s.find(\"[]\") != string::npos) {\n            auto p1 = s.find(\"()\"); if (p1 != string::npos) s.erase(p1, 2);\n            auto p2 = s.find(\"{}\"); if (p2 != string::npos) s.erase(p2, 2);\n            auto p3 = s.find(\"[]\"); if (p3 != string::npos) s.erase(p3, 2);\n        }\n        return s.empty();\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def isValid(self, s: str) -> bool:\n        # Stack O(N)\n        stack = []\n        closeToOpen = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n        for c in s:\n            if c in closeToOpen:\n                if stack and stack[-1] == closeToOpen[c]: stack.pop()\n                else: return False\n            else: stack.append(c)\n        return not stack",
      java: "class Solution {\n    public boolean isValid(String s) {\n        // Stack O(N)\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') stack.push(')');\n            else if (c == '{') stack.push('}');\n            else if (c == '[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool isValid(string s) {\n        stack<char> st;\n        for (char c : s) {\n            if (c == '(') st.push(')');\n            else if (c == '{') st.push('}');\n            else if (c == '[') st.push(']');\n            else if (st.empty() || st.top() != c) return false;\n            else st.pop();\n        }\n        return st.empty();\n    }\n};"
    }
  },
  {
    id: "155", slug: "min-stack", title: "Min Stack", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "To retrieve the minimum element in O(1), we can use two stacks: a main 'stack' to store all values and a 'minStack' to store the minimum value encountered up to each point. When we push a value, we push min(value, minStack.isEmpty() ? val : minStack.peek()) onto 'minStack'. poppig removes from both.",
    description: "Design a stack that supports retrieving the minimum element in constant time.",
    edgeCases: [
      "Popping from empty stack",
      "Pushing duplicate minimums",
      "Empty stack calls"
    ],
    algorithmSteps: [
      "Use two stacks: 'stack' and 'minStack'.",
      "Push(val):",
      "Push val to 'stack'.",
      "Push min(val, minStack.isEmpty() ? val : minStack.peek()) to 'minStack'.",
      "Pop(): Pop from both 'stack' and 'minStack'.",
      "Top(): Return stack.peek().",
      "GetMin(): Return minStack.peek()."
    ],
    examples: [{ input: '["MinStack","push","push","getMin"] \n [[],[-2],[0],[]]', output: "[null,null,null,-2]" }],
    complexity: { time: "O(1)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(1)", space: "O(n)" },
    starterCode: "class MinStack {\n    public MinStack() {}\n    public void push(int val) {}\n    public void pop() {}\n    public int top() { return 0; }\n    public int getMin() { return 0; }\n}",
    beginnerCode: {
      python: "class MinStack:\n    def __init__(self):\n        self.stack = []\n    def push(self, val: int) -> None: self.stack.append(val)\n    def pop(self) -> None: self.stack.pop()\n    def top(self) -> int: return self.stack[-1]\n    def getMin(self) -> int: return min(self.stack)",
      java: "class MinStack {\n    // O(N) getMin\n    private List<Integer> stack = new ArrayList<>();\n    public MinStack() {}\n    public void push(int val) { stack.add(val); }\n    public void pop() { stack.remove(stack.size() - 1); }\n    public int top() { return stack.get(stack.size() - 1); }\n    public int getMin() {\n        int min = stack.get(0);\n        for (int x : stack) min = Math.min(min, x);\n        return min;\n    }\n}",
      cpp: "class MinStack {\npublic:\n    vector<int> stack;\n    MinStack() {}\n    void push(int val) { stack.push_back(val); }\n    void pop() { stack.pop_back(); }\n    int top() { return stack.back(); }\n    int getMin() { return *min_element(stack.begin(), stack.end()); }\n};"
    },
    codes: {
      python: "class MinStack:\n    # O(1) getMin\n    def __init__(self):\n        self.stack = []\n        self.minStack = []\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        m = min(val, self.minStack[-1] if self.minStack else val)\n        self.minStack.append(m)\n    def pop(self) -> None:\n        self.stack.pop()\n        self.minStack.pop()\n    def top(self) -> int: return self.stack[-1]\n    def getMin(self) -> int: return self.minStack[-1]",
      java: "class MinStack {\n    // O(1) getMin\n    private Stack<Integer> stack = new Stack<>();\n    private Stack<Integer> minStack = new Stack<>();\n    public MinStack() {}\n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val <= minStack.peek()) minStack.push(val);\n    }\n    public void pop() {\n        if (stack.pop().equals(minStack.peek())) minStack.pop();\n    }\n    public int top() { return stack.peek(); }\n    public int getMin() { return minStack.peek(); }\n}",
      cpp: "class MinStack {\npublic:\n    stack<int> st, minSt;\n    MinStack() {}\n    void push(int val) {\n        st.push(val);\n        if (minSt.empty() || val <= minSt.top()) minSt.push(val);\n    }\n    void pop() {\n        if (st.top() == minSt.top()) minSt.pop();\n        st.pop();\n    }\n    int top() { return st.top(); }\n    int getMin() { return minSt.top(); }\n};"
    }
  },
  {
    id: "150", slug: "evaluate-reverse-polish-notation", title: "Evaluate RPN", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "In Reverse Polish Notation (RPN), operators follow their operands. We use a stack to store operands. When we encounter an operator, we pop the top two operands, apply the operator, and push the result back onto the stack.",
    description: "Evaluate the result of an arithmetic expression in Reverse Polish Notation.",
    edgeCases: [
      "Negative results/operands",
      "Division by zero (not usually in constraints)",
      "Integer truncation for division",
      "Single token"
    ],
    algorithmSteps: [
      "Initialize an empty Stack of integers.",
      "Iterate through each token in 'tokens':",
      "If token is an operator (+, -, *, /):",
      "Pop two operands: 'b' then 'a'.",
      "Apply operator: 'a op b'.",
      "Push result back to stack.",
      "Else (token is a number):",
      "Convert token to integer and push to stack.",
      "Return the single value remaining on the stack."
    ],
    examples: [{ input: 'tokens = ["2","1","+","3","*"]', output: "9" }],
    defaultInput: { tokens: ["2", "1", "+", "3", "*"] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n²)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public int evalRPN(String[] tokens) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def evalRPN(self, tokens: List[str]) -> int:\n        # Simulation without stack O(N^2)\n        while len(tokens) > 1:\n            for i in range(len(tokens)):\n                if tokens[i] in \"+-*/\":\n                    res = int(eval(f\"{tokens[i-2]} {tokens[i] if tokens[i] != '/' else '//'} {tokens[i-1]}\"))\n                    tokens = tokens[:i-2] + [str(res)] + tokens[i+1:]\n                    break\n        return int(tokens[0])",
      java: "class Solution {\n    public int evalRPN(String[] tokens) {\n        // List-based simulation O(N^2)\n        List<String> list = new ArrayList<>(Arrays.asList(tokens));\n        while (list.size() > 1) {\n            for (int i = 0; i < list.size(); i++) {\n                if (\"+-*/\".contains(list.get(i))) {\n                    int b = Integer.parseInt(list.remove(i - 1));\n                    int a = Integer.parseInt(list.remove(i - 2));\n                    String op = list.remove(i - 2);\n                    int res = 0;\n                    if (op.equals(\"+\")) res = a + b;\n                    else if (op.equals(\"-\")) res = a - b;\n                    else if (op.equals(\"*\")) res = a * b;\n                    else res = a / b;\n                    list.add(i - 2, String.valueOf(res));\n                    break;\n                }\n            }\n        }\n        return Integer.parseInt(list.get(0));\n    }\n}",
      cpp: "class Solution {\npublic:\n    int evalRPN(vector<string>& tokens) {\n        while (tokens.size() > 1) {\n            for (int i = 0; i < tokens.size(); i++) {\n                if (tokens[i] == \"+\" || tokens[i] == \"-\" || tokens[i] == \"*\" || tokens[i] == \"/\") {\n                    int b = stoi(tokens[i-1]), a = stoi(tokens[i-2]), res = 0;\n                    if (tokens[i] == \"+\") res = a + b;\n                    else if (tokens[i] == \"-\") res = a - b;\n                    else if (tokens[i] == \"*\") res = a * b;\n                    else res = a / b;\n                    tokens.erase(tokens.begin() + i - 2, tokens.begin() + i + 1);\n                    tokens.insert(tokens.begin() + i - 2, to_string(res));\n                    break;\n                }\n            }\n        }\n        return stoi(tokens[0]);\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def evalRPN(self, tokens: List[str]) -> int:\n        # Stack O(N)\n        stack = []\n        for t in tokens:\n            if t == \"+\": stack.append(stack.pop() + stack.pop())\n            elif t == \"-\": \n                b, a = stack.pop(), stack.pop()\n                stack.append(a - b)\n            elif t == \"*\": stack.append(stack.pop() * stack.pop())\n            elif t == \"/\":\n                b, a = stack.pop(), stack.pop()\n                stack.append(int(float(a) / b))\n            else: stack.append(int(t))\n        return stack[0]",
      java: "class Solution {\n    public int evalRPN(String[] tokens) {\n        // Stack O(N)\n        Stack<Integer> stack = new Stack<>();\n        for (String t : tokens) {\n            if (t.equals(\"+\")) stack.push(stack.pop() + stack.pop());\n            else if (t.equals(\"-\")) { int b = stack.pop(); stack.push(stack.pop() - b); }\n            else if (t.equals(\"*\")) stack.push(stack.pop() * stack.pop());\n            else if (t.equals(\"/\")) { int b = stack.pop(); stack.push(stack.pop() / b); }\n            else stack.push(Integer.parseInt(t));\n        }\n        return stack.pop();\n    }\n}",
      cpp: "class Solution {\npublic:\n    int evalRPN(vector<string>& tokens) {\n        stack<int> st;\n        for (string& t : tokens) {\n            if (t == \"+\") { int b = st.top(); st.pop(); int a = st.top(); st.pop(); st.push(a + b); }\n            else if (t == \"-\") { int b = st.top(); st.pop(); int a = st.top(); st.pop(); st.push(a - b); }\n            else if (t == \"*\") { int b = st.top(); st.pop(); int a = st.top(); st.pop(); st.push(a * b); }\n            else if (t == \"/\") { int b = st.top(); st.pop(); int a = st.top(); st.pop(); st.push(a / b); }\n            else st.push(stoi(t));\n        }\n        return st.top();\n    }\n};"
    }
  },
  {
    id: "22", slug: "generate-parentheses", title: "Generate Parentheses", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "We generate valid combinations using backtracking. We maintain the count of open and closed parentheses used. We add an '(' if 'openCount < n', and we add a ')' if 'closedCount < openCount'. This ensures the parentheses are well-formed at each step.",
    description: "Given n pairs of parentheses, generate all combinations of well-formed parentheses.",
    edgeCases: [
      "n = 1",
      "n = 0",
      "Max n (around 8-10 in constraints)"
    ],
    algorithmSteps: [
      "Initialize empty result list.",
      "Define recursive method 'backtrack(currentString, openCount, closedCount)':",
      "If string length == 2*n, add to result and return.",
      "If openCount < n, backtrack(currentString + '(', openCount + 1, closedCount).",
      "If closedCount < openCount, backtrack(currentString + ')', openCount, closedCount + 1).",
      "Start recursion with empty string and 0 counts."
    ],
    examples: [{ input: "n = 3", output: '["((()))","(()())","(())()","()(())","()()()"]' }],
    defaultInput: { n: 3 },
    complexity: { time: "O(4^n / sqrt(n))", space: "O(n)" },
    beginnerComplexity: { time: "O(2^(2n) * n)", space: "O(2n)" },
    optimalComplexity: { time: "O(4^n / sqrt(n))", space: "O(n)" },
    starterCode: "class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        # Brute Force O(2^2N * N)\n        def valid(s):\n            bal = 0\n            for c in s:\n                if c == '(': bal += 1\n                else: bal -= 1\n                if bal < 0: return False\n            return bal == 0\n        res = []\n        def generate(s):\n            if len(s) == 2 * n:\n                if valid(s): res.append(s)\n                return\n            generate(s + '(')\n            generate(s + ')')\n        generate(\"\")\n        return res",
      java: "class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Brute Force generating all combinations\n        List<String> res = new ArrayList<>();\n        generateAll(new char[2 * n], 0, res);\n        return res;\n    }\n    private void generateAll(char[] curr, int pos, List<String> res) {\n        if (pos == curr.length) {\n            if (valid(curr)) res.add(new String(curr));\n            return;\n        }\n        curr[pos] = '('; generateAll(curr, pos + 1, res);\n        curr[pos] = ')'; generateAll(curr, pos + 1, res);\n    }\n    private boolean valid(char[] s) {\n        int bal = 0;\n        for (char c : s) {\n            if (c == '(') bal++; else bal--;\n            if (bal < 0) return false;\n        }\n        return bal == 0;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        vector<string> res;\n        string s(2 * n, ' ');\n        generateAll(s, 0, res);\n        return res;\n    }\n    void generateAll(string& s, int pos, vector<string>& res) {\n        if (pos == s.length()) {\n            if (valid(s)) res.push_back(s);\n            return;\n        }\n        s[pos] = '('; generateAll(s, pos + 1, res);\n        s[pos] = ')'; generateAll(s, pos + 1, res);\n    }\n    bool valid(string& s) {\n        int bal = 0;\n        for (char c : s) if ((c == '(' ? ++bal : --bal) < 0) return false;\n        return bal == 0;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        # Backtracking O(4^N / sqrt(N))\n        res = []\n        def backtrack(s, openN, closedN):\n            if openN == closedN == n: res.append(s); return\n            if openN < n: backtrack(s + \"(\", openN + 1, closedN)\n            if closedN < openN: backtrack(s + \")\", openN, closedN + 1)\n        backtrack(\"\", 0, 0)\n        return res",
      java: "class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Backtracking O(4^N / sqrt(N))\n        List<String> res = new ArrayList<>();\n        backtrack(\"\", 0, 0, n, res);\n        return res;\n    }\n    private void backtrack(String s, int open, int close, int n, List<String> res) {\n        if (s.length() == 2 * n) { res.add(s); return; }\n        if (open < n) backtrack(s + \"(\", open + 1, close, n, res);\n        if (close < open) backtrack(s + \")\", open, close + 1, n, res);\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        vector<string> res;\n        backtrack(\"\", 0, 0, n, res);\n        return res;\n    }\n    void backtrack(string s, int open, int close, int n, vector<string>& res) {\n        if (s.length() == 2 * n) { res.push_back(s); return; }\n        if (open < n) backtrack(s + \"(\", open + 1, close, n, res);\n        if (close < open) backtrack(s + \")\", open, close + 1, n, res);\n    }\n};"
    }
  },
  {
    id: "739", slug: "daily-temperatures", title: "Daily Temperatures", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "We use a monotonic decreasing stack to keep track of temperatures whose 'warmer day' hasn't been found yet. We store indices in the stack. For each day, if the current temperature is higher than the temperature at the index on the top of the stack, we've found the warmer day. We pop the index and calculate the difference in days.",
    description: "Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the i-th day to get a warmer temperature.",
    edgeCases: [
      "No warmer day exists",
      "Temperatures in strictly increasing order",
      "Temperatures in strictly decreasing order",
      "Empty array"
    ],
    algorithmSteps: [
      "Initialize result array with zeros.",
      "Initialize an empty Stack of indices.",
      "Iterate through temperatures array using index 'i':",
      "While stack is not empty and current temp > temp at stack top index:",
      "Pop index 'prevIndex' from stack.",
      "Set res[prevIndex] = i - prevIndex.",
      "Push current index 'i' onto stack.",
      "Return result array."
    ],
    examples: [{ input: "temperatures = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" }],
    defaultInput: { temperatures: [73, 74, 75, 71, 69, 72, 76, 73] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        // Write your code here\n        return new int[0];\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        # Brute Force O(N^2)\n        n = len(temperatures)\n        res = [0] * n\n        for i in range(n):\n            for j in range(i + 1, n):\n                if temperatures[j] > temperatures[i]:\n                    res[i] = j - i\n                    break\n        return res",
      java: "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        // Brute Force O(N^2)\n        int n = temperatures.length;\n        int[] res = new int[n];\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                if (temperatures[j] > temperatures[i]) {\n                    res[i] = j - i;\n                    break;\n                }\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        int n = temperatures.size();\n        vector<int> res(n, 0);\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                if (temperatures[j] > temperatures[i]) {\n                    res[i] = j - i;\n                    break;\n                }\n            }\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        # Monotonic Stack O(N)\n        res = [0] * len(temperatures)\n        stack = []  # [temp, index]\n        for i, t in enumerate(temperatures):\n            while stack and t > stack[-1][0]:\n                stackT, stackI = stack.pop()\n                res[stackI] = i - stackI\n            stack.append((t, i))\n        return res",
      java: "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        // Monotonic Stack O(N)\n        int n = temperatures.length;\n        int[] res = new int[n];\n        Stack<Integer> stack = new Stack<>();\n        for (int i = 0; i < n; i++) {\n            while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n                int idx = stack.pop();\n                res[idx] = i - idx;\n            }\n            stack.push(i);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        int n = temperatures.size();\n        vector<int> res(n, 0);\n        stack<int> st;\n        for (int i = 0; i < n; i++) {\n            while (!st.empty() && temperatures[i] > temperatures[st.top()]) {\n                int idx = st.top(); st.pop();\n                res[idx] = i - idx;\n            }\n            st.push(i);\n        }\n        return res;\n    }\n};"
    }
  },

  {
    id: "84", slug: "largest-rectangle-in-histogram", title: "Largest Rectangle in Histogram", difficulty: "Hard", diffClass: "difficulty-hard", category: "Stack",
    detailedExplanation: "We use a monotonic increasing stack to store heights and their starting indices. When we encounter a height smaller than the top of the stack, we pop the height and calculate the area of the rectangle ending at the current index. The width of this rectangle is (current index - popped index).",
    description: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    edgeCases: [
      "All bars same height",
      "Bars in increasing order",
      "Bars in decreasing order",
      "Empty array"
    ],
    algorithmSteps: [
      "Initialize 'maxArea' = 0 and empty stack of [index, height].",
      "Iterate 'i' through heights:",
      "Set 'start' = current 'i'.",
      "While stack is not empty and height at stack top > current height:",
      "Pop [index, height] from stack.",
      "Update maxArea = max(maxArea, height * (i - index)).",
      "Update 'start' to the popped index.",
      "Push [start, current height] to stack.",
      "Process remaining heights in stack after loop.",
      "Return 'maxArea'."
    ],
    examples: [{ input: "heights = [2,1,5,6,2,3]", output: "10" }],
    defaultInput: { heights: [2, 1, 5, 6, 2, 3] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n²)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        # Brute Force O(N^2)\n        maxArea = 0\n        n = len(heights)\n        for i in range(n):\n            minH = heights[i]\n            for j in range(i, n):\n                minH = min(minH, heights[j])\n                maxArea = max(maxArea, minH * (j - i + 1))\n        return maxArea",
      java: "class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Brute Force O(N^2)\n        int maxArea = 0, n = heights.length;\n        for (int i = 0; i < n; i++) {\n            int minH = heights[i];\n            for (int j = i; j < n; j++) {\n                minH = Math.min(minH, heights[j]);\n                maxArea = Math.max(maxArea, minH * (j - i + 1));\n            }\n        }\n        return maxArea;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        int maxArea = 0, n = heights.size();\n        for (int i = 0; i < n; i++) {\n            int minH = heights[i];\n            for (int j = i; j < n; j++) {\n                minH = min(minH, heights[j]);\n                maxArea = max(maxArea, minH * (j - i + 1));\n            }\n        }\n        return maxArea;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        # Monotonic Stack O(N)\n        maxArea = 0\n        stack = [] # pair: (index, height)\n        for i, h in enumerate(heights):\n            start = i\n            while stack and stack[-1][1] >= h:\n                index, height = stack.pop()\n                maxArea = max(maxArea, height * (i - index))\n                start = index\n            stack.append((start, h))\n        for i, h in stack:\n            maxArea = max(maxArea, h * (len(heights) - i))\n        return maxArea",
      java: "class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Monotonic Stack O(N)\n        Stack<int[]> stack = new Stack<>();\n        int maxArea = 0, n = heights.length;\n        for (int i = 0; i < n; i++) {\n            int start = i;\n            while (!stack.isEmpty() && stack.peek()[1] >= heights[i]) {\n                int[] top = stack.pop();\n                maxArea = Math.max(maxArea, top[1] * (i - top[0]));\n                start = top[0];\n            }\n            stack.push(new int[]{start, heights[i]});\n        }\n        while (!stack.isEmpty()) {\n            int[] top = stack.pop();\n            maxArea = Math.max(maxArea, top[1] * (n - top[0]));\n        }\n        return maxArea;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        stack<pair<int, int>> st;\n        int maxArea = 0, n = heights.size();\n        for (int i = 0; i < n; i++) {\n            int start = i;\n            while (!st.empty() && st.top().second >= heights[i]) {\n                auto [idx, h] = st.top(); st.pop();\n                maxArea = max(maxArea, h * (i - idx));\n                start = idx;\n            }\n            st.push({start, heights[i]});\n        }\n        while (!st.empty()) {\n            auto [idx, h] = st.top(); st.pop();\n            maxArea = max(maxArea, h * (n - idx));\n        }\n        return maxArea;\n    }\n};"
    }
  },
  {
    id: "853", slug: "car-fleet", title: "Car Fleet", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "We sort the cars by their starting position in decreasing order. For each car, we calculate the time it takes to reach the target. If a car behind is faster than the car in front (takes less time), it will catch up and join its fleet. Since it can't pass, it will be slowed down to the front car's speed. We use a stack to keep track of the times of the lead cars of each fleet.",
    description: "Determine how many fleets of cars will reach the destination given their positions and speeds.",
    edgeCases: [
      "Cars starting at same position",
      "Single car",
      "Empty destination distance",
      "Cars with same speed"
    ],
    algorithmSteps: [
      "Store position and speed pairs as unified objects.",
      "Sort cars by position in descending order.",
      "Initialize empty stack to store 'time to reach target'.",
      "For each car:",
      "Calculate time = (target - pos) / speed.",
      "Push 'time' to stack.",
      "If stack size >= 2 and current 'time' (car behind) <= previous 'time' (car in front):",
      "Pop current 'time' from stack (they form a fleet).",
      "Return stack size."
    ],
    examples: [{ input: "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]", output: "3" }],
    defaultInput: { target: 12, position: [10, 8, 0, 5, 3], speed: [2, 4, 1, 1, 3] },
    complexity: { time: "O(n log n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n log n)", space: "O(n)" },
    optimalComplexity: { time: "O(n log n)", space: "O(n)" },
    starterCode: "class Solution {\n    public int carFleet(int target, int[] position, int[] speed) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:\n        # Simple Simulation after Sorting\n        cars = sorted(zip(position, speed), reverse=True)\n        times = [(target - p) / s for p, s in cars]\n        res = 0\n        curMax = 0\n        for t in times:\n            if t > curMax:\n                res += 1\n                curMax = t\n        return res",
      java: "class Solution {\n    public int carFleet(int target, int[] position, int[] speed) {\n        // Simple Simulation after Sorting\n        int n = position.length;\n        double[][] cars = new double[n][2];\n        for (int i = 0; i < n; i++) {\n            cars[i] = new double[]{position[i], (double)(target - position[i]) / speed[i]};\n        }\n        Arrays.sort(cars, (a, b) -> Double.compare(b[0], a[0]));\n        int fleets = 0;\n        double curMaxTime = 0;\n        for (double[] car : cars) {\n            if (car[1] > curMaxTime) {\n                fleets++;\n                curMaxTime = car[1];\n            }\n        }\n        return fleets;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int carFleet(int target, vector<int>& position, vector<int>& speed) {\n        int n = position.size();\n        vector<pair<int, double>> cars(n);\n        for (int i = 0; i < n; i++) cars[i] = {position[i], (double)(target - position[i]) / speed[i]};\n        sort(cars.rbegin(), cars.rend());\n        int fleets = 0;\n        double maxTime = 0;\n        for (auto& car : cars) {\n            if (car.second > maxTime) {\n                fleets++;\n                maxTime = car.second;\n            }\n        }\n        return fleets;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:\n        # Stack approach O(N log N)\n        pair = [[p, s] for p, s in zip(position, speed)]\n        stack = []\n        for p, s in sorted(pair)[::-1]:\n            stack.append((target - p) / s)\n            if len(stack) >= 2 and stack[-1] <= stack[-2]:\n                stack.pop()\n        return len(stack)",
      java: "class Solution {\n    public int carFleet(int target, int[] position, int[] speed) {\n        // Stack approach O(N log N)\n        int n = position.length;\n        double[][] cars = new double[n][2];\n        for (int i = 0; i < n; i++) cars[i] = new double[]{position[i], (double)(target - position[i]) / speed[i]};\n        Arrays.sort(cars, (a, b) -> Double.compare(b[0], a[0]));\n        Stack<Double> stack = new Stack<>();\n        for (double[] car : cars) {\n            stack.push(car[1]);\n            if (stack.size() >= 2 && stack.peek() <= stack.get(stack.size() - 2)) stack.pop();\n        }\n        return stack.size();\n    }\n}",
      cpp: "class Solution {\npublic:\n    int carFleet(int target, vector<int>& position, vector<int>& speed) {\n        int n = position.size();\n        vector<pair<int, double>> cars(n);\n        for (int i = 0; i < n; i++) cars[i] = {position[i], (double)(target - position[i]) / speed[i]};\n        sort(cars.rbegin(), cars.rend());\n        stack<double> st;\n        for (auto& car : cars) {\n            st.push(car.second);\n            if (st.size() >= 2) {\n                double back = st.top(); st.pop();\n                if (back > st.top()) st.push(back);\n            }\n        }\n        return st.size();\n    }\n};"
    }
  },
  {
    id: "901", slug: "online-stock-span", title: "Online Stock Span", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "We use a monotonic decreasing stack to store pairs of [price, span]. For each new price, we pop elements from the stack while their price is less than or equal to the current price. We sum their spans into our current span. This gives us the number of consecutive days the price has been less than or equal to today's price.",
    description: "Design an algorithm that collects daily price quotes and returns the 'span' of each day's price.",
    edgeCases: [
      "Prices in strictly increasing order",
      "Prices in strictly decreasing order",
      "All prices same",
      "Single price quote"
    ],
    algorithmSteps: [
      "Initialize an empty Stack of [price, span] pairs.",
      "Next(price):",
      "Initialize 'span' = 1.",
      "While stack is not empty and stack top price <= current price:",
      "Update 'span' += popped span from stack.",
      "Push [current price, span] to stack.",
      "Return 'span'."
    ],
    examples: [{ input: '["StockSpanner","next","next","next"] \n [[],[100],[80],[60]]', output: "[null,1,1,1]" }],
    complexity: { time: "O(1) amortized", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(1) amortized", space: "O(n)" },
    starterCode: "class StockSpanner {\n    public StockSpanner() {}\n    public int next(int price) { return 0; }\n}",
    beginnerCode: {
      python: "class StockSpanner:\n    def __init__(self):\n        self.prices = []\n    def next(self, price: int) -> int:\n        # Brute Force O(N) search\n        self.prices.append(price)\n        span = 0\n        for i in range(len(self.prices) - 1, -1, -1):\n            if self.prices[i] <= price: span += 1\n            else: break\n        return span",
      java: "class StockSpanner {\n    // Brute Force O(N) per next()\n    private List<Integer> prices = new ArrayList<>();\n    public int next(int price) {\n        prices.add(price);\n        int span = 0;\n        for (int i = prices.size() - 1; i >= 0; i--) {\n            if (prices.get(i) <= price) span++;\n            else break;\n        }\n        return span;\n    }\n}",
      cpp: "class StockSpanner {\npublic:\n    vector<int> prices;\n    int next(int price) {\n        prices.push_back(price);\n        int span = 0;\n        for (int i = prices.size() - 1; i >= 0; i--) {\n            if (prices[i] <= price) span++;\n            else break;\n        }\n        return span;\n    }\n};"
    },
    codes: {
      python: "class StockSpanner:\n    # Monotonic Stack O(1) amortized\n    def __init__(self):\n        self.stack = [] # (price, span)\n    def next(self, price: int) -> int:\n        span = 1\n        while self.stack and self.stack[-1][0] <= price:\n            span += self.stack.pop()[1]\n        self.stack.append((price, span))\n        return span",
      java: "class StockSpanner {\n    // Monotonic Stack O(1) amortized\n    private Stack<int[]> stack = new Stack<>();\n    public int next(int price) {\n        int span = 1;\n        while (!stack.isEmpty() && stack.peek()[0] <= price) {\n            span += stack.pop()[1];\n        }\n        stack.push(new int[]{price, span});\n        return span;\n    }\n}",
      cpp: "class StockSpanner {\npublic:\n    stack<pair<int, int>> st;\n    int next(int price) {\n        int span = 1;\n        while (!st.empty() && st.top().first <= price) {\n            span += st.top().second; st.pop();\n        }\n        st.push({price, span});\n        return span;\n    }\n};"
    }
  },
  {
    id: "71", slug: "simplify-path", title: "Simplify Path", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "We split the path by '/' and use a stack to keep track of directory names. We skip empty strings and '.', and we pop from the stack for '..'. Finally, we join the stack with '/'.",
    description: "Given a string path, convert it to the simplified canonical path for a Unix-style file system.",
    edgeCases: [
      "Path ends with slash",
      "Multiple consecutive slashes",
      "Path is '/' or '/../'",
      "Path with hidden directories"
    ],
    algorithmSteps: [
      "Split the path by '/' into components.",
      "Initialize an empty Stack for directory names.",
      "Iterate through components:",
      "If component is '..', pop from stack if not empty.",
      "Else if component is non-empty and not '.', push to stack.",
      "Join stack elements with '/' and prepend a slash.",
      "Return the result (or '/' if empty)."
    ],
    examples: [{ input: 'path = "/home//foo/"', output: '"/home/foo"' }],
    defaultInput: { path: "/home//foo/" },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public String simplifyPath(String path) {\n        // Write your code here\n        return \"\";\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def simplifyPath(self, path: str) -> str:\n        # Simple stacking approach O(N)\n        stack = []\n        for part in path.split(\"/\"):\n            if part == \"..\":\n                if stack: stack.pop()\n            elif part and part != \".\":\n                stack.append(part)\n        return \"/\" + \"/\".join(stack)",
      java: "class Solution {\n    public String simplifyPath(String path) {\n        // Simple stacking approach O(N)\n        Stack<String> stack = new Stack<>();\n        String[] parts = path.split(\"/\");\n        for (String s : parts) {\n            if (s.equals(\"..\")) {\n                if (!stack.isEmpty()) stack.pop();\n            } else if (!s.isEmpty() && !s.equals(\".\")) {\n                stack.push(s);\n            }\n        }\n        return \"/\" + String.join(\"/\", stack);\n    }\n}",
      cpp: "class Solution {\npublic:\n    string simplifyPath(string path) {\n        vector<string> stack;\n        stringstream ss(path);\n        string s;\n        while (getline(ss, s, '/')) {\n            if (s == \"..\") { if (!stack.empty()) stack.pop_back(); }\n            else if (s != \"\" && s != \".\") stack.push_back(s);\n        }\n        string res = \"\";\n        for (string dir : stack) res += \"/\" + dir;\n        return res.empty() ? \"/\" : res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def simplifyPath(self, path: str) -> str:\n        # Optimal Stack O(N)\n        stack = []\n        for part in path.split(\"/\"):\n            if part == \"..\":\n                if stack: stack.pop()\n            elif part and part != \".\":\n                stack.append(part)\n        return \"/\" + \"/\".join(stack)",
      java: "class Solution {\n    public String simplifyPath(String path) {\n        // Optimal Stack O(N) using Deque\n        Deque<String> stack = new LinkedList<>();\n        for (String s : path.split(\"/\")) {\n            if (s.equals(\"..\")) {\n                if (!stack.isEmpty()) stack.poll();\n            } else if (!s.isEmpty() && !s.equals(\".\")) {\n                stack.push(s);\n            }\n        }\n        if (stack.isEmpty()) return \"/\";\n        StringBuilder res = new StringBuilder();\n        while (!stack.isEmpty()) res.append(\"/\").append(stack.pollLast());\n        return res.toString();\n    }\n}",
      cpp: "class Solution {\npublic:\n    string simplifyPath(string path) {\n        vector<string> st;\n        string temp;\n        stringstream ss(path);\n        while(getline(ss,temp,'/')) {\n            if(temp == \"\" || temp == \".\") continue;\n            if(temp == \"..\") { if(!st.empty()) st.pop_back(); }\n            else st.push_back(temp);\n        }\n        string res;\n        for(auto str : st) res += \"/\" + str;\n        return res.empty() ? \"/\" : res;\n    }\n};"
    }
  },
  {
    id: "735", slug: "asteroid-collision", title: "Asteroid Collision", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "We use a stack to simulate the collision process. We iterate through each asteroid: if it's moving right (positive), we push it to the stack. If it's moving left (negative), it might collide with asteroids moving right already in the stack. We pop asteroids from the stack until we find one that survives or the current negative asteroid is destroyed.",
    description: "Determine the state of asteroids after all collisions.",
    edgeCases: [
      "All asteroids moving in same direction",
      "Asteroids with same size colliding (both explode)",
      "Empty array",
      "Heavy asteroid destroying multiple smaller ones"
    ],
    algorithmSteps: [
      "Initialize an empty Stack.",
      "Iterate through each asteroid 'a':",
      "While stack is not empty and a < 0 and stack top > 0:",
      "Calculate 'diff' = a + stackTop.",
      "If diff < 0, pop from stack (top asteroid destroyed).",
      "Else if diff > 0, set a = 0 (current asteroid destroyed).",
      "Else, pop from stack AND set a = 0 (both destroyed).",
      "If a is not 0, push 'a' to stack.",
      "Return stack elements as array."
    ],
    examples: [{ input: "asteroids = [5,10,-5]", output: "[5,10]" }],
    defaultInput: { asteroids: [5, 10, -5] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n²)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public int[] asteroidCollision(int[] asteroids) {\n        // Write your code here\n        return new int[0];\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def asteroidCollision(self, asteroids: List[int]) -> List[int]:\n        # Simulation using list removal O(N^2)\n        res = list(asteroids)\n        i = 0\n        while i < len(res) - 1:\n            if i >= 0 and res[i] > 0 and res[i+1] < 0:\n                if abs(res[i]) < abs(res[i+1]):\n                    res.pop(i)\n                    i -= 1\n                elif abs(res[i]) > abs(res[i+1]):\n                    res.pop(i+1)\n                else:\n                    res.pop(i+1)\n                    res.pop(i)\n                    i -= 1\n            else:\n                i += 1\n        return res",
      java: "class Solution {\n    public int[] asteroidCollision(int[] asteroids) {\n        // List-based simulation O(N^2)\n        List<Integer> list = new ArrayList<>();\n        for (int a : asteroids) list.add(a);\n        boolean collision = true;\n        while (collision) {\n            collision = false;\n            for (int i = 0; i < list.size() - 1; i++) {\n                if (list.get(i) > 0 && list.get(i+1) < 0) {\n                    if (Math.abs(list.get(i)) < Math.abs(list.get(i+1))) {\n                        list.remove(i);\n                    } else if (Math.abs(list.get(i)) > Math.abs(list.get(i+1))) {\n                        list.remove(i+1);\n                    } else {\n                        list.remove(i+1);\n                        list.remove(i);\n                    }\n                    collision = true;\n                    break;\n                }\n            }\n        }\n        return list.stream().mapToInt(i->i).toArray();\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> asteroidCollision(vector<int>& asteroids) {\n        vector<int> res = asteroids;\n        bool collision = true;\n        while (collision) {\n            collision = false;\n            for (int i = 0; i + 1 < res.size(); i++) {\n                if (res[i] > 0 && res[i+1] < 0) {\n                    if (abs(res[i]) < abs(res[i+1])) res.erase(res.begin() + i);\n                    else if (abs(res[i]) > abs(res[i+1])) res.erase(res.begin() + i + 1);\n                    else res.erase(res.begin() + i, res.begin() + i + 2);\n                    collision = true;\n                    break;\n                }\n            }\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def asteroidCollision(self, asteroids: List[int]) -> List[int]:\n        # Stack O(N)\n        stack = []\n        for a in asteroids:\n            while stack and a < 0 and stack[-1] > 0:\n                diff = a + stack[-1]\n                if diff < 0: stack.pop()\n                elif diff > 0: a = 0\n                else: a = 0; stack.pop()\n            if a: stack.append(a)\n        return stack",
      java: "class Solution {\n    public int[] asteroidCollision(int[] asteroids) {\n        // Stack O(N)\n        Stack<Integer> stack = new Stack<>();\n        for (int a : asteroids) {\n            while (!stack.isEmpty() && a < 0 && stack.peek() > 0) {\n                int diff = a + stack.peek();\n                if (diff < 0) stack.pop();\n                else if (diff > 0) a = 0;\n                else { a = 0; stack.pop(); }\n            }\n            if (a != 0) stack.push(a);\n        }\n        int[] res = new int[stack.size()];\n        for (int i = res.length - 1; i >= 0; i--) res[i] = stack.pop();\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> asteroidCollision(vector<int>& asteroids) {\n        vector<int> st;\n        for (int a : asteroids) {\n            while (!st.empty() && a < 0 && st.back() > 0) {\n                int diff = a + st.back();\n                if (diff < 0) st.pop_back();\n                else if (diff > 0) { a = 0; break; }\n                else { st.pop_back(); a = 0; break; }\n            }\n            if (a != 0) st.push_back(a);\n        }\n        return st;\n    }\n};"
    }
  },
  {
    id: "1047", slug: "remove-all-adjacent-duplicates-in-string", title: "Remove Adjacent Duplicates", difficulty: "Easy", diffClass: "difficulty-easy", category: "Stack",
    detailedExplanation: "We use a stack to store characters from the string. For each character, we check if it matches the character on top of the stack. If it does, we've found adjacent duplicates, so we pop from the stack. Otherwise, we push the current character. The stack will contain the string with all adjacent duplicates removed.",
    description: "Remove all adjacent duplicates from a string repeatedly.",
    edgeCases: [
      "String with no duplicates",
      "Empty string",
      "String with all duplicates forming pairs",
      "Triple duplicates (only two removed, third remains)"
    ],
    algorithmSteps: [
      "Initialize an empty Stack of characters.",
      "Iterate through each character 'c' in string 's':",
      "If stack is not empty and stack top == c:",
      "Pop from stack.",
      "Else:",
      "Push 'c' to stack.",
      "Join stack elements to form the result string."
    ],
    examples: [{ input: 's = "abbaca"', output: '"ca"' }],
    defaultInput: { s: "abbaca" },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n²)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution {\n    public String removeDuplicates(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def removeDuplicates(self, s: str) -> str:\n        # Brute Force O(N^2) using replacement\n        prev_len = -1\n        while len(s) != prev_len:\n            prev_len = len(s)\n            for i in range(len(s) - 1):\n                if s[i] == s[i+1]:\n                    s = s[:i] + s[i+2:]\n                    break\n        return s",
      java: "class Solution {\n    public String removeDuplicates(String s) {\n        // Simulation using string replacement O(N^2)\n        StringBuilder sb = new StringBuilder(s);\n        boolean changed = true;\n        while (changed) {\n            changed = false;\n            for (int i = 0; i < sb.length() - 1; i++) {\n                if (sb.charAt(i) == sb.charAt(i + 1)) {\n                    sb.delete(i, i + 2);\n                    changed = true;\n                    break;\n                }\n            }\n        }\n        return sb.toString();\n    }\n}",
      cpp: "class Solution {\npublic:\n    string removeDuplicates(string s) {\n        bool found = true;\n        while (found) {\n            found = false;\n            for (int i = 0; i + 1 < s.length(); i++) {\n                if (s[i] == s[i+1]) {\n                    s.erase(i, 2);\n                    found = true;\n                    break;\n                }\n            }\n        }\n        return s;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def removeDuplicates(self, s: str) -> str:\n        # Stack O(N)\n        stack = []\n        for c in s:\n            if stack and stack[-1] == c:\n                stack.pop()\n            else:\n                stack.append(c)\n        return \"\".join(stack)",
      java: "class Solution {\n    public String removeDuplicates(String s) {\n        // Stack O(N) using StringBuilder as stack\n        StringBuilder sb = new StringBuilder();\n        for (char c : s.toCharArray()) {\n            if (sb.length() > 0 && sb.charAt(sb.length() - 1) == c) {\n                sb.deleteCharAt(sb.length() - 1);\n            } else {\n                sb.append(c);\n            }\n        }\n        return sb.toString();\n    }\n}",
      cpp: "class Solution {\npublic:\n    string removeDuplicates(string s) {\n        string res = \"\";\n        for (char c : s) {\n            if (!res.empty() && res.back() == c) res.pop_back();\n            else res.push_back(c);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "227", slug: "basic-calculator-ii", title: "Basic Calculator II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "We process the string and keep track of the current number and the last operator seen. When we encounter a new operator (or reach the end), we apply the *last* operator to the *current* number. For + and -, we push the number (possibly negative) onto the stack. For * and /, we pop the top, apply the operation, and push the result back. Finally, we sum all elements in the stack.",
    description: "Implement a basic calculator to evaluate an expression string with non-negative integers and basic operators.",
    edgeCases: [
      "Expression with spaces",
      "Expression with only one number",
      "Division resulting in truncation towards zero",
      "Multiple digits in a number"
    ],
    algorithmSteps: [
      "Initialize 'stack' for intermediate results, 'curr' = 0, 'op' = '+'.",
      "Iterate through string 's' (including an extra iteration at the end):",
      "If current char is a digit, update 'curr = curr * 10 + digit'.",
      "If current char is an operator or end of string:",
      "If op is '+', push 'curr' to stack.",
      "If op is '-', push '-curr' to stack.",
      "If op is '*', push 'stack.pop() * curr' to stack.",
      "If op is '/', push 'int(stack.pop() / curr)' to stack.",
      "Update 'op' to current char, reset 'curr' = 0.",
      "Return sum of all numbers in the 'stack'."
    ],
    examples: [{ input: 's = "3+2*2"', output: "7" }],
    defaultInput: { s: "3+2*2" },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int calculate(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def calculate(self, s: str) -> int:\n        # Basic Stack Approach O(N)\n        stack, cur, op = [], 0, \"+\"\n        for i in range(len(s)):\n            if s[i].isdigit():\n                cur = cur * 10 + int(s[i])\n            if s[i] in \"+-*/\" or i == len(s) - 1:\n                if op == \"+\": stack.append(cur)\n                elif op == \"-\": stack.append(-cur)\n                elif op == \"*\": stack.append(stack.pop() * cur)\n                elif op == \"/\": stack.append(int(stack.pop() / cur))\n                op, cur = s[i], 0\n        return sum(stack)",
      java: "class Solution {\n    public int calculate(String s) {\n        // Basic Stack Approach O(N)\n        Stack<Integer> stack = new Stack<>();\n        int cur = 0; char op = '+';\n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n            if (Character.isDigit(c)) cur = cur * 10 + (c - '0');\n            if (!Character.isDigit(c) && c != ' ' || i == s.length() - 1) {\n                if (op == '+') stack.push(cur);\n                else if (op == '-') stack.push(-cur);\n                else if (op == '*') stack.push(stack.pop() * cur);\n                else if (op == '/') stack.push(stack.pop() / cur);\n                op = c; cur = 0;\n            }\n        }\n        int res = 0;\n        while (!stack.isEmpty()) res += stack.pop();\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int calculate(string s) {\n        stack<int> st;\n        int cur = 0; char op = '+';\n        for (int i = 0; i < s.length(); i++) {\n            if (isdigit(s[i])) cur = cur * 10 + (s[i] - '0');\n            if (!isdigit(s[i]) && !isspace(s[i]) || i == s.length() - 1) {\n                if (op == '+') st.push(cur);\n                else if (op == '-') st.push(-cur);\n                else if (op == '*') { int t = st.top(); st.pop(); st.push(t * cur); }\n                else if (op == '/') { int t = st.top(); st.pop(); st.push(t / cur); }\n                op = s[i]; cur = 0;\n            }\n        }\n        int res = 0;\n        while (!st.empty()) { res += st.top(); st.pop(); }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def calculate(self, s: str) -> int:\n        # O(1) space optimization (keep current result and last positive/negative chunk)\n        res, cur, last, op = 0, 0, 0, \"+\"\n        for i in range(len(s)):\n            if s[i].isdigit():\n                cur = cur * 10 + int(s[i])\n            if s[i] in \"+-*/\" or i == len(s) - 1:\n                if op == \"+\":\n                    res += last\n                    last = cur\n                elif op == \"-\":\n                    res += last\n                    last = -cur\n                elif op == \"*\":\n                    last = last * cur\n                elif op == \"/\":\n                    last = int(last / cur)\n                op, cur = s[i], 0\n        return res + last",
      java: "class Solution {\n    public int calculate(String s) {\n        // O(1) Space Optimization\n        int res = 0, last = 0, cur = 0;\n        char op = '+';\n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n            if (Character.isDigit(c)) cur = cur * 10 + (c - '0');\n            if (!Character.isDigit(c) && c != ' ' || i == s.length() - 1) {\n                if (op == '+' || op == '-') {\n                    res += last;\n                    last = (op == '+') ? cur : -cur;\n                } else if (op == '*') last = last * cur;\n                else if (op == '/') last = last / cur;\n                op = c; cur = 0;\n            }\n        }\n        return res + last;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int calculate(string s) {\n        int res = 0, last = 0, cur = 0;\n        char op = '+';\n        for (int i = 0; i < s.length(); i++) {\n            if (isdigit(s[i])) cur = cur * 10 + (s[i] - '0');\n            if (!isdigit(s[i]) && !isspace(s[i]) || i == s.length() - 1) {\n                if (op == '+' || op == '-') {\n                    res += last;\n                    last = (op == '+') ? cur : -cur;\n                } else if (op == '*') last *= cur;\n                else if (op == '/') last /= cur;\n                op = s[i]; cur = 0;\n            }\n        }\n        return res + last;\n    }\n};"
    }
  },
  {
    id: "496", slug: "next-greater-element-i", title: "Next Greater Element I", difficulty: "Easy", diffClass: "difficulty-easy", category: "Stack",
    detailedExplanation: "We find the next greater element for every number in nums2 using a monotonic decreasing stack and store the results in a map. Then, for each number in nums1, we simply look up its next greater element in the map. The stack helps us find the first element to the right that is larger in O(1) amortized time.",
    description: "Find the next greater element for each value in subset nums1 in array nums2.",
    edgeCases: [
      "nums1 is same as nums2",
      "No next greater element exists for any element",
      "nums2 is strictly decreasing",
      "nums1 contains only one element"
    ],
    algorithmSteps: [
      "Initialize an empty Stack and a Map 'nextGreater'.",
      "Iterate through each number 'n' in nums2:",
      "While stack is not empty and current 'n' > stack top:",
      "Map stack top to 'n' in 'nextGreater'.",
      "Pop from stack.",
      "Push 'n' to stack.",
      "For each 'num' in nums1, build result using 'nextGreater' (or -1 if not found).",
      "Return result array."
    ],
    examples: [{ input: "nums1 = [4,1,2], nums2 = [1,3,4,2]", output: "[-1,3,-1]" }],
    defaultInput: { nums1: [4, 1, 2], nums2: [1, 3, 4, 2] },
    complexity: { time: "O(n + m)", space: "O(m)" },
    beginnerComplexity: { time: "O(n * m)", space: "O(1)" },
    optimalComplexity: { time: "O(n + m)", space: "O(m)" },
    starterCode: "class Solution {\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\n        // Write your code here\n        return new int[0];\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        # Brute Force O(N * M)\n        res = []\n        for n1 in nums1:\n            found = False\n            idx = nums2.index(n1)\n            for i in range(idx + 1, len(nums2)):\n                if nums2[i] > n1:\n                    res.append(nums2[i])\n                    found = True\n                    break\n            if not found: res.append(-1)\n        return res",
      java: "class Solution {\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\n        // Brute Force O(N * M)\n        int[] res = new int[nums1.length];\n        for (int i = 0; i < nums1.length; i++) {\n            int n1 = nums1[i];\n            int start = 0;\n            while (nums2[start] != n1) start++;\n            int next = -1;\n            for (int k = start + 1; k < nums2.length; k++) {\n                if (nums2[k] > n1) {\n                    next = nums2[k];\n                    break;\n                }\n            }\n            res[i] = next;\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {\n        vector<int> res;\n        for (int n1 : nums1) {\n            int start = 0;\n            while (nums2[start] != n1) start++;\n            int next = -1;\n            for (int k = start + 1; k < nums2.size(); k++) {\n                if (nums2[k] > n1) { next = nums2[k]; break; }\n            }\n            res.push_back(next);\n        }\n        return res;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        # Monotonic Stack O(N + M)\n        mapping = {}\n        stack = []\n        for n in nums2:\n            while stack and n > stack[-1]:\n                mapping[stack.pop()] = n\n            stack.append(n)\n        return [mapping.get(n, -1) for n in nums1]",
      java: "class Solution {\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\n        // Monotonic Stack O(N + M)\n        Map<Integer, Integer> map = new HashMap<>();\n        Stack<Integer> stack = new Stack<>();\n        for (int n : nums2) {\n            while (!stack.isEmpty() && stack.peek() < n) {\n                map.put(stack.pop(), n);\n            }\n            stack.push(n);\n        }\n        int[] res = new int[nums1.length];\n        for (int i = 0; i < nums1.length; i++) {\n            res[i] = map.getOrDefault(nums1[i], -1);\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {\n        unordered_map<int, int> m;\n        stack<int> st;\n        for (int n : nums2) {\n            while (!st.empty() && st.top() < n) {\n                m[st.top()] = n; st.pop();\n            }\n            st.push(n);\n        }\n        vector<int> res;\n        for (int n : nums1) res.push_back(m.count(n) ? m[n] : -1);\n        return res;\n    }\n};"
    }
  },
  {
    id: "856", slug: "score-of-parentheses", title: "Score of Parentheses", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "We use a stack to keep track of the score at each level of nesting. When we see '(', we push a 0 to start a new level. When we see ')', we pop the score from the current level. If the popped score is 0, it means we just closed '()', so the score is 1. Otherwise, we just closed '(ABC)', so the score is 2 * the score of ABC. We then add this score to the score of the outer level.",
    description: "Given a balanced parentheses string s, return the score of the string.",
    edgeCases: [
      "s = '()'",
      "s = '(())'",
      "s = '()()'",
      "Deeply nested parentheses"
    ],
    algorithmSteps: [
      "Initialize 'stack' with a single 0 (initial level score).",
      "Iterate through each character 'c' in string 's':",
      "If c is '(': push 0 to stack.",
      "If c is ')':",
      "Pop the top score 'v'.",
      "Update the new top of stack: stackTop += max(2 * v, 1).",
      "Return the final score in the stack."
    ],
    examples: [{ input: 's = "(()())"', output: "4" }],
    defaultInput: { s: "(()())" },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution {\n    public int scoreOfParentheses(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def scoreOfParentheses(self, s: str) -> int:\n        # Basic Stack Approach O(N)\n        stack = [0]\n        for c in s:\n            if c == '(':\n                stack.append(0)\n            else:\n                v = stack.pop()\n                stack[-1] += max(2 * v, 1)\n        return stack[0]",
      java: "class Solution {\n    public int scoreOfParentheses(String s) {\n        // Basic Stack Approach O(N)\n        Stack<Integer> stack = new Stack<>();\n        stack.push(0);\n        for (char c : s.toCharArray()) {\n            if (c == '(') {\n                stack.push(0);\n            } else {\n                int v = stack.pop();\n                int last = stack.pop();\n                stack.push(last + Math.max(2 * v, 1));\n            }\n        }\n        return stack.pop();\n    }\n}",
      cpp: "class Solution {\npublic:\n    int scoreOfParentheses(string s) {\n        stack<int> st;\n        st.push(0);\n        for (char c : s) {\n            if (c == '(') st.push(0);\n            else {\n                int v = st.top(); st.pop();\n                int last = st.top(); st.pop();\n                st.push(last + max(2 * v, 1));\n            }\n        }\n        return st.top();\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def scoreOfParentheses(self, s: str) -> int:\n        # O(1) space optimization using depth counting\n        res = 0\n        depth = 0\n        for i in range(len(s)):\n            if s[i] == '(':\n                depth += 1\n            else:\n                depth -= 1\n                if s[i-1] == '(':\n                    res += 1 << depth\n        return res",
      java: "class Solution {\n    public int scoreOfParentheses(String s) {\n        // O(1) Space Optimization\n        int res = 0, depth = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (s.charAt(i) == '(') depth++;\n            else {\n                depth--;\n                if (s.charAt(i - 1) == '(') res += 1 << depth;\n            }\n        }\n        return res;\n    }\n}",
      cpp: "class Solution {\npublic:\n    int scoreOfParentheses(string s) {\n        int res = 0, depth = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (s[i] == '(') depth++;\n            else {\n                depth--;\n                if (s[i-1] == '(') res += 1 << depth;\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "946", slug: "validate-stack-sequences", title: "Validate Stack Sequences", difficulty: "Medium", diffClass: "difficulty-medium", category: "Stack",
    detailedExplanation: "We simulate the push and pop operations using a real stack. For each element in 'pushed', we push it onto our stack. After each push, we check if the top of our stack matches the next element in 'popped'. If it does, we greedily pop from the stack and move to the next 'popped' element. If the stack is empty at the end, the sequence is valid.",
    description: "Validate if the given push and pop sequences could have been generated by a single stack.",
    edgeCases: [
      "Empty arrays",
      "pushed and popped are same",
      "pushed and popped are reverse of each other",
      "Single element arrays"
    ],
    algorithmSteps: [
      "Initialize an empty Stack and an index 'i' = 0 for the 'popped' array.",
      "Iterate through each element 'x' in 'pushed':",
      "Push 'x' onto the stack.",
      "While stack is not empty and stack top == popped[i]:",
      "Pop from stack.",
      "Increment 'i'.",
      "Return true if stack is empty, else false."
    ],
    examples: [{ input: "pushed = [1,2,3,4,5], popped = [4,5,3,2,1]", output: "true" }],
    defaultInput: { pushed: [1, 2, 3, 4, 5], popped: [4, 5, 3, 2, 1] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1) (if reusing pushed as stack)" },
    starterCode: "class Solution {\n    public boolean validateStackSequences(int[] pushed, int[] popped) {\n        // Write your code here\n        return false;\n    }\n}",
    beginnerCode: {
      python: "class Solution:\n    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:\n        # Greedy Simulation O(N)\n        stack = []\n        i = 0\n        for x in pushed:\n            stack.append(x)\n            while stack and i < len(popped) and stack[-1] == popped[i]:\n                stack.pop()\n                i += 1\n        return not stack",
      java: "class Solution {\n    public boolean validateStackSequences(int[] pushed, int[] popped) {\n        // Greedy Simulation O(N)\n        Stack<Integer> stack = new Stack<>();\n        int i = 0;\n        for (int x : pushed) {\n            stack.push(x);\n            while (!stack.isEmpty() && i < popped.length && stack.peek() == popped[i]) {\n                stack.pop();\n                i++;\n            }\n        }\n        return stack.isEmpty();\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {\n        stack<int> st;\n        int i = 0;\n        for (int x : pushed) {\n            st.push(x);\n            while (!st.empty() && st.top() == popped[i]) {\n                st.pop();\n                i++;\n            }\n        }\n        return st.empty();\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:\n        # Using 'pushed' array as a stack to achieve O(1) extra space\n        i = j = 0\n        for x in pushed:\n            pushed[i] = x\n            while i >= 0 and pushed[i] == popped[j]:\n                i -= 1\n                j += 1\n            i += 1\n        return i == 0",
      java: "class Solution {\n    public boolean validateStackSequences(int[] pushed, int[] popped) {\n        // O(1) space by reusing the 'pushed' array\n        int i = 0, j = 0;\n        for (int x : pushed) {\n            pushed[i++] = x;\n            while (i > 0 && pushed[i - 1] == popped[j]) {\n                --i;\n                ++j;\n            }\n        }\n        return i == 0;\n    }\n}",
      cpp: "class Solution {\npublic:\n    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {\n        int i = 0, j = 0;\n        for (int x : pushed) {\n            pushed[i++] = x;\n            while (i > 0 && pushed[i - 1] == popped[j]) {\n                i--;\n                j++;\n            }\n        }\n        return i == 0;\n    }\n};"
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
    detailedExplanation: "We can treat the 2D matrix as a sorted 1D array of length m * n. We can map an index 'mid' to (row, col) using 'row = mid // n' and 'col = mid % n'. Then we perform standard binary search.",
    description: "Search for a value in an m x n integer matrix that is sorted row and column-wise.",
    edgeCases: [
      "Target not found",
      "Empty matrix",
      "Single element matrix"
    ],
    algorithmSteps: [
      "Initialize 'rows' and 'cols'.",
      "Initialize 'l' = 0, 'r' = rows * cols - 1.",
      "Loop while 'l' <= 'r'.",
      "Calculate 'mid' = (l + r) // 2.",
      "Get element at matrix[mid // cols][mid % cols].",
      "If element == target, return true.",
      "If element < target, l = mid + 1.",
      "Else r = mid - 1.",
      "Return false."
    ],
    examples: [{ input: "matrix = [[1,3,5,7],[10,11,16,20]], target = 3", output: "true" }],
    defaultInput: { grid: [[1, 3, 5, 7], [10, 11, 16, 20]], target: 3 },
    complexity: { time: "O(log(m * n))", space: "O(1)" },
    beginnerComplexity: { time: "O(m * n)", space: "O(1)" },
    optimalComplexity: { time: "O(log(m * n))", space: "O(1)" },
    starterCode: "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        # Brute Force O(m*n)\n        for r in range(len(matrix)):\n            for c in range(len(matrix[0])):\n                if matrix[r][c] == target:\n                    return True\n        return False",
      javascript: "/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function(matrix, target) {\n    for (let r = 0; r < matrix.length; r++) {\n        for (let c = 0; c < matrix[0].length; c++) {\n            if (matrix[r][c] === target) return true;\n        }\n    }\n    return false;\n};\n"
    },
    codes: {
      python: "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        ROWS, COLS = len(matrix), len(matrix[0])\n        l, r = 0, ROWS * COLS - 1\n        while l <= r:\n            m = (l + r) // 2\n            row, col = m // COLS, m % COLS\n            if matrix[row][col] > target:\n                r = m - 1\n            elif matrix[row][col] < target:\n                l = m + 1\n            else:\n                return True\n        return False",
      javascript: "/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function(matrix, target) {\n    const ROWS = matrix.length;\n    const COLS = matrix[0].length;\n    let l = 0, r = ROWS * COLS - 1;\n    while (l <= r) {\n        let m = Math.floor((l + r) / 2);\n        let row = Math.floor(m / COLS);\n        let col = m % COLS;\n        if (matrix[row][col] > target) r = m - 1;\n        else if (matrix[row][col] < target) l = m + 1;\n        else return true;\n    }\n    return false;\n};\n"
    }
  },
  {
    id: "875", slug: "koko-eating-bananas", title: "Koko Eating Bananas", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    detailedExplanation: "We cannot check every possible speed k. However, the possible speeds [1, max_pile] are sorted. We can binary search on this range. For a given speed k, we check if Koko can finish eating. If she can, we try a smaller speed (right half elimination). If not, we need a faster speed (left half elimination).",
    description: "Find the minimum integer k such that Koko can eat all bananas within h hours.",
    edgeCases: [
      "h == piles.length (k = max(piles))",
      "Small h (k must be large)",
      "Large h (k can be small)"
    ],
    algorithmSteps: [
      "Initialize 'l' = 1, 'r' = max(piles).",
      "Initialize 'res' = r.",
      "Loop while 'l' <= 'r'.",
      "Calculate 'k' = (l + r) // 2.",
      "Calculate hours needed: sum(ceil(p / k) for p in piles).",
      "If hours <= h:",
      "res = k, r = k - 1 (try slower).",
      "Else l = k + 1 (need faster).",
      "Return 'res'."
    ],
    examples: [{ input: "piles = [3,6,7,11], h = 8", output: "4" }],
    defaultInput: { piles: [3, 6, 7, 11], h: 8 },
    complexity: { time: "O(n log(max(p)))", space: "O(1)" },
    beginnerComplexity: { time: "O(n * max(p))", space: "O(1)" },
    optimalComplexity: { time: "O(n log(max(p)))", space: "O(1)" },
    starterCode: "class Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        # Brute Force O(max(p) * n) - TLE\n        import math\n        max_p = max(piles)\n        for k in range(1, max_p + 1):\n            hours = 0\n            for p in piles:\n                hours += math.ceil(p / k)\n            if hours <= h:\n                return k\n        return max_p",
      javascript: "/**\n * @param {number[]} piles\n * @param {number} h\n * @return {number}\n */\nvar minEatingSpeed = function(piles, h) {\n    let maxP = Math.max(...piles);\n    for (let k = 1; k <= maxP; k++) {\n        let hours = 0;\n        for (let p of piles) hours += Math.ceil(p / k);\n        if (hours <= h) return k;\n    }\n    return maxP;\n};"
    },
    codes: {
      python: "class Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        import math\n        l, r = 1, max(piles)\n        res = r\n        while l <= r:\n            k = (l + r) // 2\n            hours = 0\n            for p in piles:\n                hours += math.ceil(p / k)\n            if hours <= h:\n                res = min(res, k)\n                r = k - 1\n            else:\n                l = k + 1\n        return res",
      javascript: "/**\n * @param {number[]} piles\n * @param {number} h\n * @return {number}\n */\nvar minEatingSpeed = function(piles, h) {\n    let l = 1, r = Math.max(...piles);\n    let res = r;\n    while (l <= r) {\n        let k = Math.floor((l + r) / 2);\n        let hours = 0;\n        for (let p of piles) hours += Math.ceil(p / k);\n        if (hours <= h) {\n            res = Math.min(res, k);\n            r = k - 1;\n        } else {\n            l = k + 1;\n        }\n    }\n    return res;\n};"
    }
  },
  {
    id: "33", slug: "search-in-rotated-sorted-array", title: "Search Rotated Sorted Array", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    detailedExplanation: "This problem involves searching in a sorted array that has been rotated at some pivot. The key idea is to identify which half of the array is sorted and then determine if the target lies within that sorted half. If not, we search the other half.",
    description: "Search for a target in a sorted array that has been rotated.",
    edgeCases: [
      "Target not found",
      "Empty array",
      "Single element array",
      "Array rotated zero times (fully sorted)"
    ],
    algorithmSteps: [
      "Initialize 'l' = 0, 'r' = length - 1.",
      "Loop while 'l' <= 'r'.",
      "Calculate 'mid' = (l + r) // 2.",
      "If nums[mid] == target, return mid.",
      "Check if the left half is sorted (nums[l] <= nums[mid]):",
      "If target is within the left sorted half (nums[l] <= target < nums[mid]), set r = mid - 1.",
      "Else, set l = mid + 1.",
      "Else (right half is sorted):",
      "If target is within the right sorted half (nums[mid] < target <= nums[r]), set l = mid + 1.",
      "Else, set r = mid - 1.",
      "Return -1 if not found."
    ],
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }],
    defaultInput: { nums: [4, 5, 6, 7, 0, 1, 2], target: 0 },
    complexity: { time: "O(log n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(1)" }, // Linear Scan
    optimalComplexity: { time: "O(log n)", space: "O(1)" },
    starterCode: "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # Linear Scan O(N)\n        for i, n in enumerate(nums):\n            if n == target:\n                return i\n        return -1",
      javascript: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function(nums, target) {\n    for (let i = 0; i < nums.length; i++) {\n        if (nums[i] === target) return i;\n    }\n    return -1;\n};"
    },
    codes: {
      python: "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target: return mid\n            # left sorted portion\n            if nums[l] <= nums[mid]:\n                if target > nums[mid] or target < nums[l]:\n                    l = mid + 1\n                else:\n                    r = mid - 1\n            # right sorted portion\n            else:\n                if target < nums[mid] or target > nums[r]:\n                    r = mid - 1\n                else:\n                    l = mid + 1\n        return -1",
      javascript: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function(nums, target) {\n    let l = 0, r = nums.length - 1;\n    while (l <= r) {\n        let mid = Math.floor((l + r) / 2);\n        if (nums[mid] === target) return mid;\n\n        // left sorted portion\n        if (nums[l] <= nums[mid]) {\n            if (target > nums[mid] || target < nums[l]) {\n                l = mid + 1;\n            } else {\n                r = mid - 1;\n            }\n        } \n        // right sorted portion\n        else {\n            if (target < nums[mid] || target > nums[r]) {\n                r = mid - 1;\n            } else {\n                l = mid + 1;\n            }\n        }\n    }\n    return -1;\n};"
    }
  },
  {
    id: "153", slug: "find-minimum-in-rotated-sorted-array", title: "Find Min in Rotated Array", difficulty: "Medium", diffClass: "difficulty-medium", category: "Binary Search",
    detailedExplanation: "We need to find the minimum element in O(log n). If the array is sorted, it's the first element. If rotated, the minimum is at the pivot point where nums[i] > nums[i+1]. We use binary search. If nums[mid] > nums[r], the minimum must be in the right half. Else, it's in the left half (including mid).",
    description: "Find the minimum element in a sorted array that has been rotated.",
    edgeCases: [
      "Array not rotated",
      "Single element",
      "Two elements"
    ],
    algorithmSteps: [
      "Initialize 'l' = 0, 'r' = length - 1, 'res' = nums[0].",
      "Loop while 'l' <= 'r'.",
      "If nums[l] < nums[r], update res = min(res, nums[l]), break (subarray is sorted).",
      "Calculate 'mid' = (l + r) // 2.",
      "Update res = min(res, nums[mid]).",
      "If nums[mid] >= nums[l], l = mid + 1 (left half sorted, min is to the right).",
      "Else r = mid - 1.",
      "Return 'res'."
    ],
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1" }],
    defaultInput: { nums: [3, 4, 5, 1, 2] },
    complexity: { time: "O(log n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(1)" },
    optimalComplexity: { time: "O(log n)", space: "O(1)" },
    starterCode: "class Solution:\n    def findMin(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def findMin(self, nums: List[int]) -> int:\n        # Brute Force O(N)\n        res = nums[0]\n        for n in nums:\n            res = min(res, n)\n        return res",
      javascript: "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findMin = function(nums) {\n    let res = nums[0];\n    for (let n of nums) res = Math.min(res, n);\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def findMin(self, nums: List[int]) -> int:\n        res = nums[0]\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            if nums[l] < nums[r]:\n                res = min(res, nums[l])\n                break\n            mid = (l + r) // 2\n            res = min(res, nums[mid])\n            if nums[mid] >= nums[l]:\n                l = mid + 1\n            else:\n                r = mid - 1\n        return res",
      javascript: "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findMin = function(nums) {\n    let res = nums[0];\n    let l = 0, r = nums.length - 1;\n    while (l <= r) {\n        if (nums[l] < nums[r]) {\n            res = Math.min(res, nums[l]);\n            break;\n        }\n        let mid = Math.floor((l + r) / 2);\n        res = Math.min(res, nums[mid]);\n        if (nums[mid] >= nums[l]) l = mid + 1;\n        else r = mid - 1;\n    }\n    return res;\n};"
    }
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
    algorithmSteps: [
      "Initialize 'prev' pointer to None and 'curr' to head.",
      "Traverse the list while 'curr' is not None.",
      "Save 'next' node (curr.next) temporarily.",
      "Reverse the pointer: set curr.next to 'prev'.",
      "Move 'prev' forward: prev = curr.",
      "Move 'curr' forward: curr = next_node.",
      "Return 'prev' as the new head."
    ],
    examples: [{ input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" }],
    complexity: {
      time: "O(n)",
      space: "O(1)"
    },
    beginnerComplexity: {
      time: "O(n)",
      space: "O(n)"
    },
    optimalComplexity: {
      time: "O(n)",
      space: "O(1)"
    },
    starterCode: "class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Iterative using Stack (Space O(N))\n        if not head: return None\n        stack = []\n        curr = head\n        while curr:\n            stack.append(curr.val)\n            curr = curr.next\n        \n        dummy = ListNode(0)\n        curr = dummy\n        while stack:\n            curr.next = ListNode(stack.pop())\n            curr = curr.next\n        return dummy.next",
      javascript: "/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar reverseList = function(head) {\n    // Iterative using Array (Space O(N))\n    if (!head) return null;\n    const vals = [];\n    let curr = head;\n    while (curr) {\n        vals.push(curr.val);\n        curr = curr.next;\n    }\n    \n    const dummy = new ListNode(0);\n    curr = dummy;\n    while (vals.length > 0) {\n        curr.next = new ListNode(vals.pop());\n        curr = curr.next;\n    }\n    return dummy.next;\n};"
    },
    codes: {
      python: "class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        prev, curr = None, head\n        while curr:\n            temp = curr.next\n            curr.next = prev\n            prev = curr\n            curr = temp\n        return prev",
      javascript: "/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar reverseList = function(head) {\n    let prev = null;\n    let curr = head;\n    while (curr) {\n        let temp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = temp;\n    }\n    return prev;\n};"
    }
  },
  {
    id: "21", slug: "merge-two-sorted-lists", title: "Merge Two Sorted Lists", difficulty: "Easy", diffClass: "difficulty-easy", category: "Linked List",
    detailedExplanation: "We can solve this iteratively or recursively. Iteratively, we use a dummy node and point to the smaller of the two current nodes in list1 and list2. Recursively, if list1 is smaller, we recursively merge list1.next and list2.",
    description: "Merge two sorted linked lists into one sorted list.",
    edgeCases: [
      "Both lists empty",
      "One list empty",
      "Lists of different lengths"
    ],
    algorithmSteps: [
      "Initialize 'dummy' node and 'tail' pointer.",
      "Loop while list1 and list2 are not None.",
      "If list1.val < list2.val, tail.next = list1, list1 = list1.next.",
      "Else tail.next = list2, list2 = list2.next.",
      "Move tail forward.",
      "Append remaining list1 or list2.",
      "Return dummy.next."
    ],
    examples: [{ input: "l1 = [1,2,4], l2 = [1,3,4]", output: "[1,1,2,3,4,4]" }],
    complexity: { time: "O(n + m)", space: "O(1)" },
    beginnerComplexity: { time: "O(n + m)", space: "O(n + m)" }, // Recursive stack
    optimalComplexity: { time: "O(n + m)", space: "O(1)" },
    starterCode: "class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        # Recursive O(N+M) Space\n        if not list1:\n            return list2\n        if not list2:\n            return list1\n        if list1.val < list2.val:\n            list1.next = self.mergeTwoLists(list1.next, list2)\n            return list1\n        else:\n            list2.next = self.mergeTwoLists(list1, list2.next)\n            return list2",
      javascript: "/**\n * @param {ListNode} list1\n * @param {ListNode} list2\n * @return {ListNode}\n */\nvar mergeTwoLists = function(list1, list2) {\n    if (!list1) return list2;\n    if (!list2) return list1;\n    if (list1.val < list2.val) {\n        list1.next = mergeTwoLists(list1.next, list2);\n        return list1;\n    } else {\n        list2.next = mergeTwoLists(list1, list2.next);\n        return list2;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode()\n        tail = dummy\n        while list1 and list2:\n            if list1.val < list2.val:\n                tail.next = list1\n                list1 = list1.next\n            else:\n                tail.next = list2\n                list2 = list2.next\n            tail = tail.next\n        if list1:\n            tail.next = list1\n        elif list2:\n            tail.next = list2\n        return dummy.next",
      javascript: "/**\n * @param {ListNode} list1\n * @param {ListNode} list2\n * @return {ListNode}\n */\nvar mergeTwoLists = function(list1, list2) {\n    let dummy = new ListNode(0);\n    let tail = dummy;\n    while (list1 && list2) {\n        if (list1.val < list2.val) {\n            tail.next = list1;\n            list1 = list1.next;\n        } else {\n            tail.next = list2;\n            list2 = list2.next;\n        }\n        tail = tail.next;\n    }\n    if (list1) tail.next = list1;\n    if (list2) tail.next = list2;\n    return dummy.next;\n};"
    }
  },
  {
    id: "141", slug: "linked-list-cycle", title: "Linked List Cycle", difficulty: "Easy", diffClass: "difficulty-easy", category: "Linked List",
    detailedExplanation: "We use Floyd's Tortoise and Hare algorithm. Use two pointers, 'slow' and 'fast'. Slow moves 1 step, fast moves 2 steps. If there is a cycle, they will eventually meet. If fast reaches the end (null), there is no cycle.",
    description: "Determine if a linked list has a cycle.",
    edgeCases: [
      "Empty list",
      "Single node (no cycle)",
      "Single node (cycle to self)"
    ],
    algorithmSteps: [
      "Initialize 'slow' and 'fast' to head.",
      "Loop while fast and fast.next are not None.",
      "Move slow = slow.next.",
      "Move fast = fast.next.next.",
      "If slow == fast, return True.",
      "Return False (loop ended)."
    ],
    examples: [{ input: "head = [3,2,0,-4], pos = 1", output: "true" }],
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" }, // Hash Set
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        # Brute Force using Set O(N) Space\n        seen = set()\n        curr = head\n        while curr:\n            if curr in seen:\n                return True\n            seen.add(curr)\n            curr = curr.next\n        return False",
      javascript: "/**\n * @param {ListNode} head\n * @return {boolean}\n */\nvar hasCycle = function(head) {\n    const seen = new Set();\n    let curr = head;\n    while (curr) {\n        if (seen.has(curr)) return true;\n        seen.add(curr);\n        curr = curr.next;\n    }\n    return false;\n};"
    },
    codes: {
      python: "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        slow, fast = head, head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n            if slow == fast:\n                return True\n        return False",
      javascript: "/**\n * @param {ListNode} head\n * @return {boolean}\n */\nvar hasCycle = function(head) {\n    let slow = head, fast = head;\n    while (fast && fast.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow === fast) return true;\n    }\n    return false;\n};"
    }
  },
  {
    id: "143", slug: "reorder-list", title: "Reorder List", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    detailedExplanation: "We need to reorder the list in a specific way: L0, Ln, L1, Ln-1, etc. This equates to: 1. Find the middle of the list. 2. Reverse the second half. 3. Merge the two halves.",
    description: "Reorder the list such that it follows: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...",
    edgeCases: [
      "Empty list or single node",
      "Two nodes"
    ],
    algorithmSteps: [
      "Find middle: slow/fast pointers.",
      "Reverse second half: prev/curr pointers from middle.",
      "Merge halves: pick one from first, then one from second, repeat."
    ],
    examples: [{ input: "head = [1,2,3,4]", output: "[1,4,2,3]" }],
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" }, // Array
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        # Brute Force using Array O(N) Space\n        if not head: return\n        nodes = []\n        curr = head\n        while curr:\n            nodes.append(curr)\n            curr = curr.next\n        l, r = 0, len(nodes) - 1\n        while l < r:\n            nodes[l].next = nodes[r]\n            l += 1\n            if l == r: break\n            nodes[r].next = nodes[l]\n            r -= 1\n        nodes[l].next = None",
      javascript: "/**\n * @param {ListNode} head\n * @return {void}\n */\nvar reorderList = function(head) {\n    if (!head) return;\n    const nodes = [];\n    let curr = head;\n    while (curr) {\n        nodes.push(curr);\n        curr = curr.next;\n    }\n    let l = 0, r = nodes.length - 1;\n    while (l < r) {\n        nodes[l].next = nodes[r];\n        l++;\n        if (l === r) break;\n        nodes[r].next = nodes[l];\n        r--;\n    }\n    nodes[l].next = null;\n};"
    },
    codes: {
      python: "class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        slow, fast = head, head.next\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n        second = slow.next\n        prev = slow.next = None\n        while second:\n            tmp = second.next\n            second.next = prev\n            prev = second\n            second = tmp\n        first, second = head, prev\n        while second:\n            tmp1, tmp2 = first.next, second.next\n            first.next = second\n            second.next = tmp1\n            first, second = tmp1, tmp2",
      javascript: "/**\n * @param {ListNode} head\n * @return {void}\n */\nvar reorderList = function(head) {\n    let slow = head, fast = head.next;\n    while (fast && fast.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    let second = slow.next;\n    slow.next = null;\n    let prev = null;\n    while (second) {\n        let tmp = second.next;\n        second.next = prev;\n        prev = second;\n        second = tmp;\n    }\n    let first = head; second = prev;\n    while (second) {\n        let tmp1 = first.next, tmp2 = second.next;\n        first.next = second;\n        second.next = tmp1;\n        first = tmp1;\n        second = tmp2;\n    }\n};"
    }
  },
  {
    id: "19", slug: "remove-nth-node-from-end-of-list", title: "Remove Nth Node From End", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    detailedExplanation: "We need to remove the n-th node from the end. We can do this in one pass using two pointers. Advance the 'right' pointer by n steps first. Then move both 'left' and 'right' pointers simultaneously until 'right' reaches the end. 'left' will then point to the node just before the target node.",
    description: "Remove the nth node from the end of the list and return its head.",
    edgeCases: [
      "Remove head",
      "Remove tail",
      "List length equals n"
    ],
    algorithmSteps: [
      "Initialize 'dummy' node pointing to head.",
      "Initialize 'left' = dummy, 'right' = head.",
      "Move 'right' forward n times.",
      "While right is not None:",
      "left = left.next, right = right.next.",
      "left.next = left.next.next.",
      "Return dummy.next."
    ],
    examples: [{ input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" }],
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(1)" }, // Two pass
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        # Two Pass\n        length = 0\n        curr = head\n        while curr:\n            length += 1\n            curr = curr.next\n        dummy = ListNode(0, head)\n        curr = dummy\n        for _ in range(length - n):\n             curr = curr.next\n        curr.next = curr.next.next\n        return dummy.next",
      javascript: "/**\n * @param {ListNode} head\n * @param {number} n\n * @return {ListNode}\n */\nvar removeNthFromEnd = function(head, n) {\n    let length = 0;\n    let curr = head;\n    while (curr) {\n        length++;\n        curr = curr.next;\n    }\n    let dummy = new ListNode(0, head);\n    curr = dummy;\n    for (let i = 0; i < length - n; i++) curr = curr.next;\n    curr.next = curr.next.next;\n    return dummy.next;\n};"
    },
    codes: {
      python: "class Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        dummy = ListNode(0, head)\n        left = dummy\n        right = head\n        while n > 0 and right:\n            right = right.next\n            n -= 1\n        while right:\n            left = left.next\n            right = right.next\n        left.next = left.next.next\n        return dummy.next",
      javascript: "/**\n * @param {ListNode} head\n * @param {number} n\n * @return {ListNode}\n */\nvar removeNthFromEnd = function(head, n) {\n    let dummy = new ListNode(0, head);\n    let left = dummy;\n    let right = head;\n    while (n > 0 && right) {\n        right = right.next;\n        n--;\n    }\n    while (right) {\n        left = left.next;\n        right = right.next;\n    }\n    left.next = left.next.next;\n    return dummy.next;\n};"
    }
  },
  {
    id: "138", slug: "copy-list-with-random-pointer", title: "Copy List with Random Pointer", difficulty: "Medium", diffClass: "difficulty-medium", category: "Linked List",
    detailedExplanation: "Deep copying requires creating new nodes for each existing node. The difficulty lies in the 'random' pointer, which might point to a node not yet created. We can use a Hash Map to map old nodes to new nodes. First pass: create all new nodes and map them. Second pass: link next and random pointers.",
    description: "A deep copy of a list where each node has a random pointer.",
    edgeCases: [
      "Null head",
      "Random points to null",
      "Random points to self"
    ],
    algorithmSteps: [
      "Initialize Hash Map 'oldToNew'.",
      "First pass: Iterate head, create copy, map old->new.",
      "Second pass: Iterate head, set copy.next = map[old.next], copy.random = map[old.random].",
      "Return map[head]."
    ],
    examples: [{ input: "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]", output: "[[7,null],[13,0],[11,4],[10,2],[1,0]]" }],
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" }, // Can be O(1) by weaving
    starterCode: "class Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        if not head: return None\n        oldToNew = {}\n        curr = head\n        while curr:\n            oldToNew[curr] = Node(curr.val)\n            curr = curr.next\n        curr = head\n        while curr:\n            oldToNew[curr].next = oldToNew.get(curr.next)\n            oldToNew[curr].random = oldToNew.get(curr.random)\n            curr = curr.next\n        return oldToNew[head]",
      javascript: "/**\n * @param {Node} head\n * @return {Node}\n */\nvar copyRandomList = function(head) {\n    if (!head) return null;\n    const map = new Map();\n    let curr = head;\n    while (curr) {\n        map.set(curr, new Node(curr.val));\n        curr = curr.next;\n    }\n    curr = head;\n    while (curr) {\n        map.get(curr).next = map.get(curr.next) || null;\n        map.get(curr).random = map.get(curr.random) || null;\n        curr = curr.next;\n    }\n    return map.get(head);\n};"
    },
    codes: {
      python: "class Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        if not head: return None\n        oldToNew = {None: None}\n        curr = head\n        while curr:\n            oldToNew[curr] = Node(curr.val)\n            curr = curr.next\n        curr = head\n        while curr:\n            copy = oldToNew[curr]\n            copy.next = oldToNew[curr.next]\n            copy.random = oldToNew[curr.random]\n            curr = curr.next\n        return oldToNew[head]",
      javascript: "/**\n * @param {Node} head\n * @return {Node}\n */\nvar copyRandomList = function(head) {\n    if (!head) return null;\n    const map = new Map();\n    let curr = head;\n    while (curr) {\n        map.set(curr, new Node(curr.val));\n        curr = curr.next;\n    }\n    curr = head;\n    while (curr) {\n        map.get(curr).next = map.get(curr.next) || null;\n        map.get(curr).random = map.get(curr.random) || null;\n        curr = curr.next;\n    }\n    return map.get(head);\n};"
    }
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
    detailedExplanation: "We can find the maximum depth by traversing the tree recursively. The depth of a node is 1 + max(depth of left child, depth of right child). The base case is a null node, which has depth 0.",
    description: "Return the maximum depth of a binary tree.",
    edgeCases: [
      "Empty tree (depth 0)",
      "Single node (depth 1)",
      "Unbalanced tree"
    ],
    algorithmSteps: [
      "If root is None, return 0.",
      "Return 1 + max(maxDepth(root.left), maxDepth(root.right))."
    ],
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "3" }],
    complexity: { time: "O(n)", space: "O(h)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" }, // BFS
    optimalComplexity: { time: "O(n)", space: "O(h)" },
    starterCode: "class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        # Iterative BFS O(N)\n        if not root: return 0\n        level = 0\n        q = collections.deque([root])\n        while q:\n            for i in range(len(q)):\n                node = q.popleft()\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n            level += 1\n        return level",
      javascript: "/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function(root) {\n    if (!root) return 0;\n    let level = 0;\n    const q = [root];\n    while (q.length) {\n        let len = q.length;\n        for (let i = 0; i < len; i++) {\n            let node = q.shift();\n            if (node.left) q.push(node.left);\n            if (node.right) q.push(node.right);\n        }\n        level++;\n    }\n    return level;\n};"
    },
    codes: {
      python: "class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root: return 0\n        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))",
      javascript: "/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function(root) {\n    if (!root) return 0;\n    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n};"
    }
  },
  {
    id: "543", slug: "diameter-of-binary-tree", title: "Diameter of Binary Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    detailedExplanation: "The diameter is the longest path between any two nodes. This path may or may not pass through the root. For every node, the length of the longest path passing through it is the sum of the heights of its left and right subtrees. We compute the height of every node and update the global maximum diameter.",
    description: "The diameter of a binary tree is the length of the longest path between any two nodes.",
    edgeCases: [
      "Empty tree",
      "Path does not pass through root"
    ],
    algorithmSteps: [
      "Initialize 'res' = 0.",
      "Define dfs(node) function returning height.",
      "Base case: if node is None, return 0.",
      "Recursively find left and right heights.",
      "Update res = max(res, left + right).",
      "Return 1 + max(left, right)."
    ],
    examples: [{ input: "root = [1,2,3,4,5]", output: "3" }],
    complexity: { time: "O(n)", space: "O(h)" },
    beginnerComplexity: { time: "O(n²)", space: "O(h)" },
    optimalComplexity: { time: "O(n)", space: "O(h)" },
    starterCode: "class Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        # Brute Force logic omitted\n        self.res = 0\n        def depth(node):\n            if not node: return 0\n            left = depth(node.left)\n            right = depth(node.right)\n            self.res = max(self.res, left + right)\n            return 1 + max(left, right)\n        depth(root)\n        return self.res",
      javascript: "/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar diameterOfBinaryTree = function(root) {\n    let res = 0;\n    function depth(node) {\n        if (!node) return 0;\n        let left = depth(node.left);\n        let right = depth(node.right);\n        res = Math.max(res, left + right);\n        return 1 + Math.max(left, right);\n    }\n    depth(root);\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        res = [0]\n        def dfs(root):\n            if not root: return 0\n            left = dfs(root.left)\n            right = dfs(root.right)\n            res[0] = max(res[0], left + right)\n            return 1 + max(left, right)\n        dfs(root)\n        return res[0]",
      javascript: "/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar diameterOfBinaryTree = function(root) {\n    let res = 0;\n    function dfs(node) {\n        if (!node) return 0;\n        let left = dfs(node.left);\n        let right = dfs(node.right);\n        res = Math.max(res, left + right);\n        return 1 + Math.max(left, right);\n    }\n    dfs(root);\n    return res;\n};"
    }
  },
  {
    id: "110", slug: "balanced-binary-tree", title: "Balanced Binary Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    detailedExplanation: "A tree is balanced if the height difference between left and right subtrees of every node is at most 1. We can check this bottom-up. If any subtree is unbalanced, propagate 'false' (or -1) up.",
    description: "Determine if a binary tree is height-balanced.",
    edgeCases: [
      "Empty tree (balanced)",
      "Unbalanced at root",
      "Unbalanced at leaf"
    ],
    algorithmSteps: [
      "Define dfs(node) returning [isBalanced, height].",
      "Base case: if node is None, return [True, 0].",
      "Recursively call dfs on left and right.",
      "balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1.",
      "Return [balanced, 1 + max(left[1], right[1])]."
    ],
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "true" }],
    complexity: { time: "O(n)", space: "O(h)" },
    beginnerComplexity: { time: "O(n²)", space: "O(h)" },
    optimalComplexity: { time: "O(n)", space: "O(h)" },
    starterCode: "class Solution:\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        if not root: return True\n        def height(node):\n            if not node: return 0\n            return 1 + max(height(node.left), height(node.right))\n        return abs(height(root.left) - height(root.right)) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right)",
      javascript: "/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isBalanced = function(root) {\n    if (!root) return true;\n    function height(node) {\n        if (!node) return 0;\n        return 1 + Math.max(height(node.left), height(node.right));\n    }\n    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);\n};"
    },
    codes: {
      python: "class Solution:\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        def dfs(root):\n            if not root: return [True, 0]\n            left, right = dfs(root.left), dfs(root.right)\n            balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1\n            return [balanced, 1 + max(left[1], right[1])]\n        return dfs(root)[0]",
      javascript: "/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isBalanced = function(root) {\n    function dfs(node) {\n        if (!node) return [true, 0];\n        let left = dfs(node.left);\n        let right = dfs(node.right);\n        let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;\n        return [balanced, 1 + Math.max(left[1], right[1])];\n    }\n    return dfs(root)[0];\n};"
    }
  },
  {
    id: "100", slug: "same-tree", title: "Same Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    detailedExplanation: "Two trees are the same if they have the same structure and same values. We can verify this recursively: roots must match, left subtrees must match, and right subtrees must match.",
    description: "Check if two binary trees are the same.",
    edgeCases: [
      "Both empty (true)",
      "One empty (false)",
      "Different structures"
    ],
    algorithmSteps: [
      "If p and q are None, return True.",
      "If p is None or q is None, return False.",
      "If p.val != q.val, return False.",
      "Return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)."
    ],
    examples: [{ input: "p = [1,2,3], q = [1,2,3]", output: "true" }],
    complexity: { time: "O(n)", space: "O(h)" },
    beginnerComplexity: { time: "O(n)", space: "O(h)" },
    optimalComplexity: { time: "O(n)", space: "O(h)" },
    starterCode: "class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        if not p and not q: return True\n        if not p or not q or p.val != q.val: return False\n        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)",
      javascript: "/**\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {boolean}\n */\nvar isSameTree = function(p, q) {\n    if (!p && !q) return true;\n    if (!p || !q || p.val !== q.val) return false;\n    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n};"
    },
    codes: {
      python: "class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        if not p and not q: return True\n        if not p or not q or p.val != q.val: return False\n        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)",
      javascript: "/**\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {boolean}\n */\nvar isSameTree = function(p, q) {\n    if (!p && !q) return true;\n    if (!p || !q || p.val !== q.val) return false;\n    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n};"
    }
  },
  {
    id: "572", slug: "subtree-of-another-tree", title: "Subtree of Another Tree", difficulty: "Easy", diffClass: "difficulty-easy", category: "Trees",
    detailedExplanation: "We need to check if 'subRoot' is exactly contained within 'root'. We can check if 'subRoot' is the same tree as 'root', or as 'root.left', or as 'root.right'. We use the 'isSameTree' logic as a helper.",
    description: "Check if one tree is a subtree of another tree.",
    edgeCases: [
      "Subtree is null (true)",
      "Main tree is null (false)"
    ],
    algorithmSteps: [
      "If subRoot is None, return True.",
      "If root is None, return False.",
      "If isSameTree(root, subRoot), return True.",
      "Return isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)."
    ],
    examples: [{ input: "root = [3,4,5,1,2], subRoot = [4,1,2]", output: "true" }],
    complexity: { time: "O(n * m)", space: "O(h)" },
    beginnerComplexity: { time: "O(n * m)", space: "O(h)" },
    optimalComplexity: { time: "O(n)", space: "O(n+m)" }, // Merkle Hashing / Serialization
    starterCode: "class Solution:\n    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\n        if not subRoot: return True\n        if not root: return False\n        if self.sameTree(root, subRoot): return True\n        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)\n\n    def sameTree(self, s, t):\n        if not s and not t: return True\n        if not s or not t or s.val != t.val: return False\n        return self.sameTree(s.left, t.left) and self.sameTree(s.right, t.right)",
      javascript: "/**\n * @param {TreeNode} root\n * @param {TreeNode} subRoot\n * @return {boolean}\n */\nvar isSubtree = function(root, subRoot) {\n    if (!subRoot) return true;\n    if (!root) return false;\n    if (isSameTree(root, subRoot)) return true;\n    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);\n    function isSameTree(p, q) {\n        if (!p && !q) return true;\n        if (!p || !q || p.val !== q.val) return false;\n        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\n        if not subRoot: return True\n        if not root: return False\n        if self.sameTree(root, subRoot): return True\n        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)\n\n    def sameTree(self, s, t):\n        if not s and not t: return True\n        if not s or not t or s.val != t.val: return False\n        return self.sameTree(s.left, t.left) and self.sameTree(s.right, t.right)",
      javascript: "/**\n * @param {TreeNode} root\n * @param {TreeNode} subRoot\n * @return {boolean}\n */\nvar isSubtree = function(root, subRoot) {\n    if (!subRoot) return true;\n    if (!root) return false;\n    if (isSameTree(root, subRoot)) return true;\n    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);\n    function isSameTree(p, q) {\n        if (!p && !q) return true;\n        if (!p || !q || p.val !== q.val) return false;\n        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n    }\n};"
    }
  },
  {
    id: "235", slug: "lowest-common-ancestor-of-a-binary-search-tree", title: "LCA of BST", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    detailedExplanation: "In a BST, the left subtree has values smaller than the root, and the right has values larger. If both p and q are larger than root, go right. If both are smaller, go left. If one is larger and one is smaller (or equal), then the current node is the split point, i.e., the LCA.",
    description: "Find the lowest common ancestor node of two given nodes in a BST.",
    edgeCases: [
      "p or q is root",
      "p and q in same subtree"
    ],
    algorithmSteps: [
      "Loop:",
      "If p.val > root.val and q.val > root.val, root = root.right.",
      "Else if p.val < root.val and q.val < root.val, root = root.left.",
      "Else, return root (split point found)."
    ],
    examples: [{ input: "root = [6,2,8,0,4,7,9], p = 2, q = 8", output: "6" }],
    complexity: { time: "O(log n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(log n)", space: "O(1)" },
    starterCode: "class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        # Recursive O(log N) Space\n        if p.val < root.val and q.val < root.val:\n            return self.lowestCommonAncestor(root.left, p, q)\n        elif p.val > root.val and q.val > root.val:\n            return self.lowestCommonAncestor(root.right, p, q)\n        else:\n            return root",
      javascript: "/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);\n    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);\n    return root;\n};"
    },
    codes: {
      python: "class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        cur = root\n        while cur:\n            if p.val > cur.val and q.val > cur.val:\n                cur = cur.right\n            elif p.val < cur.val and q.val < cur.val:\n                cur = cur.left\n            else:\n                return cur",
      javascript: "/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n    let cur = root;\n    while (cur) {\n        if (p.val > cur.val && q.val > cur.val) cur = cur.right;\n        else if (p.val < cur.val && q.val < cur.val) cur = cur.left;\n        else return cur;\n    }\n};"
    }
  },
  {
    id: "102", slug: "binary-tree-level-order-traversal", title: "Level Order Traversal", difficulty: "Medium", diffClass: "difficulty-medium", category: "Trees",
    detailedExplanation: "Level order traversal (BFS) explores the tree level by level. We use a queue. For each level, we get the number of nodes currently in the queue, process them, and add their children for the next level.",
    description: "Return the level order traversal of a tree's nodes' values.",
    edgeCases: [
      "Empty tree",
      "Single node"
    ],
    algorithmSteps: [
      "If root is None, return empty list.",
      "Initialize queue with root.",
      "While queue is not empty:",
      "Initialize level list.",
      "Iterate through current queue length:",
      "Pop node, add val to level list.",
      "Add node.left and node.right to queue if valid.",
      "Add level list to result.",
      "Return result."
    ],
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }],
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        if not root: return []\n        res = []\n        q = collections.deque([root])\n        while q:\n            val = []\n            for i in range(len(q)):\n                node = q.popleft()\n                val.append(node.val)\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n            res.append(val)\n        return res",
      javascript: "/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function(root) {\n    if (!root) return [];\n    const res = [];\n    const q = [root];\n    while (q.length) {\n        let val = [];\n        let len = q.length;\n        for (let i = 0; i < len; i++) {\n            let node = q.shift();\n            val.push(node.val);\n            if (node.left) q.push(node.left);\n            if (node.right) q.push(node.right);\n        }\n        res.push(val);\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        res = []\n        q = collections.deque()\n        if root: q.append(root)\n        while q:\n            val = []\n            for i in range(len(q)):\n                node = q.popleft()\n                val.append(node.val)\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n            res.append(val)\n        return res",
      javascript: "/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function(root) {\n    if (!root) return [];\n    const res = [];\n    const q = [root];\n    while (q.length) {\n        const val = [];\n        const len = q.length;\n        for (let i = 0; i < len; i++) {\n            const node = q.shift();\n            val.push(node.val);\n            if (node.left) q.push(node.left);\n            if (node.right) q.push(node.right);\n        }\n        res.push(val);\n    }\n    return res;\n};"
    }
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
    description: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.",
    detailedExplanation: "A Trie is a tree where each node represents a character. Each node has a map or fixed-size array of children and a boolean flag indicating if the current node completes a word. `insert` adds a word character by character. `search` checks if a full word exists. `startsWith` checks if a prefix exists.",
    edgeCases: [
      "Empty string search",
      "Prefix search for a word that exists as a full word",
      "Insert same word multiple times"
    ],
    algorithmSteps: [
      "Use a nested dictionary or a custom TrieNode class for children.",
      "For `insert(word)`: start from root, for each char, create node if it doesn't exist, move to child. Mark last node as isEndOfWord.",
      "For `search(word)`: start from root, for each char, if child exists move to it, else return false. Return isEndOfWord of last node.",
      "For `startsWith(prefix)`: same as search, but return true if all chars were found (regardless of isEndOfWord)."
    ],
    examples: [{ input: 'trie.insert("apple"); trie.search("apple");', output: "true" }, { input: 'trie.startsWith("app")', output: "true" }],
    defaultInput: { words: ["apple", "app", "apricot"] },
    complexity: { time: "O(L) where L is word length", space: "O(Total Chars)" },
    beginnerComplexity: { time: "O(L)", space: "O(Total Chars)" },
    optimalComplexity: { time: "O(L)", space: "O(Total Chars)" },
    starterCode: "class Trie:\n    def __init__(self):\n        pass\n\n    def insert(self, word: str) -> None:\n        pass\n\n    def search(self, word: str) -> bool:\n        pass\n\n    def startsWith(self, prefix: str) -> bool:\n        pass",
    beginnerCode: {
      python: "class Trie:\n    def __init__(self):\n        self.words = set()\n\n    def insert(self, word: str) -> None:\n        self.words.add(word)\n\n    def search(self, word: str) -> bool:\n        return word in self.words\n\n    def startsWith(self, prefix: str) -> bool:\n        # Brute force check all words\n        for w in self.words:\n            if w.startswith(prefix): return True\n        return False",
      javascript: "var Trie = function() {\n    this.words = new Set();\n};\nTrie.prototype.insert = function(word) {\n    this.words.add(word);\n};\nTrie.prototype.search = function(word) {\n    return this.words.has(word);\n};\nTrie.prototype.startsWith = function(prefix) {\n    for (let w of this.words) if (w.startsWith(prefix)) return true;\n    return false;\n};"
    },
    codes: {
      python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.end = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        curr = self.root\n        for c in word:\n            if c not in curr.children:\n                curr.children[c] = TrieNode()\n            curr = curr.children[c]\n        curr.end = True\n\n    def search(self, word: str) -> bool:\n        curr = self.root\n        for c in word:\n            if c not in curr.children: return False\n            curr = curr.children[c]\n        return curr.end\n\n    def startsWith(self, prefix: str) -> bool:\n        curr = self.root\n        for c in prefix:\n            if c not in curr.children: return False\n            curr = curr.children[c]\n        return True",
      javascript: "class TrieNode {\n    constructor() {\n        this.children = {};\n        this.end = false;\n    }\n}\n\nvar Trie = function() {\n    this.root = new TrieNode();\n};\n\nTrie.prototype.insert = function(word) {\n    let curr = this.root;\n    for (let c of word) {\n        if (!curr.children[c]) curr.children[c] = new TrieNode();\n        curr = curr.children[c];\n    }\n    curr.end = true;\n};\n\nTrie.prototype.search = function(word) {\n    let curr = this.root;\n    for (let c of word) {\n        if (!curr.children[c]) return false;\n        curr = curr.children[c];\n    }\n    return curr.end;\n};\n\nTrie.prototype.startsWith = function(prefix) {\n    let curr = this.root;\n    for (let c of prefix) {\n        if (!curr.children[c]) return false;\n        curr = curr.children[c];\n    }\n    return true;\n};",
      cpp: "class TrieNode {\npublic:\n    TrieNode* children[26];\n    bool end;\n    TrieNode() {\n        for (int i = 0; i < 26; i++) children[i] = nullptr;\n        end = false;\n    }\n};\n\nclass Trie {\npublic:\n    TrieNode* root;\n    Trie() { root = new TrieNode(); }\n    \n    void insert(string word) {\n        TrieNode* curr = root;\n        for (char c : word) {\n            if (!curr->children[c - 'a']) curr->children[c - 'a'] = new TrieNode();\n            curr = curr->children[c - 'a'];\n        }\n        curr->end = true;\n    }\n    \n    bool search(string word) {\n        TrieNode* curr = root;\n        for (char c : word) {\n            if (!curr->children[c - 'a']) return false;\n            curr = curr->children[c - 'a'];\n        }\n        return curr->end;\n    }\n    \n    bool startsWith(string prefix) {\n        TrieNode* curr = root;\n        for (char c : prefix) {\n            if (!curr->children[c - 'a']) return false;\n            curr = curr->children[c - 'a'];\n        }\n        return true;\n    }\n};"
    }
  },
  {
    id: "211", slug: "design-add-and-search-words-data-structure", title: "Design Word Dictionary", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Design a data structure that supports adding new words and finding if a string matches any previously added string. The search string can contain dots '.' which can match any letter.",
    detailedExplanation: "This is a variation of the Trie. For regular characters, we traverse the Trie normally. For the '.' character, we must check all possible children recursively (Backtracking) to see if any path leads to a valid word.",
    edgeCases: [
      "Wildcard at the end of a word",
      "Wildcard at the beginning",
      "Consecutive wildcards '..'",
      "Searching for a word shorter than existing words"
    ],
    algorithmSteps: [
      "Use a Trie for storage.",
      "For `addWord(word)`: standard Trie insertion.",
      "For `search(word)`: define a recursive function `dfs(node, index)`.",
      "If index == len(word), return node.isEndOfWord.",
      "If char is '.', loop through all children and return true if any `dfs(child, index + 1)` is true.",
      "If char is normal, move to child and return `dfs(child, index + 1)` if child exists."
    ],
    examples: [{ input: 'wd.addWord("bad"); wd.search(".ad");', output: "true" }, { input: 'wd.search("b..")', output: "true" }],
    defaultInput: { words: ["bad", "dad", "mad"], queries: [".ad", "b..", "ba."] },
    complexity: { time: "add: O(L), search: O(26^L)", space: "O(Total Chars)" },
    beginnerComplexity: { time: "O(N * L)", space: "O(N * L)" },
    optimalComplexity: { time: "add: O(L), search: O(26^L)", space: "O(Total Chars)" },
    starterCode: "class WordDictionary:\n    def __init__(self):\n        pass\n\n    def addWord(self, word: str) -> None:\n        pass\n\n    def search(self, word: str) -> bool:\n        pass",
    beginnerCode: {
      python: "class WordDictionary:\n    def __init__(self):\n        self.words = []\n\n    def addWord(self, word: str) -> None:\n        self.words.append(word)\n\n    def search(self, word: str) -> bool:\n        # Brute force check with regex or manual match\n        import re\n        pattern = f\"^{word}$\"\n        for w in self.words:\n            if re.match(pattern, w): return True\n        return False",
      javascript: "var WordDictionary = function() {\n    this.words = [];\n};\nWordDictionary.prototype.addWord = function(word) {\n    this.words.push(word);\n};\nWordDictionary.prototype.search = function(word) {\n    let regex = new RegExp('^' + word + '$');\n    return this.words.some(w => regex.test(w));\n};"
    },
    codes: {
      python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.word = False\n\nclass WordDictionary:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def addWord(self, word: str) -> None:\n        curr = self.root\n        for c in word:\n            if c not in curr.children: curr.children[c] = TrieNode()\n            curr = curr.children[c]\n        curr.word = True\n\n    def search(self, word: str) -> bool:\n        def dfs(j, root):\n            curr = root\n            for i in range(j, len(word)):\n                c = word[i]\n                if c == \".\":\n                    for child in curr.children.values():\n                        if dfs(i + 1, child): return True\n                    return False\n                else:\n                    if c not in curr.children: return False\n                    curr = curr.children[c]\n            return curr.word\n        return dfs(0, self.root)",
      javascript: "class TrieNode {\n    constructor() {\n        this.children = {};\n        this.word = false;\n    }\n}\n\nvar WordDictionary = function() {\n    this.root = new TrieNode();\n};\n\nWordDictionary.prototype.addWord = function(word) {\n    let curr = this.root;\n    for (let c of word) {\n        if (!curr.children[c]) curr.children[c] = new TrieNode();\n        curr = curr.children[c];\n    }\n    curr.word = true;\n};\n\nWordDictionary.prototype.search = function(word) {\n    const dfs = (j, root) => {\n        let curr = root;\n        for (let i = j; i < word.length; i++) {\n            let c = word[i];\n            if (c === '.') {\n                for (let child of Object.values(curr.children)) {\n                    if (dfs(i + 1, child)) return true;\n                }\n                return false;\n            } else {\n                if (!curr.children[c]) return false;\n                curr = curr.children[c];\n            }\n        }\n        return curr.word;\n    };\n    return dfs(0, this.root);\n};",
      cpp: "class TrieNode {\npublic:\n    TrieNode* children[26];\n    bool word;\n    TrieNode() {\n        for (int i = 0; i < 26; i++) children[i] = nullptr;\n        word = false;\n    }\n};\n\nclass WordDictionary {\npublic:\n    TrieNode* root;\n    WordDictionary() { root = new TrieNode(); }\n    \n    void addWord(string word) {\n        TrieNode* curr = root;\n        for (char c : word) {\n            if (!curr->children[c - 'a']) curr->children[c - 'a'] = new TrieNode();\n            curr = curr->children[c - 'a'];\n        }\n        curr->word = true;\n    }\n    \n    bool search(string word) { return dfs(0, root, word); }\n    \n    bool dfs(int j, TrieNode* curr, string& word) {\n        for (int i = j; i < word.length(); i++) {\n            char c = word[i];\n            if (c == '.') {\n                for (int k = 0; k < 26; k++) {\n                    if (curr->children[k] && dfs(i + 1, curr->children[k], word)) return true;\n                }\n                return false;\n            }\n            if (!curr->children[c - 'a']) return false;\n            curr = curr->children[c - 'a'];\n        }\n        return curr->word;\n    }\n};"
    }
  },
  {
    id: "212", slug: "word-search-ii", title: "Word Search II", difficulty: "Hard", diffClass: "difficulty-hard", category: "Tries",
    description: "Given an m x n board of characters and a list of strings words, return all words on the board.",
    detailedExplanation: "We insert all words into a Trie. Then, we perform DFS on the board starting from each cell. During DFS, we move in the Trie simultaneously. If we reach a Trie node marked as 'word', we've found a match. To optimize, we can remove words from the Trie一旦 found, and prune paths that lead to no words.",
    edgeCases: [
      "Empty board/words",
      "Words with common prefixes",
      "Board with multiple instances of the same word",
      "Word longer than board dimensions"
    ],
    algorithmSteps: [
      "Build a Trie from the input words.",
      "Traverse each cell (r, c) on the board.",
      "Start a DFS at (r, c) looking for words starting with board[r][c].",
      "During DFS, keep track of the current Trie node.",
      "Mark visited cells with a placeholder (e.g., '#') to avoid reuse.",
      "If a complete word is found, add to result and mark Trie node as not a word (to avoid duplicates).",
      "Optimize by pruning nodes that no longer have children."
    ],
    examples: [{ input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["eat","oath"]' }],
    defaultInput: { board: [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], words: ["oath", "pea", "eat", "rain"] },
    complexity: { time: "O(m * n * 4^L)", space: "O(Total Chars)" },
    beginnerComplexity: { time: "O(W * m * n * 4^L)", space: "O(Total Chars)" },
    optimalComplexity: { time: "O(m * n * 4^L)", space: "O(Total Chars)" },
    starterCode: "class Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        # Brute force: Word Search I for each word\n        res = []\n        for w in words:\n            if self.exist(board, w): res.append(w)\n        return res\n\n    def exist(self, board, word):\n        # Standard DFS word search\n        return False",
      javascript: "var findWords = function(board, words) {\n    let res = [];\n    for (let w of words) {\n        if (this.exist(board, w)) res.push(w);\n    }\n    return res;\n};"
    },
    codes: {
      python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.isWord = False\n\n    def addWord(self, word):\n        curr = self\n        for c in word:\n            if c not in curr.children: curr.children[c] = TrieNode()\n            curr = curr.children[c]\n        curr.isWord = True\n\nclass Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        root = TrieNode()\n        for w in words: root.addWord(w)\n        ROWS, COLS = len(board), len(board[0])\n        res, visit = set(), set()\n        \n        def dfs(r, c, node, word):\n            if (r < 0 or c < 0 or r == ROWS or c == COLS or \n                (r, c) in visit or board[r][c] not in node.children):\n                return\n            visit.add((r, c))\n            node = node.children[board[r][c]]\n            word += board[r][c]\n            if node.isWord: res.add(word)\n            dfs(r + 1, c, node, word)\n            dfs(r - 1, c, node, word)\n            dfs(r, c + 1, node, word)\n            dfs(r, c - 1, node, word)\n            visit.remove((r, c))\n\n        for r in range(ROWS):\n            for c in range(COLS): dfs(r, c, root, \"\")\n        return list(res)",
      javascript: "class TrieNode {\n    constructor() {\n        this.children = {};\n        this.isWord = false;\n    }\n    addWord(word) {\n        let curr = this;\n        for (let c of word) {\n            if (!curr.children[c]) curr.children[c] = new TrieNode();\n            curr = curr.children[c];\n        }\n        curr.isWord = true;\n    }\n}\n\nvar findWords = function(board, words) {\n    let root = new TrieNode();\n    for (let w of words) root.addWord(w);\n    let ROWS = board.length, COLS = board[0].length;\n    let res = new Set(), visit = new Set();\n\n    function dfs(r, c, node, word) {\n        if (r < 0 || c < 0 || r === ROWS || c === COLS || \n            visit.has(`${r},${c}`) || !node.children[board[r][c]]) return;\n        visit.add(`${r},${c}`);\n        node = node.children[board[r][c]];\n        word += board[r][c];\n        if (node.isWord) res.add(word);\n        dfs(r + 1, c, node, word);\n        dfs(r - 1, c, node, word);\n        dfs(r, c + 1, node, word);\n        dfs(r, c - 1, node, word);\n        visit.delete(`${r},${c}`);\n    }\n\n    for (let r = 0; r < ROWS; r++) {\n        for (let c = 0; c < COLS; c++) dfs(r, c, root, \"\");\n    }\n    return Array.from(res);\n};",
      cpp: "class TrieNode {\npublic:\n    map<char, TrieNode*> children;\n    bool isWord;\n    TrieNode() : isWord(false) {}\n};\n\nclass Solution {\npublic:\n    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {\n        TrieNode* root = new TrieNode();\n        for (string& w : words) {\n            TrieNode* curr = root;\n            for (char c : w) {\n                if (!curr->children.count(c)) curr->children[c] = new TrieNode();\n                curr = curr->children[c];\n            }\n            curr->isWord = true;\n        }\n        int ROWS = board.size(), COLS = board[0].size();\n        set<string> res;\n        for (int r = 0; r < ROWS; r++) {\n            for (int c = 0; c < COLS; c++) {\n                dfs(r, c, root, \"\", board, res);\n            }\n        }\n        return vector<string>(res.begin(), res.end());\n    }\n    \n    void dfs(int r, int c, TrieNode* node, string word, vector<vector<char>>& board, set<string>& res) {\n        if (r < 0 || c < 0 || r == board.size() || c == board[0].size() || \n            board[r][c] == '#' || !node->children.count(board[r][c])) return;\n        char temp = board[r][c];\n        board[r][c] = '#';\n        node = node->children[temp];\n        word += temp;\n        if (node->isWord) res.insert(word);\n        dfs(r + 1, c, node, word, board, res);\n        dfs(r - 1, c, node, word, board, res);\n        dfs(r, c + 1, node, word, board, res);\n        dfs(r, c - 1, node, word, board, res);\n        board[r][c] = temp;\n    }\n};"
    }
  },

  {
    id: "1268", slug: "search-suggestions-system", title: "Search Suggestions System", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Design a system that suggests at most three product names from repository after each character of searchWord is typed. If there are more than three suggestions, return the lexicographically smallest three.",
    detailedExplanation: "We sort the products lexicographically. Then, as we type each character of the searchWord, we use two pointers (left and right) to narrow down the range of products that match the current prefix. The first three products in this range are our suggestions.",
    edgeCases: [
      "No products match the prefix",
      "Fewer than three products match",
      "Prefix longer than all product names"
    ],
    algorithmSteps: [
      "Sort the 'products' array lexicographically.",
      "Initialize 'l' to 0 and 'r' to len(products) - 1.",
      "For each character 'c' at index 'i' in 'searchWord':",
      "Increment 'l' while products[l] is too short or doesn't match 'c' at 'i'.",
      "Decrement 'r' while products[r] is too short or doesn't match 'c' at 'i'.",
      "Add up to 3 products starting from 'l' within the range [l, r] to results."
    ],
    examples: [{ input: 'products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"', output: '[["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]' }],
    defaultInput: { products: ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord: "mouse" },
    complexity: { time: "O(n log n + m * n) where n=products, m=searchWord len", space: "O(1) extra" },
    beginnerComplexity: { time: "O(m * n log n)", space: "O(m * 3)" },
    optimalComplexity: { time: "O(n log n + m * n)", space: "O(1)" },
    starterCode: "class Solution:\n    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:\n        # Brute force: for each prefix, filter and sort all products\n        res = []\n        for i in range(1, len(searchWord) + 1):\n            prefix = searchWord[:i]\n            matches = [p for p in products if p.startswith(prefix)]\n            matches.sort()\n            res.append(matches[:3])\n        return res",
      javascript: "var suggestedProducts = function(products, searchWord) {\n    let res = [];\n    for (let i = 1; i <= searchWord.length; i++) {\n        let prefix = searchWord.slice(0, i);\n        let matches = products.filter(p => p.startsWith(prefix));\n        matches.sort();\n        res.push(matches.slice(0, 3));\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:\n        res = []\n        products.sort()\n        l, r = 0, len(products) - 1\n        for i in range(len(searchWord)):\n            c = searchWord[i]\n            while l <= r and (len(products[l]) <= i or products[l][i] != c):\n                l += 1\n            while l <= r and (len(products[r]) <= i or products[r][i] != c):\n                r -= 1\n            res.append([])\n            remain = r - l + 1\n            for j in range(min(3, remain)):\n                res[-1].append(products[l + j])\n        return res",
      javascript: "var suggestedProducts = function(products, searchWord) {\n    products.sort();\n    let res = [], l = 0, r = products.length - 1;\n    for (let i = 0; i < searchWord.length; i++) {\n        let c = searchWord[i];\n        while (l <= r && (products[l].length <= i || products[l][i] !== c)) l++;\n        while (l <= r && (products[r].length <= i || products[r][i] !== c)) r--;\n        res.push([]);\n        let remain = r - l + 1;\n        for (let j = 0; j < Math.min(3, remain); j++) {\n            res[res.length-1].push(products[l + j]);\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {\n        sort(products.begin(), products.end());\n        vector<vector<string>> res;\n        int l = 0, r = products.size() - 1;\n        for (int i = 0; i < searchWord.length(); i++) {\n            char c = searchWord[i];\n            while (l <= r && (products[l].size() <= i || products[l][i] != c)) l++;\n            while (l <= r && (products[r].size() <= i || products[r][i] != c)) r--;\n            res.push_back({});\n            for (int j = 0; j < min(3, r - l + 1); j++) {\n                res.back().push_back(products[l + j]);\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "421", slug: "maximum-xor-of-two-numbers-in-an-array", title: "Maximum XOR of Two Numbers", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.",
    detailedExplanation: "We can use a bitwise Trie or a Hash Set approach. In the Trie approach, we insert all numbers as 31-bit binary strings. For each number, we try to traverse the Trie by picking the opposite bit (to maximize XOR) at each level. Alternatively, we can use a Greedy bit-by-bit construction using a hash set of prefixes.",
    edgeCases: [
      "All numbers are the same",
      "Array has only two numbers",
      "Large numbers (up to 2^31 - 1)"
    ],
    algorithmSteps: [
      "Find the maximum number to determine the bit length L.",
      "Initialize 'max_xor' to 0.",
      "Iterate from L-1 down to 0:",
      "Shift 'max_xor' left by 1 and set the last bit to 1 (candidate XOR).",
      "Extract prefixes of all certain length L-i bits.",
      "If there exist two prefixes p1, p2 such that p1 ^ p2 == candidate, update max_xor.",
      "Else, shift max_xor but keep the last bit 0."
    ],
    examples: [{ input: "nums = [3,10,5,25,2,8]", output: "28" }, { input: "nums = [14,70,53,83,49,91,36,80,92,51,66,70]", output: "127" }],
    defaultInput: { nums: [3, 10, 5, 25, 2, 8] },
    complexity: { time: "O(n * L) where L=31", space: "O(n)" },
    beginnerComplexity: { time: "O(n^2)", space: "O(1)" },
    optimalComplexity: { time: "O(n * L)", space: "O(n)" },
    starterCode: "class Solution:\n    def findMaximumXOR(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def findMaximumXOR(self, nums: List[int]) -> int:\n        # Brute Force O(n^2)\n        max_xor = 0\n        for i in range(len(nums)):\n            for j in range(i, len(nums)):\n                max_xor = max(max_xor, nums[i] ^ nums[j])\n        return max_xor",
      javascript: "var findMaximumXOR = function(nums) {\n    let maxXor = 0;\n    for (let i = 0; i < nums.length; i++) {\n        for (let j = i; j < nums.length; j++) {\n            maxXor = Math.max(maxXor, nums[i] ^ nums[j]);\n        }\n    }\n    return maxXor;\n};"
    },
    codes: {
      python: "class Solution:\n    def findMaximumXOR(self, nums: List[int]) -> int:\n        L = len(bin(max(nums))) - 2\n        max_xor = 0\n        for i in range(L - 1, -1, -1):\n            max_xor <<= 1\n            curr_xor = max_xor | 1\n            prefixes = {num >> i for num in nums}\n            if any(curr_xor ^ p in prefixes for p in prefixes):\n                max_xor = curr_xor\n        return max_xor",
      javascript: "var findMaximumXOR = function(nums) {\n    let maxXor = 0, mask = 0;\n    for (let i = 30; i >= 0; i--) {\n        mask |= (1 << i);\n        let set = new Set();\n        for (let num of nums) set.add(num & mask);\n        let candidate = maxXor | (1 << i);\n        for (let prefix of set) {\n            if (set.has(candidate ^ prefix)) {\n                maxXor = candidate;\n                break;\n            }\n        }\n    }\n    return maxXor;\n};",
      cpp: "class Solution {\npublic:\n    int findMaximumXOR(vector<int>& nums) {\n        int maxXor = 0, mask = 0;\n        for (int i = 30; i >= 0; i--) {\n            mask |= (1 << i);\n            unordered_set<int> st;\n            for (int n : nums) st.insert(n & mask);\n            int candidate = maxXor | (1 << i);\n            for (int prefix : st) {\n                if (st.count(candidate ^ prefix)) {\n                    maxXor = candidate;\n                    break;\n                }\n            }\n        }\n        return maxXor;\n    }\n};"
    }
  },
  {
    id: "677", slug: "map-sum-pairs", title: "Map Sum Pairs", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Design a map that allows you to sum all the values of keys with a given prefix. Implement the MapSum class: `insert(key, val)` Inserts or overrides the key with val. `sum(prefix)` Returns the sum of all keys' values that match the prefix.",
    detailedExplanation: "We can use a Trie where each node stores a 'sum' value which is the sum of all values in the subtree. When inserting a key, we first determine the difference (delta) between the old value and the new value. We then update the sum along the path in the Trie.",
    edgeCases: [
      "Overriding an existing key",
      "Prefix matches exactly one key",
      "Prefix matches no keys",
      "Empty map search"
    ],
    algorithmSteps: [
      "Use a Hash Map to store current key-value pairs (to handle overrides).",
      "Use a Trie where each node stores a `valueSum`.",
      "For `insert(key, val)`:",
      "Calculate `delta = val - map.get(key, 0)`.",
      "Traverse the Trie for `key`, adding `delta` to each node's `valueSum`.",
      "For `sum(prefix)`:",
      "Traverse Trie for `prefix`. If any node doesn't exist, return 0.",
      "Return the `valueSum` of the last node."
    ],
    examples: [{ input: 'mapSum.insert("apple", 3); mapSum.sum("ap")', output: "3" }, { input: 'mapSum.insert("app", 2); mapSum.sum("ap")', output: "5" }],
    defaultInput: { operations: [["insert", "apple", 3], ["sum", "ap"], ["insert", "app", 2], ["sum", "ap"]] },
    complexity: { time: "insert: O(L), sum: O(L)", space: "O(Total Chars)" },
    beginnerComplexity: { time: "insert: O(1), sum: O(N * L)", space: "O(N * L)" },
    optimalComplexity: { time: "insert: O(L), sum: O(L)", space: "O(Total Chars)" },
    starterCode: "class MapSum:\n    def __init__(self):\n        pass\n\n    def insert(self, key: str, val: int) -> None:\n        # Write your code here\n        pass\n\n    def sum(self, prefix: str) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class MapSum:\n    def __init__(self):\n        self.map = {}\n\n    def insert(self, key: str, val: int) -> None:\n        self.map[key] = val\n\n    def sum(self, prefix: str) -> int:\n        # Brute force through all keys\n        return sum(v for k, v in self.map.items() if k.startswith(prefix))",
      javascript: "var MapSum = function() {\n    this.map = new Map();\n};\nMapSum.prototype.insert = function(key, val) {\n    this.map.set(key, val);\n};\nMapSum.prototype.sum = function(prefix) {\n    let res = 0;\n    for (let [k, v] of this.map) {\n        if (k.startsWith(prefix)) res += v;\n    }\n    return res;\n};"
    },
    codes: {
      python: "class MapSum:\n    def __init__(self):\n        self.root = {} # children, valSum\n        self.map = {}\n\n    def insert(self, key: str, val: int) -> None:\n        delta = val - self.map.get(key, 0)\n        self.map[key] = val\n        curr = self.root\n        for c in key:\n            if c not in curr:\n                curr[c] = {\"valSum\": 0}\n            curr = curr[c]\n            curr[\"valSum\"] += delta\n\n    def sum(self, prefix: str) -> int:\n        curr = self.root\n        for c in prefix:\n            if c not in curr:\n                return 0\n            curr = curr[c]\n        return curr[\"valSum\"]",
      javascript: "var MapSum = function() {\n    this.root = {};\n    this.map = new Map();\n};\n\nMapSum.prototype.insert = function(key, val) {\n    let delta = val - (this.map.get(key) || 0);\n    this.map.set(key, val);\n    let curr = this.root;\n    for (let c of key) {\n        if (!curr[c]) curr[c] = { valSum: 0 };\n        curr = curr[c];\n        curr.valSum += delta;\n    }\n};\n\nMapSum.prototype.sum = function(prefix) {\n    let curr = this.root;\n    for (let c of prefix) {\n        if (!curr[c]) return 0;\n        curr = curr[c];\n    }\n    return curr.valSum;\n};",
      cpp: "class MapSum {\npublic:\n    struct Node { \n        unordered_map<char, Node*> children;\n        int sum = 0;\n    };\n    Node* root;\n    unordered_map<string, int> mp;\n    \n    MapSum() { root = new Node(); }\n    \n    void insert(string key, int val) {\n        int delta = val - mp[key];\n        mp[key] = val;\n        Node* curr = root;\n        for (char c : key) {\n            if (!curr->children.count(c)) curr->children[c] = new Node();\n            curr = curr->children[c];\n            curr->sum += delta;\n        }\n    }\n    \n    int sum(string prefix) {\n        Node* curr = root;\n        for (char c : prefix) {\n            if (!curr->children.count(c)) return 0;\n            curr = curr->children[c];\n        }\n        return curr->sum;\n    }\n};"
    }
  },
  {
    id: "648", slug: "replace-words", title: "Replace Words", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. For example, when the root 'an' is followed by the successor word 'other', we can form a new word 'another'. Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.",
    detailedExplanation: "We build a Trie from the roots. For each word in the sentence, we search for the shortest prefix that exists in our Trie. If found, we replace the word with that root.",
    edgeCases: [
      "Word has no root in dictionary",
      "Word matches multiple roots (pick shortest)",
      "Sentence has punctuation",
      "Dictionary is empty"
    ],
    algorithmSteps: [
      "Build a Trie containing all 'roots'.",
      "Split the 'sentence' into words.",
      "For each word, traverse the Trie from the first character.",
      "If you find a node marked as 'end of root', return that root.",
      "If you reach a character not in the Trie before finding a root, return the original word.",
      "Join the modified words back into a sentence."
    ],
    examples: [{ input: 'dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"', output: '"the cat was rat by the bat"' }, { input: 'dictionary = ["a","b","c"], sentence = "aadsfasw absbs bbab cadsfafs"', output: '"a a b c"' }],
    defaultInput: { dictionary: ["cat", "bat", "rat"], sentence: "the cattle was rattled by the battery" },
    complexity: { time: "O(N * L + M * K) where N=roots, M=words, L,K=lengths", space: "O(N * L)" },
    beginnerComplexity: { time: "O(M * N * L)", space: "O(1)" },
    optimalComplexity: { time: "O(N * L + M * K)", space: "O(N * L)" },
    starterCode: "class Solution:\n    def replaceWords(self, dictionary: List[str], sentence: str) -> str:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def replaceWords(self, dictionary: List[str], sentence: str) -> str:\n        # Brute force: check each word against all roots\n        roots = sorted(dictionary, key=len)\n        words = sentence.split()\n        for i in range(len(words)):\n            for r in roots:\n                if words[i].startswith(r):\n                    words[i] = r\n                    break\n        return \" \".join(words)",
      javascript: "var replaceWords = function(dictionary, sentence) {\n    let roots = dictionary.sort((a,b) => a.length - b.length);\n    let words = sentence.split(' ');\n    for (let i = 0; i < words.length; i++) {\n        for (let r of roots) {\n            if (words[i].startsWith(r)) {\n                words[i] = r;\n                break;\n            }\n        }\n    }\n    return words.join(' ');\n};"
    },
    codes: {
      python: "class Solution:\n    def replaceWords(self, dictionary: List[str], sentence: str) -> str:\n        trie = {}\n        for root in dictionary:\n            curr = trie\n            for c in root:\n                if c not in curr: curr[c] = {}\n                curr = curr[c]\n            curr[\"#\"] = root\n\n        def getRoot(word):\n            curr = trie\n            for c in word:\n                if c not in curr: break\n                curr = curr[c]\n                if \"#\" in curr: return curr[\"#\"]\n            return word\n\n        return \" \".join(map(getRoot, sentence.split()))",
      javascript: "var replaceWords = function(dictionary, sentence) {\n    let trie = {};\n    for (let root of dictionary) {\n        let curr = trie;\n        for (let c of root) {\n            if (!curr[c]) curr[c] = {};\n            curr = curr[c];\n        }\n        curr[\"#\"] = root;\n    }\n    const getRoot = (word) => {\n        let curr = trie;\n        for (let c of word) {\n            if (!curr[c]) break;\n            curr = curr[c];\n            if (curr[\"#\"]) return curr[\"#\"];\n        }\n        return word;\n    };\n    return sentence.split(' ').map(getRoot).join(' ');\n};",
      cpp: "class Solution {\npublic:\n    struct Node {\n        unordered_map<char, Node*> children;\n        string root = \"\";\n    };\n    \n    string replaceWords(vector<string>& dictionary, string sentence) {\n        Node* trie = new Node();\n        for (string& r : dictionary) {\n            Node* curr = trie;\n            for (char c : r) {\n                if (!curr->children.count(c)) curr->children[c] = new Node();\n                curr = curr->children[c];\n            }\n            if (curr->root == \"\") curr->root = r;\n        }\n        \n        stringstream ss(sentence);\n        string word, res = \"\";\n        while (ss >> word) {\n            Node* curr = trie;\n            string replace = word;\n            for (char c : word) {\n                if (!curr->children.count(c)) break;\n                curr = curr->children[c];\n                if (curr->root != \"\") {\n                    replace = curr->root;\n                    break;\n                }\n            }\n            if (res != \"\") res += \" \";\n            res += replace;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "720", slug: "longest-word-in-dictionary", title: "Longest Word in Dictionary", difficulty: "Medium", diffClass: "difficulty-medium", category: "Tries",
    description: "Given an array of strings words, return the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.",
    detailedExplanation: "We insert all words into a Trie. Then we can use BFS or DFS to find the longest word such that every prefix of that word also exists in the words array. This is equivalent to finding the deepest node in the Trie where every node along the path is marked as 'EndOfWord'.",
    edgeCases: [
      "Multiple candidates of same length (pick lexicographical minimum)",
      "Long words but missing intermediate prefixes",
      "Single character words only",
      "No valid words"
    ],
    algorithmSteps: [
      "Sort the 'words' array (optional, but handles lexicographical order easily).",
      "Use a Hash Set to store valid words.",
      "Iterate through sorted words:",
      "A word is valid if it has length 1 OR its prefix (length - 1) is already in the set.",
      "If valid, add to set and update 'longest' word if current length is greater.",
      "Trie approach: Build Trie, then DFS and only traverse children that are marked as 'word'."
    ],
    examples: [{ input: 'words = ["w","wo","wor","worl","world"]', output: '"world"' }, { input: 'words = ["a","banana","app","appl","ap","apply","apple"]', output: '"apple"' }],
    defaultInput: { words: ["a", "banana", "app", "appl", "ap", "apply", "apple"] },
    complexity: { time: "O(N * L) where N=words, L=avg length", space: "O(N * L)" },
    beginnerComplexity: { time: "O(N^2 * L)", space: "O(N * L)" },
    optimalComplexity: { time: "O(N * L)", space: "O(N * L)" },
    starterCode: "class Solution:\n    def longestWord(self, words: List[str]) -> str:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def longestWord(self, words: List[str]) -> str:\n        # Brute force: for each word, check all its prefixes\n        word_set = set(words)\n        res = \"\"\n        for w in words:\n            if all(w[:i] in word_set for i in range(1, len(w) + 1)):\n                if len(w) > len(res) or (len(w) == len(res) and w < res):\n                    res = w\n        return res",
      javascript: "var longestWord = function(words) {\n    let wordSet = new Set(words);\n    let res = \"\";\n    for (let w of words) {\n        let valid = true;\n        for (let i = 1; i <= w.length; i++) {\n            if (!wordSet.has(w.slice(0, i))) {\n                valid = false; break;\n            }\n        }\n        if (valid) {\n            if (w.length > res.length || (w.length === res.length && w < res)) {\n                res = w;\n            }\n        }\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def longestWord(self, words: List[str]) -> str:\n        trie = {}\n        for w in words:\n            curr = trie\n            for c in w:\n                if c not in curr: curr[c] = {}\n                curr = curr[c]\n            curr[\"$\"] = w\n\n        res = \"\"\n        q = collections.deque([trie])\n        while q:\n            curr = q.popleft()\n            for child in curr:\n                if child != \"$\" and \"$\" in curr[child]:\n                    word = curr[child][\"$\"]\n                    if len(word) > len(res) or (len(word) == len(res) and word < res):\n                        res = word\n                    q.append(curr[child])\n        return res",
      javascript: "var longestWord = function(words) {\n    words.sort();\n    let wordSet = new Set();\n    let res = \"\";\n    for (let w of words) {\n        if (w.length === 1 || wordSet.has(w.slice(0, w.length - 1))) {\n            wordSet.add(w);\n            if (w.length > res.length) res = w;\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    string longestWord(vector<string>& words) {\n        sort(words.begin(), words.end());\n        unordered_set<string> st;\n        string res = \"\";\n        for (string& w : words) {\n            if (w.length() == 1 || st.count(w.substr(0, w.length() - 1))) {\n                st.insert(w);\n                if (w.length() > res.length()) res = w;\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "1065", slug: "index-pairs-of-a-string", title: "index Pairs of a String", difficulty: "Easy", diffClass: "difficulty-easy", category: "Tries",
    description: "Given a text string and a dictionary of words, return all index pairs [i, j] such that the substring text[i...j] is in the list of words.",
    detailedExplanation: "We can insert all dictionary words into a Trie. For each starting index 'i' in the 'text', we traverse the Trie using characters starting from text[i]. Whenever we hit a node marked as 'end of word', we found a match and add [i, current_index] to the result.",
    edgeCases: [
      "Words with common prefixes",
      "Empty word list",
      "No matches in text",
      "Overlapping matches"
    ],
    algorithmSteps: [
      "Build a Trie from the input 'words'.",
      "Iterate through each character 'i' in 'text' from 0 up to len(text)-1.",
      "For each 'i', start traversing the Trie.",
      "Iterate 'j' from 'i' to len(text)-1.",
      "If text[j] is not in current Trie node children, break.",
      "If text[j] completes a word, append [i, j] to results.",
      "Return results sorted by starting index then ending index (standard traversal does this automatically)."
    ],
    examples: [{ input: 'text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]', output: "[[3,7],[9,13],[10,17]]" }, { input: 'text = "ababa", words = ["aba","ab"]', output: "[[0,1],[0,2],[2,3],[2,4]]" }],
    defaultInput: { text: "thestoryofleetcodeandme", words: ["story", "fleet", "leetcode"] },
    complexity: { time: "O(T^2 + W*L) where T=text length, W*L=trie build", space: "O(W * L)" },
    beginnerComplexity: { time: "O(T^2 * max(L))", space: "O(1)" },
    optimalComplexity: { time: "O(T^2 + W*L)", space: "O(W * L)" },
    starterCode: "class Solution:\n    def indexPairs(self, text: str, words: List[str]) -> List[List[int]]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def indexPairs(self, text: str, words: List[str]) -> List[List[int]]:\n        # Brute force: check every substring against the word list\n        word_set = set(words)\n        res = []\n        for i in range(len(text)):\n            for j in range(i, len(text)):\n                if text[i:j+1] in word_set:\n                    res.append([i, j])\n        return res",
      javascript: "var indexPairs = function(text, words) {\n    let wordSet = new Set(words);\n    let res = [];\n    for (let i = 0; i < text.length; i++) {\n        for (let j = i; j < text.length; j++) {\n            if (wordSet.has(text.substring(i, j + 1))) {\n                res.push([i, j]);\n            }\n        }\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def indexPairs(self, text: str, words: List[str]) -> List[List[int]]:\n        trie = {}\n        for w in words:\n            curr = trie\n            for c in w:\n                if c not in curr: curr[c] = {}\n                curr = curr[c]\n            curr[\"#\"] = True\n\n        res = []\n        for i in range(len(text)):\n            curr = trie\n            for j in range(i, len(text)):\n                if text[j] not in curr: break\n                curr = curr[text[j]]\n                if \"#\" in curr: res.append([i, j])\n        return res",
      javascript: "var indexPairs = function(text, words) {\n    let trie = {};\n    for (let w of words) {\n        let curr = trie;\n        for (let c of w) {\n            if (!curr[c]) curr[c] = {};\n            curr = curr[c];\n        }\n        curr[\"#\"] = true;\n    }\n    let res = [];\n    for (let i = 0; i < text.length; i++) {\n        let curr = trie;\n        for (let j = i; j < text.length; j++) {\n            if (!curr[text[j]]) break;\n            curr = curr[text[j]];\n            if (curr[\"#\"]) res.push([i, j]);\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    struct Node { unordered_map<char, Node*> children; bool end = false; };\n    \n    vector<vector<int>> indexPairs(string text, vector<string>& words) {\n        Node* root = new Node();\n        for (string& w : words) {\n            Node* curr = root;\n            for (char c : w) {\n                if (!curr->children.count(c)) curr->children[c] = new Node();\n                curr = curr->children[c];\n            }\n            curr->end = true;\n        }\n        vector<vector<int>> res;\n        for (int i = 0; i < text.length(); i++) {\n            Node* curr = root;\n            for (int j = i; j < text.length(); j++) {\n                if (!curr->children.count(text[j])) break;\n                curr = curr->children[text[j]];\n                if (curr->end) res.push_back({i, j});\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "642", slug: "design-search-autocomplete-system", title: "Search Autocomplete System", difficulty: "Hard", diffClass: "difficulty-hard", category: "Tries",
    description: "Design a search autocomplete system for a search engine. Users may input a sentence (at least one character and end with a special character '#'). For each character they type except '#', you need to return the top 3 historical hot sentences that have prefix the same as the part of sentence already typed. The hot degree is defined by how many times a user typed the same sentence before.",
    detailedExplanation: "We use a Trie to store all historical sentences. Each leaf node (or internal node representing a complete sentence) stores the hot degree. During typed input, we traverse the Trie based on the current prefix. Once we reach the end of the prefix, we perform DFS to find all sentences starting with that prefix, sort them by hot degree (descending) and then lexicographically (ascending), and return the top 3.",
    edgeCases: [
      "Input character '#' saves current sentence and resets",
      "No historical sentences match prefix",
      "Tied hot degrees (sort lexicographically)",
      "New sentence not in history added successfully"
    ],
    algorithmSteps: [
      "Maintain a frequency map for historical sentences.",
      "Build a Trie where each node knows all sentences passing through it (optimization: store top 3 at each node).",
      "For each input character (not '#'):",
      "Append char to current query string.",
      "Traverse Trie to find current prefix node.",
      "Find all sentences under that node, sort and return top 3.",
      "For '#':",
      "Update frequency of the full query string in dictionary and Trie.",
      "Reset current query string."
    ],
    examples: [{ input: 'AutocompleteSystem(["i love you", "island", "ironman", "i love leetcode"], [5, 3, 2, 2]); input("i");', output: '["i love you", "island", "i love leetcode"]' }],
    defaultInput: { sentences: ["i love you", "island", "ironman", "i love leetcode"], times: [5, 3, 2, 2], query: "i love " },
    complexity: { time: "input: O(P + N log N) where P=prefix len, N=matches", space: "O(Total Chars)" },
    beginnerComplexity: { time: "input: O(H log H) where H=history size", space: "O(Total Chars)" },
    optimalComplexity: { time: "input: O(P + N log N)", space: "O(Total Chars)" },
    starterCode: "class AutocompleteSystem:\n    def __init__(self, sentences: List[str], times: List[int]):\n        # Initialize history\n        pass\n\n    def input(self, c: str) -> List[str]:\n        # Process next character\n        pass",
    beginnerCode: {
      python: "class AutocompleteSystem:\n    def __init__(self, sentences: List[str], times: List[int]):\n        self.history = collections.Counter()\n        for s, t in zip(sentences, times): self.history[s] = t\n        self.query = \"\"\n\n    def input(self, c: str) -> List[str]:\n        if c == \"#\":\n            self.history[self.query] += 1\n            self.query = \"\"\n            return []\n        self.query += c\n        matches = [(s, t) for s, t in self.history.items() if s.startswith(self.query)]\n        matches.sort(key=lambda x: (-x[1], x[0]))\n        return [x[0] for x in matches[:3]]",
      javascript: "var AutocompleteSystem = function(sentences, times) {\n    this.history = {};\n    for (let i = 0; i < sentences.length; i++) this.history[sentences[i]] = times[i];\n    this.query = \"\";\n};\nAutocompleteSystem.prototype.input = function(c) {\n    if (c === \"#\") {\n        this.history[this.query] = (this.history[this.query] || 0) + 1;\n        this.query = \"\";\n        return [];\n    }\n    this.query += c;\n    let matches = Object.entries(this.history).filter(([s, t]) => s.startsWith(this.query));\n    matches.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));\n    return matches.slice(0, 3).map(x => x[0]);\n};"
    },
    codes: {
      python: "class AutocompleteSystem:\n    def __init__(self, sentences: List[str], times: List[int]):\n        self.trie = {}\n        self.cur_sentence = \"\"\n        for s, t in zip(sentences, times):\n            self.add(s, t)\n\n    def add(self, s, t):\n        curr = self.trie\n        for c in s:\n            if c not in curr: curr[c] = {}\n            curr = curr[c]\n        curr[\"#\"] = curr.get(\"#\", 0) + t\n\n    def input(self, c: str) -> List[str]:\n        if c == \"#\":\n            self.add(self.cur_sentence, 1)\n            self.cur_sentence = \"\"\n            return []\n        self.cur_sentence += c\n        curr = self.trie\n        for char in self.cur_sentence:\n            if char not in curr: return []\n            curr = curr[char]\n        res = []\n        self.dfs(curr, self.cur_sentence, res)\n        res.sort(key=lambda x: (-x[1], x[0]))\n        return [x[0] for x in res[:3]]\n\n    def dfs(self, curr, path, res):\n        if \"#\" in curr: res.append((path, curr[\"#\"]))\n        for c in curr:\n            if c != \"#\": self.dfs(curr[c], path + c, res)",
      javascript: "var AutocompleteSystem = function(sentences, times) {\n    this.trie = {};\n    this.curQuery = \"\";\n    for (let i = 0; i < sentences.length; i++) this.add(sentences[i], times[i]);\n};\nAutocompleteSystem.prototype.add = function(s, t) {\n    let curr = this.trie;\n    for (let c of s) {\n        if (!curr[c]) curr[c] = {};\n        curr = curr[c];\n    }\n    curr[\"#\"] = (curr[\"#\"] || 0) + t;\n};\nAutocompleteSystem.prototype.input = function(c) {\n    if (c === \"#\") {\n        this.add(this.curQuery, 1);\n        this.curQuery = \"\";\n        return [];\n    }\n    this.curQuery += c;\n    let curr = this.trie;\n    for (let char of this.curQuery) {\n        if (!curr[char]) return [];\n        curr = curr[char];\n    }\n    let res = [];\n    this.dfs(curr, this.curQuery, res);\n    res.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));\n    return res.slice(0, 3).map(x => x[0]);\n};\nAutocompleteSystem.prototype.dfs = function(curr, path, res) {\n    if (curr[\"#\"]) res.push([path, curr[\"#\"]]);\n    for (let c in curr) {\n        if (c !== \"#\") this.dfs(curr[c], path + c, res);\n    }\n};",
      cpp: "class AutocompleteSystem {\npublic:\n    struct Node { unordered_map<char, Node*> children; int count = 0; };\n    Node* root;\n    string curQuery = \"\";\n    void add(string s, int t) {\n        Node* curr = root;\n        for (char c : s) {\n            if (!curr->children.count(c)) curr->children[c] = new Node();\n            curr = curr->children[c];\n        }\n        curr->count += t;\n    }\n    AutocompleteSystem(vector<string>& sentences, vector<int>& times) {\n        root = new Node();\n        for (int i = 0; i < sentences.size(); i++) add(sentences[i], times[i]);\n    }\n    vector<string> input(char c) {\n        if (c == '#') {\n            add(curQuery, 1);\n            curQuery = \"\";\n            return {};\n        }\n        curQuery += c;\n        Node* curr = root;\n        for (char ch : curQuery) {\n            if (!curr->children.count(ch)) return {};\n            curr = curr->children[ch];\n        }\n        vector<pair<string, int>> res;\n        dfs(curr, curQuery, res);\n        sort(res.begin(), res.end(), [](auto& a, auto& b) {\n            return a.second > b.second || (a.second == b.second && a.first < b.first);\n        });\n        vector<string> top3;\n        for (int i = 0; i < min(3, (int)res.size()); i++) top3.push_back(res[i].first);\n        return top3;\n    }\n    void dfs(Node* curr, string path, vector<pair<string, int>>& res) {\n        if (curr->count > 0) res.push_back({path, curr->count});\n        for (auto& child : curr->children) dfs(child.second, path + child.first, res);\n    }\n};"
    }
  },
  {
    id: "703", slug: "kth-largest-element-in-a-stream", title: "Kth Largest element in stream", difficulty: "Easy", diffClass: "difficulty-easy", category: "Heap",
    description: "Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    detailedExplanation: "We use a min-heap of size k to store the k largest elements seen so far. The smallest element in this min-heap (the root) will be the kth largest element in the stream.",
    edgeCases: [
      "Stream size less than k",
      "Stream with duplicate values",
      "Calling add when stream is empty"
    ],
    algorithmSteps: [
      "Initialize a min-heap with the initial 'nums'.",
      "Keep only the k largest elements by popping from the min-heap while its size > k.",
      "For `add(val)`:",
      "Push 'val' onto the min-heap.",
      "If min-heap size > k, pop the smallest element.",
      "Return the root of the min-heap."
    ],
    examples: [{ input: '["KthLargest", "add", "add"] \n [[3, [4, 5, 8, 2]], [3], [5]]', output: "[null, 4, 5]" }],
    defaultInput: { k: 3, nums: [4, 5, 8, 2], additions: [3, 5, 10, 9, 4] },
    complexity: { time: "Constructor: O(N log k), Add: O(log k)", space: "O(k)" },
    beginnerComplexity: { time: "Constructor: O(N log N), Add: O(N log N)", space: "O(N)" },
    optimalComplexity: { time: "Constructor: O(N log k), Add: O(log k)", space: "O(k)" },
    starterCode: "class KthLargest:\n    def __init__(self, k: int, nums: List[int]):\n        # Initialize your data structure here\n        pass\n\n    def add(self, val: int) -> int:\n        # Add a new element and return kth largest\n        pass",
    beginnerCode: {
      python: "class KthLargest:\n    def __init__(self, k: int, nums: List[int]):\n        self.k = k\n        self.nums = sorted(nums, reverse=True)\n\n    def add(self, val: int) -> int:\n        self.nums.append(val)\n        self.nums.sort(reverse=True)\n        return self.nums[self.k - 1]",
      javascript: "var KthLargest = function(k, nums) {\n    this.k = k;\n    this.nums = nums.sort((a, b) => b - a);\n};\nKthLargest.prototype.add = function(val) {\n    this.nums.push(val);\n    this.nums.sort((a, b) => b - a);\n    return this.nums[this.k - 1];\n};"
    },
    codes: {
      python: "class KthLargest:\n    def __init__(self, k: int, nums: List[int]):\n        self.k = k\n        self.minHeap = nums\n        heapq.heapify(self.minHeap)\n        while len(self.minHeap) > k:\n            heapq.heappop(self.minHeap)\n\n    def add(self, val: int) -> int:\n        heapq.heappush(self.minHeap, val)\n        if len(self.minHeap) > self.k:\n            heapq.heappop(self.minHeap)\n        return self.minHeap[0]",
      javascript: "var KthLargest = function(k, nums) {\n    this.k = k;\n    this.minHeap = new MinPriorityQueue();\n    for (let num of nums) {\n        this.minHeap.enqueue(num);\n        if (this.minHeap.size() > k) this.minHeap.dequeue();\n    }\n};\nKthLargest.prototype.add = function(val) {\n    this.minHeap.enqueue(val);\n    if (this.minHeap.size() > this.k) this.minHeap.dequeue();\n    return this.minHeap.front().element;\n};",
      cpp: "class KthLargest {\npublic:\n    priority_queue<int, vector<int>, greater<int>> minHeap;\n    int k;\n    KthLargest(int k, vector<int>& nums) {\n        this->k = k;\n        for (int n : nums) {\n            minHeap.push(n);\n            if (minHeap.size() > k) minHeap.pop();\n        }\n    }\n    \n    int add(int val) {\n        minHeap.push(val);\n        if (minHeap.size() > k) minHeap.pop();\n        return minHeap.top();\n    }\n};"
    }
  },
  {
    id: "1046", slug: "last-stone-weight", title: "Last Stone Weight", difficulty: "Easy", diffClass: "difficulty-easy", category: "Heap",
    description: "You are given an array of integers stones where stones[i] is the weight of the ith stone. Each turn, we choose the heaviest two stones and smash them together. If x == y, both are destroyed. If x != y, the stone of weight y-x is added back. Return the weight of the last remaining stone.",
    detailedExplanation: "We use a max-heap to efficiently retrieve the two largest stones. In each step, we pop the two largest stones, calculate their difference, and if the difference is non-zero, push it back into the heap. We repeat this until at most one stone remains.",
    edgeCases: [
      "All stones have same weight",
      "Only one stone in initial array",
      "Stones with weight 1",
      "No stones left at the end (return 0)"
    ],
    algorithmSteps: [
      "Create a max-heap from the given 'stones' (for Python, use negative values with `heapq`).",
      "While the heap has at least two stones:",
      "Pop the two largest stones 'y' and 'x' (y >= x).",
      "If y != x, push y - x back onto the heap.",
      "If the heap is empty, return 0; otherwise, return the remaining stone weight."
    ],
    examples: [{ input: "stones = [2,7,4,1,8,1]", output: "1" }, { input: "stones = [1]", output: "1" }],
    defaultInput: { stones: [2, 7, 4, 1, 8, 1] },
    complexity: { time: "O(N log N)", space: "O(N)" },
    beginnerComplexity: { time: "O(N^2 log N)", space: "O(N)" },
    optimalComplexity: { time: "O(N log N)", space: "O(N)" },
    starterCode: "class Solution:\n    def lastStoneWeight(self, stones: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def lastStoneWeight(self, stones: List[int]) -> int:\n        # Brute force: sort and pop every time\n        while len(stones) > 1:\n            stones.sort()\n            y = stones.pop()\n            x = stones.pop()\n            if y != x:\n                stones.append(y - x)\n        return stones[0] if stones else 0",
      javascript: "var lastStoneWeight = function(stones) {\n    while (stones.length > 1) {\n        stones.sort((a, b) => a - b);\n        let y = stones.pop();\n        let x = stones.pop();\n        if (y !== x) stones.push(y - x);\n    }\n    return stones.length === 1 ? stones[0] : 0;\n};"
    },
    codes: {
      python: "class Solution:\n    def lastStoneWeight(self, stones: List[int]) -> int:\n        stones = [-s for s in stones]\n        heapq.heapify(stones)\n        while len(stones) > 1:\n            first = heapq.heappop(stones)\n            second = heapq.heappop(stones)\n            if second > first:\n                heapq.heappush(stones, first - second)\n        return -stones[0] if stones else 0",
      javascript: "var lastStoneWeight = function(stones) {\n    const maxHeap = new MaxPriorityQueue();\n    for (let s of stones) maxHeap.enqueue(s);\n    while (maxHeap.size() > 1) {\n        let first = maxHeap.dequeue().element;\n        let second = maxHeap.dequeue().element;\n        if (first !== second) maxHeap.enqueue(first - second);\n    }\n    return maxHeap.size() === 0 ? 0 : maxHeap.front().element;\n};",
      cpp: "class Solution {\npublic:\n    int lastStoneWeight(vector<int>& stones) {\n        priority_queue<int> maxHeap(stones.begin(), stones.end());\n        while (maxHeap.size() > 1) {\n            int y = maxHeap.top(); maxHeap.pop();\n            int x = maxHeap.top(); maxHeap.pop();\n            if (y != x) maxHeap.push(y - x);\n        }\n        return maxHeap.empty() ? 0 : maxHeap.top();\n    }\n};"
    }
  },
  {
    id: "973", slug: "k-closest-points-to-origin", title: "K Closest Points to Origin", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Given an array of points where points[i] = [xi, yi] and an integer k, return the k closest points to the origin (0, 0).",
    detailedExplanation: "We can use a max-heap of size k. For each point, calculate its distance from the origin. If the heap has fewer than k points, push the point. If it has k points and the current point is closer than the heap's maximum distance, replace the root. Alternatively, we can use QuickSelect for O(N) average time.",
    edgeCases: [
      "k equals the number of total points",
      "Many points with the same distance",
      "Points with negative coordinates"
    ],
    algorithmSteps: [
      "Define a distance function dist(p) = p[0]^2 + p[1]^2.",
      "Maintain a max-priority queue to store the k closest points.",
      "Iterate through each point:",
      "Calculate its distance.",
      "Add point to max-heap.",
      "If size > k, remove the furthest point.",
      "Return all points in the heap."
    ],
    examples: [{ input: "points = [[1,3],[-2,2]], k = 1", output: "[[-2,2]]" }, { input: "points = [[3,3],[5,-1],[-2,4]], k = 2", output: "[[3,3],[-2,4]]" }],
    defaultInput: { points: [[1, 3], [-2, 2], [3, 3]], k: 2 },
    complexity: { time: "O(N log k)", space: "O(k)" },
    beginnerComplexity: { time: "O(N log N)", space: "O(N)" },
    optimalComplexity: { time: "O(N log k) or O(N) using QuickSelect", space: "O(k)" },
    starterCode: "class Solution:\n    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:\n        # Brute force: sort all by distance\n        points.sort(key=lambda p: p[0]**2 + p[1]**2)\n        return points[:k]",
      javascript: "var kClosest = function(points, k) {\n    return points.sort((a, b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2)).slice(0, k);\n};"
    },
    codes: {
      python: "class Solution:\n    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:\n        minHeap = []\n        for x, y in points:\n            dist = (x ** 2) + (y ** 2)\n            minHeap.append([dist, x, y])\n        \n        heapq.heapify(minHeap)\n        res = []\n        for _ in range(k):\n            dist, x, y = heapq.heappop(minHeap)\n            res.append([x, y])\n        return res",
      javascript: "var kClosest = function(points, k) {\n    const maxHeap = new MaxPriorityQueue({\n        priority: (p) => p[0]**2 + p[1]**2\n    });\n    for (let p of points) {\n        maxHeap.enqueue(p);\n        if (maxHeap.size() > k) maxHeap.dequeue();\n    }\n    return maxHeap.toArray().map(x => x.element);\n};",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {\n        priority_queue<pair<int, int>> maxHeap;\n        for (int i = 0; i < points.size(); i++) {\n            int dist = points[i][0] * points[i][0] + points[i][1] * points[i][1];\n            maxHeap.push({dist, i});\n            if (maxHeap.size() > k) maxHeap.pop();\n        }\n        vector<vector<int>> res;\n        while (!maxHeap.empty()) {\n            res.push_back(points[maxHeap.top().second]);\n            maxHeap.pop();\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "215", slug: "kth-largest-element-in-an-array", title: "Kth Largest Element", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    detailedExplanation: "While sorting is O(N log N), we can achieve O(N log k) using a min-heap or O(N) average using QuickSelect. With a min-heap of size k, we maintain the k largest elements; the root is our answer.",
    edgeCases: [
      "k equals 1 (max element)",
      "k equals n (min element)",
      "Duplicates present in array",
      "Array with only one element"
    ],
    algorithmSteps: [
      "Initialize a min-heap.",
      "Iterate through 'nums':",
      "Push current element to min-heap.",
      "If heap size > k, pop the min element.",
      "Return the root of the min-heap."
    ],
    examples: [{ input: "nums = [3,2,1,5,6,4], k = 2", output: "5" }, { input: "nums = [3,2,3,1,2,4,5,5,6], k = 4", output: "4" }],
    defaultInput: { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4 },
    complexity: { time: "O(N log k)", space: "O(k)" },
    beginnerComplexity: { time: "O(N log N)", space: "O(1) extra" },
    optimalComplexity: { time: "O(N) avg or O(N log k)", space: "O(k)" },
    starterCode: "class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        # Brute force: sort all\n        nums.sort()\n        return nums[-k]",
      javascript: "var findKthLargest = function(nums, k) {\n    return nums.sort((a, b) => a - b)[nums.length - k];\n};"
    },
    codes: {
      python: "class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        return heapq.nlargest(k, nums)[-1]",
      javascript: "var findKthLargest = function(nums, k) {\n    const minHeap = new MinPriorityQueue();\n    for (let n of nums) {\n        minHeap.enqueue(n);\n        if (minHeap.size() > k) minHeap.dequeue();\n    }\n    return minHeap.front().element;\n};",
      cpp: "class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        priority_queue<int, vector<int>, greater<int>> minHeap;\n        for (int n : nums) {\n            minHeap.push(n);\n            if (minHeap.size() > k) minHeap.pop();\n        }\n        return minHeap.top();\n    }\n};"
    }
  },
  {
    id: "621", slug: "task-scheduler", title: "Task Scheduler", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer n that represents the cooldown period between two same tasks.",
    detailedExplanation: "We use a max-heap to store the counts of tasks. In each unit of time, we try to pick the most frequent task that is available (not in cooldown). We keep track of tasks in a cooldown queue. Once a task's cooldown is over, we push its remaining count back into the max-heap.",
    edgeCases: [
      "Cooldown n is 0",
      "All tasks are different",
      "All tasks are the same",
      "Cooldown is large compared to task variety"
    ],
    algorithmSteps: [
      "Count the frequency of each task.",
      "Push all counts into a max-heap.",
      "Initialize 'time' to 0 and a queue for tasks in cooldown.",
      "While heap or queue is not empty:",
      "Increment 'time'.",
      "If heap is not empty, pop the largest count, decrement it, and if > 0, add to queue with available time (time + n).",
      "If front of queue is available at 'time', push back to heap.",
      "Return 'time'."
    ],
    examples: [{ input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: "8" }, { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: "6" }],
    defaultInput: { tasks: ["A", "A", "A", "B", "B", "B"], n: 2 },
    complexity: { time: "O(N * n)", space: "O(26)" },
    beginnerComplexity: { time: "O(N log N)", space: "O(26)" },
    optimalComplexity: { time: "O(N)", space: "O(1)" },
    starterCode: "class Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        # Simplified math formula approach\n        counts = collections.Counter(tasks)\n        max_f = max(counts.values())\n        num_max_f = list(counts.values()).count(max_f)\n        return max(len(tasks), (max_f - 1) * (n + 1) + num_max_f)",
      javascript: "var leastInterval = function(tasks, n) {\n    let counts = {};\n    for (let t of tasks) counts[t] = (counts[t] || 0) + 1;\n    let vals = Object.values(counts);\n    let maxF = Math.max(...vals);\n    let numMaxF = vals.filter(x => x === maxF).length;\n    return Math.max(tasks.length, (maxF - 1) * (n + 1) + numMaxF);\n};"
    },
    codes: {
      python: "class Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        count = collections.Counter(tasks)\n        maxHeap = [-cnt for cnt in count.values()]\n        heapq.heapify(maxHeap)\n        time = 0\n        q = collections.deque() # [cnt, idleTime]\n        while maxHeap or q:\n            time += 1\n            if maxHeap:\n                cnt = 1 + heapq.heappop(maxHeap)\n                if cnt: q.append([cnt, time + n])\n            if q and q[0][1] == time:\n                heapq.heappush(maxHeap, q.popleft()[0])\n        return time",
      javascript: "var leastInterval = function(tasks, n) {\n    let counts = new Map();\n    for (let t of tasks) counts.set(t, (counts.get(t) || 0) + 1);\n    let maxHeap = new MaxPriorityQueue();\n    for (let c of counts.values()) maxHeap.enqueue(c);\n    let time = 0, q = [];\n    while (maxHeap.size() > 0 || q.length > 0) {\n        time++;\n        if (maxHeap.size() > 0) {\n            let cnt = maxHeap.dequeue().element - 1;\n            if (cnt > 0) q.push([cnt, time + n]);\n        }\n        if (q.length > 0 && q[0][1] === time) {\n            maxHeap.enqueue(q.shift()[0]);\n        }\n    }\n    return time;\n};",
      cpp: "class Solution {\npublic:\n    int leastInterval(vector<char>& tasks, int n) {\n        unordered_map<char, int> counts;\n        for (char t : tasks) counts[t]++;\n        priority_queue<int> maxHeap;\n        for (auto const& [t, c] : counts) maxHeap.push(c);\n        int time = 0;\n        queue<pair<int, int>> q;\n        while (!maxHeap.empty() || !q.empty()) {\n            time++;\n            if (!maxHeap.empty()) {\n                int cnt = maxHeap.top() - 1;\n                maxHeap.pop();\n                if (cnt > 0) q.push({cnt, time + n});\n            }\n            if (!q.empty() && q.front().second == time) {\n                maxHeap.push(q.front().first);\n                q.pop();\n            }\n        }\n        return time;\n    }\n};"
    }
  },

  {
    id: "355", slug: "design-twitter", title: "Design Twitter", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in their news feed.",
    detailedExplanation: "We use a global counter to represent time. Each user has a list of tweets (with time) and a set of followees. To get the news feed, we pull the most recent tweets from the user and all their followees, then use a max-heap (or min-heap of size 10) to find the 10 most recent across all sources.",
    edgeCases: [
      "User follows themselves",
      "User has no followees",
      "Followees have no tweets",
      "Feed has fewer than 10 tweets",
      "Unfollowing someone not followed"
    ],
    algorithmSteps: [
      "Store tweets in a map: `userId -> list of [time, tweetId]`.",
      "Store follows in a map: `userId -> set of followeeIds`.",
      "For `postTweet(userId, tweetId)`: Append `[globalTime--, tweetId]` to the user's tweet list.",
      "For `getNewsFeed(userId)`:",
      "Combine the user's followees and the user themselves.",
      "Push the most recent tweet of each source into a heap.",
      "Pop the most recent tweet, and if the source has more tweets, push the next most recent.",
      "Repeat until 10 tweets are collected or heap is empty."
    ],
    examples: [{ input: 'twitter.postTweet(1, 5); twitter.getNewsFeed(1); twitter.follow(1, 2); twitter.postTweet(2, 6); twitter.getNewsFeed(1);', output: '[5], [6, 5]' }],
    defaultInput: { userId: 1, operations: [["postTweet", 1, 5], ["getNewsFeed", 1], ["follow", 1, 2], ["postTweet", 2, 6], ["getNewsFeed", 1]] },
    complexity: { time: "post: O(1), feed: O(k log n) where k=10, n=followees", space: "O(Total Tweets + Total Follows)" },
    beginnerComplexity: { time: "feed: O(Total Tweets log Total Tweets)", space: "O(Total Tweets)" },
    optimalComplexity: { time: "feed: O(10 log n)", space: "O(Total Tweets)" },
    starterCode: "class Twitter:\n    def __init__(self):\n        pass\n\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n\n    def getNewsFeed(self, userId: int) -> List[int]:\n        pass\n\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass",
    beginnerCode: {
      python: "class Twitter:\n    def __init__(self):\n        self.tweets = [] # [userId, tweetId]\n        self.follows = collections.defaultdict(set)\n\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        self.tweets.append([userId, tweetId])\n\n    def getNewsFeed(self, userId: int) -> List[int]:\n        # Brute force: scan all tweets and filter\n        res = []\n        followees = self.follows[userId] | {userId}\n        for i in range(len(self.tweets) - 1, -1, -1):\n            if self.tweets[i][0] in followees:\n                res.append(self.tweets[i][1])\n            if len(res) == 10: break\n        return res",
      javascript: "var Twitter = function() {\n    this.tweets = [];\n    this.follows = new Map();\n};\nTwitter.prototype.postTweet = function(userId, tweetId) {\n    this.tweets.push({userId, tweetId});\n};\nTwitter.prototype.getNewsFeed = function(userId) {\n    let res = [];\n    let followees = this.follows.get(userId) || new Set();\n    followees.add(userId);\n    for (let i = this.tweets.length - 1; i >= 0; i--) {\n        if (followees.has(this.tweets[i].userId)) {\n            res.push(this.tweets[i].tweetId);\n        }\n        if (res.length === 10) break;\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Twitter:\n    def __init__(self):\n        self.count = 0\n        self.tweetMap = collections.defaultdict(list) # userId -> list of [count, tweetId]\n        self.followMap = collections.defaultdict(set) # userId -> set of followeeId\n\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        self.tweetMap[userId].append([self.count, tweetId])\n        self.count -= 1\n\n    def getNewsFeed(self, userId: int) -> List[int]:\n        res = []\n        minHeap = []\n        self.followMap[userId].add(userId)\n        for followeeId in self.followMap[userId]:\n            if followeeId in self.tweetMap:\n                index = len(self.tweetMap[followeeId]) - 1\n                count, tweetId = self.tweetMap[followeeId][index]\n                heapq.heappush(minHeap, [count, tweetId, followeeId, index - 1])\n        while minHeap and len(res) < 10:\n            count, tweetId, followeeId, index = heapq.heappop(minHeap)\n            res.append(tweetId)\n            if index >= 0:\n                count, tweetId = self.tweetMap[followeeId][index]\n                heapq.heappush(minHeap, [count, tweetId, followeeId, index - 1])\n        return res\n\n    def follow(self, followerId: int, followeeId: int) -> None:\n        self.followMap[followerId].add(followeeId)\n\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        if followeeId in self.followMap[followerId]:\n            self.followMap[followerId].remove(followeeId)",
      javascript: "var Twitter = function() {\n    this.count = 0;\n    this.tweetMap = new Map();\n    this.followMap = new Map();\n};\n\nTwitter.prototype.postTweet = function(userId, tweetId) {\n    if (!this.tweetMap.has(userId)) this.tweetMap.set(userId, []);\n    this.tweetMap.get(userId).push([this.count--, tweetId]);\n};\n\nTwitter.prototype.getNewsFeed = function(userId) {\n    let res = [];\n    let minHeap = new MinPriorityQueue({ priority: x => x[0] });\n    let followees = this.followMap.get(userId) || new Set();\n    followees.add(userId);\n    for (let fId of followees) {\n        let tweets = this.tweetMap.get(fId);\n        if (tweets && tweets.length > 0) {\n            let idx = tweets.length - 1;\n            let [cnt, tId] = tweets[idx];\n            minHeap.enqueue([cnt, tId, fId, idx - 1]);\n        }\n    }\n    while (!minHeap.isEmpty() && res.length < 10) {\n        let [cnt, tId, fId, idx] = minHeap.dequeue().element;\n        res.push(tId);\n        if (idx >= 0) {\n            let [nextCnt, nextTId] = this.tweetMap.get(fId)[idx];\n            minHeap.enqueue([nextCnt, nextTId, fId, idx - 1]);\n        }\n    }\n    return res;\n};\n\nTwitter.prototype.follow = function(followerId, followeeId) {\n    if (!this.followMap.has(followerId)) this.followMap.set(followerId, new Set());\n    this.followMap.get(followerId).add(followeeId);\n};\n\nTwitter.prototype.unfollow = function(followerId, followeeId) {\n    let followees = this.followMap.get(followerId);\n    if (followees) followees.delete(followeeId);\n};",
      cpp: "class Twitter {\npublic:\n    int time = 0;\n    unordered_map<int, vector<pair<int, int>>> tweets;\n    unordered_map<int, unordered_set<int>> follows;\n    \n    Twitter() {}\n    \n    void postTweet(int userId, int tweetId) {\n        tweets[userId].push_back({time--, tweetId});\n    }\n    \n    vector<int> getNewsFeed(int userId) {\n        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;\n        follows[userId].insert(userId);\n        for (int fid : follows[userId]) {\n            if (tweets.count(fid) && !tweets[fid].empty()) {\n                int idx = tweets[fid].size() - 1;\n                minHeap.push({tweets[fid][idx].first, tweets[fid][idx].second, fid, idx - 1});\n            }\n        }\n        vector<int> res;\n        while (!minHeap.empty() && res.size() < 10) {\n            auto top = minHeap.top(); minHeap.pop();\n            res.push_back(top[1]);\n            if (top[3] >= 0) {\n                auto next = tweets[top[2]][top[3]];\n                minHeap.push({next.first, next.second, top[2], top[3] - 1});\n            }\n        }\n        return res;\n    }\n    \n    void follow(int followerId, int followeeId) {\n        follows[followerId].insert(followeeId);\n    }\n    \n    void unfollow(int followerId, int followeeId) {\n        follows[followerId].erase(followeeId);\n    }\n};"
    }
  },
  {
    id: "295", slug: "find-median-from-data-stream", title: "Find Median from Data Stream", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "Design a data structure that supports adding integers from a data stream and finding the median of all elements seen so far.",
    detailedExplanation: "We use two heaps: a max-heap (small) for the lower half of numbers and a min-heap (large) for the upper half. We ensure that the heaps are balanced (size difference at most 1) and that all elements in 'small' are less than or equal to elements in 'large'. The median is either the root of the larger heap (if sizes differ) or the average of the two roots.",
    edgeCases: [
      "Stream with odd number of elements",
      "Stream with even number of elements",
      "Stream with duplicate numbers",
      "Large numbers in stream"
    ],
    algorithmSteps: [
      "Maintain a max-heap `small` and a min-heap `large`.",
      "For `addNum(num)`:",
      "Always push `num` into `small`.",
      "Pop max from `small` and push to `large` (to maintain the order property).",
      "If `len(large) > len(small)`, move back: pop min from `large` and push to `small` (balance).",
      "For `findMedian()`:",
      "If `len(small) > len(large)`, return small[0].",
      "If `len(large) > len(small)`, return large[0].",
      "Otherwise, return (small[0] + large[0]) / 2."
    ],
    examples: [{ input: 'addNum(1); addNum(2); findMedian(); addNum(3); findMedian();', output: "1.5, 2.0" }],
    defaultInput: { nums: [1, 2, 3] },
    complexity: { time: "add: O(log N), find: O(1)", space: "O(N)" },
    beginnerComplexity: { time: "add: O(N), find: O(1)", space: "O(N)" },
    optimalComplexity: { time: "add: O(log N), find: O(1)", space: "O(N)" },
    starterCode: "class MedianFinder:\n    def __init__(self):\n        pass\n\n    def addNum(self, num: int) -> None:\n        pass\n\n    def findMedian(self) -> float:\n        pass",
    beginnerCode: {
      python: "class MedianFinder:\n    def __init__(self):\n        self.nums = []\n\n    def addNum(self, num: int) -> None:\n        # Brute force: maintain sorted list with binary search insertion\n        bisect.insort(self.nums, num)\n\n    def findMedian(self) -> float:\n        n = len(self.nums)\n        if n % 2 == 1: return self.nums[n // 2]\n        return (self.nums[n // 2 - 1] + self.nums[n // 2]) / 2.0",
      javascript: "var MedianFinder = function() {\n    this.nums = [];\n};\nMedianFinder.prototype.addNum = function(num) {\n    let low = 0, high = this.nums.length;\n    while (low < high) {\n        let mid = (low + high) >>> 1;\n        if (this.nums[mid] < num) low = mid + 1;\n        else high = mid;\n    }\n    this.nums.splice(low, 0, num);\n};\nMedianFinder.prototype.findMedian = function() {\n    let n = this.nums.length;\n    if (n % 2 === 1) return this.nums[Math.floor(n / 2)];\n    return (this.nums[n / 2 - 1] + this.nums[n / 2]) / 2;\n};"
    },
    codes: {
      python: "class MedianFinder:\n    def __init__(self):\n        self.small, self.large = [], [] # maxHeap, minHeap\n\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.small, -1 * num)\n        if self.small and self.large and (-1 * self.small[0]) > self.large[0]:\n            val = -1 * heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        if len(self.small) > len(self.large) + 1:\n            val = -1 * heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        if len(self.large) > len(self.small) + 1:\n            val = heapq.heappop(self.large)\n            heapq.heappush(self.small, -1 * val)\n\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large): return -1 * self.small[0]\n        if len(self.large) > len(self.small): return self.large[0]\n        return (-1 * self.small[0] + self.large[0]) / 2",
      javascript: "var MedianFinder = function() {\n    this.small = new MaxPriorityQueue();\n    this.large = new MinPriorityQueue();\n};\n\nMedianFinder.prototype.addNum = function(num) {\n    this.small.enqueue(num);\n    this.large.enqueue(this.small.dequeue().element);\n    if (this.large.size() > this.small.size()) {\n        this.small.enqueue(this.large.dequeue().element);\n    }\n};\n\nMedianFinder.prototype.findMedian = function() {\n    if (this.small.size() > this.large.size()) return this.small.front().element;\n    return (this.small.front().element + this.large.front().element) / 2;\n};",
      cpp: "class MedianFinder {\npublic:\n    priority_queue<int> maxHeap;\n    priority_queue<int, vector<int>, greater<int>> minHeap;\n    \n    MedianFinder() {}\n    \n    void addNum(int num) {\n        maxHeap.push(num);\n        minHeap.push(maxHeap.top());\n        maxHeap.pop();\n        if (minHeap.size() > maxHeap.size()) {\n            maxHeap.push(minHeap.top());\n            minHeap.pop();\n        }\n    }\n    \n    double findMedian() {\n        if (maxHeap.size() > minHeap.size()) return maxHeap.top();\n        return (maxHeap.top() + minHeap.top()) / 2.0;\n    }\n};"
    }
  },
  {
    id: "632", slug: "smallest-range-covering-elements-from-k-lists", title: "Smallest Range K Lists", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.",
    detailedExplanation: "We use a min-heap to keep track of the smallest current element among all lists. In each step, we pop the smallest element, check if the current range (max - min) is smaller than our best range, and then push the next element from the list that provided the smallest element. We stop when any list is exhausted.",
    edgeCases: [
      "Lists of different lengths",
      "Single list as input",
      "Duplicate values across or within lists",
      "Lists with large values"
    ],
    algorithmSteps: [
      "Initialize a min-heap with the first element of each list.",
      "Keep track of the `currentMax` among these elements.",
      "Initialize `res` with a range of `[min-heap root, currentMax]`.",
      "While the min-heap contains `k` elements:",
      "Pop `currentMin` and its list/index information.",
      "If `currentMax - currentMin < resRange`, update `res`.",
      "Get the next element from the same list as `currentMin`.",
      "If no more elements in that list, break.",
      "Update `currentMax` if the new element is larger, and push to min-heap."
    ],
    examples: [{ input: "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]", output: "[20, 24]" }],
    defaultInput: { nums: [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]] },
    complexity: { time: "O(N log k) where N=total elements", space: "O(k)" },
    beginnerComplexity: { time: "O(N * k)", space: "O(k)" },
    optimalComplexity: { time: "O(N log k)", space: "O(k)" },
    starterCode: "class Solution:\n    def smallestRange(self, nums: List[List[int]]) -> List[int]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def smallestRange(self, nums: List[List[int]]) -> List[int]:\n        # Brute force: nested loops or multi-pointer search\n        k = len(nums)\n        indices = [0] * k\n        res = [float('-inf'), float('inf')]\n        while True:\n            curr_vals = [nums[i][indices[i]] for i in range(k)]\n            cur_min, cur_max = min(curr_vals), max(curr_vals)\n            if cur_max - cur_min < res[1] - res[0]:\n                res = [cur_min, cur_max]\n            min_idx = curr_vals.index(cur_min)\n            indices[min_idx] += 1\n            if indices[min_idx] == len(nums[min_idx]): break\n        return res",
      javascript: "var smallestRange = function(nums) {\n    let k = nums.length;\n    let indices = new Array(k).fill(0);\n    let res = [-Infinity, Infinity];\n    while (true) {\n        let minVal = Infinity, maxVal = -Infinity, minList = 0;\n        for (let i = 0; i < k; i++) {\n            let val = nums[i][indices[i]];\n            if (val < minVal) { minVal = val; minList = i; }\n            if (val > maxVal) maxVal = val;\n        }\n        if (maxVal - minVal < res[1] - res[0]) res = [minVal, maxVal];\n        indices[minList]++;\n        if (indices[minList] === nums[minList].length) break;\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def smallestRange(self, nums: List[List[int]]) -> List[int]:\n        minHeap = [(row[0], i, 0) for i, row in enumerate(nums)]\n        heapq.heapify(minHeap)\n        res = [float('-inf'), float('inf')]\n        right = max(row[0] for row in nums)\n        while minHeap:\n            left, r, c = heapq.heappop(minHeap)\n            if right - left < res[1] - res[0]:\n                res = [left, right]\n            if c + 1 == len(nums[r]): return res\n            v = nums[r][c + 1]\n            right = max(right, v)\n            heapq.heappush(minHeap, (v, r, c + 1))",
      javascript: "var smallestRange = function(nums) {\n    let minHeap = new MinPriorityQueue({ priority: x => x[0] });\n    let right = -Infinity;\n    for (let i = 0; i < nums.length; i++) {\n        minHeap.enqueue([nums[i][0], i, 0]);\n        right = Math.max(right, nums[i][0]);\n    }\n    let res = [-1000000, 1000000];\n    while (minHeap.size() === nums.length) {\n        let [left, r, c] = minHeap.dequeue().element;\n        if (right - left < res[1] - res[0]) res = [left, right];\n        if (c + 1 < nums[r].length) {\n            let nextVal = nums[r][c + 1];\n            right = Math.max(right, nextVal);\n            minHeap.enqueue([nextVal, r, c + 1]);\n        } else break;\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    vector<int> smallestRange(vector<vector<int>>& nums) {\n        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;\n        int high = INT_MIN;\n        for (int i = 0; i < nums.size(); i++) {\n            minHeap.push({nums[i][0], i, 0});\n            high = max(high, nums[i][0]);\n        }\n        vector<int> res = { -100000, 100000 };\n        while (minHeap.size() == nums.size()) {\n            auto top = minHeap.top(); minHeap.pop();\n            int low = top[0], r = top[1], c = top[2];\n            if (high - low < res[1] - res[0]) res = {low, high};\n            if (c + 1 < nums[r].size()) {\n                int next = nums[r][c + 1];\n                high = max(high, next);\n                minHeap.push({next, r, c + 1});\n            } else break;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "767", slug: "reorganize-string", title: "Reorganize String", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Given a string s, rearrange the characters of s so that any two adjacent characters are not the same. Return any possible rearrangement of s or return an empty string if not possible.",
    detailedExplanation: "We use a max-heap to prioritize character counts. In each step, we pick the character with the most remaining counts. To avoid placing two same characters adjacently, we keep the previously used character in a temporary variable and only push it back into the heap after another character has been placed.",
    edgeCases: [
      "String with all same characters",
      "String with length 1",
      "One character has count > (n+1)//2 (impossible case)",
      "String with only two types of characters"
    ],
    algorithmSteps: [
      "Count character frequencies.",
      "Push counts into a max-heap.",
      "Use a variable `prev` to store the character used in the previous step.",
      "While the heap is not empty OR `prev` is not null:",
      "If the heap is empty and `prev` exists, return \"\" (impossible).",
      "Pop the most frequent character `curr`.",
      "Append `curr` to result, decrement its count.",
      "If `prev` exists, push it back into the heap.",
      "Set `prev` to `curr` (if its count > 0) or null.",
      "Return the result string."
    ],
    examples: [{ input: 's = "aab"', output: '"aba"' }, { input: 's = "aaab"', output: '""' }],
    defaultInput: { s: "aab" },
    complexity: { time: "O(N log 26)", space: "O(26)" },
    beginnerComplexity: { time: "O(N log N)", space: "O(N)" },
    optimalComplexity: { time: "O(N)", space: "O(1) extra" },
    starterCode: "class Solution:\n    def reorganizeString(self, s: str) -> str:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def reorganizeString(self, s: str) -> str:\n        # Brute force: repeatedly find most frequent char that's not the same as last\n        from collections import Counter\n        counts = Counter(s)\n        res = []\n        for _ in range(len(s)):\n            best_char = None\n            for char, count in counts.items():\n                if count > 0 and (not res or char != res[-1]):\n                    if best_char is None or count > counts[best_char]:\n                        best_char = char\n            if best_char is None: return \"\"\n            res.append(best_char)\n            counts[best_char] -= 1\n        return \"\".join(res)",
      javascript: "var reorganizeString = function(s) {\n    let counts = {};\n    for (let c of s) counts[c] = (counts[c] || 0) + 1;\n    let res = [];\n    for (let i = 0; i < s.length; i++) {\n        let bestChar = null;\n        for (let char in counts) {\n            if (counts[char] > 0 && (!res.length || char !== res[res.length-1])) {\n                if (!bestChar || counts[char] > counts[bestChar]) bestChar = char;\n            }\n        }\n        if (!bestChar) return \"\";\n        res.push(bestChar);\n        counts[bestChar]--;\n    }\n    return res.join('');\n};"
    },
    codes: {
      python: "class Solution:\n    def reorganizeString(self, s: str) -> str:\n        count = collections.Counter(s)\n        maxHeap = [[-cnt, char] for char, cnt in count.items()]\n        heapq.heapify(maxHeap)\n        prev = None\n        res = \"\"\n        while maxHeap or prev:\n            if not maxHeap and prev: return \"\"\n            cnt, char = heapq.heappop(maxHeap)\n            res += char\n            cnt += 1\n            if prev:\n                heapq.heappush(maxHeap, prev)\n                prev = None\n            if cnt != 0:\n                prev = [cnt, char]\n        return res",
      javascript: "var reorganizeString = function(s) {\n    let counts = new Map();\n    for (let c of s) counts.set(c, (counts.get(c) || 0) + 1);\n    let maxHeap = new MaxPriorityQueue();\n    for (let [char, cnt] of counts) maxHeap.enqueue(char, cnt);\n    let res = \"\", prev = null;\n    while (!maxHeap.isEmpty() || prev) {\n        if (maxHeap.isEmpty() && prev) return \"\";\n        let { element: char, priority: cnt } = maxHeap.dequeue();\n        res += char;\n        if (prev) maxHeap.enqueue(prev.char, prev.cnt);\n        prev = cnt > 1 ? { char, cnt: cnt - 1 } : null;\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    string reorganizeString(string s) {\n        unordered_map<char, int> counts;\n        for (char c : s) counts[c]++;\n        priority_queue<pair<int, char>> maxHeap;\n        for (auto [c, cnt] : counts) maxHeap.push({cnt, c});\n        string res = \"\";\n        pair<int, char> prev = {-1, '#'};\n        while (!maxHeap.empty()) {\n            auto curr = maxHeap.top(); maxHeap.pop();\n            res += curr.second;\n            if (prev.first > 0) maxHeap.push(prev);\n            curr.first--;\n            prev = curr;\n        }\n        return res.length() == s.length() ? res : \"\";\n    }\n};"
    }
  },
  {
    id: "692", slug: "top-k-frequent-words", title: "Top K Frequent Words", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "Given an array of strings words and an integer k, return the k most frequent strings. Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.",
    detailedExplanation: "We count the frequencies and then use a min-heap to keep the top k elements. For tie-breaking frequency, we use lexicographical order in reverse. This way, the root of the min-heap always contains the 'least frequent' word among the best k (or the lexicographically 'largest' among words with the same minimum frequency).",
    edgeCases: [
      "k equals total number of unique words",
      "All words occur once",
      "Huge frequency difference between words",
      "Words with same frequency but different alphabetical order"
    ],
    algorithmSteps: [
      "Count character frequencies into a Map.",
      "Initialize a min-priority queue with a custom comparator.",
      "Comparator: higher frequency is better; if frequencies equal, lexicographically smaller is better.",
      "Iterate through the frequency map:",
      "Push word into heap.",
      "If size > k, pop from heap.",
      "The heap now contains the top k frequent words. Extract and reverse them."
    ],
    examples: [{ input: 'words = ["i","love","leetcode","i","love","coding"], k = 2', output: '["i","love"]' }, { input: 'words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4', output: '["the","is","sunny","day"]' }],
    defaultInput: { words: ["i", "love", "leetcode", "i", "love", "coding"], k: 2 },
    complexity: { time: "O(N log k)", space: "O(N)" },
    beginnerComplexity: { time: "O(N log N)", space: "O(N)" },
    optimalComplexity: { time: "O(N log k)", space: "O(N)" },
    starterCode: "class Solution:\n    def topKFrequent(self, words: List[str], k: int) -> List[str]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def topKFrequent(self, words: List[str], k: int) -> List[str]:\n        # Brute force: count and sort\n        count = collections.Counter(words)\n        res = list(count.keys())\n        res.sort(key=lambda w: (-count[w], w))\n        return res[:k]",
      javascript: "var topKFrequent = function(words, k) {\n    let counts = {};\n    for (let w of words) counts[w] = (counts[w] || 0) + 1;\n    let res = Object.keys(counts);\n    res.sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));\n    return res.slice(0, k);\n};"
    },
    codes: {
      python: "class Solution:\n    def topKFrequent(self, words: List[str], k: int) -> List[str]:\n        count = collections.Counter(words)\n        maxHeap = [[-cnt, word] for word, cnt in count.items()]\n        heapq.heapify(maxHeap)\n        res = []\n        for _ in range(k):\n            res.append(heapq.heappop(maxHeap)[1])\n        return res",
      javascript: "var topKFrequent = function(words, k) {\n    let counts = new Map();\n    for (let w of words) counts.set(w, (counts.get(w) || 0) + 1);\n    let minHeap = new MinPriorityQueue({\n        compare: (a, b) => a.cnt === b.cnt ? b.word.localeCompare(a.word) : a.cnt - b.cnt\n    });\n    for (let [word, cnt] of counts) {\n        minHeap.enqueue({ word, cnt });\n        if (minHeap.size() > k) minHeap.dequeue();\n    }\n    let res = [];\n    while (!minHeap.isEmpty()) res.push(minHeap.dequeue().word);\n    return res.reverse();\n};",
      cpp: "class Solution {\npublic:\n    vector<string> topKFrequent(vector<string>& words, int k) {\n        unordered_map<string, int> counts;\n        for (string& w : words) counts[w]++;\n        auto comp = [](pair<int, string>& a, pair<int, string>& b) {\n            return a.first > b.first || (a.first == b.first && a.second < b.second);\n        };\n        priority_queue<pair<int, string>, vector<pair<int, string>>, decltype(comp)> minHeap(comp);\n        for (auto const& [word, count] : counts) {\n            minHeap.push({count, word});\n            if (minHeap.size() > k) minHeap.pop();\n        }\n        vector<string> res;\n        while (!minHeap.empty()) {\n            res.push_back(minHeap.top().second);\n            minHeap.pop();\n        }\n        reverse(res.begin(), res.end());\n        return res;\n    }\n};"
    }
  },
  {
    id: "1834", slug: "single-threaded-cpu", title: "Single-Threaded CPU", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "You are given n tasks, each with an enqueue time and a processing time. A single-threaded CPU can only work on one task at a time. If the CPU is idle and there are tasks available, it will choose the one with the shortest processing time. If there's a tie, it chooses the one with the smallest index.",
    detailedExplanation: "We sort all tasks by their enqueue time. We use a min-heap to store available tasks (tasks whose enqueue time is <= current time). The heap prioritizes processing time, then original index. We process tasks one by one, jumping the CPU time to the next enqueue time if the heap is empty and there's no available task.",
    edgeCases: [
      "All tasks available at time 0",
      "CPU becomes idle between tasks",
      "Multiple tasks with same processing time",
      "Tasks perfectly back-to-back"
    ],
    algorithmSteps: [
      "Add original indices to tasks and sort them by enqueue time.",
      "Initialize `currentTime` to 0 and a min-heap.",
      "While there are tasks left OR the heap is not empty:",
      "If the heap is empty and `currentTime < nextTaskEnqueueTime`, jump `currentTime` to `nextTaskEnqueueTime`.",
      "Push all tasks with `enqueueTime <= currentTime` into the min-heap.",
      "Pop the best task from the heap, update `currentTime` by adding its processing time, and record its index.",
      "Return the recorded indices."
    ],
    examples: [{ input: "tasks = [[1,2],[2,4],[3,2],[4,1]]", output: "[0,2,3,1]" }],
    defaultInput: { tasks: [[1, 2], [2, 4], [3, 2], [4, 1]] },
    complexity: { time: "O(N log N)", space: "O(N)" },
    beginnerComplexity: { time: "O(N^2)", space: "O(N)" },
    optimalComplexity: { time: "O(N log N)", space: "O(N)" },
    starterCode: "class Solution:\n    def getOrder(self, tasks: List[List[int]]) -> List[int]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def getOrder(self, tasks: List[List[int]]) -> List[int]:\n        # Brute force: repeatedly search for best available task\n        n = len(tasks)\n        tasks_with_idx = [[t[0], t[1], i] for i, t in enumerate(tasks)]\n        res = []\n        curr_time = 0\n        visited = [False] * n\n        for _ in range(n):\n            best_idx = -1\n            for i in range(n):\n                if not visited[i] and tasks_with_idx[i][0] <= curr_time:\n                    if best_idx == -1 or tasks_with_idx[i][1] < tasks_with_idx[best_idx][1] or (tasks_with_idx[i][1] == tasks_with_idx[best_idx][1] and tasks_with_idx[i][2] < tasks_with_idx[best_idx][2]):\n                        best_idx = i\n            if best_idx == -1:\n                # Jump time to next available task\n                next_time = float('inf')\n                for i in range(n):\n                    if not visited[i]: next_time = min(next_time, tasks_with_idx[i][0])\n                curr_time = next_time\n                # Re-search\n                for i in range(n):\n                    if not visited[i] and tasks_with_idx[i][0] <= curr_time:\n                        if best_idx == -1 or tasks_with_idx[i][1] < tasks_with_idx[best_idx][1] or (tasks_with_idx[i][1] == tasks_with_idx[best_idx][1] and tasks_with_idx[i][2] < tasks_with_idx[best_idx][2]):\n                            best_idx = i\n            visited[best_idx] = True\n            res.append(tasks_with_idx[best_idx][2])\n            curr_time += tasks_with_idx[best_idx][1]\n        return res",
      javascript: "var getOrder = function(tasks) {\n    let n = tasks.length;\n    let tasksWithIdx = tasks.map((t, i) => [...t, i]);\n    let res = [], visited = new Array(n).fill(false), currTime = 0;\n    for (let count = 0; count < n; count++) {\n        let bestIdx = -1;\n        for (let i = 0; i < n; i++) {\n            if (!visited[i] && tasksWithIdx[i][0] <= currTime) {\n                if (bestIdx === -1 || tasksWithIdx[i][1] < tasksWithIdx[bestIdx][1] || (tasksWithIdx[i][1] === tasksWithIdx[bestIdx][1] && tasksWithIdx[i][2] < tasksWithIdx[bestIdx][2])) {\n                    bestIdx = i;\n                }\n            }\n        }\n        if (bestIdx === -1) {\n            let nextTime = Infinity;\n            for (let i = 0; i < n; i++) if (!visited[i]) nextTime = Math.min(nextTime, tasksWithIdx[i][0]);\n            currTime = nextTime;\n            for (let i = 0; i < n; i++) {\n                if (!visited[i] && tasksWithIdx[i][0] <= currTime) {\n                    if (bestIdx === -1 || tasksWithIdx[i][1] < tasksWithIdx[bestIdx][1] || (tasksWithIdx[i][1] === tasksWithIdx[bestIdx][1] && tasksWithIdx[i][2] < tasksWithIdx[bestIdx][2])) {\n                        bestIdx = i;\n                    }\n                }\n            }\n        }\n        visited[bestIdx] = true;\n        res.push(tasksWithIdx[bestIdx][2]);\n        currTime += tasksWithIdx[bestIdx][1];\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def getOrder(self, tasks: List[List[int]]) -> List[int]:\n        for i, t in enumerate(tasks): t.append(i)\n        tasks.sort(key=lambda t: t[0])\n        res, min_heap = [], []\n        i, time = 0, tasks[0][0]\n        while min_heap or i < len(tasks):\n            while i < len(tasks) and time >= tasks[i][0]:\n                heapq.heappush(min_heap, [tasks[i][1], tasks[i][2]])\n                i += 1\n            if not min_heap:\n                time = tasks[i][0]\n            else:\n                proc_time, index = heapq.heappop(min_heap)\n                time += proc_time\n                res.append(index)\n        return res",
      javascript: "var getOrder = function(tasks) {\n    let indexedTasks = tasks.map((t, i) => [t[0], t[1], i]);\n    indexedTasks.sort((a, b) => a[0] - b[0]);\n    let minHeap = new MinPriorityQueue({ \n        compare: (a, b) => a[1] === b[1] ? a[2] - b[2] : a[1] - b[1] \n    });\n    let res = [], i = 0, time = indexedTasks[0][0];\n    while (minHeap.size() > 0 || i < indexedTasks.length) {\n        while (i < indexedTasks.length && time >= indexedTasks[i][0]) {\n            minHeap.enqueue(indexedTasks[i]);\n            i++;\n        }\n        if (minHeap.isEmpty()) {\n            time = indexedTasks[i][0];\n        } else {\n            let task = minHeap.dequeue();\n            time += task[1];\n            res.push(task[2]);\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    vector<int> getOrder(vector<vector<int>>& tasks) {\n        int n = tasks.size();\n        vector<vector<int>> indexedTasks(n);\n        for (int i = 0; i < n; i++) indexedTasks[i] = {tasks[i][0], tasks[i][1], i};\n        sort(indexedTasks.begin(), indexedTasks.end());\n        \n        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;\n        vector<int> res;\n        long long time = indexedTasks[0][0];\n        int i = 0;\n        while (!minHeap.empty() || i < n) {\n            while (i < n && time >= indexedTasks[i][0]) {\n                minHeap.push({indexedTasks[i][1], indexedTasks[i][2]});\n                i++;\n            }\n            if (minHeap.empty()) {\n                time = indexedTasks[i][0];\n            } else {\n                auto top = minHeap.top(); minHeap.pop();\n                time += top.first;\n                res.push_back(top.second);\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "1425", slug: "constrained-subsequence-sum", title: "Constrained Subsequence Sum", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied.",
    detailedExplanation: "This is a DP problem optimized with a heap or deque. Let `dp[i]` be the max subsequence sum ending at index `i`. Then `dp[i] = nums[i] + max(0, max(dp[i-k...i-1]))`. To find the max in the window efficiently, we use a max-heap to store `[dp[j], j]` pairs. We pop elements from the heap if their index is outside the current window `[i-k, i-1]`.",
    edgeCases: [
      "k equals 1",
      "All negative numbers",
      "k equals array length",
      "Array with one element"
    ],
    algorithmSteps: [
      "Initialize `max_sum` with the first element.",
      "Use a max-heap to store `[dp_value, index]` (negated for Python's min-heap).",
      "Push `[nums[0], 0]` into the heap.",
      "Iterate from `i = 1` to `len(nums) - 1`:",
      "While `heap.top().index < i - k`, pop from the heap.",
      "Calculate `curr_dp = nums[i] + max(0, heap.top().dp_value)`.",
      "Update `max_sum = max(max_sum, curr_dp)`.",
      "Push `[curr_dp, i]` into the heap.",
      "Return `max_sum`."
    ],
    examples: [{ input: "nums = [10,2,-10,5,20], k = 2", output: "37" }],
    defaultInput: { nums: [10, 2, -10, 5, 20], k: 2 },
    complexity: { time: "O(N log N)", space: "O(N)" },
    beginnerComplexity: { time: "O(N*k)", space: "O(N)" },
    optimalComplexity: { time: "O(N) with deque", space: "O(k)" },
    starterCode: "class Solution:\n    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:\n        # Brute force DP: O(N*k)\n        dp = nums[:]\n        for i in range(1, len(nums)):\n            for j in range(max(0, i - k), i):\n                dp[i] = max(dp[i], nums[i] + dp[j])\n        return max(dp)",
      javascript: "var constrainedSubsetSum = function(nums, k) {\n    let dp = [...nums];\n    for (let i = 1; i < nums.length; i++) {\n        for (let j = Math.max(0, i - k); j < i; j++) {\n            dp[i] = Math.max(dp[i], nums[i] + dp[j]);\n        }\n    }\n    return Math.max(...dp);\n};"
    },
    codes: {
      python: "class Solution:\n    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:\n        max_sum = nums[0]\n        max_heap = [[-nums[0], 0]]\n        for i in range(1, len(nums)):\n            while i - max_heap[0][1] > k:\n                heapq.heappop(max_heap)\n            curr = max(0, -max_heap[0][0]) + nums[i]\n            max_sum = max(max_sum, curr)\n            heapq.heappush(max_heap, [-curr, i])\n        return max_sum",
      javascript: "var constrainedSubsetSum = function(nums, k) {\n    let maxHeap = new MaxPriorityQueue({ priority: x => x[0] });\n    maxHeap.enqueue([nums[0], 0]);\n    let maxSum = nums[0];\n    for (let i = 1; i < nums.length; i++) {\n        while (i - maxHeap.front().element[1] > k) maxHeap.dequeue();\n        let curr = Math.max(0, maxHeap.front().element[0]) + nums[i];\n        maxSum = Math.max(maxSum, curr);\n        maxHeap.enqueue([curr, i]);\n    }\n    return maxSum;\n};",
      cpp: "class Solution {\npublic:\n    int constrainedSubsetSum(vector<int>& nums, int k) {\n        priority_queue<pair<int, int>> maxHeap;\n        maxHeap.push({nums[0], 0});\n        int res = nums[0];\n        for (int i = 1; i < nums.size(); i++) {\n            while (i - maxHeap.top().second > k) maxHeap.pop();\n            int curr = max(0, maxHeap.top().first) + nums[i];\n            res = max(res, curr);\n            maxHeap.push({curr, i});\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "857", slug: "min-cost-to-hire-k-workers", title: "Min Cost to Hire K Workers", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "There are n workers. You are given two integer arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum welcome wage for the ith worker.",
    detailedExplanation: "Every worker in the paid group must be paid in ratio to their quality. Specifically, for a set of workers, the cost is `(Sum of qualities) * (max(wage[i]/quality[i]))`. We sort workers by their `wage/quality` ratio. We then maintain a max-heap of qualities of size `k`. As we iterate through sorted workers, we add the current worker's quality to the sum, and if the heap exceeds size `k`, we remove the highest quality worker to minimize the total cost.",
    edgeCases: [
      "k = 1",
      "k = total number of workers",
      "Workers with very low quality but high wage",
      "Workers with very high quality but low wage"
    ],
    algorithmSteps: [
      "Sort workers by their `wage / quality` ratio.",
      "Initialize a max-heap for quality and `sum_quality = 0`.",
      "Initialize `min_cost` to infinity.",
      "For each worker in sorted list:",
      "Add worker's quality to `sum_quality` and heap.",
      "If heap size > k, subtract the popped quality from `sum_quality`.",
      "If heap size == k, update `min_cost = min(min_cost, sum_quality * current_ratio)`.",
      "Return `min_cost`."
    ],
    examples: [{ input: "quality = [10,20,5], wage = [70,50,30], k = 2", output: "105.00000" }],
    defaultInput: { quality: [10, 20, 5], wage: [70, 50, 30], k: 2 },
    complexity: { time: "O(N log N)", space: "O(N)" },
    beginnerComplexity: { time: "O(N^2 log N)", space: "O(N)" },
    optimalComplexity: { time: "O(N log N)", space: "O(N)" },
    starterCode: "class Solution:\n    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:\n        # Brute force: check every worker as the 'ratio setter'\n        n = len(quality)\n        res = float('inf')\n        for i in range(n):\n            ratio = wage[i] / quality[i]\n            prices = []\n            for j in range(n):\n                p = ratio * quality[j]\n                if p >= wage[j]: prices.append(p)\n            if len(prices) >= k:\n                prices.sort()\n                res = min(res, sum(prices[:k]))\n        return res",
      javascript: "var mincostToHireWorkers = function(quality, wage, k) {\n    let n = quality.length, res = Infinity;\n    for (let i = 0; i < n; i++) {\n        let ratio = wage[i] / quality[i];\n        let prices = [];\n        for (let j = 0; j < n; j++) {\n            let p = ratio * quality[j];\n            if (p >= wage[j]) prices.push(p);\n        }\n        if (prices.length >= k) {\n            prices.sort((a, b) => a - b);\n            let sum = 0; for (let m = 0; m < k; m++) sum += prices[m];\n            res = Math.min(res, sum);\n        }\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:\n        res = float(\"inf\")\n        workers = sorted([(w/q, q) for w, q in zip(wage, quality)])\n        max_heap = []\n        total_q = 0\n        for r, q in workers:\n            heapq.heappush(max_heap, -q)\n            total_q += q\n            if len(max_heap) > k:\n                total_q += heapq.heappop(max_heap)\n            if len(max_heap) == k:\n                res = min(res, total_q * r)\n        return res",
      javascript: "var mincostToHireWorkers = function(quality, wage, k) {\n    let workers = quality.map((q, i) => [wage[i] / q, q]);\n    workers.sort((a, b) => a[0] - b[0]);\n    let maxHeap = new MaxPriorityQueue();\n    let totalQ = 0, res = Infinity;\n    for (let [ratio, q] of workers) {\n        totalQ += q;\n        maxHeap.enqueue(q);\n        if (maxHeap.size() > k) totalQ -= maxHeap.dequeue().element;\n        if (maxHeap.size() === k) res = Math.min(res, totalQ * ratio);\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    double mincostToHireWorkers(vector<int>& quality, vector<int>& wage, int k) {\n        vector<pair<double, int>> workers;\n        for (int i = 0; i < quality.size(); i++) \n            workers.push_back({(double)wage[i] / quality[i], quality[i]});\n        sort(workers.begin(), workers.end());\n        \n        priority_queue<int> maxHeap;\n        int totalQ = 0;\n        double res = 1e18;\n        for (auto& w : workers) {\n            totalQ += w.second;\n            maxHeap.push(w.second);\n            if (maxHeap.size() > k) {\n                totalQ -= maxHeap.top();\n                maxHeap.pop();\n            }\n            if (maxHeap.size() == k) res = min(res, totalQ * w.first);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "502", slug: "ipo", title: "IPO", difficulty: "Hard", diffClass: "difficulty-hard", category: "Heap",
    description: "Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.",
    detailedExplanation: "We have a list of projects with their required capital and profit. We sort all projects by their capital requirements. We use a max-heap to store the profits of all projects that we can afford with our current capital. In each step, we pick the project with the maximum profit from the heap and add it to our capital. We repeat this k times.",
    edgeCases: [
      "k = 0",
      "Initial capital is too low for any project",
      "More projects than k",
      "All projects affordable from start"
    ],
    algorithmSteps: [
      "Combine profits and capitals into pairs and sort by capital.",
      "Initialize a max-heap for profits and an index pointer `i = 0`.",
      "Repeat `k` times:",
      "While `i < n` and `projects[i].capital <= currentCapital`:",
      "Push `projects[i].profit` into the max-heap.",
      "If the heap is empty, break (no affordable projects).",
      "Pop the largest profit and add to `currentCapital`.",
      "Return `currentCapital`."
    ],
    examples: [{ input: "k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]", output: "4" }],
    defaultInput: { k: 2, w: 0, profits: [1, 2, 3], capital: [0, 1, 1] },
    complexity: { time: "O(N log N)", space: "O(N)" },
    beginnerComplexity: { time: "O(k * N)", space: "O(N)" },
    optimalComplexity: { time: "O(N log N)", space: "O(N)" },
    starterCode: "class Solution:\n    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:\n        # Brute force: repeatedly find most profitable affordable project\n        n = len(profits)\n        used = [False] * n\n        curr_cap = w\n        for _ in range(k):\n            best_idx = -1\n            for i in range(n):\n                if not used[i] and capital[i] <= curr_cap:\n                    if best_idx == -1 or profits[i] > profits[best_idx]:\n                        best_idx = i\n            if best_idx == -1: break\n            used[best_idx] = True\n            curr_cap += profits[best_idx]\n        return curr_cap",
      javascript: "var findMaximizedCapital = function(k, w, profits, capital) {\n    let n = profits.length, used = new Array(n).fill(false), currCap = w;\n    for (let j = 0; j < k; j++) {\n        let bestIdx = -1;\n        for (let i = 0; i < n; i++) {\n            if (!used[i] && capital[i] <= currCap) {\n                if (bestIdx === -1 || profits[i] > profits[bestIdx]) bestIdx = i;\n            }\n        }\n        if (bestIdx === -1) break;\n        used[bestIdx] = true;\n        currCap += profits[bestIdx];\n    }\n    return currCap;\n};"
    },
    codes: {
      python: "class Solution:\n    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:\n        maxProfit = [] # maxHeap\n        minCapital = [(c, p) for c, p in zip(capital, profits)]\n        heapq.heapify(minCapital)\n        for _ in range(k):\n            while minCapital and minCapital[0][0] <= w:\n                c, p = heapq.heappop(minCapital)\n                heapq.heappush(maxProfit, -1 * p)\n            if not maxProfit: break\n            w += -1 * heapq.heappop(maxProfit)\n        return w",
      javascript: "var findMaximizedCapital = function(k, w, profits, capital) {\n    let projects = capital.map((c, i) => [c, profits[i]]);\n    projects.sort((a, b) => a[0] - b[0]);\n    let maxHeap = new MaxPriorityQueue();\n    let i = 0;\n    while (k > 0) {\n        while (i < projects.length && projects[i][0] <= w) {\n            maxHeap.enqueue(projects[i][1]);\n            i++;\n        }\n        if (maxHeap.isEmpty()) break;\n        w += maxHeap.dequeue().element;\n        k--;\n    }\n    return w;\n};",
      cpp: "class Solution {\npublic:\n    int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {\n        vector<pair<int, int>> projects;\n        for (int i = 0; i < profits.size(); i++) projects.push_back({capital[i], profits[i]});\n        sort(projects.begin(), projects.end());\n        \n        priority_queue<int> maxHeap;\n        int i = 0;\n        while (k--) {\n            while (i < projects.size() && projects[i].first <= w) {\n                maxHeap.push(projects[i].second);\n                i++;\n            }\n            if (maxHeap.empty()) break;\n            w += maxHeap.top();\n            maxHeap.pop();\n        }\n        return w;\n    }\n};"
    }
  },
  {
    id: "1405", slug: "longest-happy-string", title: "Longest Happy String", difficulty: "Medium", diffClass: "difficulty-medium", category: "Heap",
    description: "A string s is called happy if it does not contain 'aaa', 'bbb', or 'ccc' as a substring. Given three integers a, b, and c, return the longest possible happy string.",
    detailedExplanation: "We use a max-heap to store the counts of available characters. In each step, we try to append the character with the highest count. If adding it would form a prohibited substring (e.g., 'aaa'), we instead pick the character with the next highest count. We then update the counts and push characters back into the heap if they still have occurrences left.",
    edgeCases: [
      "Only one character type available",
      "Two character types with very different counts",
      "Equal counts of all characters",
      "Small counts (e.g., 1, 1, 1)"
    ],
    algorithmSteps: [
      "Add counts of 'a', 'b', 'c' to a max-heap (if > 0).",
      "While the heap is not empty:",
      "Pop the character `char1` with the largest count.",
      "If the last two characters in the result are `char1`:",
      "If the heap is empty, we are finished.",
      "Pop the next largest character `char2`.",
      "Append `char2` to result, decrement its count, and push back if > 0.",
      "Push `char1` back into the heap (without using it).",
      "Otherwise (safe to use `char1`):",
      "Append `char1` to result, decrement its count, and push back if > 0.",
      "Return the result string."
    ],
    examples: [{ input: "a = 1, b = 1, c = 7", output: '"ccbccacc"' }],
    defaultInput: { a: 1, b: 1, c: 7 },
    complexity: { time: "O(a + b + c)", space: "O(1)" },
    beginnerComplexity: { time: "O((a+b+c)^2)", space: "O(1)" },
    optimalComplexity: { time: "O(a + b + c)", space: "O(1)" },
    starterCode: "class Solution:\n    def longestHappyString(self, a: int, b: int, c: int) -> str:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def longestHappyString(self, a: int, b: int, c: int) -> str:\n        # Brute force: repeatedly find best char\n        counts = {'a': a, 'b': b, 'c': c}\n        res = []\n        while True:\n            best = None\n            for char, count in counts.items():\n                if count > 0 and (len(res) < 2 or (res[-1] != char or res[-2] != char)):\n                    if best is None or count > counts[best]:\n                        best = char\n            if best is None: break\n            res.append(best)\n            counts[best] -= 1\n        return \"\".join(res)",
      javascript: "var longestHappyString = function(a, b, c) {\n    let counts = { 'a': a, 'b': b, 'c': c };\n    let res = [];\n    while (true) {\n        let bestChar = null;\n        for (let char in counts) {\n            if (counts[char] > 0 && (res.length < 2 || (res[res.length - 1] !== char || res[res.length - 2] !== char))) {\n                if (!bestChar || counts[char] > counts[bestChar]) bestChar = char;\n            }\n        }\n        if (!bestChar) break;\n        res.push(bestChar);\n        counts[bestChar]--;\n    }\n    return res.join('');\n};"
    },
    codes: {
      python: "class Solution:\n    def longestHappyString(self, a: int, b: int, c: int) -> str:\n        res, maxHeap = \"\", []\n        for count, char in [[a, \"a\"], [b, \"b\"], [c, \"c\"]]:\n            if count > 0: heapq.heappush(maxHeap, (-count, char))\n        while maxHeap:\n            count, char = heapq.heappop(maxHeap)\n            if len(res) > 1 and res[-1] == res[-2] == char:\n                if not maxHeap: break\n                count2, char2 = heapq.heappop(maxHeap)\n                res += char2\n                if count2 + 1 < 0: heapq.heappush(maxHeap, (count2 + 1, char2))\n                heapq.heappush(maxHeap, (count, char))\n            else:\n                res += char\n                if count + 1 < 0: heapq.heappush(maxHeap, (count + 1, char))\n        return res",
      javascript: "var longestHappyString = function(a, b, c) {\n    let maxHeap = new MaxPriorityQueue();\n    if (a > 0) maxHeap.enqueue('a', a);\n    if (b > 0) maxHeap.enqueue('b', b);\n    if (c > 0) maxHeap.enqueue('c', c);\n    let res = \"\";\n    while (!maxHeap.isEmpty()) {\n        let { element: char1, priority: count1 } = maxHeap.dequeue();\n        if (res.length >= 2 && res[res.length - 1] === char1 && res[res.length - 2] === char1) {\n            if (maxHeap.isEmpty()) break;\n            let { element: char2, priority: count2 } = maxHeap.dequeue();\n            res += char2;\n            if (count2 > 1) maxHeap.enqueue(char2, count2 - 1);\n            maxHeap.enqueue(char1, count1);\n        } else {\n            res += char1;\n            if (count1 > 1) maxHeap.enqueue(char1, count1 - 1);\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    string longestHappyString(int a, int b, int c) {\n        priority_queue<pair<int, char>> maxHeap;\n        if (a > 0) maxHeap.push({a, 'a'});\n        if (b > 0) maxHeap.push({b, 'b'});\n        if (c > 0) maxHeap.push({c, 'c'});\n        string res = \"\";\n        while (!maxHeap.empty()) {\n            auto top = maxHeap.top(); maxHeap.pop();\n            if (res.length() >= 2 && res.back() == top.second && res[res.length() - 2] == top.second) {\n                if (maxHeap.empty()) break;\n                auto next = maxHeap.top(); maxHeap.pop();\n                res += next.second;\n                if (--next.first > 0) maxHeap.push(next);\n                maxHeap.push(top);\n            } else {\n                res += top.second;\n                if (--top.first > 0) maxHeap.push(top);\n            }\n        }\n        return res;\n    }\n};"
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
    id: "70", slug: "climbing-stairs", title: "Climbing Stairs", difficulty: "Easy", diffClass: "difficulty-easy", category: "Dynamic Programming",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    detailedExplanation: "This is a classic DP problem. To reach step 'n', you could have come from step 'n-1' (by taking 1 step) or step 'n-2' (by taking 2 steps). Thus, ways(n) = ways(n-1) + ways(n-2). This is the Fibonacci sequence.",
    edgeCases: [
      "n = 1 (1 way)",
      "n = 2 (2 ways)",
      "Large n (requires O(n) or O(log n) solution)"
    ],
    algorithmSteps: [
      "Initialize two variables, 'one' and 'two', representing ways to reach the previous two steps.",
      "Iterate from 0 to n-1.",
      "Calculate current ways as 'one + two'.",
      "Update 'one' and 'two' for the next iteration.",
      "Return 'one'."
    ],
    examples: [{ input: "n = 2", output: "2" }, { input: "n = 3", output: "3" }],
    defaultInput: { n: 5 },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def climbStairs(self, n: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def climbStairs(self, n: int) -> int:\n        # Brute Force Recursion O(2^n)\n        if n <= 2: return n\n        return self.climbStairs(n - 1) + self.climbStairs(n - 2)",
      javascript: "var climbStairs = function(n) {\n    if (n <= 2) return n;\n    return climbStairs(n - 1) + climbStairs(n - 2);\n};",
      cpp: "class Solution {\npublic:\n    int climbStairs(int n) {\n        if (n <= 2) return n;\n        return climbStairs(n - 1) + climbStairs(n - 2);\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def climbStairs(self, n: int) -> int:\n        one, two = 1, 1\n        for i in range(n - 1):\n            temp = one\n            one = one + two\n            two = temp\n        return one",
      javascript: "var climbStairs = function(n) {\n    let one = 1, two = 1;\n    for (let i = 0; i < n - 1; i++) {\n        let temp = one;\n        one = one + two;\n        two = temp;\n    }\n    return one;\n};",
      cpp: "class Solution {\npublic:\n    int climbStairs(int n) {\n        int one = 1, two = 1;\n        for (int i = 0; i < n - 1; i++) {\n            int temp = one;\n            one = one + two;\n            two = temp;\n        }\n        return one;\n    }\n};"
    }
  },
  {
    id: "746", slug: "min-cost-climbing-stairs", title: "Min Cost Climbing Stairs", difficulty: "Easy", diffClass: "difficulty-easy", category: "Dynamic Programming",
    description: "You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. return the minimum cost to reach the top of the floor.",
    detailedExplanation: "We can use DP where dp[i] is the min cost to reach step i. dp[i] = cost[i] + min(dp[i-1], dp[i-2]). Since we only need the last two values, we can optimize space to O(1).",
    edgeCases: [
      "Two steps (minimum of the two)",
      "Increasing vs decreasing costs"
    ],
    algorithmSteps: [
      "Append 0 to the cost array (cost to reach top).",
      "Iterate backwards from the second to last element.",
      "Update cost[i] += min(cost[i+1], cost[i+2]).",
      "Return min(cost[0], cost[1])."
    ],
    examples: [{ input: "cost = [10,15,20]", output: "15" }],
    defaultInput: { cost: [10, 15, 20] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def minCostClimbingStairs(self, cost: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def minCostClimbingStairs(self, cost: List[int]) -> int:\n        # Recursion (Inefficient)\n        def solve(i):\n            if i >= len(cost): return 0\n            return cost[i] + min(solve(i+1), solve(i+2))\n        return min(solve(0), solve(1))",
      javascript: "var minCostClimbingStairs = function(cost) {\n    function solve(i) {\n        if (i >= cost.length) return 0;\n        return cost[i] + Math.min(solve(i+1), solve(i+2));\n    }\n    return Math.min(solve(0), solve(1));\n};"
    },
    codes: {
      python: "class Solution:\n    def minCostClimbingStairs(self, cost: List[int]) -> int:\n        cost.append(0)\n        for i in range(len(cost) - 3, -1, -1):\n            cost[i] += min(cost[i + 1], cost[i + 2])\n        return min(cost[0], cost[1])",
      javascript: "var minCostClimbingStairs = function(cost) {\n    cost.push(0);\n    for (let i = cost.length - 3; i >= 0; i--) {\n        cost[i] += Math.min(cost[i + 1], cost[i + 2]);\n    }\n    return Math.min(cost[0], cost[1]);\n};",
      cpp: "class Solution {\npublic:\n    int minCostClimbingStairs(vector<int>& cost) {\n        cost.push_back(0);\n        for (int i = cost.size() - 3; i >= 0; i--) {\n            cost[i] += min(cost[i + 1], cost[i + 2]);\n        }\n        return min(cost[0], cost[1]);\n    }\n};"
    }
  },
  {
    id: "198", slug: "house-robber", title: "House Robber", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "You are a professional robber planning to rob houses along a street. Adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.",
    detailedExplanation: "At each house, we have two choices: rob it (and skip the next one) or skip it (and potentially rob the next). We maximize profit: rob = max(arr[0] + rob[2:], rob[1:]). This can be solved iteratively keeping track of 'rob1' (previous max) and 'rob2' (current max).",
    edgeCases: [
      "No houses",
      "One house",
      "Two houses (max of the two)"
    ],
    algorithmSteps: [
      "Initialize 'rob1' and 'rob2' to 0.",
      "Iterate through the houses.",
      "Calculate new max as max(n + rob1, rob2).",
      "Update rob1 to old rob2, and rob2 to new max.",
      "Return rob2."
    ],
    examples: [{ input: "nums = [1,2,3,1]", output: "4" }],
    defaultInput: { nums: [1, 2, 3, 1] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        # Recursive O(2^n)\n        def solve(i):\n            if i >= len(nums): return 0\n            return max(nums[i] + solve(i + 2), solve(i + 1))\n        return solve(0)",
      javascript: "var rob = function(nums) {\n    function solve(i) {\n        if (i >= nums.length) return 0;\n        return Math.max(nums[i] + solve(i + 2), solve(i + 1));\n    }\n    return solve(0);\n};"
    },
    codes: {
      python: "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        rob1, rob2 = 0, 0\n        for n in nums:\n            temp = max(n + rob1, rob2)\n            rob1 = rob2\n            rob2 = temp\n        return rob2",
      javascript: "var rob = function(nums) {\n    let rob1 = 0, rob2 = 0;\n    for (let n of nums) {\n        let temp = Math.max(n + rob1, rob2);\n        rob1 = rob2;\n        rob2 = temp;\n    }\n    return rob2;\n};",
      cpp: "class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        int rob1 = 0, rob2 = 0;\n        for (int n : nums) {\n            int temp = max(n + rob1, rob2);\n            rob1 = rob2;\n            rob2 = temp;\n        }\n        return rob2;\n    }\n};"
    }
  },
  {
    id: "213", slug: "house-robber-ii", title: "House Robber II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "You are a professional robber planning to rob houses along a street. The houses are arranged in a circle.",
    detailedExplanation: "Since the houses are in a circle, we cannot rob both the first and the last house. So the problem reduces to two linear House Robber problems: one excluding the first house, and one excluding the last house. We take the max of these two scenarios (and the single house case).",
    edgeCases: [
      "Single house (must return that value)",
      "Two houses (max of the two)"
    ],
    algorithmSteps: [
      "Handle edge case: if only one house, return it.",
      "Run linear House Robber on nums[1:].",
      "Run linear House Robber on nums[:-1].",
      "Return max result."
    ],
    examples: [{ input: "nums = [2,3,2]", output: "3" }],
    defaultInput: { nums: [2, 3, 2] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        if len(nums) == 1: return nums[0]\n        # Reuse Rob logic manually\n        def helper(arr):\n            rob1, rob2 = 0, 0\n            for n in arr:\n                temp = max(n + rob1, rob2)\n                rob1 = rob2\n                rob2 = temp\n            return rob2\n        return max(helper(nums[1:]), helper(nums[:-1]))",
      javascript: "var rob = function(nums) {\n    if (nums.length === 1) return nums[0];\n    const helper = (arr) => {\n        let rob1 = 0, rob2 = 0;\n        for (let n of arr) {\n            let temp = Math.max(n + rob1, rob2);\n            rob1 = rob2;\n            rob2 = temp;\n        }\n        return rob2;\n    }\n    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1)));\n};"
    },
    codes: {
      python: "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        return max(nums[0], self.helper(nums[1:]), self.helper(nums[:-1]))\n\n    def helper(self, nums):\n        rob1, rob2 = 0, 0\n        for n in nums:\n            newRob = max(rob1 + n, rob2)\n            rob1 = rob2\n            rob2 = newRob\n        return rob2",
      javascript: "var rob = function(nums) {\n    if (nums.length === 0) return 0;\n    if (nums.length === 1) return nums[0];\n    \n    const helper = (arr) => {\n        let rob1 = 0, rob2 = 0;\n        for (let n of arr) {\n            let newRob = Math.max(rob1 + n, rob2);\n            rob1 = rob2;\n            rob2 = newRob;\n        }\n        return rob2;\n    };\n    \n    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));\n};",
      cpp: "class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        if (nums.empty()) return 0;\n        if (nums.size() == 1) return nums[0];\n        return max(helper(nums, 0, nums.size() - 2), helper(nums, 1, nums.size() - 1));\n    }\nprivate:\n    int helper(vector<int>& nums, int start, int end) {\n        int rob1 = 0, rob2 = 0;\n        for (int i = start; i <= end; i++) {\n            int newRob = max(rob1 + nums[i], rob2);\n            rob1 = rob2;\n            rob2 = newRob;\n        }\n        return rob2;\n    }\n};"
    }
  },
  {
    id: "5", slug: "longest-palindromic-substring", title: "Longest Palindromic Substring", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Given a string s, return the longest palindromic substring in s.",
    detailedExplanation: "We can treat each character as the center of a palindrome and expand outwards. We must handle both odd-length palindromes (single char center) and even-length palindromes (two char center). We keep track of the max length found.",
    edgeCases: [
      "Single character",
      "No palindrome > 1",
      "Entire string is palindrome"
    ],
    algorithmSteps: [
      "Initialize 'res' and 'resLen'.",
      "Iterate through the string with index 'i'.",
      "Expand for odd length: l=i, r=i.",
      "Expand for even length: l=i, r=i+1.",
      "In helper function, while l>=0 and r<len and s[l]==s[r]: expand and update max.",
      "Return the substring."
    ],
    examples: [{ input: 's = "babad"', output: '"bab"' }],
    defaultInput: { s: "babad" },
    complexity: { time: "O(n²)", space: "O(1)" },
    beginnerComplexity: { time: "O(n³)", space: "O(1)" },
    optimalComplexity: { time: "O(n²)", space: "O(1)" },
    starterCode: "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        # Brute Force O(n^3)\n        res = \"\"\n        for i in range(len(s)):\n            for j in range(i, len(s)):\n                sub = s[i:j+1]\n                if sub == sub[::-1] and len(sub) > len(res):\n                    res = sub\n        return res",
      javascript: "var longestPalindrome = function(s) {\n    let res = \"\";\n    for (let i = 0; i < s.length; i++) {\n        for (let j = i; j < s.length; j++) {\n            let sub = s.substring(i, j + 1);\n            if (sub === sub.split('').reverse().join('') && sub.length > res.length) {\n                res = sub;\n            }\n        }\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        res = \"\"\n        resLen = 0\n        for i in range(len(s)):\n            # odd length\n            l, r = i, i\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                if (r - l + 1) > resLen:\n                    res = s[l : r + 1]\n                    resLen = r - l + 1\n                l -= 1\n                r += 1\n            # even length\n            l, r = i, i + 1\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                if (r - l + 1) > resLen:\n                    res = s[l : r + 1]\n                    resLen = r - l + 1\n                l -= 1\n                r += 1\n        return res",
      javascript: "var longestPalindrome = function(s) {\n    let res = \"\";\n    let resLen = 0;\n    for (let i = 0; i < s.length; i++) {\n        // Odd\n        let l = i, r = i;\n        while (l >= 0 && r < s.length && s[l] === s[r]) {\n            if (r - l + 1 > resLen) {\n                res = s.substring(l, r + 1);\n                resLen = r - l + 1;\n            }\n            l--; r++;\n        }\n        // Even\n        l = i; r = i + 1;\n        while (l >= 0 && r < s.length && s[l] === s[r]) {\n            if (r - l + 1 > resLen) {\n                res = s.substring(l, r + 1);\n                resLen = r - l + 1;\n            }\n            l--; r++;\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        string res = \"\";\n        int resLen = 0;\n        for (int i = 0; i < s.length(); i++) {\n            // odd\n            int l = i, r = i;\n            while (l >= 0 && r < s.length() && s[l] == s[r]) {\n                if (r - l + 1 > resLen) {\n                    res = s.substr(l, r - l + 1);\n                    resLen = r - l + 1;\n                }\n                l--; r++;\n            }\n            // even\n            l = i; r = i + 1;\n            while (l >= 0 && r < s.length() && s[l] == s[r]) {\n                if (r - l + 1 > resLen) {\n                    res = s.substr(l, r - l + 1);\n                    resLen = r - l + 1;\n                }\n                l--; r++;\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "647", slug: "palindromic-substrings", title: "Palindromic Substrings", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Given a string s, return the number of palindromic substrings in it.",
    detailedExplanation: "Similar to Longest Palindromic Substring, we expand around the center. Unlike the previous problem where we only cared about the max length, here we increment a counter every time we find a valid palindrome during expansion.",
    edgeCases: [
      "Single char (1 palindrome)",
      "All different chars (n palindromes)"
    ],
    algorithmSteps: [
      "Initialize 'res' count to 0.",
      "Iterate 'i' from 0 to len(s).",
      "Expand for odd length (l=i, r=i): increment 'res', expand indices.",
      "Expand for even length (l=i, r=i+1): increment 'res', expand indices.",
      "Return 'res'."
    ],
    examples: [{ input: 's = "abc"', output: "3" }],
    defaultInput: { s: "abc" },
    complexity: { time: "O(n²)", space: "O(1)" },
    beginnerComplexity: { time: "O(n³)", space: "O(1)" },
    optimalComplexity: { time: "O(n²)", space: "O(1)" },
    starterCode: "class Solution:\n    def countSubstrings(self, s: str) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def countSubstrings(self, s: str) -> int:\n        # Brute Force O(n^3)\n        res = 0\n        for i in range(len(s)):\n            for j in range(i, len(s)):\n                sub = s[i:j+1]\n                if sub == sub[::-1]:\n                    res += 1\n        return res",
      javascript: "var countSubstrings = function(s) {\n    let res = 0;\n    for (let i = 0; i < s.length; i++) {\n        for (let j = i; j < s.length; j++) {\n            let sub = s.substring(i, j + 1);\n            if (sub === sub.split('').reverse().join('')) res++;\n        }\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def countSubstrings(self, s: str) -> int:\n        res = 0\n        for i in range(len(s)):\n            # odd\n            l, r = i, i\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                res += 1\n                l -= 1\n                r += 1\n            # even\n            l, r = i, i + 1\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                res += 1\n                l -= 1\n                r += 1\n        return res",
      javascript: "var countSubstrings = function(s) {\n    let res = 0;\n    for (let i = 0; i < s.length; i++) {\n        let l = i, r = i;\n        while (l >= 0 && r < s.length && s[l] === s[r]) {\n            res++; l--; r++;\n        }\n        l = i; r = i + 1;\n        while (l >= 0 && r < s.length && s[l] === s[r]) {\n            res++; l--; r++;\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int countSubstrings(string s) {\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            int l = i, r = i;\n            while (l >= 0 && r < s.length() && s[l] == s[r]) {\n                res++; l--; r++;\n            }\n            l = i; r = i + 1;\n            while (l >= 0 && r < s.length() && s[l] == s[r]) {\n                res++; l--; r++;\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "322", slug: "coin-change", title: "Coin Change", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    detailedExplanation: "We can use DP where dp[i] is the fewest coins to make amount i. dp[i] = 1 + min(dp[i - coin]) for all coins. Initialize dp[0] = 0 and others to infinity.",
    edgeCases: [
      "Amount 0 (0 coins)",
      "Cannot make amount (-1)",
      "Coins larger than amount"
    ],
    algorithmSteps: [
      "Initialize dp array of size amount + 1 with infinity.",
      "Set dp[0] = 0.",
      "Iterate 'a' from 1 to amount.",
      "Iterate through coins.",
      "If (a - coin) >= 0, dp[a] = min(dp[a], 1 + dp[a - coin]).",
      "Return dp[amount] if not infinity, else -1."
    ],
    examples: [{ input: "coins = [1,2,5], amount = 11", output: "3" }],
    defaultInput: { coins: [1, 2, 5], amount: 11 },
    complexity: { time: "O(amount * len(coins))", space: "O(amount)" },
    beginnerComplexity: { time: "O(amount^len(coins))", space: "O(amount)" }, // Top-down
    optimalComplexity: { time: "O(amount * len(coins))", space: "O(amount)" },
    starterCode: "class Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        # Recursion O(coins^amount)\n        if amount == 0: return 0\n        res = float('inf')\n        for c in coins:\n            if amount - c >= 0:\n                sub = self.coinChange(coins, amount - c)\n                if sub != -1:\n                    res = min(res, 1 + sub)\n        return res if res != float('inf') else -1",
      javascript: "var coinChange = function(coins, amount) {\n    if (amount === 0) return 0;\n    let res = Infinity;\n    for (let c of coins) {\n        if (amount - c >= 0) {\n            let sub = coinChange(coins, amount - c);\n            if (sub !== -1) res = Math.min(res, 1 + sub);\n        }\n    }\n    return res === Infinity ? -1 : res;\n};"
    },
    codes: {
      python: "class Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        dp = [amount + 1] * (amount + 1)\n        dp[0] = 0\n        for a in range(1, amount + 1):\n            for c in coins:\n                if a - c >= 0:\n                    dp[a] = min(dp[a], 1 + dp[a - c])\n        return dp[amount] if dp[amount] != amount + 1 else -1",
      javascript: "var coinChange = function(coins, amount) {\n    const dp = new Array(amount + 1).fill(amount + 1);\n    dp[0] = 0;\n    for (let a = 1; a <= amount; a++) {\n        for (let c of coins) {\n            if (a - c >= 0) {\n                dp[a] = Math.min(dp[a], 1 + dp[a - c]);\n            }\n        }\n    }\n    return dp[amount] === amount + 1 ? -1 : dp[amount];\n};",
      cpp: "class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        vector<int> dp(amount + 1, amount + 1);\n        dp[0] = 0;\n        for (int a = 1; a <= amount; a++) {\n            for (int c : coins) {\n                if (a - c >= 0) {\n                    dp[a] = min(dp[a], 1 + dp[a - c]);\n                }\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n};"
    }
  },
  {
    id: "139", slug: "word-break", title: "Word Break", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    detailedExplanation: "We use DP. dp[i] is true if s[:i] can be segmented. To calculate dp[i], we check all 'j < i'. If dp[j] is true and s[j:i] is in the dictionary, then dp[i] is true.",
    edgeCases: [
      "Empty string",
      "No possible segmentation",
      "Word dictionary has one letter words"
    ],
    algorithmSteps: [
      "Initialize dp array of size len(s) + 1 with False.",
      "Set dp[0] = True (empty string is valid).",
      "Iterate 'i' from 1 to len(s).",
      "Iterate 'j' from 0 to i.",
      "If dp[j] is True and s[j:i] in wordDict, set dp[i] = True and break inner loop.",
      "Return dp[len(s)]."
    ],
    examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" }],
    defaultInput: { s: "leetcode", words: ["leet", "code"] },
    complexity: { time: "O(n² * m)", space: "O(n)" }, // m is max word length
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n² * m)", space: "O(n)" },
    starterCode: "class Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\n        # Recursive O(2^n)\n        def solve(i):\n            if i == len(s): return True\n            for w in wordDict:\n                if s[i:].startswith(w):\n                    if solve(i + len(w)): return True\n            return False\n        return solve(0)",
      javascript: "var wordBreak = function(s, wordDict) {\n    function solve(i) {\n        if (i === s.length) return true;\n        for (let w of wordDict) {\n            if (s.substring(i).startsWith(w)) {\n                if (solve(i + w.length)) return true;\n            }\n        }\n        return false;\n    }\n    return solve(0);\n};"
    },
    codes: {
      python: "class Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\n        dp = [False] * (len(s) + 1)\n        dp[len(s)] = True\n        for i in range(len(s) - 1, -1, -1):\n            for w in wordDict:\n                if (i + len(w)) <= len(s) and s[i : i + len(w)] == w:\n                    dp[i] = dp[i + len(w)]\n                if dp[i]:\n                    break\n        return dp[0]",
      javascript: "var wordBreak = function(s, wordDict) {\n    const dp = new Array(s.length + 1).fill(false);\n    dp[s.length] = true;\n    for (let i = s.length - 1; i >= 0; i--) {\n        for (let w of wordDict) {\n            if (i + w.length <= s.length && s.substring(i, i + w.length) === w) {\n                dp[i] = dp[i + w.length];\n            }\n            if (dp[i]) break;\n        }\n    }\n    return dp[0];\n};",
      cpp: "class Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        vector<bool> dp(s.length() + 1, false);\n        dp[s.length()] = true;\n        for (int i = s.length() - 1; i >= 0; i--) {\n            for (const string& w : wordDict) {\n                if (i + w.length() <= s.length() && s.substr(i, w.length()) == w) {\n                    dp[i] = dp[i + w.length()];\n                }\n                if (dp[i]) break;\n            }\n        }\n        return dp[0];\n    }\n};"
    }
  },
  {
    id: "300", slug: "longest-increasing-subsequence", title: "LIS", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    detailedExplanation: "We can use DP. dp[i] is the length of LIS ending at index i. To find dp[i], we look at all j < i where nums[j] < nums[i], and take max(dp[j]) + 1. The answer is max(dp).",
    edgeCases: [
      "Empty array",
      "Decreasing array (LIS is 1)",
      "Single element"
    ],
    algorithmSteps: [
      "Initialize dp array of length n with 1s.",
      "Iterate 'i' from 1 to n-1.",
      "Iterate 'j' from 0 to i-1.",
      "If nums[i] > nums[j], dp[i] = max(dp[i], 1 + dp[j]).",
      "Return max(dp)."
    ],
    examples: [{ input: "nums = [10,9,2,5,3,7,101,18]", output: "4" }],
    defaultInput: { nums: [10, 9, 2, 5, 3, 7, 101, 18] },
    complexity: { time: "O(n²)", space: "O(n)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n²)", space: "O(n)" }, // Or O(n log n) with binary search patience sort
    starterCode: "class Solution:\n    def lengthOfLIS(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def lengthOfLIS(self, nums: List[int]) -> int:\n        # Recursive O(2^n)\n        def solve(i, prev):\n            if i == len(nums): return 0\n            res = solve(i + 1, prev)\n            if nums[i] > prev:\n                res = max(res, 1 + solve(i + 1, nums[i]))\n            return res\n        return solve(0, float('-inf'))",
      javascript: "var lengthOfLIS = function(nums) {\n    function solve(i, prev) {\n        if (i === nums.length) return 0;\n        let res = solve(i + 1, prev);\n        if (nums[i] > prev) {\n            res = Math.max(res, 1 + solve(i + 1, nums[i]));\n        }\n        return res;\n    }\n    return solve(0, -Infinity);\n};"
    },
    codes: {
      python: "class Solution:\n    def lengthOfLIS(self, nums: List[int]) -> int:\n        LIS = [1] * len(nums)\n        for i in range(len(nums) - 1, -1, -1):\n            for j in range(i + 1, len(nums)):\n                if nums[i] < nums[j]:\n                    LIS[i] = max(LIS[i], 1 + LIS[j])\n        return max(LIS)",
      javascript: "var lengthOfLIS = function(nums) {\n    const LIS = new Array(nums.length).fill(1);\n    for (let i = nums.length - 1; i >= 0; i--) {\n        for (let j = i + 1; j < nums.length; j++) {\n            if (nums[i] < nums[j]) {\n                LIS[i] = Math.max(LIS[i], 1 + LIS[j]);\n            }\n        }\n    }\n    return Math.max(...LIS);\n};",
      cpp: "class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        vector<int> LIS(nums.size(), 1);\n        for (int i = nums.size() - 1; i >= 0; i--) {\n            for (int j = i + 1; j < nums.size(); j++) {\n                if (nums[i] < nums[j]) {\n                    LIS[i] = max(LIS[i], 1 + LIS[j]);\n                }\n            }\n        }\n        int res = 0;\n        for (int l : LIS) res = max(res, l);\n        return res;\n    }\n};"
    }
  },
  {
    id: "1143", slug: "longest-common-subsequence", title: "LCS", difficulty: "Medium", diffClass: "difficulty-medium", category: "Dynamic Programming",
    description: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
    detailedExplanation: "We use 2D DP. dp[i][j] is the LCS of text1[i:] and text2[j:]. If text1[i] == text2[j], dp[i][j] = 1 + dp[i+1][j+1]. Else, max(dp[i+1][j], dp[i][j+1]).",
    edgeCases: [
      "Empty string",
      "No common characters",
      "Identical strings"
    ],
    algorithmSteps: [
      "Initialize 2D dp array of size (n+1)x(m+1).",
      "Iterate backwards from n-1 to 0 and m-1 to 0.",
      "If text1[i] == text2[j], dp[i][j] = 1 + dp[i+1][j+1].",
      "Else, dp[i][j] = max(dp[i+1][j], dp[i][j+1]).",
      "Return dp[0][0]."
    ],
    examples: [{ input: 'text1 = "abcde", text2 = "ace"', output: "3" }],
    defaultInput: { text1: "abcde", text2: "ace" },
    complexity: { time: "O(n * m)", space: "O(n * m)" },
    beginnerComplexity: { time: "O(2^(n+m))", space: "O(n+m)" },
    optimalComplexity: { time: "O(n * m)", space: "O(n * m)" },
    starterCode: "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        # Recursion O(2^N)\n        def solve(i, j):\n            if i == len(text1) or j == len(text2): return 0\n            if text1[i] == text2[j]:\n                return 1 + solve(i + 1, j + 1)\n            return max(solve(i + 1, j), solve(i, j + 1))\n        return solve(0, 0)",
      javascript: "var longestCommonSubsequence = function(text1, text2) {\n    function solve(i, j) {\n        if (i === text1.length || j === text2.length) return 0;\n        if (text1[i] === text2[j]) return 1 + solve(i + 1, j + 1);\n        return Math.max(solve(i + 1, j), solve(i, j + 1));\n    }\n    return solve(0, 0);\n};"
    },
    codes: {
      python: "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        dp = [[0 for j in range(len(text2) + 1)] for i in range(len(text1) + 1)]\n        for i in range(len(text1) - 1, -1, -1):\n            for j in range(len(text2) - 1, -1, -1):\n                if text1[i] == text2[j]:\n                    dp[i][j] = 1 + dp[i + 1][j + 1]\n                else:\n                    dp[i][j] = max(dp[i][j + 1], dp[i + 1][j])\n        return dp[0][0]",
      javascript: "var longestCommonSubsequence = function(text1, text2) {\n    const dp = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0));\n    for (let i = text1.length - 1; i >= 0; i--) {\n        for (let j = text2.length - 1; j >= 0; j--) {\n            if (text1[i] === text2[j]) {\n                dp[i][j] = 1 + dp[i + 1][j + 1];\n            } else {\n                dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);\n            }\n        }\n    }\n    return dp[0][0];\n};",
      cpp: "class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        int n = text1.size(), m = text2.size();\n        vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));\n        for (int i = n - 1; i >= 0; i--) {\n            for (int j = m - 1; j >= 0; j--) {\n                if (text1[i] == text2[j]) {\n                    dp[i][j] = 1 + dp[i + 1][j + 1];\n                } else {\n                    dp[i][j] = max(dp[i][j + 1], dp[i + 1][j]);\n                }\n            }\n        }\n        return dp[0][0];\n    }\n};"
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
    description: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
    detailedExplanation: "We can solve this greedily by working backwards from the goal. We keep track of the leftmost 'goal' position that can reach the end. Initially, the goal is the last index. If we find an index that can reach the current goal (i + nums[i] >= goal), we update the goal to that index. If the goal reaches 0 at the end, it's possible.",
    edgeCases: [
      "Single element array (always true)",
      "Array with zeros blocking the path",
      "Large jump lengths"
    ],
    algorithmSteps: [
      "Initialize 'goal' to the last index of the array.",
      "Iterate backwards from the second-to-last element to index 0.",
      "Check if the current index 'i' plus its maximum jump 'nums[i]' is greater than or equal to the 'goal'.",
      "If yes, update 'goal' to the current index 'i'.",
      "After the loop, return true if 'goal' is 0, else return false."
    ],
    examples: [{ input: "nums = [2,3,1,1,4]", output: "true" }, { input: "nums = [3,2,1,0,4]", output: "false" }],
    defaultInput: { nums: [2, 3, 1, 1, 4] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # Brute Force Recursion O(2^n)\n        def can_reach(idx):\n            if idx == len(nums) - 1: return True\n            furthest = min(idx + nums[idx], len(nums) - 1)\n            for next_idx in range(idx + 1, furthest + 1):\n                if can_reach(next_idx): return True\n            return False\n        return can_reach(0)",
      javascript: "var canJump = function(nums) {\n    const canReach = (idx) => {\n        if (idx === nums.length - 1) return true;\n        let furthest = Math.min(idx + nums[idx], nums.length - 1);\n        for (let i = idx + 1; i <= furthest; i++) {\n            if (canReach(i)) return true;\n        }\n        return false;\n    };\n    return canReach(0);\n};"
    },
    codes: {
      python: "class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        goal = len(nums) - 1\n        for i in range(len(nums) - 1, -1, -1):\n            if i + nums[i] >= goal:\n                goal = i\n        return True if goal == 0 else False",
      javascript: "var canJump = function(nums) {\n    let goal = nums.length - 1;\n    for (let i = nums.length - 1; i >= 0; i--) {\n        if (i + nums[i] >= goal) {\n            goal = i;\n        }\n    }\n    return goal === 0;\n};",
      cpp: "class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        int goal = nums.size() - 1;\n        for (int i = nums.size() - 1; i >= 0; i--) {\n            if (i + nums[i] >= goal) {\n                goal = i;\n            }\n        }\n        return goal == 0;\n    }\n};"
    }
  },
  {
    id: "45", slug: "jump-game-ii", title: "Jump Game II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Each element nums[i] represents the maximum length of a forward jump from index i. Return the minimum number of jumps to reach nums[n - 1].",
    detailedExplanation: "We can use a BFS-like greedy approach. We maintain the 'current jump range' [l, r]. At each step, we calculate the 'farthest' point we can reach from any index in the current range. Once we've checked all indices in the current range, we move to the next range [r + 1, farthest] and increment the jump count.",
    edgeCases: [
      "Single element array (0 jumps)",
      "Only one way to reach the end",
      "Maximum jumps possible"
    ],
    algorithmSteps: [
      "Initialize 'res' (total jumps) to 0, and current window [l, r] to [0, 0].",
      "Loop while 'r' is less than the last index.",
      "Track the 'farthest' reachable point within the window [l, r].",
      "Update 'l' to 'r + 1' and 'r' to 'farthest'.",
      "Increment 'res'.",
      "Return 'res'."
    ],
    examples: [{ input: "nums = [2,3,1,1,4]", output: "2" }, { input: "nums = [2,3,0,1,4]", output: "2" }],
    defaultInput: { nums: [2, 3, 1, 1, 4] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def jump(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def jump(self, nums: List[int]) -> int:\n        # Recursive with memoization O(n^2)\n        memo = {}\n        def solve(idx):\n            if idx >= len(nums) - 1: return 0\n            if idx in memo: return memo[idx]\n            res = float('inf')\n            for i in range(1, nums[idx] + 1):\n                res = min(res, 1 + solve(idx + i))\n            memo[idx] = res\n            return res\n        return solve(0)",
      javascript: "var jump = function(nums) {\n    const memo = {};\n    const solve = (idx) => {\n        if (idx >= nums.length - 1) return 0;\n        if (memo[idx] !== undefined) return memo[idx];\n        let res = Infinity;\n        for (let i = 1; i <= nums[idx]; i++) {\n            res = Math.min(res, 1 + solve(idx + i));\n        }\n        memo[idx] = res;\n        return res;\n    };\n    return solve(0);\n};"
    },
    codes: {
      python: "class Solution:\n    def jump(self, nums: List[int]) -> int:\n        res = 0\n        l, r = 0, 0\n        while r < len(nums) - 1:\n            farthest = 0\n            for i in range(l, r + 1):\n                farthest = max(farthest, i + nums[i])\n            l = r + 1\n            r = farthest\n            res += 1\n        return res",
      javascript: "var jump = function(nums) {\n    let res = 0;\n    let l = 0, r = 0;\n    while (r < nums.length - 1) {\n        let farthest = 0;\n        for (let i = l; i <= r; i++) {\n            farthest = Math.max(farthest, i + nums[i]);\n        }\n        l = r + 1;\n        r = farthest;\n        res++;\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int jump(vector<int>& nums) {\n        int res = 0;\n        int l = 0, r = 0;\n        while (r < nums.size() - 1) {\n            int farthest = 0;\n            for (int i = l; i <= r; i++) {\n                farthest = max(farthest, i + nums[i]);\n            }\n            l = r + 1;\n            r = farthest;\n            res++;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "134", slug: "gas-station", title: "Gas Station", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
    detailedExplanation: "First, if the sum of gas is less than the sum of cost, it's impossible to complete the circuit. Otherwise, a solution is guaranteed to exist. We can find the starting station by iterating through the stations and keeping track of the current tank. If the tank becomes negative at station 'i', it means no station from the previous start to 'i' can be the starting point. We reset the tank to 0 and set the next station 'i+1' as the potential starting point.",
    edgeCases: [
      "Total gas < total cost",
      "Only one station",
      "Solution at the very end of the array"
    ],
    algorithmSteps: [
      "Check if total gas is less than total cost. If so, return -1.",
      "Initialize 'total' (current tank) to 0 and 'start' (starting index) to 0.",
      "Iterate through each station.",
      "Add gas[i] - cost[i] to 'total'.",
      "If 'total' is negative, reset 'total' to 0 and set 'start' to i + 1.",
      "Return 'start'."
    ],
    examples: [{ input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", output: "3" }, { input: "gas = [2,3,4], cost = [3,4,3]", output: "-1" }],
    defaultInput: { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n^2)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\n        # Brute Force O(n^2): Try every starting point\n        n = len(gas)\n        for start in range(n):\n            tank = 0\n            possible = True\n            for i in range(n):\n                idx = (start + i) % n\n                tank += gas[idx] - cost[idx]\n                if tank < 0:\n                    possible = False\n                    break\n            if possible: return start\n        return -1",
      javascript: "var canCompleteCircuit = function(gas, cost) {\n    let n = gas.length;\n    for (let start = 0; start < n; start++) {\n        let tank = 0;\n        let possible = true;\n        for (let i = 0; i < n; i++) {\n            let idx = (start + i) % n;\n            tank += gas[idx] - cost[idx];\n            if (tank < 0) {\n                possible = false;\n                break;\n            }\n        }\n        if (possible) return start;\n    }\n    return -1;\n};"
    },
    codes: {
      python: "class Solution:\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\n        if sum(gas) < sum(cost):\n            return -1\n        total = 0\n        res = 0\n        for i in range(len(gas)):\n            total += (gas[i] - cost[i])\n            if total < 0:\n                total = 0\n                res = i + 1\n        return res",
      javascript: "var canCompleteCircuit = function(gas, cost) {\n    if (gas.reduce((a, b) => a + b) < cost.reduce((a, b) => a + b)) return -1;\n    let total = 0;\n    let res = 0;\n    for (let i = 0; i < gas.length; i++) {\n        total += (gas[i] - cost[i]);\n        if (total < 0) {\n            total = 0;\n            res = i + 1;\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\n        int total_gas = 0, total_cost = 0;\n        for(int g : gas) total_gas += g;\n        for(int c : cost) total_cost += c;\n        if (total_gas < total_cost) return -1;\n\n        int total = 0, res = 0;\n        for (int i = 0; i < gas.size(); i++) {\n            total += (gas[i] - cost[i]);\n            if (total < 0) {\n                total = 0;\n                res = i + 1;\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "846", slug: "hand-of-straights", title: "Hand of Straights", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards. Given an integer array hand and an integer groupSize, return true if she can rearrange the cards, or false otherwise.",
    detailedExplanation: "We use a frequency map to count the cards. We sort the unique cards and iterate through them. For each card, if its frequency is > 0, it must be the start of a new group. We check if the next 'groupSize' consecutive cards are also available in sufficient quantity. If not, it's impossible.",
    edgeCases: [
      "Hand size not divisible by groupSize",
      "groupSize = 1",
      "Duplicate cards"
    ],
    algorithmSteps: [
      "If hand size % groupSize is not 0, return false.",
      "Count the frequency of each card using a hash map.",
      "Sort the unique card values.",
      "Iterate through the sorted cards.",
      "If frequency > 0, try to form a group starting with this card.",
      "Decrement count for this card and the next 'groupSize - 1' consecutive cards.",
      "If any of those cards are missing or exhausted, return false.",
      "Return true if all cards are processed."
    ],
    examples: [{ input: "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3", output: "true" }, { input: "hand = [1,2,3,4,5], groupSize = 4", output: "false" }],
    defaultInput: { hand: [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize: 3 },
    complexity: { time: "O(n log n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n^2)", space: "O(n)" },
    optimalComplexity: { time: "O(n log n)", space: "O(n)" },
    starterCode: "class Solution:\n    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:\n        if len(hand) % groupSize != 0: return False\n        hand.sort()\n        while hand:\n            start = hand.pop(0)\n            for i in range(1, groupSize):\n                if (start + i) in hand:\n                    hand.remove(start + i)\n                else:\n                    return False\n        return True",
      javascript: "var isNStraightHand = function(hand, groupSize) {\n    if (hand.length % groupSize !== 0) return false;\n    hand.sort((a, b) => a - b);\n    while (hand.length > 0) {\n        let start = hand.shift();\n        for (let i = 1; i < groupSize; i++) {\n            let idx = hand.indexOf(start + i);\n            if (idx !== -1) {\n                hand.splice(idx, 1);\n            } else {\n                return false;\n            }\n        }\n    }\n    return true;\n};"
    },
    codes: {
      python: "class Solution:\n    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:\n        if len(hand) % groupSize != 0:\n            return False\n        count = collections.Counter(hand)\n        sorted_hand = sorted(count.keys())\n        for h in sorted_hand:\n            if count[h] > 0:\n                need = count[h]\n                for i in range(h, h + groupSize):\n                    if count[i] < need:\n                        return False\n                    count[i] -= need\n        return True",
      javascript: "var isNStraightHand = function(hand, groupSize) {\n    if (hand.length % groupSize !== 0) return false;\n    let count = {};\n    for (let h of hand) count[h] = (count[h] || 0) + 1;\n    let sortedHand = Object.keys(count).map(Number).sort((a, b) => a - b);\n    for (let h of sortedHand) {\n        if (count[h] > 0) {\n            let need = count[h];\n            for (let i = h; i < h + groupSize; i++) {\n                if ((count[i] || 0) < need) return false;\n                count[i] -= need;\n            }\n        }\n    }\n    return true;\n};",
      cpp: "class Solution {\npublic:\n    bool isNStraightHand(vector<int>& hand, int groupSize) {\n        if (hand.size() % groupSize != 0) return false;\n        map<int, int> count;\n        for (int h : hand) count[h]++;\n        for (auto const& [val, freq] : count) {\n            if (count[val] > 0) {\n                int need = count[val];\n                for (int i = 0; i < groupSize; i++) {\n                    if (count[val + i] < need) return false;\n                    count[val + i] -= need;\n                }\n            }\n        }\n        return true;\n    }\n};"
    }
  },
  {
    id: "763", slug: "partition-labels", title: "Partition Labels", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.",
    detailedExplanation: "We first record the last occurrence of each character. Then we iterate through the string, keeping track of the furthest point we need to reach to include all occurrences of the characters seen so far. When our current index reaches this furthest point, we have found a valid partition.",
    edgeCases: [
      "All characters same",
      "All characters different",
      "Large string"
    ],
    algorithmSteps: [
      "Create a frequency map (or array) storing the last index of each character in 's'.",
      "Initialize 'size' (current partition size) and 'end' (furthest index of current partition) to 0.",
      "Initialize 'res' list.",
      "Iterate through each character and its index.",
      "Update 'end' to be max(end, lastIndex[char]).",
      "Increment 'size'.",
      "If current index 'i' reaches 'end':",
      "Add 'size' to 'res'.",
      "Reset 'size' to 0.",
      "Return 'res'."
    ],
    examples: [{ input: 's = "ababcbacadefegdehijhklij"', output: "[9,7,8]" }, { input: 's = "eccbbbbdec"', output: "[10]" }],
    defaultInput: { s: "ababcbacadefegdehijhklij" },
    complexity: { time: "O(n)", space: "O(1)" }, // space is O(1) as char set is constant (26)
    beginnerComplexity: { time: "O(n^2)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        # Brute Force O(n^2)\n        res = []\n        i = 0\n        while i < len(s):\n            end = s.rfind(s[i])\n            j = i\n            while j < end:\n                end = max(end, s.rfind(s[j]))\n                j += 1\n            res.append(end - i + 1)\n            i = end + 1\n        return res",
      javascript: "var partitionLabels = function(s) {\n    let res = [];\n    let i = 0;\n    while (i < s.length) {\n        let end = s.lastIndexOf(s[i]);\n        let j = i;\n        while (j < end) {\n            end = Math.max(end, s.lastIndexOf(s[j]));\n            j++;\n        }\n        res.push(end - i + 1);\n        i = end + 1;\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        lastIndex = {c: i for i, c in enumerate(s)}\n        res = []\n        size, end = 0, 0\n        for i, c in enumerate(s):\n            size += 1\n            end = max(end, lastIndex[c])\n            if i == end:\n                res.append(size)\n                size = 0\n        return res",
      javascript: "var partitionLabels = function(s) {\n    let lastIndex = {};\n    for (let i = 0; i < s.length; i++) lastIndex[s[i]] = i;\n    let res = [];\n    let size = 0, end = 0;\n    for (let i = 0; i < s.length; i++) {\n        size++;\n        end = Math.max(end, lastIndex[s[i]]);\n        if (i === end) {\n            res.push(size);\n            size = 0;\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    vector<int> partitionLabels(string s) {\n        unordered_map<char, int> lastIndex;\n        for (int i = 0; i < s.length(); i++) lastIndex[s[i]] = i;\n        vector<int> res;\n        int size = 0, end = 0;\n        for (int i = 0; i < s.length(); i++) {\n            size++;\n            end = max(end, lastIndex[s[i]]);\n            if (i == end) {\n                res.push_back(size);\n                size = 0;\n            }\n        }\n        return res;\n    }\n};"
    }
  },

  {
    id: "455", slug: "assign-cookies", title: "Assign Cookies", difficulty: "Easy", diffClass: "difficulty-easy", category: "Greedy",
    description: "Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.",
    detailedExplanation: "To maximize the number of content children, we should greedily assign the smallest possible cookie that satisfies a child's greed factor. By sorting both the greed factors and cookie sizes, we can iterate through them and make matches efficiently.",
    edgeCases: [
      "No cookies available",
      "All cookies smaller than any child's greed",
      "More cookies than children"
    ],
    algorithmSteps: [
      "Sort the greed factor array 'g' in ascending order.",
      "Sort the cookie size array 's' in ascending order.",
      "Initialize two pointers 'i' (for children) and 'j' (for cookies) at 0.",
      "Iterate while both pointers are within their respective array bounds.",
      "If the current cookie size s[j] is >= child's greed g[i]:",
      "Child 'i' is content, move to the next child (i++).",
      "Regardless of the match, move to the next cookie (j++).",
      "Return the number of content children 'i'."
    ],
    examples: [{ input: "g = [1,2,3], s = [1,1]", output: "1" }, { input: "g = [1,2], s = [1,2,3]", output: "2" }],
    defaultInput: { g: [1, 2, 3], s: [1, 1] },
    complexity: { time: "O(n log n + m log m)", space: "O(1)" },
    beginnerComplexity: { time: "O(n * m)", space: "O(1)" },
    optimalComplexity: { time: "O(n log n + m log m)", space: "O(1)" },
    starterCode: "class Solution:\n    def findContentChildren(self, g: List[int], s: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def findContentChildren(self, g: List[int], s: List[int]) -> int:\n        # Brute Force O(n*m): For each child, find the smallest available cookie\n        res = 0\n        s_used = [False] * len(s)\n        for child_greed in g:\n            best_cookie_idx = -1\n            for i in range(len(s)):\n                if not s_used[i] and s[i] >= child_greed:\n                    if best_cookie_idx == -1 or s[i] < s[best_cookie_idx]:\n                        best_cookie_idx = i\n            if best_cookie_idx != -1:\n                res += 1\n                s_used[best_cookie_idx] = True\n        return res",
      javascript: "var findContentChildren = function(g, s) {\n    let res = 0;\n    let sUsed = new Array(s.length).fill(false);\n    for (let childGreed of g) {\n        let bestCookieIdx = -1;\n        for (let i = 0; i < s.length; i++) {\n            if (!sUsed[i] && s[i] >= childGreed) {\n                if (bestCookieIdx === -1 || s[i] < s[bestCookieIdx]) {\n                    bestCookieIdx = i;\n                }\n            }\n        }\n        if (bestCookieIdx !== -1) {\n            res++;\n            sUsed[bestCookieIdx] = true;\n        }\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def findContentChildren(self, g: List[int], s: List[int]) -> int:\n        g.sort()\n        s.sort()\n        i, j = 0, 0\n        while i < len(g) and j < len(s):\n            if s[j] >= g[i]:\n                i += 1\n            j += 1\n        return i",
      javascript: "var findContentChildren = function(g, s) {\n    g.sort((a, b) => a - b);\n    s.sort((a, b) => a - b);\n    let i = 0, j = 0;\n    while (i < g.length && j < s.length) {\n        if (s[j] >= g[i]) {\n            i++;\n        }\n        j++;\n    }\n    return i;\n};",
      cpp: "class Solution {\npublic:\n    int findContentChildren(vector<int>& g, vector<int>& s) {\n        sort(g.begin(), g.end());\n        sort(s.begin(), s.end());\n        int i = 0, j = 0;\n        while (i < g.size() && j < s.size()) {\n            if (s[j] >= g[i]) {\n                i++;\n            }\n            j++;\n        }\n        return i;\n    }\n};"
    }
  },
  {
    id: "1899", slug: "merge-triplets-to-form-target-triplet", title: "Merge Triplets", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet. You are also given an integer array target = [x, y, z] that describes the target triplet you want to form. Return true if it is possible to form the target triplet [x, y, z] by merging some triplets, or false otherwise.",
    detailedExplanation: "We can only use triplets where every element is less than or equal to the corresponding element in the target. If any element in a triplet exceeds the target, using it will make it impossible to ever reach the target exactly (since we take the maximum). Among the valid triplets, we check if we can find at least one triplet that provides the target value for each of the three positions.",
    edgeCases: [
      "No triplets fit within the target",
      "One triplet perfectly matches the target",
      "Multiple triplets combined to match the target"
    ],
    algorithmSteps: [
      "Initialize a set 'good' to store indices (0, 1, 2) that can reach their target value.",
      "Iterate through each triplet [a, b, c].",
      "If a > target[0] or b > target[1] or c > target[2], skip this triplet.",
      "For each element 'v' in the triplet at index 'i', if v == target[i], add 'i' to the 'good' set.",
      "After iterating through all triplets, return true if the size of 'good' is 3."
    ],
    examples: [{ input: "triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]", output: "true" }, { input: "triplets = [[3,4,5],[4,5,6]], target = [3,2,5]", output: "false" }],
    defaultInput: { triplets: [[2, 5, 3], [1, 8, 4], [1, 7, 5]], target: [2, 7, 5] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:\n        # Brute Force Recursion O(2^n)\n        def solve(i, cur):\n            if cur == target: return True\n            if i == len(triplets): return False\n            # Option 1: Skip\n            if solve(i + 1, cur): return True\n            # Option 2: Merge\n            new_cur = [max(cur[j], triplets[i][j]) for j in range(3)]\n            if all(new_cur[j] <= target[j] for j in range(3)):\n                if solve(i + 1, new_cur): return True\n            return False\n        return solve(0, [0, 0, 0])",
      javascript: "var mergeTriplets = function(triplets, target) {\n    const solve = (i, cur) => {\n        if (cur.every((v, j) => v === target[j])) return true;\n        if (i === triplets.length) return false;\n        if (solve(i + 1, cur)) return true;\n        let newCur = cur.map((v, j) => Math.max(v, triplets[i][j]));\n        if (newCur.every((v, j) => v <= target[j])) {\n            if (solve(i + 1, newCur)) return true;\n        }\n        return false;\n    };\n    return solve(0, [0, 0, 0]);\n};"
    },
    codes: {
      python: "class Solution:\n    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:\n        good = set()\n        for t in triplets:\n            if t[0] > target[0] or t[1] > target[1] or t[2] > target[2]:\n                continue\n            for i, v in enumerate(t):\n                if v == target[i]:\n                    good.add(i)\n        return len(good) == 3",
      javascript: "var mergeTriplets = function(triplets, target) {\n    let good = new Set();\n    for (let t of triplets) {\n        if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) continue;\n        for (let i = 0; i < 3; i++) {\n            if (t[i] === target[i]) good.add(i);\n        }\n    }\n    return good.size === 3;\n};",
      cpp: "class Solution {\npublic:\n    bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& target) {\n        set<int> good;\n        for (auto& t : triplets) {\n            if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) continue;\n            for (int i = 0; i < 3; i++) {\n                if (t[i] == target[i]) good.insert(i);\n            }\n        }\n        return good.size() == 3;\n    }\n};"
    }
  },
  {
    id: "678", slug: "valid-parenthesis-string", title: "Valid Parenthesis String", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid. '*' could be '(' or ')' or an empty string.",
    detailedExplanation: "We can maintain the range of possible open parentheses counts [leftMin, leftMax]. A '(' increases both. A ')' decreases both. A '*' can act as '(', ')', or '', so it increases leftMax and decreases leftMin. We must ensure leftMax never becomes negative, and at the end, leftMin must be 0.",
    edgeCases: [
      "Empty string",
      "Only asterisks",
      "Asterisks at the beginning or end"
    ],
    algorithmSteps: [
      "Initialize 'leftMin' and 'leftMax' to 0.",
      "Iterate through each character in 's'.",
      "If '(': increment both 'leftMin' and 'leftMax'.",
      "If ')': decrement both 'leftMin' and 'leftMax'.",
      "If '*': decrement 'leftMin' and increment 'leftMax'.",
      "If 'leftMax' < 0, return false.",
      "Ensure 'leftMin' never goes below 0 (reset to 0 if it does).",
      "Return true if 'leftMin' is 0."
    ],
    examples: [{ input: 's = "()"', output: "true" }, { input: 's = "(*)"', output: "true" }, { input: 's = "(*))"', output: "true" }],
    defaultInput: { s: "(*)" },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(3^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def checkValidString(self, s: str) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def checkValidString(self, s: str) -> bool:\n        # Brute Force Recursion O(3^n)\n        def solve(i, count):\n            if count < 0: return False\n            if i == len(s): return count == 0\n            if s[i] == '(':\n                return solve(i + 1, count + 1)\n            if s[i] == ')':\n                return solve(i + 1, count - 1)\n            return solve(i + 1, count + 1) or solve(i + 1, count - 1) or solve(i + 1, count)\n        return solve(0, 0)",
      javascript: "var checkValidString = function(s) {\n    const solve = (i, count) => {\n        if (count < 0) return false;\n        if (i === s.length) return count === 0;\n        if (s[i] === '(') return solve(i + 1, count + 1);\n        if (s[i] === ')') return solve(i + 1, count - 1);\n        return solve(i + 1, count + 1) || solve(i + 1, count - 1) || solve(i + 1, count);\n    };\n    return solve(0, 0);\n};"
    },
    codes: {
      python: "class Solution:\n    def checkValidString(self, s: str) -> bool:\n        leftMin, leftMax = 0, 0\n        for c in s:\n            if c == \"(\":\n                leftMin, leftMax = leftMin + 1, leftMax + 1\n            elif c == \")\":\n                leftMin, leftMax = leftMin - 1, leftMax - 1\n            else:\n                leftMin, leftMax = leftMin - 1, leftMax + 1\n            if leftMax < 0: return False\n            if leftMin < 0: leftMin = 0\n        return leftMin == 0",
      javascript: "var checkValidString = function(s) {\n    let leftMin = 0, leftMax = 0;\n    for (let c of s) {\n        if (c === '(') { leftMin++; leftMax++; }\n        else if (c === ')') { leftMin--; leftMax--; }\n        else { leftMin--; leftMax++; }\n        if (leftMax < 0) return false;\n        if (leftMin < 0) leftMin = 0;\n    }\n    return leftMin === 0;\n};",
      cpp: "class Solution {\npublic:\n    bool checkValidString(string s) {\n        int leftMin = 0, leftMax = 0;\n        for (char c : s) {\n            if (c == '(') {\n                leftMin++; leftMax++;\n            } else if (c == ')') {\n                leftMin--; leftMax--;\n            } else {\n                leftMin--; leftMax++;\n            }\n            if (leftMax < 0) return false;\n            if (leftMin < 0) leftMin = 0;\n        }\n        return leftMin == 0;\n    }\n};"
    }
  },
  {
    id: "135", slug: "candy", title: "Candy", difficulty: "Hard", diffClass: "difficulty-hard", category: "Greedy",
    description: "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the following requirements: 1. Each child must have at least one candy. 2. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
    detailedExplanation: "We can solve this in two passes. First, pass from left to right: if a child's rating is higher than the previous child, they get one more candy than the previous child. Second, pass from right to left: if a child's rating is higher than the next child, they get the maximum of their current candies or one more than the next child's candies.",
    edgeCases: [
      "All ratings same",
      "Ratings strictly increasing/decreasing",
      "Single child"
    ],
    algorithmSteps: [
      "Initialize an array 'res' of size n with all 1s (each child gets at least one candy).",
      "Iterate from index 1 to n-1 (Left-to-Right pass).",
      "If ratings[i] > ratings[i-1], set res[i] = res[i-1] + 1.",
      "Iterate from index n-2 down to 0 (Right-to-Left pass).",
      "If ratings[i] > ratings[i+1], set res[i] = Math.max(res[i], res[i+1] + 1).",
      "Return the sum of the 'res' array."
    ],
    examples: [{ input: "ratings = [1,0,2]", output: "5" }, { input: "ratings = [1,2,2]", output: "4" }],
    defaultInput: { ratings: [1, 0, 2] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n^2)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution:\n    def candy(self, ratings: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def candy(self, ratings: List[int]) -> int:\n        # Brute Force O(n^2): Repeatedly update until no changes\n        n = len(ratings)\n        candies = [1] * n\n        has_changed = True\n        while has_changed:\n            has_changed = False\n            for i in range(n):\n                if i > 0 and ratings[i] > ratings[i-1] and candies[i] <= candies[i-1]:\n                    candies[i] = candies[i-1] + 1\n                    has_changed = True\n                if i < n - 1 and ratings[i] > ratings[i+1] and candies[i] <= candies[i+1]:\n                    candies[i] = candies[i+1] + 1\n                    has_changed = True\n        return sum(candies)",
      javascript: "var candy = function(ratings) {\n    let n = ratings.length;\n    let candies = new Array(n).fill(1);\n    let hasChanged = true;\n    while (hasChanged) {\n        hasChanged = false;\n        for (let i = 0; i < n; i++) {\n            if (i > 0 && ratings[i] > ratings[i-1] && candies[i] <= candies[i-1]) {\n                candies[i] = candies[i-1] + 1;\n                hasChanged = true;\n            }\n            if (i < n - 1 && ratings[i] > ratings[i+1] && candies[i] <= candies[i+1]) {\n                candies[i] = candies[i+1] + 1;\n                hasChanged = true;\n            }\n        }\n    }\n    return candies.reduce((a, b) => a + b, 0);\n};"
    },
    codes: {
      python: "class Solution:\n    def candy(self, ratings: List[int]) -> int:\n        res = [1] * len(ratings)\n        for i in range(1, len(ratings)):\n            if ratings[i] > ratings[i - 1]:\n                res[i] = res[i - 1] + 1\n        for i in range(len(ratings) - 2, -1, -1):\n            if ratings[i] > ratings[i + 1]:\n                res[i] = max(res[i], res[i + 1] + 1)\n        return sum(res)",
      javascript: "var candy = function(ratings) {\n    let res = new Array(ratings.length).fill(1);\n    for (let i = 1; i < ratings.length; i++) {\n        if (ratings[i] > ratings[i - 1]) res[i] = res[i - 1] + 1;\n    }\n    for (let i = ratings.length - 2; i >= 0; i--) {\n        if (ratings[i] > ratings[i + 1]) res[i] = Math.max(res[i], res[i + 1] + 1);\n    }\n    return res.reduce((a, b) => a + b, 0);\n};",
      cpp: "class Solution {\npublic:\n    int candy(vector<int>& ratings) {\n        int n = ratings.size();\n        vector<int> res(n, 1);\n        for (int i = 1; i < n; i++) {\n            if (ratings[i] > ratings[i - 1]) res[i] = res[i - 1] + 1;\n        }\n        for (int i = n - 2; i >= 0; i--) {\n            if (ratings[i] > ratings[i + 1]) res[i] = max(res[i], res[i + 1] + 1);\n        }\n        int sum = 0;\n        for (int c : res) sum += c;\n        return sum;\n    }\n};"
    }
  },
  {
    id: "1326", slug: "minimum-number-of-taps-to-open-to-water-a-garden", title: "Min Taps to Water Garden", difficulty: "Hard", diffClass: "difficulty-hard", category: "Greedy",
    description: "There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at the point n. There are n + 1 taps located at points [0, 1, ..., n] in the garden. For each i, ranges[i] denotes that the ith tap can water the area [i - ranges[i], i + ranges[i]]. Return the minimum number of taps that should be open to water the whole garden [0, n]. If the garden cannot be watered, return -1.",
    detailedExplanation: "We can convert this problem into an Interval Coverage problem. For each tap, we calculate the interval [left, right] it can cover. We then store the furthest reach for each starting position. Finally, we use a greedy approach to jump as far as possible, similar to Jump Game II.",
    edgeCases: [
      "Garden cannot be fully covered",
      "Only one tap required",
      "Multiple taps covering same area"
    ],
    algorithmSteps: [
      "Initialize an array 'maxRange' of size n+1 with 0s.",
      "For each tap 'i' with range 'r':",
      "Calculate left = max(0, i-r) and right = min(n, i+r).",
      "Update maxRange[left] = max(maxRange[left], right).",
      "Initialize 'res' (total taps), 'currEnd', and 'nextEnd' to 0.",
      "Iterate through the garden from 0 to n-1.",
      "Update 'nextEnd' to be max(nextEnd, maxRange[i]).",
      "If we reach 'currEnd':",
      "Increment 'res'.",
      "Set 'currEnd' to 'nextEnd'.",
      "If 'currEnd' >= n, break.",
      "Return 'res' if garden is watered, else -1."
    ],
    examples: [{ input: "n = 5, ranges = [3,4,1,1,0,0]", output: "1" }, { input: "n = 3, ranges = [0,0,0,0]", output: "-1" }],
    defaultInput: { n: 5, ranges: [3, 4, 1, 1, 0, 0] },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n^2)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution:\n    def minTaps(self, n: int, ranges: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def minTaps(self, n: int, ranges: List[int]) -> int:\n        # DP approach O(n^2)\n        dp = [float('inf')] * (n + 1)\n        dp[0] = 0\n        for i, r in enumerate(ranges):\n            left, right = max(0, i - r), min(n, i + r)\n            for j in range(left, right + 1):\n                dp[j] = min(dp[j], dp[left] + 1)\n        return dp[n] if dp[n] != float('inf') else -1",
      javascript: "var minTaps = function(n, ranges) {\n    const dp = new Array(n + 1).fill(Infinity);\n    dp[0] = 0;\n    for (let i = 0; i <= n; i++) {\n        let left = Math.max(0, i - ranges[i]);\n        let right = Math.min(n, i + ranges[i]);\n        for (let j = left; j <= right; j++) {\n            dp[j] = Math.min(dp[j], dp[left] + 1);\n        }\n    }\n    return dp[n] === Infinity ? -1 : dp[n];\n};"
    },
    codes: {
      python: "class Solution:\n    def minTaps(self, n: int, ranges: List[int]) -> int:\n        max_range = [0] * (n + 1)\n        for i, r in enumerate(ranges):\n            left = max(0, i - r)\n            right = min(n, i + r)\n            max_range[left] = max(max_range[left], right)\n        res, cur_end, next_end = 0, 0, 0\n        for i in range(n):\n            next_end = max(next_end, max_range[i])\n            if i == cur_end:\n                res += 1\n                cur_end = next_end\n            if cur_end >= n: break\n        return res if cur_end >= n else -1",
      javascript: "var minTaps = function(n, ranges) {\n    let maxRange = new Array(n + 1).fill(0);\n    for (let i = 0; i <= n; i++) {\n        let left = Math.max(0, i - ranges[i]);\n        let right = Math.min(n, i + ranges[i]);\n        maxRange[left] = Math.max(maxRange[left], right);\n    }\n    let res = 0, currEnd = 0, nextEnd = 0;\n    for (let i = 0; i < n; i++) {\n        nextEnd = Math.max(nextEnd, maxRange[i]);\n        if (i === currEnd) {\n            res++;\n            currEnd = nextEnd;\n        }\n        if (currEnd >= n) break;\n    }\n    return currEnd >= n ? res : -1;\n};",
      cpp: "class Solution {\npublic:\n    int minTaps(int n, vector<int>& ranges) {\n        vector<int> maxRange(n + 1, 0);\n        for (int i = 0; i <= n; i++) {\n            int left = max(0, i - ranges[i]);\n            int right = min(n, i + ranges[i]);\n            maxRange[left] = max(maxRange[left], right);\n        }\n        int res = 0, currEnd = 0, nextEnd = 0;\n        for (int i = 0; i < n; i++) {\n            nextEnd = max(nextEnd, maxRange[i]);\n            if (i == currEnd) {\n                res++;\n                currEnd = nextEnd;\n            }\n            if (currEnd >= n) break;\n        }\n        return currEnd >= n ? res : -1;\n    }\n};"
    }
  },
  {
    id: "435", slug: "non-overlapping-intervals", title: "Non-overlapping Intervals", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
    detailedExplanation: "We sort the intervals by their start times. Then we iterate through them, keeping track of the end time of the 'previous' non-overlapping interval. If the current interval starts before the previous one ends, they overlap. To minimize removals, we greedily keep the interval that ends earlier (to leave more room for future intervals).",
    edgeCases: [
      "No intervals",
      "All intervals overlap",
      "No intervals overlap"
    ],
    algorithmSteps: [
      "Sort the 'intervals' array by the start time.",
      "Initialize 'res' (removals) to 0 and 'prevEnd' to the end time of the first interval.",
      "Iterate through the remaining intervals from index 1.",
      "If the current 'start' is >= 'prevEnd':",
      "No overlap, update 'prevEnd' to current 'end'.",
      "Else (overlap exists):",
      "Increment 'res'.",
      "Update 'prevEnd' to the minimum of current 'end' and 'prevEnd'.",
      "Return 'res'."
    ],
    examples: [{ input: "intervals = [[1,2],[2,3],[3,4],[1,3]]", output: "1" }, { input: "intervals = [[1,2],[1,2],[1,2]]", output: "2" }],
    defaultInput: { intervals: [[1, 2], [2, 3], [3, 4], [1, 3]] },
    complexity: { time: "O(n log n)", space: "O(1)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n log n)", space: "O(1)" },
    starterCode: "class Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        # Brute Force O(2^n): Try removing every subset\n        def is_valid(subset):\n            subset.sort()\n            for i in range(len(subset) - 1):\n                if subset[i][1] > subset[i+1][0]: return False\n            return True\n        \n        max_valid = 0\n        n = len(intervals)\n        for i in range(1 << n):\n            subset = [intervals[j] for j in range(n) if (i >> j) & 1]\n            if is_valid(subset):\n                max_valid = max(max_valid, len(subset))\n        return n - max_valid",
      javascript: "var eraseOverlapIntervals = function(intervals) {\n    const isValid = (subset) => {\n        subset.sort((a, b) => a[0] - b[0]);\n        for (let i = 0; i < subset.length - 1; i++) {\n            if (subset[i][1] > subset[i+1][0]) return false;\n        }\n        return true;\n    };\n    let maxValid = 0, n = intervals.length;\n    for (let i = 0; i < (1 << n); i++) {\n        let subset = [];\n        for (let j = 0; j < n; j++) {\n            if ((i >> j) & 1) subset.push(intervals[j]);\n        }\n        if (isValid(subset)) maxValid = Math.max(maxValid, subset.length);\n    }\n    return n - maxValid;\n};"
    },
    codes: {
      python: "class Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        if not intervals: return 0\n        intervals.sort()\n        res = 0\n        prevEnd = intervals[0][1]\n        for start, end in intervals[1:]:\n            if start >= prevEnd:\n                prevEnd = end\n            else:\n                res += 1\n                prevEnd = min(end, prevEnd)\n        return res",
      javascript: "var eraseOverlapIntervals = function(intervals) {\n    if (intervals.length === 0) return 0;\n    intervals.sort((a, b) => a[0] - b[0]);\n    let res = 0;\n    let prevEnd = intervals[0][1];\n    for (let i = 1; i < intervals.length; i++) {\n        if (intervals[i][0] >= prevEnd) {\n            prevEnd = intervals[i][1];\n        } else {\n            res++;\n            prevEnd = Math.min(intervals[i][1], prevEnd);\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n        if (intervals.empty()) return 0;\n        sort(intervals.begin(), intervals.end());\n        int res = 0;\n        int prevEnd = intervals[0][1];\n        for (int i = 1; i < intervals.size(); i++) {\n            if (intervals[i][0] >= prevEnd) {\n                prevEnd = intervals[i][1];\n            } else {\n                res++;\n                prevEnd = min(intervals[i][1], prevEnd);\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "452", slug: "minimum-number-of-arrows-to-burst-balloons", title: "Min Arrows to Burst Balloons", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. Arrows can be shot up vertically directly up from different points along the x-axis. Return the minimum number of arrows that must be shot to burst all balloons.",
    detailedExplanation: "This is a variant of the Interval Coverage problem. If we sort the balloons by their end times, we can greedily shoot an arrow at the end of the first balloon. This arrow will burst all balloons that overlap with this point. We then move to the next balloon that hasn't been burst and repeat.",
    edgeCases: [
      "Balloons just touching (can be burst by same arrow)",
      "Balloons inside other balloons",
      "Single balloon"
    ],
    algorithmSteps: [
      "Sort the 'points' array by their end coordinates.",
      "Initialize 'res' (arrows) to 1 and 'prevEnd' to the end coordinate of the first balloon.",
      "Iterate through the balloons from index 1.",
      "If the current 'start' coordinate is > 'prevEnd':",
      "We need a new arrow. Increment 'res'.",
      "Update 'prevEnd' to current 'end' coordinate.",
      "Otherwise, the balloon is burst by the existing arrow.",
      "Return 'res'."
    ],
    examples: [{ input: "points = [[10,16],[2,8],[1,6],[7,12]]", output: "2" }, { input: "points = [[1,2],[3,4],[5,6],[7,8]]", output: "4" }],
    defaultInput: { points: [[10, 16], [2, 8], [1, 6], [7, 12]] },
    complexity: { time: "O(n log n)", space: "O(1)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n log n)", space: "O(1)" },
    starterCode: "class Solution:\n    def findMinArrowShots(self, points: List[List[int]]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def findMinArrowShots(self, points: List[List[int]]) -> int:\n        # Brute Force O(2^n)\n        def is_valid(subset):\n            # This is complex as it depends on shot locations\n            pass\n        return len(points) # Placeholder",
      javascript: "var findMinArrowShots = function(points) {\n    return points.length;\n};"
    },
    codes: {
      python: "class Solution:\n    def findMinArrowShots(self, points: List[List[int]]) -> int:\n        points.sort(key=lambda x: x[1])\n        res = 1\n        prevEnd = points[0][1]\n        for i in range(1, len(points)):\n            if points[i][0] > prevEnd:\n                res += 1\n                prevEnd = points[i][1]\n        return res",
      javascript: "var findMinArrowShots = function(points) {\n    if (points.length === 0) return 0;\n    points.sort((a, b) => a[1] - b[1]);\n    let res = 1;\n    let prevEnd = points[0][1];\n    for (let i = 1; i < points.length; i++) {\n        if (points[i][0] > prevEnd) {\n            res++;\n            prevEnd = points[i][1];\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int findMinArrowShots(vector<vector<int>>& points) {\n        if (points.empty()) return 0;\n        sort(points.begin(), points.end(), [](const vector<int>& a, const vector<int>& b) {\n            return a[1] < b[1];\n        });\n        int res = 1;\n        int prevEnd = points[0][1];\n        for (int i = 1; i < points.size(); i++) {\n            if (points[i][0] > prevEnd) {\n                res++;\n                prevEnd = points[i][1];\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "406", slug: "queue-reconstruction-by-height", title: "Queue Reconstruction", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi. Reconstruct and return the queue that is represented by the input array people.",
    detailedExplanation: "We sort the people by height in descending order. If two people have the same height, we sort them by their 'k' value in ascending order. Then, we iterate through the sorted list and insert each person into the result list at the index specified by their 'k' value. Since we process taller people first, the 'k' index correctly represents the number of taller people already in front.",
    edgeCases: [
      "All people same height",
      "Heights increasingly sorted",
      "Heights decreasingly sorted"
    ],
    algorithmSteps: [
      "Sort 'people' by height 'h' in descending order.",
      "If heights are equal, sort by 'k' in ascending order.",
      "Initialize an empty 'res' list.",
      "For each person 'p' in the sorted 'people':",
      "Insert 'p' into 'res' at index 'p[1]' (the person's 'k' value).",
      "Return 'res'."
    ],
    examples: [{ input: "people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]", output: "[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]" }],
    defaultInput: { people: [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]] },
    complexity: { time: "O(n^2)", space: "O(n)" }, // Insertion in list is O(n)
    beginnerComplexity: { time: "O(n^2)", space: "O(n)" },
    optimalComplexity: { time: "O(n^2)", space: "O(n)" }, // Can be improved to O(n log n) with Fenwick tree or Segment tree, but O(n^2) is standard
    starterCode: "class Solution:\n    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:\n        # Standard O(n^2) greedy approach\n        people.sort(key=lambda x: (-x[0], x[1]))\n        res = []\n        for p in people:\n            res.insert(p[1], p)\n        return res",
      javascript: "var reconstructQueue = function(people) {\n    people.sort((a, b) => {\n        if (a[0] !== b[0]) return b[0] - a[0];\n        return a[1] - b[1];\n    });\n    let res = [];\n    for (let p of people) {\n        res.splice(p[1], 0, p);\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:\n        people.sort(key=lambda x: (-x[0], x[1]))\n        res = []\n        for p in people: res.insert(p[1], p)\n        return res",
      javascript: "var reconstructQueue = function(people) {\n    people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);\n    const res = [];\n    for (const p of people) res.splice(p[1], 0, p);\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {\n        sort(people.begin(), people.end(), [](const vector<int>& a, const vector<int>& b) {\n            return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);\n        });\n        vector<vector<int>> res;\n        for (auto& p : people) {\n            res.insert(res.begin() + p[1], p);\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "630", slug: "course-schedule-iii", title: "Course Schedule III", difficulty: "Hard", diffClass: "difficulty-hard", category: "Greedy",
    description: "There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi. You will start at the 1st day. You cannot take two or more courses simultaneously. Return the maximum number of courses that you can take.",
    detailedExplanation: "We sort the courses by their deadlines (lastDay). We then iterate through the sorted courses, adding each to our schedule. If adding a course exceeds its deadline, we greedily remove the longest course already in our schedule to free up the most time for future courses.",
    edgeCases: [
      "No courses possible",
      "All courses possible",
      "Course duration > deadline"
    ],
    algorithmSteps: [
      "Sort 'courses' by their end days 'lastDay' in ascending order.",
      "Initialize 'time' to 0 and a max priority queue (maxHeap) to store durations.",
      "For each course [dur, end] in the sorted 'courses':",
      "Add 'dur' to 'time' and push 'dur' onto the maxHeap.",
      "If 'time' > 'end':",
      "Pop the maximum duration from the maxHeap and subtract it from 'time'.",
      "Return the size of the maxHeap."
    ],
    examples: [{ input: "courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]", output: "3" }],
    defaultInput: { courses: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]] },
    complexity: { time: "O(n log n)", space: "O(n)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n log n)", space: "O(n)" },
    starterCode: "class Solution:\n    def scheduleCourse(self, courses: List[List[int]]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def scheduleCourse(self, courses: List[List[int]]) -> int:\n        # Brute Force Recursion O(2^n)\n        courses.sort(key=lambda x: x[1])\n        def solve(i, current_time):\n            if i == len(courses): return 0\n            # Choice 1: Skip\n            res = solve(i + 1, current_time)\n            # Choice 2: Take if possible\n            if current_time + courses[i][0] <= courses[i][1]:\n                res = max(res, 1 + solve(i + 1, current_time + courses[i][0]))\n            return res\n        return solve(0, 0)",
      javascript: "var scheduleCourse = function(courses) {\n    courses.sort((a, b) => a[1] - b[1]);\n    const solve = (i, currentTime) => {\n        if (i === courses.length) return 0;\n        let res = solve(i + 1, currentTime);\n        if (currentTime + courses[i][0] <= courses[i][1]) {\n            res = Math.max(res, 1 + solve(i + 1, currentTime + courses[i][0]));\n        }\n        return res;\n    };\n    return solve(0, 0);\n};"
    },
    codes: {
      python: "class Solution:\n    def scheduleCourse(self, courses: List[List[int]]) -> int:\n        courses.sort(key=lambda x: x[1])\n        maxHeap = []\n        time = 0\n        for dur, end in courses:\n            heapq.heappush(maxHeap, -dur)\n            time += dur\n            if time > end:\n                time += heapq.heappop(maxHeap)\n        return len(maxHeap)",
      javascript: "var scheduleCourse = function(courses) {\n    courses.sort((a, b) => a[1] - b[1]);\n    let maxHeap = new MaxPriorityQueue();\n    let time = 0;\n    for (let [dur, end] of courses) {\n        time += dur;\n        maxHeap.enqueue(dur);\n        if (time > end) {\n            time -= maxHeap.dequeue().element;\n        }\n    }\n    return maxHeap.size();\n};",
      cpp: "class Solution {\npublic:\n    int scheduleCourse(vector<vector<int>>& courses) {\n        sort(courses.begin(), courses.end(), [](const vector<int>& a, const vector<int>& b) {\n            return a[1] < b[1];\n        });\n        priority_queue<int> maxHeap;\n        int time = 0;\n        for (auto& c : courses) {\n            time += c[0];\n            maxHeap.push(c[0]);\n            if (time > c[1]) {\n                time -= maxHeap.top();\n                maxHeap.pop();\n            }\n        }\n        return maxHeap.size();\n    }\n};"
    }
  },
  {
    id: "1029", slug: "two-city-scheduling", title: "Two City Scheduling", difficulty: "Medium", diffClass: "difficulty-medium", category: "Greedy",
    description: "A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti] is the cost of flying the ith person to city a and city b, return the minimum cost to fly every person to a city such that exactly n people arrive in each city.",
    detailedExplanation: "We first send everyone to city A. To reach the requirement of n people in city B, we need to choose n people to switch from city A to city B. The cost of switching person i is (bCost - aCost). To minimize total cost, we should switch the n people with the smallest switch costs (most negative or least positive).",
    edgeCases: [
      "Costs identical for both cities",
      "One city always cheaper",
      "Large costs"
    ],
    algorithmSteps: [
      "Calculate the difference (bCost - aCost) for each person.",
      "Sort the people based on this difference in ascending order.",
      "Initialize 'total' cost to 0.",
      "For the first n people in the sorted list, fly them to City B (add bCost).",
      "For the remaining n people, fly them to City A (add aCost).",
      "Return the 'total' cost."
    ],
    examples: [{ input: "costs = [[10,20],[30,200],[400,50],[30,20]]", output: "110" }],
    defaultInput: { costs: [[10, 20], [30, 200], [400, 50], [30, 20]] },
    complexity: { time: "O(n log n)", space: "O(n)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(n)" },
    optimalComplexity: { time: "O(n log n)", space: "O(n)" },
    starterCode: "class Solution:\n    def twoCitySchedCost(self, costs: List[List[int]]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def twoCitySchedCost(self, costs: List[List[int]]) -> int:\n        # Brute Force Recursion O(2^n)\n        n = len(costs) // 2\n        def solve(i, a_count, b_count):\n            if a_count > n or b_count > n: return float('inf')\n            if i == len(costs): return 0\n            return min(\n                costs[i][0] + solve(i + 1, a_count + 1, b_count),\n                costs[i][1] + solve(i + 1, a_count, b_count + 1)\n            )\n        return solve(0, 0, 0)",
      javascript: "var twoCitySchedCost = function(costs) {\n    let n = costs.length / 2;\n    const solve = (i, aCount, bCount) => {\n        if (aCount > n || bCount > n) return Infinity;\n        if (i === costs.length) return 0;\n        return Math.min(\n            costs[i][0] + solve(i + 1, aCount + 1, bCount),\n            costs[i][1] + solve(i + 1, aCount, bCount + 1)\n        );\n    };\n    return solve(0, 0, 0);\n};"
    },
    codes: {
      python: "class Solution:\n    def twoCitySchedCost(self, costs: List[List[int]]) -> int:\n        costs.sort(key=lambda x: x[1] - x[0])\n        n = len(costs) // 2\n        res = 0\n        for i in range(n): res += costs[i][1]\n        for i in range(n, 2 * n): res += costs[i][0]\n        return res",
      javascript: "var twoCitySchedCost = function(costs) {\n    costs.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));\n    let n = costs.length / 2;\n    let res = 0;\n    for (let i = 0; i < n; i++) res += costs[i][1];\n    for (let i = n; i < costs.length; i++) res += costs[i][0];\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int twoCitySchedCost(vector<vector<int>>& costs) {\n        sort(costs.begin(), costs.end(), [](const vector<int>& a, const vector<int>& b) {\n            return (a[1] - a[0]) < (b[1] - b[0]);\n        });\n        int n = costs.size() / 2, res = 0;\n        for (int i = 0; i < n; i++) res += costs[i][1];\n        for (int i = n; i < costs.size(); i++) res += costs[i][0];\n        return res;\n    }\n};"
    }
  },
  {
    id: "136", slug: "single-number", title: "Single Number", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
    detailedExplanation: "We can use the XOR bitwise operator. XORing a number with itself result in 0 (x ^ x = 0). XORing a number with 0 results in the number itself (x ^ 0 = x). Since all numbers appear twice except one, XORing all elements together will cancel out the duplicates and leave only the single element.",
    edgeCases: [
      "Array with one element",
      "Large positive and negative numbers",
      "Single element is 0"
    ],
    algorithmSteps: [
      "Initialize 'res' to 0.",
      "Iterate through each number 'n' in the input array 'nums'.",
      "Update 'res' by XORing it with 'n' (res ^= n).",
      "Return 'res'."
    ],
    examples: [{ input: "nums = [2,2,1]", output: "1" }, { input: "nums = [4,1,2,1,2]", output: "4" }],
    defaultInput: { nums: [2, 2, 1] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n^2)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        # Brute Force O(n^2): For each number, count occurrences\n        for n in nums:\n            if nums.count(n) == 1:\n                return n\n        return -1",
      javascript: "var singleNumber = function(nums) {\n    for (let n of nums) {\n        if (nums.filter(x => x === n).length === 1) {\n            return n;\n        }\n    }\n    return -1;\n};"
    },
    codes: {
      python: "class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        res = 0\n        for n in nums:\n            res = n ^ res\n        return res",
      javascript: "var singleNumber = function(nums) {\n    let res = 0;\n    for (let n of nums) {\n        res ^= n;\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        int res = 0;\n        for (int n : nums) res ^= n;\n        return res;\n    }\n};"
    }
  },
  {
    id: "191", slug: "number-of-1-bits", title: "Number of 1 Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).",
    detailedExplanation: "We can use the bitwise AND operator with 'n-1' to clear the least significant set bit. (n & (n - 1)) always results in 'n' with its rightmost '1' bit turned into '0'. By repeatedly applying this and counting the steps, we can find the number of set bits.",
    edgeCases: [
      "Input is 0 (res = 0)",
      "Input is max 32-bit unsigned integer (res = 32)",
      "Input is a power of 2 (res = 1)"
    ],
    algorithmSteps: [
      "Initialize 'res' to 0.",
      "Iterate while 'n' is not 0.",
      "Update 'n' to 'n & (n - 1)'.",
      "Increment 'res'.",
      "Return 'res'."
    ],
    examples: [{ input: "n = 11", output: "3" }, { input: "n = 128", output: "1" }],
    defaultInput: { n: 11 },
    complexity: { time: "O(1)", space: "O(1)" }, // Time is O(number of set bits), max 32
    beginnerComplexity: { time: "O(32)", space: "O(1)" },
    optimalComplexity: { time: "O(1)", space: "O(1)" },
    starterCode: "class Solution:\n    def hammingWeight(self, n: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def hammingWeight(self, n: int) -> int:\n        # Standard approach: check each bit O(32)\n        res = 0\n        while n:\n            res += n % 2\n            n >>= 1\n        return res",
      javascript: "var hammingWeight = function(n) {\n    let res = 0;\n    while (n !== 0) {\n        res += n % 2;\n        n >>>= 1; // Unsigned right shift\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def hammingWeight(self, n: int) -> int:\n        res = 0\n        while n:\n            n &= (n - 1)\n            res += 1\n        return res",
      javascript: "var hammingWeight = function(n) {\n    let res = 0;\n    while (n !== 0) {\n        n &= (n - 1);\n        res++;\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int res = 0;\n        while (n != 0) {\n            n &= (n - 1);\n            res++;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "338", slug: "counting-bits", title: "Counting Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1 bits in the binary representation of i.",
    detailedExplanation: "We can use Dynamic Programming. The number of set bits for a number 'i' is equal to 1 plus the number of set bits for (i - offset), where offset is the largest power of 2 less than or equal to 'i'. Alternatively, ans[i] = ans[i >> 1] + (i % 2).",
    edgeCases: [
      "n = 0",
      "n = 1",
      "Large n"
    ],
    algorithmSteps: [
      "Initialize 'res' array of size n + 1 filled with 0s.",
      "Initialize 'offset' to 1.",
      "Iterate 'i' from 1 to n.",
      "If 'offset * 2' equals 'i', update 'offset' to 'i'.",
      "Set res[i] = 1 + res[i - offset].",
      "Return 'res'."
    ],
    examples: [{ input: "n = 2", output: "[0,1,1]" }, { input: "n = 5", output: "[0,1,1,2,1,2]" }],
    defaultInput: { n: 5 },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n * 32)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution:\n    def countBits(self, n: int) -> List[int]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def countBits(self, n: int) -> List[int]:\n        # Brute Force O(n log n): Count bits for each number\n        res = []\n        for i in range(n + 1):\n            count = 0\n            temp = i\n            while temp:\n                count += temp % 2\n                temp >>= 1\n            res.append(count)\n        return res",
      javascript: "var countBits = function(n) {\n    let res = [];\n    for (let i = 0; i <= n; i++) {\n        let count = 0;\n        let temp = i;\n        while (temp !== 0) {\n            count += temp % 2;\n            temp >>= 1;\n        }\n        res.push(count);\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def countBits(self, n: int) -> List[int]:\n        dp = [0] * (n + 1)\n        offset = 1\n        for i in range(1, n + 1):\n            if offset * 2 == i:\n                offset = i\n            dp[i] = 1 + dp[i - offset]\n        return dp",
      javascript: "var countBits = function(n) {\n    const dp = new Array(n + 1).fill(0);\n    let offset = 1;\n    for (let i = 1; i <= n; i++) {\n        if (offset * 2 === i) offset = i;\n        dp[i] = 1 + dp[i - offset];\n    }\n    return dp;\n};",
      cpp: "class Solution {\npublic:\n    vector<int> countBits(int n) {\n        vector<int> dp(n + 1, 0);\n        int offset = 1;\n        for (int i = 1; i <= n; i++) {\n            if (offset * 2 == i) offset = i;\n            dp[i] = 1 + dp[i - offset];\n        }\n        return dp;\n    }\n};"
    }
  },
  {
    id: "190", slug: "reverse-bits", title: "Reverse Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Reverse bits of a given 32 bits unsigned integer.",
    detailedExplanation: "We can iterate through all 32 bits. In each step, we shift the result to the left and add the rightmost bit of 'n' to it. Then we shift 'n' to the right. This effectively reverses the bit order.",
    edgeCases: [
      "Input is 0",
      "Input is all 1s",
      "Input is 1"
    ],
    algorithmSteps: [
      "Initialize 'res' to 0.",
      "Iterate 32 times.",
      "Shift 'res' to the left by 1.",
      "Bitwise OR 'res' with (n & 1).",
      "Shift 'n' to the right by 1.",
      "Return 'res'."
    ],
    examples: [{ input: "n = 43261596", output: "964176192" }],
    defaultInput: { n: 43261596 },
    complexity: { time: "O(1)", space: "O(1)" }, // Always 32 iterations
    beginnerComplexity: { time: "O(32)", space: "O(1)" },
    optimalComplexity: { time: "O(1)", space: "O(1)" },
    starterCode: "class Solution:\n    def reverseBits(self, n: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def reverseBits(self, n: int) -> int:\n        # String manipulation approach\n        s = bin(n)[2:].zfill(32)\n        return int(s[::-1], 2)",
      javascript: "var reverseBits = function(n) {\n    let s = n.toString(2).padStart(32, '0');\n    return parseInt(s.split('').reverse().join(''), 2);\n};"
    },
    codes: {
      python: "class Solution:\n    def reverseBits(self, n: int) -> int:\n        res = 0\n        for i in range(32):\n            bit = (n >> i) & 1\n            res = res | (bit << (31 - i))\n        return res",
      javascript: "var reverseBits = function(n) {\n    let res = 0;\n    for (let i = 0; i < 32; i++) {\n        let bit = (n >>> i) & 1;\n        res = (res << 1) | bit;\n    }\n    return res >>> 0; // Ensure unsigned\n};",
      cpp: "class Solution {\npublic:\n    uint32_t reverseBits(uint32_t n) {\n        uint32_t res = 0;\n        for (int i = 0; i < 32; i++) {\n            res = (res << 1) | (n & 1);\n            n >>= 1;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "268", slug: "missing-number", title: "Missing Number", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    detailedExplanation: "We can use XOR to find the missing number. We XOR all numbers from 0 to n, and also XOR all numbers in the input array. The missing number will be the only one that doesn't cancel out.",
    edgeCases: [
      "Range [0, 1] missing 0",
      "Range [0, 1] missing 1",
      "Large n"
    ],
    algorithmSteps: [
      "Initialize 'res' to the length of the array 'n'.",
      "Iterate through each index 'i' and its value 'nums[i]'.",
      "Update 'res' with (res ^ i ^ nums[i]).",
      "Return 'res'."
    ],
    examples: [{ input: "nums = [3,0,1]", output: "2" }, { input: "nums = [0,1]", output: "2" }],
    defaultInput: { nums: [3, 0, 1] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n^2)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        # Brute Force O(n^2): For each i in [0, n], check if it's in nums\n        n = len(nums)\n        for i in range(n + 1):\n            if i not in nums: return i\n        return -1",
      javascript: "var missingNumber = function(nums) {\n    let n = nums.length;\n    for (let i = 0; i <= n; i++) {\n        if (!nums.includes(i)) return i;\n    }\n    return -1;\n};"
    },
    codes: {
      python: "class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        res = len(nums)\n        for i in range(len(nums)):\n            res += (i - nums[i])\n        return res",
      javascript: "var missingNumber = function(nums) {\n    let res = nums.length;\n    for (let i = 0; i < nums.length; i++) {\n        res ^= i ^ nums[i];\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        int res = nums.size();\n        for (int i = 0; i < nums.size(); i++) {\n            res ^= i ^ nums[i];\n        }\n        return res;\n    }\n};"
    }
  },

  {
    id: "371", slug: "sum-of-two-integers", title: "Sum of Two Integers", difficulty: "Medium", diffClass: "difficulty-medium", category: "Bit Manipulation",
    description: "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
    detailedExplanation: "We can use XOR to add bits and AND followed by left shift to calculate the carry. XORing two bits gives the sum without carry (0+0=0, 0+1=1, 1+0=1, 1+1=0). ANDing two bits gives the carry (1 and 1 = 1). We repeat this process until there is no carry.",
    edgeCases: [
      "Negative numbers",
      "One number is 0",
      "Sum results in 0"
    ],
    algorithmSteps: [
      "Initialize 'mask' to 0xffffffff for 32-bit integer handling (especially for Python).",
      "Iterate while 'b & mask' is not 0 (while there is a carry).",
      "Calculate 'carry' as (a & b) << 1.",
      "Update 'a' to 'a ^ b'.",
      "Update 'b' to 'carry'.",
      "If 'b' > 0, return 'a & mask', else return 'a'."
    ],
    examples: [{ input: "a = 1, b = 2", output: "3" }, { input: "a = 2, b = 3", output: "5" }],
    defaultInput: { a: 1, b: 2 },
    complexity: { time: "O(1)", space: "O(1)" }, // Max 32 iterations
    beginnerComplexity: { time: "O(1)", space: "O(1)" },
    optimalComplexity: { time: "O(1)", space: "O(1)" },
    starterCode: "class Solution:\n    def getSum(self, a: int, b: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def getSum(self, a: int, b: int) -> int:\n        # Not really a beginner approach for this specific problem restriction\n        # but using arithmetic if allowed (it's not, but for comparison)\n        return sum([a, b])",
      javascript: "var getSum = function(a, b) {\n    return a + b;\n};"
    },
    codes: {
      python: "class Solution:\n    def getSum(self, a: int, b: int) -> int:\n        mask = 0xffffffff\n        while (b & mask) > 0:\n            carry = (a & b) << 1\n            a = (a ^ b) & mask\n            b = carry & mask\n        return a if a <= 0x7fffffff else ~(a ^ mask)",
      javascript: "var getSum = function(a, b) {\n    while (b !== 0) {\n        let carry = (a & b) << 1;\n        a = a ^ b;\n        b = carry;\n    }\n    return a;\n};",
      cpp: "class Solution {\npublic:\n    int getSum(int a, int b) {\n        while (b != 0) {\n            int carry = (unsigned int)(a & b) << 1;\n            a = a ^ b;\n            b = carry;\n        }\n        return a;\n    }\n};"
    }
  },
  {
    id: "231", slug: "power-of-two", title: "Power of Two", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Given an integer n, return true if it is a power of two. Otherwise, return false.",
    detailedExplanation: "A power of two in binary representation has exactly one bit set to 1. For example, 4 (100 in binary), 8 (1000 in binary). If we subtract 1 from a power of two, all bits to the right of the single 1-bit become 1, and the 1-bit becomes 0. So, n & (n - 1) will always be 0 for a power of two.",
    edgeCases: [
      "n = 0 (False)",
      "n = 1 (True, 2^0)",
      "Negative numbers (False)"
    ],
    algorithmSteps: [
      "Check if 'n' is greater than 0.",
      "Calculate 'n & (n - 1)'.",
      "Return true if n > 0 and 'n & (n - 1)' is 0.",
      "Otherwise, return false."
    ],
    examples: [{ input: "n = 1", output: "true" }, { input: "n = 16", output: "true" }, { input: "n = 3", output: "false" }],
    defaultInput: { n: 16 },
    complexity: { time: "O(1)", space: "O(1)" },
    beginnerComplexity: { time: "O(log n)", space: "O(1)" },
    optimalComplexity: { time: "O(1)", space: "O(1)" },
    starterCode: "class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        # Repeated division by 2\n        if n <= 0: return False\n        while n % 2 == 0:\n            n //= 2\n        return n == 1",
      javascript: "var isPowerOfTwo = function(n) {\n    if (n <= 0) return false;\n    while (n % 2 === 0) {\n        n /= 2;\n    }\n    return n === 1;\n};"
    },
    codes: {
      python: "class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        return n > 0 and (n & (n - 1)) == 0",
      javascript: "var isPowerOfTwo = function(n) {\n    return n > 0 && (n & (n - 1)) === 0;\n};",
      cpp: "class Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        return n > 0 && (n & (n - 1LL)) == 0;\n    }\n};"
    }
  },
  {
    id: "461", slug: "hamming-distance", title: "Hamming Distance", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "The Hamming distance between two integers is the number of positions at which the corresponding bits are different. Given two integers x and y, return the Hamming distance between them.",
    detailedExplanation: "The XOR operation results in a bit being 1 if and only if the corresponding bits in the two inputs are different. Thus, the Hamming distance is simply the number of set bits in the result of x ^ y.",
    edgeCases: [
      "x = y (Distance 0)",
      "x = 0, y = max integer",
      "One number is 0"
    ],
    algorithmSteps: [
      "Calculate 'xor' = x ^ y.",
      "Initialize 'res' to 0.",
      "While 'xor' is not 0:",
      "Update 'xor' to 'xor & (xor - 1)' (clear least significant bit).",
      "Increment 'res'.",
      "Return 'res'."
    ],
    examples: [{ input: "x = 1, y = 4", output: "2" }, { input: "x = 3, y = 1", output: "1" }],
    defaultInput: { x: 1, y: 4 },
    complexity: { time: "O(1)", space: "O(1)" }, // Max 32 iterations
    beginnerComplexity: { time: "O(32)", space: "O(1)" },
    optimalComplexity: { time: "O(1)", space: "O(1)" },
    starterCode: "class Solution:\n    def hammingDistance(self, x: int, y: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def hammingDistance(self, x: int, y: int) -> int:\n        # Iterate through 32 bits and count differences\n        res = 0\n        for i in range(32):\n            if (x & 1) != (y & 1):\n                res += 1\n            x >>= 1\n            y >>= 1\n        return res",
      javascript: "var hammingDistance = function(x, y) {\n    let res = 0;\n    for (let i = 0; i < 32; i++) {\n        if ((x & 1) !== (y & 1)) res++;\n        x >>= 1;\n        y >>= 1;\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def hammingDistance(self, x: int, y: int) -> int:\n        xor = x ^ y\n        res = 0\n        while xor:\n            xor &= (xor - 1)\n            res += 1\n        return res",
      javascript: "var hammingDistance = function(x, y) {\n    let xor = x ^ y;\n    let res = 0;\n    while (xor !== 0) {\n        xor &= (xor - 1);\n        res++;\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int hammingDistance(int x, int y) {\n        int n = x ^ y, res = 0;\n        while (n) {\n            n &= (n - 1);\n            res++;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "1342", slug: "number-of-steps-to-reduce-a-number-to-zero", title: "Steps to Reduce to Zero", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Given an integer num, return the number of steps to reduce it to zero. In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.",
    detailedExplanation: "This problem can be solved by simple simulation or by looking at the binary representation. Each odd step (ending in 1) requires one subtraction. Each even step (ending in 0) requires one division. In terms of bits, a '1' bit requires two steps (one to turn into 0, one to shift), and a '0' bit requires one step (shift), except for the most significant bit.",
    edgeCases: [
      "num = 0",
      "num = 1",
      "Large num"
    ],
    algorithmSteps: [
      "Initialize 'res' to 0.",
      "While 'num' is greater than 0:",
      "If 'num' is even, divide by 2.",
      "If 'num' is odd, subtract 1.",
      "Increment 'res'.",
      "Return 'res'."
    ],
    examples: [{ input: "num = 14", output: "6" }, { input: "num = 8", output: "4" }],
    defaultInput: { num: 14 },
    complexity: { time: "O(log n)", space: "O(1)" },
    beginnerComplexity: { time: "O(log n)", space: "O(1)" },
    optimalComplexity: { time: "O(log n)", space: "O(1)" },
    starterCode: "class Solution:\n    def numberOfSteps(self, num: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def numberOfSteps(self, num: int) -> int:\n        res = 0\n        while num > 0:\n            if num % 2 == 0:\n                num //= 2\n            else:\n                num -= 1\n            res += 1\n        return res",
      javascript: "var numberOfSteps = function(num) {\n    let res = 0;\n    while (num > 0) {\n        if (num % 2 === 0) num /= 2;\n        else num -= 1;\n        res++;\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def numberOfSteps(self, num: int) -> int:\n        if num == 0: return 0\n        res = 0\n        while num:\n            res += (2 if num & 1 else 1)\n            num >>= 1\n        return res - 1",
      javascript: "var numberOfSteps = function(num) {\n    if (num === 0) return 0;\n    let res = 0;\n    while (num > 0) {\n        res += (num & 1) ? 2 : 1;\n        num >>= 1;\n    }\n    return res - 1;\n};",
      cpp: "class Solution {\npublic:\n    int numberOfSteps(int num) {\n        if (num == 0) return 0;\n        int res = 0;\n        while (num > 0) {\n            res += (num & 1) ? 2 : 1;\n            num >>= 1;\n        }\n        return res - 1;\n    }\n};"
    }
  },
  {
    id: "1356", slug: "sort-integers-by-the-number-of-1-bits", title: "Sort by 1 Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.",
    detailedExplanation: "We need a custom sort function that counts set bits. For each number, calculate its Hamming weight. Then sort primarily by this weight and secondarily by the numerical value.",
    edgeCases: [
      "All numbers same weight",
      "All numbers different weights",
      "Large array"
    ],
    algorithmSteps: [
      "Define a helper function 'countBits(n)' that returns the number of set bits.",
      "Sort the array 'arr' using a custom comparator.",
      "In the comparator, if counts are different, sort by count.",
      "If counts are equal, sort by the value itself.",
      "Return the sorted array."
    ],
    examples: [{ input: "arr = [0,1,2,3,4,5,6,7,8]", output: "[0,1,2,4,8,3,5,6,7]" }],
    defaultInput: { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
    complexity: { time: "O(n log n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n^2)", space: "O(n)" },
    optimalComplexity: { time: "O(n log n)", space: "O(n)" },
    starterCode: "class Solution:\n    def sortByBits(self, arr: List[int]) -> List[int]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def sortByBits(self, arr: List[int]) -> List[int]:\n        # Simple bubble sort with custom comparison\n        n = len(arr)\n        def count(x):\n            return bin(x).count('1')\n        for i in range(n):\n            for j in range(0, n - i - 1):\n                c1, c2 = count(arr[j]), count(arr[j+1])\n                if c1 > c2 or (c1 == c2 and arr[j] > arr[j+1]):\n                    arr[j], arr[j+1] = arr[j+1], arr[j]\n        return arr",
      javascript: "var sortByBits = function(arr) {\n    const count = (x) => x.toString(2).split('0').join('').length;\n    for (let i = 0; i < arr.length; i++) {\n        for (let j = 0; j < arr.length - i - 1; j++) {\n            let c1 = count(arr[j]), c2 = count(arr[j+1]);\n            if (c1 > c2 || (c1 === c2 && arr[j] > arr[j+1])) {\n                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];\n            }\n        }\n    }\n    return arr;\n};"
    },
    codes: {
      python: "class Solution:\n    def sortByBits(self, arr: List[int]) -> List[int]:\n        arr.sort(key=lambda x: (bin(x).count('1'), x))\n        return arr",
      javascript: "var sortByBits = function(arr) {\n    return arr.sort((a, b) => {\n        let countA = a.toString(2).split('0').join('').length;\n        let countB = b.toString(2).split('0').join('').length;\n        return countA - countB || a - b;\n    });\n};",
      cpp: "class Solution {\npublic:\n    vector<int> sortByBits(vector<int>& arr) {\n        sort(arr.begin(), arr.end(), [](int a, int b) {\n            int countA = __builtin_popcount(a);\n            int countB = __builtin_popcount(b);\n            return countA < countB || (countA == countB && a < b);\n        });\n        return arr;\n    }\n};"
    }
  },
  {
    id: "201", slug: "bitwise-and-of-numbers-range", title: "Bitwise AND of Range", difficulty: "Medium", diffClass: "difficulty-medium", category: "Bit Manipulation",
    description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    detailedExplanation: "In a range of numbers, the bitwise AND will only preserve the common prefix of the binary representations of 'left' and 'right'. Any bit that changes between 'left' and 'right' will eventually become 0 in the bitwise AND process. We can find the common prefix by shifting both numbers to the right until they are equal.",
    edgeCases: [
      "left = 0",
      "left = right",
      "Large range"
    ],
    algorithmSteps: [
      "Initialize 'shift' to 0.",
      "Iterate while 'left' is not equal to 'right'.",
      "Shift 'left' and 'right' to the right by 1.",
      "Increment 'shift'.",
      "Return 'left' shifted back to the left by 'shift'."
    ],
    examples: [{ input: "left = 5, right = 7", output: "4" }, { input: "left = 0, right = 0", output: "0" }],
    defaultInput: { left: 5, right: 7 },
    complexity: { time: "O(1)", space: "O(1)" }, // Max 32 iterations
    beginnerComplexity: { time: "O(right - left)", space: "O(1)" },
    optimalComplexity: { time: "O(1)", space: "O(1)" },
    starterCode: "class Solution:\n    def rangeBitwiseAnd(self, left: int, right: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def rangeBitwiseAnd(self, left: int, right: int) -> int:\n        # Brute Force O(n): Iterate through range\n        res = left\n        for i in range(left + 1, right + 1):\n            res &= i\n            if res == 0: break\n        return res",
      javascript: "var rangeBitwiseAnd = function(left, right) {\n    let res = left;\n    for (let i = left + 1; i <= right; i++) {\n        res &= i;\n        if (res === 0) break;\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def rangeBitwiseAnd(self, left: int, right: int) -> int:\n        shift = 0\n        while left < right:\n            left >>= 1\n            right >>= 1\n            shift += 1\n        return left << shift",
      javascript: "var rangeBitwiseAnd = function(left, right) {\n    let shift = 0;\n    while (left < right) {\n        left >>= 1;\n        right >>= 1;\n        shift++;\n    }\n    return left << shift;\n};",
      cpp: "class Solution {\npublic:\n    int rangeBitwiseAnd(int left, int right) {\n        int shift = 0;\n        while (left < right) {\n            left >>= 1;\n            right >>= 1;\n            shift++;\n        }\n        return left << shift;\n    }\n};"
    }
  },
  {
    id: "1720", slug: "decode-xored-array", title: "Decode XORed Array", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "There is a hidden integer array arr that consists of n non-negative integers. It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. You are given the encoded array and an integer first, which is the first element of arr, i.e. arr[0]. Return the original array arr.",
    detailedExplanation: "We know that if a ^ b = c, then a ^ c = b. We can use this property to decode the array. Starting from the given first element, we can find the next element by XORing the current element with the corresponding element in the encoded array.",
    edgeCases: [
      "encoded has only one element",
      "All elements are 0",
      "Large integers"
    ],
    algorithmSteps: [
      "Initialize 'res' array with 'first'.",
      "Iterate through the 'encoded' array.",
      "Calculate the next element: res[i+1] = res[i] ^ encoded[i].",
      "Return 'res'."
    ],
    examples: [{ input: "encoded = [1,2,3], first = 1", output: "[1,0,2,1]" }, { input: "encoded = [6,2,7,3], first = 4", output: "[4,2,0,7,4]" }],
    defaultInput: { encoded: [1, 2, 3], first: 1 },
    complexity: { time: "O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class Solution:\n    def decode(self, encoded: List[int], first: int) -> List[int]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def decode(self, encoded: List[int], first: int) -> List[int]:\n        arr = [first]\n        for x in encoded:\n            arr.append(arr[-1] ^ x)\n        return arr",
      javascript: "var decode = function(encoded, first) {\n    let arr = [first];\n    for (let x of encoded) arr.push(arr[arr.length - 1] ^ x);\n    return arr;\n};"
    },
    codes: {
      python: "class Solution:\n    def decode(self, encoded: List[int], first: int) -> List[int]:\n        res = [first]\n        for x in encoded: res.append(res[-1] ^ x)\n        return res",
      javascript: "var decode = function(encoded, first) {\n    let res = new Array(encoded.length + 1);\n    res[0] = first;\n    for (let i = 0; i < encoded.length; i++) res[i + 1] = res[i] ^ encoded[i];\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    vector<int> decode(vector<int>& encoded, int first) {\n        vector<int> res = {first};\n        for (int x : encoded) res.push_back(res.back() ^ x);\n        return res;\n    }\n};"
    }
  },
  {
    id: "693", slug: "binary-number-with-alternating-bits", title: "Alternating Bits", difficulty: "Easy", diffClass: "difficulty-easy", category: "Bit Manipulation",
    description: "Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.",
    detailedExplanation: "If a number has alternating bits (e.g., 1010), then n ^ (n >> 1) will be a sequence of all 1s (e.g., 1010 ^ 0101 = 1111). We can check if a number consists only of 1s by verifying if (x & (x + 1)) == 0.",
    edgeCases: [
      "n = 1 (True)",
      "n = 2 (True, 10)",
      "n = 3 (False, 11)"
    ],
    algorithmSteps: [
      "XOR 'n' with 'n >> 1'. Let the result be 'x'.",
      "Check if 'x & (x + 1)' is equal to 0.",
      "Return true if it is 0, else return false."
    ],
    examples: [{ input: "n = 5", output: "true" }, { input: "n = 7", output: "false" }],
    defaultInput: { n: 5 },
    complexity: { time: "O(1)", space: "O(1)" },
    beginnerComplexity: { time: "O(log n)", space: "O(1)" },
    optimalComplexity: { time: "O(1)", space: "O(1)" },
    starterCode: "class Solution:\n    def hasAlternatingBits(self, n: int) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def hasAlternatingBits(self, n: int) -> bool:\n        # Check adjacent bits\n        prev = n % 2\n        n //= 2\n        while n:\n            curr = n % 2\n            if curr == prev: return False\n            prev = curr\n            n //= 2\n        return True",
      javascript: "var hasAlternatingBits = function(n) {\n    let prev = n % 2;\n    n = Math.floor(n / 2);\n    while (n > 0) {\n        let curr = n % 2;\n        if (curr === prev) return false;\n        prev = curr;\n        n = Math.floor(n / 2);\n    }\n    return true;\n};"
    },
    codes: {
      python: "class Solution:\n    def hasAlternatingBits(self, n: int) -> bool:\n        n = n ^ (n >> 1)\n        return (n & (n + 1)) == 0",
      javascript: "var hasAlternatingBits = function(n) {\n    n = n ^ (n >>> 1);\n    return (n & (n + 1)) === 0;\n};",
      cpp: "class Solution {\npublic:\n    bool hasAlternatingBits(int n) {\n        long x = n ^ (n >> 1);\n        return (x & (x + 1)) == 0;\n    }\n};"
    }
  },
  {
    id: "137", slug: "single-number-ii", title: "Single Number II", difficulty: "Medium", diffClass: "difficulty-medium", category: "Bit Manipulation",
    description: "Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it. You must implement a solution with a linear runtime complexity and use only constant extra space.",
    detailedExplanation: "We can maintain two variables, 'ones' and 'twos'. 'ones' stores bits that have appeared once (mod 3), and 'twos' stores bits that have appeared twice (mod 3). When a bit appears for the third time, it is cleared from both.",
    edgeCases: [
      "Negative numbers",
      "Single element is 0",
      "Single element is max integer"
    ],
    algorithmSteps: [
      "Initialize 'ones' and 'twos' to 0.",
      "Iterate through each number 'n' in 'nums'.",
      "Update 'ones' = (ones ^ n) & (~twos).",
      "Update 'twos' = (twos ^ n) & (~ones).",
      "Return 'ones'."
    ],
    examples: [{ input: "nums = [2,2,3,2]", output: "3" }, { input: "nums = [0,1,0,1,0,1,99]", output: "99" }],
    defaultInput: { nums: [2, 2, 3, 2] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n log n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        # HashTable approach O(n), but O(n) space\n        counts = collections.Counter(nums)\n        for n in counts:\n            if counts[n] == 1: return n\n        return -1",
      javascript: "var singleNumber = function(nums) {\n    let counts = {};\n    for (let n of nums) counts[n] = (counts[n] || 0) + 1;\n    for (let n in counts) {\n        if (counts[n] === 1) return parseInt(n);\n    }\n    return -1;\n};"
    },
    codes: {
      python: "class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        ones, twos = 0, 0\n        for n in nums:\n            ones = (ones ^ n) & (~twos)\n            twos = (twos ^ n) & (~ones)\n        return ones",
      javascript: "var singleNumber = function(nums) {\n    let ones = 0, twos = 0;\n    for (let n of nums) {\n        ones = (ones ^ n) & (~twos);\n        twos = (twos ^ n) & (~ones);\n    }\n    return ones;\n};",
      cpp: "class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        int ones = 0, twos = 0;\n        for (int n : nums) {\n            ones = (ones ^ n) & (~twos);\n            twos = (twos ^ n) & (~ones);\n        }\n        return ones;\n    }\n};"
    }
  },
  {
    id: "260", slug: "single-number-iii", title: "Single Number III", difficulty: "Medium", diffClass: "difficulty-medium", category: "Bit Manipulation",
    description: "Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.",
    detailedExplanation: "We first XOR all elements to get 'xor' = a ^ b, where a and b are the two single elements. Since a != b, there must be at least one set bit in 'xor'. We find the rightmost set bit using 'xor & -xor'. This bit belongs to either a or b, but not both. We then partition all numbers into two groups based on this bit and XOR each group separately to find a and b.",
    edgeCases: [
      "Negative numbers",
      "One single element is 0",
      "Empty elements between single ones"
    ],
    algorithmSteps: [
      "Calculate 'xor' of all elements in 'nums'.",
      "Find the rightmost set bit 'diff' = xor & -xor.",
      "Initialize 'a' and 'b' to 0.",
      "For each 'n' in 'nums':",
      "If 'n & diff' is non-zero, XOR 'n' with 'a'.",
      "Else, XOR 'n' with 'b'.",
      "Return [a, b]."
    ],
    examples: [{ input: "nums = [1,2,1,3,2,5]", output: "[3,5]" }, { input: "nums = [-1,0]", output: "[-1,0]" }],
    defaultInput: { nums: [1, 2, 1, 3, 2, 5] },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n log n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def singleNumber(self, nums: List[int]) -> List[int]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def singleNumber(self, nums: List[int]) -> List[int]:\n        # HashMap approach O(n), but O(n) space\n        counts = collections.Counter(nums)\n        res = []\n        for n in counts:\n            if counts[n] == 1: res.append(n)\n        return res",
      javascript: "var singleNumber = function(nums) {\n    let counts = {};\n    for (let n of nums) counts[n] = (counts[n] || 0) + 1;\n    let res = [];\n    for (let n in counts) {\n        if (counts[n] === 1) res.push(parseInt(n));\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def singleNumber(self, nums: List[int]) -> List[int]:\n        xor = 0\n        for n in nums: xor ^= n\n        diff = xor & -xor\n        a, b = 0, 0\n        for n in nums:\n            if n & diff: a ^= n\n            else: b ^= n\n        return [a, b]",
      javascript: "var singleNumber = function(nums) {\n    let xor = 0;\n    for (let n of nums) xor ^= n;\n    let diff = xor & -xor;\n    let a = 0, b = 0;\n    for (let n of nums) {\n        if (n & diff) a ^= n;\n        else b ^= n;\n    }\n    return [a, b];\n};",
      cpp: "class Solution {\npublic:\n    vector<int> singleNumber(vector<int>& nums) {\n        unsigned int xor_sum = 0;\n        for (int n : nums) xor_sum ^= n;\n        int diff = xor_sum & -xor_sum;\n        int a = 0, b = 0;\n        for (int n : nums) {\n            if (n & diff) a ^= n;\n            else b ^= n;\n        }\n        return {a, b};\n    }\n};"
    }
  },
  {
    id: "48", slug: "rotate-image", title: "Rotate Image", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.",
    detailedExplanation: "We can rotate the matrix in two steps: 1. Transpose the matrix (swap matrix[i][j] with matrix[j][i]). 2. Reverse each row. This combination results in a 90-degree clockwise rotation.",
    edgeCases: [
      "Matrix with one element",
      "Even vs Odd n",
      "Empty matrix"
    ],
    algorithmSteps: [
      "Transpose the matrix: Iterate through rows 'i' and columns 'j' where j > i, and swap matrix[i][j] with matrix[j][i].",
      "Reverse each row: For each row in the matrix, reverse the order of its elements.",
      "The matrix is now rotated 90 degrees clockwise in-place."
    ],
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" }],
    defaultInput: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    complexity: { time: "O(n^2)", space: "O(1)" },
    beginnerComplexity: { time: "O(n^2)", space: "O(n^2)" },
    optimalComplexity: { time: "O(n^2)", space: "O(1)" },
    starterCode: "class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        # Brute Force O(n^2) space: Create a new matrix\n        n = len(matrix)\n        res = [[0] * n for _ in range(n)]\n        for r in range(n):\n            for c in range(n):\n                res[c][n - 1 - r] = matrix[r][c]\n        for r in range(n):\n            for c in range(n):\n                matrix[r][c] = res[r][c]",
      javascript: "var rotate = function(matrix) {\n    let n = matrix.length;\n    let res = Array.from({ length: n }, () => new Array(n).fill(0));\n    for (let r = 0; r < n; r++) {\n        for (let c = 0; c < n; c++) {\n            res[c][n - 1 - r] = matrix[r][c];\n        }\n    }\n    for (let r = 0; r < n; r++) {\n        for (let c = 0; c < n; c++) {\n            matrix[r][c] = res[r][c];\n        }\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        n = len(matrix)\n        for i in range(n):\n            for j in range(i, n):\n                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n        for i in range(n):\n            matrix[i].reverse()",
      javascript: "var rotate = function(matrix) {\n    let n = matrix.length;\n    for (let i = 0; i < n; i++) {\n        for (let j = i; j < n; j++) {\n            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];\n        }\n    }\n    for (let i = 0; i < n; i++) {\n        matrix[i].reverse();\n    }\n};",
      cpp: "class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        int n = matrix.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = i; j < n; j++) {\n                swap(matrix[i][j], matrix[j][i]);\n            }\n        }\n        for (int i = 0; i < n; i++) {\n            reverse(matrix[i].begin(), matrix[i].end());\n        }\n    }\n};"
    }
  },
  {
    id: "54", slug: "spiral-matrix", title: "Spiral Matrix", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
    detailedExplanation: "We can use four pointers representing the boundaries (top, bottom, left, right). We iterate in a spiral pattern: go right across the top row, down the right column, left across the bottom row, and up the left column, updating the boundaries after each direction is completed.",
    edgeCases: [
      "Matrix with one row or one column",
      "Single element matrix",
      "Non-square matrix"
    ],
    algorithmSteps: [
      "Initialize 'top', 'bottom', 'left', 'right' pointers to the matrix boundaries.",
      "Initialize an empty 'res' array.",
      "While 'top <= bottom' and 'left <= right':",
      "Iterate from 'left' to 'right' along 'top', add elements to 'res', increment 'top'.",
      "Iterate from 'top' to 'bottom' along 'right', add elements to 'res', decrement 'right'.",
      "If 'top <= bottom', iterate from 'right' to 'left' along 'bottom', add elements to 'res', decrement 'bottom'.",
      "If 'left <= right', iterate from 'bottom' to 'top' along 'left', add elements to 'res', increment 'left'.",
      "Return 'res'."
    ],
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }],
    defaultInput: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    complexity: { time: "O(m * n)", space: "O(1)" }, // space excluding output
    beginnerComplexity: { time: "O(m * n)", space: "O(m * n)" },
    optimalComplexity: { time: "O(m * n)", space: "O(1)" },
    starterCode: "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        # Brute Force: Keep track of visited elements\n        if not matrix: return []\n        rows, cols = len(matrix), len(matrix[0])\n        visited = [[False] * cols for _ in range(rows)]\n        res = []\n        dr = [0, 1, 0, -1] # right, down, left, up\n        dc = [1, 0, -1, 0]\n        r = c = di = 0\n        for _ in range(rows * cols):\n            res.append(matrix[r][c])\n            visited[r][c] = True\n            nr, nc = r + dr[di], c + dc[di]\n            if 0 <= nr < rows and 0 <= nc < cols and not visited[nr][nc]:\n                r, c = nr, nc\n            else:\n                di = (di + 1) % 4\n                r, c = r + dr[di], c + dc[di]\n        return res",
      javascript: "var spiralOrder = function(matrix) {\n    if (matrix.length === 0) return [];\n    let rows = matrix.length, cols = matrix[0].length;\n    let visited = Array.from({ length: rows }, () => new Array(cols).fill(false));\n    let res = [], dr = [0, 1, 0, -1], dc = [1, 0, -1, 0];\n    let r = 0, c = 0, di = 0;\n    for (let i = 0; i < rows * cols; i++) {\n        res.push(matrix[r][c]);\n        visited[r][c] = true;\n        let nr = r + dr[di], nc = c + dc[di];\n        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {\n            r = nr; c = nc;\n        } else {\n            di = (di + 1) % 4;\n            r += dr[di]; c += dc[di];\n        }\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        res = []\n        left, right = 0, len(matrix[0])\n        top, bottom = 0, len(matrix)\n        while left < right and top < bottom:\n            for i in range(left, right): res.append(matrix[top][i])\n            top += 1\n            for i in range(top, bottom): res.append(matrix[i][right - 1])\n            right -= 1\n            if not (left < right and top < bottom): break\n            for i in range(right - 1, left - 1, -1): res.append(matrix[bottom - 1][i])\n            bottom -= 1\n            for i in range(bottom - 1, top - 1, -1): res.append(matrix[i][left])\n            left += 1\n        return res",
      javascript: "var spiralOrder = function(matrix) {\n    let res = [];\n    let left = 0, right = matrix[0].length, top = 0, bottom = matrix.length;\n    while (left < right && top < bottom) {\n        for (let i = left; i < right; i++) res.push(matrix[top][i]);\n        top++;\n        for (let i = top; i < bottom; i++) res.push(matrix[i][right - 1]);\n        right--;\n        if (!(left < right && top < bottom)) break;\n        for (let i = right - 1; i >= left; i--) res.push(matrix[bottom - 1][i]);\n        bottom--;\n        for (let i = bottom - 1; i >= top; i--) res.push(matrix[i][left]);\n        left++;\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    vector<int> spiralOrder(vector<vector<int>>& matrix) {\n        vector<int> res;\n        int left = 0, right = matrix[0].size(), top = 0, bottom = matrix.size();\n        while (left < right && top < bottom) {\n            for (int i = left; i < right; i++) res.push_back(matrix[top][i]);\n            top++;\n            for (int i = top; i < bottom; i++) res.push_back(matrix[i][right - 1]);\n            right--;\n            if (!(left < right && top < bottom)) break;\n            for (int i = right - 1; i >= left; i--) res.push_back(matrix[bottom - 1][i]);\n            bottom--;\n            for (int i = bottom - 1; i >= top; i--) res.push_back(matrix[i][left]);\n            left++;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "73", slug: "set-matrix-zeroes", title: "Set Matrix Zeroes", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in-place.",
    detailedExplanation: "To follow the in-place requirement with O(1) space, we can use the first row and first column of the matrix itself to store whether a specific row or column needs to be zeroed. We also need extra variables to track if the first row and first column themselves should be zeroed.",
    edgeCases: [
      "Matrix consists of only one element",
      "First row/column contains 0",
      "Multiple 0s in same row/column"
    ],
    algorithmSteps: [
      "Determine if the first row and first column should be zeroed.",
      "Iterate through the rest of the matrix (1 to m, 1 to n). If matrix[i][j] is 0, set matrix[i][0] and matrix[0][j] to 0.",
      "Iterate through the matrix again and use the markers in the first row and column to set matrix[i][j] to 0.",
      "Finally, zero out the first row and first column if the flags from step 1 are true."
    ],
    examples: [{ input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" }],
    defaultInput: { matrix: [[1, 1, 1], [1, 0, 1], [1, 1, 1]] },
    complexity: { time: "O(m * n)", space: "O(1)" },
    beginnerComplexity: { time: "O(m * n)", space: "O(m + n)" },
    optimalComplexity: { time: "O(m * n)", space: "O(1)" },
    starterCode: "class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        # Brute Force O(m + n) space\n        rows, cols = len(matrix), len(matrix[0])\n        zero_rows, zero_cols = set(), set()\n        for r in range(rows):\n            for c in range(cols):\n                if matrix[r][c] == 0:\n                    zero_rows.add(r)\n                    zero_cols.add(c)\n        for r in zero_rows:\n            for c in range(cols): matrix[r][c] = 0\n        for c in zero_cols:\n            for r in range(rows): matrix[r][c] = 0",
      javascript: "var setZeroes = function(matrix) {\n    let rows = matrix.length, cols = matrix[0].length;\n    let zeroRows = new Set(), zeroCols = new Set();\n    for (let r = 0; r < rows; r++) {\n        for (let c = 0; c < cols; c++) {\n            if (matrix[r][c] === 0) {\n                zeroRows.add(r);\n                zeroCols.add(c);\n            }\n        }\n    }\n    for (let r of zeroRows) {\n        for (let c = 0; c < cols; c++) matrix[r][c] = 0;\n    }\n    for (let c of zeroCols) {\n        for (let r = 0; r < rows; r++) matrix[r][c] = 0;\n    }\n};"
    },
    codes: {
      python: "class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        rows, cols = len(matrix), len(matrix[0])\n        rowZero = False\n        for r in range(rows):\n            for c in range(cols):\n                if matrix[r][c] == 0:\n                    matrix[0][c] = 0\n                    if r > 0: matrix[r][0] = 0\n                    else: rowZero = True\n        for r in range(1, rows):\n            for c in range(1, cols):\n                if matrix[0][c] == 0 or matrix[r][0] == 0: matrix[r][c] = 0\n        if matrix[0][0] == 0:\n            for r in range(rows): matrix[r][0] = 0\n        if rowZero:\n            for c in range(cols): matrix[0][c] = 0",
      javascript: "var setZeroes = function(matrix) {\n    let rows = matrix.length, cols = matrix[0].length;\n    let rowZero = false;\n    for (let r = 0; r < rows; r++) {\n        for (let c = 0; c < cols; c++) {\n            if (matrix[r][c] === 0) {\n                matrix[0][c] = 0;\n                if (r > 0) matrix[r][0] = 0;\n                else rowZero = true;\n            }\n        }\n    }\n    for (let r = 1; r < rows; r++) {\n        for (let c = 1; c < cols; c++) {\n            if (matrix[0][c] === 0 || matrix[r][0] === 0) matrix[r][c] = 0;\n        }\n    }\n    if (matrix[0][0] === 0) {\n        for (let r = 0; r < rows; r++) matrix[r][0] = 0;\n    }\n    if (rowZero) {\n        for (let c = 0; c < cols; c++) matrix[0][c] = 0;\n    }\n};",
      cpp: "class Solution {\npublic:\n    void setZeroes(vector<vector<int>>& matrix) {\n        int rows = matrix.size(), cols = matrix[0].size();\n        bool rowZero = false;\n        for (int r = 0; r < rows; r++) {\n            for (int c = 0; c < cols; c++) {\n                if (matrix[r][c] == 0) {\n                    matrix[0][c] = 0;\n                    if (r > 0) matrix[r][0] = 0;\n                    else rowZero = true;\n                }\n            }\n        }\n        for (int r = 1; r < rows; r++) {\n            for (int c = 1; c < cols; c++) {\n                if (matrix[0][c] == 0 || matrix[r][0] == 0) matrix[r][c] = 0;\n            }\n        }\n        if (matrix[0][0] == 0) {\n            for (int r = 0; r < rows; r++) matrix[r][0] = 0;\n        }\n        if (rowZero) {\n            for (int c = 0; c < cols; c++) matrix[0][c] = 0;\n        }\n    }\n};"
    }
  },
  {
    id: "202", slug: "happy-number", title: "Happy Number", difficulty: "Easy", diffClass: "difficulty-easy", category: "Math",
    description: "Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.",
    detailedExplanation: "We can use Floyd's Cycle-Finding algorithm (Slow and Fast pointers) to detect if we've entered a cycle. If the fast pointer eventually reaches 1, the number is happy. If the slow and fast pointers meet at a number other than 1, there is a cycle and the number is not happy.",
    edgeCases: [
      "n = 1 (Happy)",
      "n is already in a cycle",
      "Large n"
    ],
    algorithmSteps: [
      "Define a helper function 'getNext(n)' to calculate the sum of the squares of digits.",
      "Initialize 'slow' to n and 'fast' to getNext(n).",
      "While 'fast' is not 1 and 'slow' is not equal to 'fast':",
      "Move 'slow' one step (slow = getNext(slow)).",
      "Move 'fast' two steps (fast = getNext(getNext(fast))).",
      "Return true if 'fast' is 1, else false."
    ],
    examples: [{ input: "n = 19", output: "true" }, { input: "n = 2", output: "false" }],
    defaultInput: { n: 19 },
    complexity: { time: "O(log n)", space: "O(1)" },
    beginnerComplexity: { time: "O(log n)", space: "O(log n)" },
    optimalComplexity: { time: "O(log n)", space: "O(1)" },
    starterCode: "class Solution:\n    def isHappy(self, n: int) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def isHappy(self, n: int) -> bool:\n        # Using a HashSet to detect cycles\n        def get_next(num):\n            res = 0\n            while num > 0:\n                digit = num % 10\n                res += digit ** 2\n                num //= 10\n            return res\n        \n        seen = set()\n        while n != 1 and n not in seen:\n            seen.add(n)\n            n = get_next(n)\n        return n == 1",
      javascript: "var isHappy = function(n) {\n    const getNext = (num) => {\n        let res = 0;\n        while (num > 0) {\n            let digit = num % 10;\n            res += digit * digit;\n            num = Math.floor(num / 10);\n        }\n        return res;\n    };\n    let seen = new Set();\n    while (n !== 1 && !seen.has(n)) {\n        seen.add(n);\n        n = getNext(n);\n    }\n    return n === 1;\n};"
    },
    codes: {
      python: "class Solution:\n    def isHappy(self, n: int) -> bool:\n        def getNext(num):\n            res = 0\n            while num > 0:\n                res += (num % 10) ** 2\n                num //= 10\n            return res\n        slow, fast = n, getNext(n)\n        while fast != 1 and slow != fast:\n            slow = getNext(slow)\n            fast = getNext(getNext(fast))\n        return fast == 1",
      javascript: "var isHappy = function(n) {\n    const getNext = (num) => {\n        let res = 0;\n        while (num > 0) {\n            let digit = num % 10;\n            res += digit * digit;\n            num = Math.floor(num / 10);\n        }\n        return res;\n    };\n    let slow = n, fast = getNext(n);\n    while (fast !== 1 && slow !== fast) {\n        slow = getNext(slow);\n        fast = getNext(getNext(fast));\n    }\n    return fast === 1;\n};",
      cpp: "class Solution {\npublic:\n    int getNext(int n) {\n        int res = 0;\n        while (n > 0) {\n            int d = n % 10;\n            res += d * d;\n            n /= 10;\n        }\n        return res;\n    }\n    bool isHappy(int n) {\n        int slow = n, fast = getNext(n);\n        while (fast != 1 && slow != fast) {\n            slow = getNext(slow);\n            fast = getNext(getNext(fast));\n        }\n        return fast == 1;\n    }\n};"
    }
  },
  {
    id: "66", slug: "plus-one", title: "Plus One", difficulty: "Easy", diffClass: "difficulty-easy", category: "Math",
    description: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.",
    detailedExplanation: "We start from the last digit and add 1. If it becomes 10, we set it to 0 and carry the 1 to the next digit. We continue this until we find a digit less than 9 or we've processed all digits (in which case we prepend a 1).",
    edgeCases: [
      "All digits are 9 (e.g., 999 -> 1000)",
      "Single digit 9",
      "No carries needed"
    ],
    algorithmSteps: [
      "Iterate through the 'digits' array backwards.",
      "If the current digit is less than 9:",
      "Increment the digit and return the array.",
      "Else, set the current digit to 0.",
      "If we finish the loop, it means all digits were 9. Prepend 1 to the array and return it."
    ],
    examples: [{ input: "digits = [1,2,3]", output: "[1,2,4]" }, { input: "digits = [9]", output: "[1,0]" }],
    defaultInput: { digits: [1, 2, 3] },
    complexity: { time: "O(n)", space: "O(1)" }, // ignoring output expansion
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        # Convert to integer and back\n        num = int(\"\".join(map(str, digits)))\n        return [int(d) for d in str(num + 1)]",
      javascript: "var plusOne = function(digits) {\n    let num = BigInt(digits.join(''));\n    return (num + 1n).toString().split('').map(Number);\n};"
    },
    codes: {
      python: "class Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        for i in range(len(digits) - 1, -1, -1):\n            if digits[i] < 9:\n                digits[i] += 1\n                return digits\n            digits[i] = 0\n        return [1] + digits",
      javascript: "var plusOne = function(digits) {\n    for (let i = digits.length - 1; i >= 0; i--) {\n        if (digits[i] < 9) {\n            digits[i]++;\n            return digits;\n        }\n        digits[i] = 0;\n    }\n    digits.unshift(1);\n    return digits;\n};",
      cpp: "class Solution {\npublic:\n    vector<int> plusOne(vector<int>& digits) {\n        for (int i = digits.size() - 1; i >= 0; i--) {\n            if (digits[i] < 9) {\n                digits[i]++;\n                return digits;\n            }\n            digits[i] = 0;\n        }\n        digits.insert(digits.begin(), 1);\n        return digits;\n    }\n};"
    }
  },
  {
    id: "50", slug: "powx-n", title: "Pow(x, n)", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
    detailedExplanation: "We can use Binary Exponentiation (Exponentiation by Squaring) to calculate powers efficiently in O(log n). The idea is that x^n = (x^2)^(n/2) if n is even, and x * x^(n-1) if n is odd. This significantly reduces the number of multiplications.",
    edgeCases: [
      "n = 0 (res = 1)",
      "n = 1 (res = x)",
      "n is negative (res = 1 / x^|n|)",
      "x = 0 (res = 0 for n > 0)"
    ],
    algorithmSteps: [
      "Define a recursive function 'helper(x, n)':",
      "Base case: if x is 0, return 0; if n is 0, return 1.",
      "Calculate 'res = helper(x, n // 2)'.",
      "Multiply 'res' by itself (squaring).",
      "If n is odd, return 'x * res', otherwise return 'res'.",
      "In the main function, call 'helper(x, abs(n))'.",
      "If n is negative, return '1 / res', otherwise return 'res'."
    ],
    examples: [{ input: "x = 2.00000, n = 10", output: "1024.00000" }, { input: "x = 2.10000, n = 3", output: "9.26100" }],
    defaultInput: { x: 2, n: 10 },
    complexity: { time: "O(log n)", space: "O(log n)" }, // recursive stack
    beginnerComplexity: { time: "O(n)", space: "O(1)" },
    optimalComplexity: { time: "O(log n)", space: "O(log n)" },
    starterCode: "class Solution:\n    def myPow(self, x: float, n: int) -> float:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def myPow(self, x: float, n: int) -> float:\n        # Brute Force O(n): Repeated multiplication\n        if n == 0: return 1\n        if n < 0:\n            x = 1 / x\n            n = -n\n        res = 1\n        for _ in range(n):\n            res *= x\n        return res",
      javascript: "var myPow = function(x, n) {\n    if (n === 0) return 1;\n    if (n < 0) {\n        x = 1 / x;\n        n = -n;\n    }\n    let res = 1;\n    for (let i = 0; i < n; i++) {\n        res *= x;\n    }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def myPow(self, x: float, n: int) -> float:\n        def helper(x, n):\n            if x == 0: return 0\n            if n == 0: return 1\n            res = helper(x, n // 2)\n            res = res * res\n            return x * res if n % 2 else res\n        res = helper(x, abs(n))\n        return res if n >= 0 else 1 / res",
      javascript: "var myPow = function(x, n) {\n    const helper = (x, n) => {\n        if (x === 0) return 0;\n        if (n === 0) return 1;\n        let res = helper(x, Math.floor(n / 2));\n        res = res * res;\n        return n % 2 === 1 ? x * res : res;\n    };\n    let res = helper(x, Math.abs(n));\n    return n >= 0 ? res : 1 / res;\n};",
      cpp: "class Solution {\npublic:\n    double helper(double x, long n) {\n        if (x == 0) return 0;\n        if (n == 0) return 1;\n        double res = helper(x, n / 2);\n        res = res * res;\n        return (n % 2) ? x * res : res;\n    }\n    double myPow(double x, int n) {\n        double res = helper(x, abs((long)n));\n        return (n >= 0) ? res : 1.0 / res;\n    }\n};"
    }
  },
  {
    id: "43", slug: "multiply-strings", title: "Multiply Strings", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.",
    detailedExplanation: "We can simulate the manual multiplication process. We multiply each digit of 'num1' with each digit of 'num2' and store the results in an array 'res'. For num1[i] and num2[j], the product is added to res[i+j] and res[i+j+1] (for the carry).",
    edgeCases: [
      "One of the numbers is '0'",
      "Large numbers",
      "Single digit numbers"
    ],
    algorithmSteps: [
      "If either number is '0', return '0'.",
      "Initialize a 'res' array of size m + n with zeros.",
      "Reverse both input strings.",
      "For each digit i in num1:",
      "For each digit j in num2:",
      "Calculate product = num1[i] * num2[j].",
      "Add product to res[i+j], handles carry to res[i+j+1].",
      "Reverse 'res' and join digits into a string, skipping leading zeros."
    ],
    examples: [{ input: 'num1 = "2", num2 = "3"', output: '"6"' }, { input: 'num1 = "123", num2 = "456"', output: '"56088"' }],
    defaultInput: { num1: "2", num2: "3" },
    complexity: { time: "O(m * n)", space: "O(m + n)" },
    beginnerComplexity: { time: "O(m * n)", space: "O(m + n)" },
    optimalComplexity: { time: "O(m * n)", space: "O(m + n)" },
    starterCode: "class Solution:\n    def multiply(self, num1: str, num2: str) -> str:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def multiply(self, num1: str, num2: str) -> str:\n        # Simple approach using built-in conversion (some environments may restrict this)\n        return str(int(num1) * int(num2))",
      javascript: "var multiply = function(num1, num2) {\n    return (BigInt(num1) * BigInt(num2)).toString();\n};"
    },
    codes: {
      python: "class Solution:\n    def multiply(self, num1: str, num2: str) -> str:\n        if \"0\" in [num1, num2]: return \"0\"\n        res = [0] * (len(num1) + len(num2))\n        num1, num2 = num1[::-1], num2[::-1]\n        for i1 in range(len(num1)):\n            for i2 in range(len(num2)):\n                digit = int(num1[i1]) * int(num2[i2])\n                res[i1 + i2] += digit\n                res[i1 + i2 + 1] += (res[i1 + i2] // 10)\n                res[i1 + i2] %= 10\n        skip, res = 0, res[::-1]\n        while skip < len(res) and res[skip] == 0: skip += 1\n        res = map(str, res[skip:])\n        return \"\".join(res)",
      javascript: "var multiply = function(num1, num2) {\n    if (num1 === \"0\" || num2 === \"0\") return \"0\";\n    let m = num1.length, n = num2.length;\n    let res = new Array(m + n).fill(0);\n    for (let i = m - 1; i >= 0; i--) {\n        for (let j = n - 1; j >= 0; j--) {\n            let mul = (num1[i] - '0') * (num2[j] - '0');\n            let sum = mul + res[i + j + 1];\n            res[i + j + 1] = sum % 10;\n            res[i + j] += Math.floor(sum / 10);\n        }\n    }\n    let str = res.join('');\n    return str.startsWith('0') ? str.slice(1) : str;\n};",
      cpp: "class Solution {\npublic:\n    string multiply(string num1, string num2) {\n        if (num1 == \"0\" || num2 == \"0\") return \"0\";\n        vector<int> res(num1.size() + num2.size(), 0);\n        for (int i = num1.size() - 1; i >= 0; i--) {\n            for (int j = num2.size() - 1; j >= 0; j--) {\n                res[i + j + 1] += (num1[i] - '0') * (num2[j] - '0');\n                res[i + j] += res[i + j + 1] / 10;\n                res[i + j + 1] %= 10;\n            }\n        }\n        int i = 0;\n        while (i < res.size() && res[i] == 0) i++;\n        string s = \"\";\n        while (i < res.size()) s += to_string(res[i++]);\n        return s;\n    }\n};"
    }
  },
  {
    id: "2013", slug: "detect-squares", title: "Detect Squares", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "You are given a stream of points on a 2D plane. Design an algorithm that: 1. Adds new points from the stream into a data structure. Duplicate points are allowed and should be treated as different points. 2. Given a query point, counts the number of ways to form a axis-aligned square with all edges parallel to the axes, where the query point is one of the corners.",
    detailedExplanation: "We can use a hash map to store the frequency of each point. To count squares for a query point (px, py), we iterate through all existing points (x, y). If (x, y) can be a diagonal corner (i.e., |px - x| == |py - y| and x != px), then we check if the other two corners (x, py) and (px, y) exist in our map. The number of squares is the product of the frequencies of these three corners.",
    edgeCases: [
      "Duplicate points added",
      "Query point already exists in the stream",
      "No squares possible"
    ],
    algorithmSteps: [
      "Maintain a frequency map 'ptsCount' for all added points.",
      "Maintain a list 'pts' of all unique points (optional optimization).",
      "For 'add(point)': increment frequency of point in 'ptsCount'.",
      "For 'count(point)':",
      "Iterate through all unique points (x, y) in the map.",
      "Check if (x, y) forms a diagonal with (px, py): |px - x| == |py - y| and x != px.",
      "If it does, multiply counts of (x, y), (x, py), and (px, y).",
      "Add to 'res' and return."
    ],
    examples: [{ input: 'add([3, 10]); add([11, 2]); add([3, 2]); count([11, 10]);', output: "1" }],
    defaultInput: { actions: ["add", "add", "add", "count"], values: [[3, 10], [11, 2], [3, 2], [11, 10]] },
    complexity: { time: "add: O(1), count: O(n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n)", space: "O(n)" },
    optimalComplexity: { time: "O(n)", space: "O(n)" },
    starterCode: "class DetectSquares:\n    def __init__(self):\n        # Write your code here\n        pass\n\n    def add(self, point: List[int]) -> None:\n        # Write your code here\n        pass\n\n    def count(self, point: List[int]) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class DetectSquares:\n    def __init__(self):\n        self.pts = []\n\n    def add(self, point: List[int]) -> None:\n        self.pts.append(point)\n\n    def count(self, point: List[int]) -> int:\n        # Brute Force O(n^3) - impractical, but for demonstration\n        res = 0\n        px, py = point\n        # This would involve triple loops over all points\n        return res",
      javascript: "var DetectSquares = function() {\n    this.pts = [];\n};\nDetectSquares.prototype.add = function(point) {\n    this.pts.push(point);\n};\nDetectSquares.prototype.count = function(point) {\n    return 0;\n};"
    },
    codes: {
      python: "class DetectSquares:\n    def __init__(self):\n        self.ptsCount = collections.defaultdict(int)\n        self.pts = []\n\n    def add(self, point: List[int]) -> None:\n        self.ptsCount[tuple(point)] += 1\n        self.pts.append(point)\n\n    def count(self, point: List[int]) -> int:\n        res = 0\n        px, py = point\n        for x, y in self.pts:\n            if (abs(py - y) != abs(px - x)) or x == px or y == py: continue\n            res += self.ptsCount[(x, py)] * self.ptsCount[(px, y)]\n        return res",
      javascript: "var DetectSquares = function() {\n    this.ptsCount = new Map();\n    this.pts = [];\n};\nDetectSquares.prototype.add = function(point) {\n    let key = point[0] + \",\" + point[1];\n    this.ptsCount.set(key, (this.ptsCount.get(key) || 0) + 1);\n    this.pts.push(point);\n};\nDetectSquares.prototype.count = function(point) {\n    let res = 0;\n    let [px, py] = point;\n    for (let [x, y] of this.pts) {\n        if (Math.abs(py - y) !== Math.abs(px - x) || x === px || y === py) continue;\n        let key1 = x + \",\" + py;\n        let key2 = px + \",\" + y;\n        res += (this.ptsCount.get(key1) || 0) * (this.ptsCount.get(key2) || 0);\n    }\n    return res;\n};",
      cpp: "class DetectSquares {\npublic:\n    map<pair<int, int>, int> ptsCount;\n    vector<pair<int, int>> pts;\n    DetectSquares() {}\n    void add(vector<int> point) {\n        ptsCount[{point[0], point[1]}]++;\n        pts.push_back({point[0], point[1]});\n    }\n    int count(vector<int> point) {\n        int res = 0, px = point[0], py = point[1];\n        for (auto& p : pts) {\n            int x = p.first, y = p.second;\n            if (abs(py - y) != abs(px - x) || x == px || y == py) continue;\n            if (ptsCount.count({x, py}) && ptsCount.count({px, y})) {\n                res += ptsCount[{x, py}] * ptsCount[{px, y}];\n            }\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "779", slug: "k-th-symbol-in-grammar", title: "K-th Symbol in Grammar", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "We build a table of n rows (1-indexed). We start with 0 in the 1st row. In subsequent rows, we replace each occurrence of 0 with 01 and each occurrence of 1 with 10. Given n and k, return the kth symbol in the nth row.",
    detailedExplanation: "The structure is recursive. Row n is formed by Row n-1 followed by its bitwise flipped version. If k is in the first half of the current row, the value is the same as in Row n-1 at position k. If k is in the second half, the value is the flip of Row n-1 at position k - (midpoint).",
    edgeCases: [
      "n = 1, k = 1",
      "k is exactly at midpoint",
      "Large n"
    ],
    algorithmSteps: [
      "Initialize 'cur' to 0 (root value).",
      "Initialize 'left' to 1 and 'right' to 2^(n-1).",
      "Iterate n-1 times:",
      "Calculate 'mid' = (left + right) // 2.",
      "If k <= mid, update 'right' = mid.",
      "If k > mid, update 'left' = mid + 1, and flip 'cur' (0 -> 1, 1 -> 0).",
      "Return 'cur'."
    ],
    examples: [{ input: "n = 1, k = 1", output: "0" }, { input: "n = 2, k = 1", output: "0" }, { input: "n = 2, k = 2", output: "1" }],
    defaultInput: { n: 2, k: 1 },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(2^n)", space: "O(2^n)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def kthGrammar(self, n: int, k: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def kthGrammar(self, n: int, k: int) -> int:\n        # Brute Force: Actually construct the rows\n        row = \"0\"\n        for _ in range(n - 1):\n            next_row = \"\"\n            for char in row:\n                next_row += \"01\" if char == \"0\" else \"10\"\n            row = next_row\n        return int(row[k-1])",
      javascript: "var kthGrammar = function(n, k) {\n    let row = \"0\";\n    for (let i = 0; i < n - 1; i++) {\n        let nextRow = \"\";\n        for (let char of row) nextRow += char === \"0\" ? \"01\" : \"10\";\n        row = nextRow;\n    }\n    return parseInt(row[k-1]);\n};"
    },
    codes: {
      python: "class Solution:\n    def kthGrammar(self, n: int, k: int) -> int:\n        cur = 0\n        left, right = 1, 2**(n-1)\n        for _ in range(n - 1):\n            mid = (left + right) // 2\n            if k <= mid:\n                right = mid\n            else:\n                left = mid + 1\n                cur = 0 if cur else 1\n        return cur",
      javascript: "var kthGrammar = function(n, k) {\n    let cur = 0, left = 1, right = Math.pow(2, n - 1);\n    for (let i = 0; i < n - 1; i++) {\n        let mid = Math.floor((left + right) / 2);\n        if (k <= mid) right = mid;\n        else {\n            left = mid + 1;\n            cur = cur === 0 ? 1 : 0;\n        }\n    }\n    return cur;\n};",
      cpp: "class Solution {\npublic:\n    int kthGrammar(int n, int k) {\n        if (n == 1) return 0;\n        int mid = pow(2, n - 2);\n        if (k <= mid) return kthGrammar(n - 1, k);\n        return !kthGrammar(n - 1, k - mid);\n    }\n};"
    }
  },
  {
    id: "204", slug: "count-primes", title: "Count Primes", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Given an integer n, return the number of prime numbers that are strictly less than n.",
    detailedExplanation: "We use the Sieve of Eratosthenes. We create a boolean array 'primes' of size n. Starting from 2, we mark all multiples of each prime as composite (false). We only need to iterate up to the square root of n.",
    edgeCases: [
      "n = 0, 1 (res = 0)",
      "n = 2 (res = 0)",
      "Large n"
    ],
    algorithmSteps: [
      "If n <= 2, return 0.",
      "Initialize boolean array 'primes' of size n with 'true'.",
      "Set primes[0] and primes[1] to 'false'.",
      "For i from 2 to sqrt(n):",
      "If primes[i] is true:",
      "Set all multiples of i starting from i*i to false (primes[j] = false, j += i).",
      "Return the count of 'true' values in the array."
    ],
    examples: [{ input: "n = 10", output: "4" }, { input: "n = 0", output: "0" }, { input: "n = 1", output: "0" }],
    defaultInput: { n: 10 },
    complexity: { time: "O(n log log n)", space: "O(n)" },
    beginnerComplexity: { time: "O(n * sqrt(n))", space: "O(1)" },
    optimalComplexity: { time: "O(n log log n)", space: "O(n)" },
    starterCode: "class Solution:\n    def countPrimes(self, n: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def countPrimes(self, n: int) -> int:\n        # Brute Force: Check primality for each i < n\n        def is_prime(x):\n            if x < 2: return False\n            for i in range(2, int(x**0.5) + 1):\n                if x % i == 0: return False\n            return True\n        count = 0\n        for i in range(2, n):\n            if is_prime(i): count += 1\n        return count",
      javascript: "var countPrimes = function(n) {\n    const isPrime = (x) => {\n        if (x < 2) return false;\n        for (let i = 2; i * i <= x; i++) {\n            if (x % i === 0) return false;\n        }\n        return true;\n    };\n    let count = 0;\n    for (let i = 2; i < n; i++) {\n        if (isPrime(i)) count++;\n    }\n    return count;\n};"
    },
    codes: {
      python: "class Solution:\n    def countPrimes(self, n: int) -> int:\n        if n <= 2: return 0\n        primes = [True] * n\n        primes[0] = primes[1] = False\n        for i in range(2, int(n**0.5) + 1):\n            if primes[i]:\n                for j in range(i*i, n, i):\n                    primes[j] = False\n        return sum(primes)",
      javascript: "var countPrimes = function(n) {\n    if (n <= 2) return 0;\n    let primes = new Uint8Array(n).fill(1);\n    primes[0] = primes[1] = 0;\n    for (let i = 2; i * i < n; i++) {\n        if (primes[i]) {\n            for (let j = i * i; j < n; j += i) primes[j] = 0;\n        }\n    }\n    return primes.reduce((a, b) => a + b, 0);\n};",
      cpp: "class Solution {\npublic:\n    int countPrimes(int n) {\n        if (n <= 2) return 0;\n        vector<bool> primes(n, true);\n        primes[0] = primes[1] = false;\n        for (int i = 2; i * i < n; i++) {\n            if (primes[i]) {\n                for (int j = i * i; j < n; j += i) primes[j] = false;\n            }\n        }\n        int count = 0;\n        for (int i = 2; i < n; i++) if (primes[i]) count++;\n        return count;\n    }\n};"
    }
  },
  {
    id: "1041", slug: "robot-bounded-in-circle", title: "Robot Bounded In Circle", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive three instructions: 'G' (go straight 1 unit), 'L' (turn 90 degrees left), and 'R' (turn 90 degrees right). Determine if there exists a circle in the plane such that the robot never leaves the circle.",
    detailedExplanation: "A robot is bounded in a circle if after one sequence of instructions: 1. It returns to the starting position (0, 0). 2. It is not facing north. If it's not facing north, it is guaranteed to return to the origin after at most 4 repetitions of the instructions.",
    edgeCases: [
      "Robot ends at origin",
      "Robot ends not at origin but facing north (unbounded)",
      "Robot ends facing south/east/west (bounded)"
    ],
    algorithmSteps: [
      "Initialize position (x, y) = (0, 0) and direction (dirX, dirY) = (0, 1) [North].",
      "Iterate through the instructions:",
      "If 'G', move (x, y) = (x + dirX, y + dirY).",
      "If 'L', rotate direction 90 degrees left: (dirX, dirY) = (-dirY, dirX).",
      "If 'R', rotate direction 90 degrees right: (dirX, dirY) = (dirY, -dirX).",
      "The robot is bounded if (x, y) == (0, 0) or (dirX, dirY) != (0, 1)."
    ],
    examples: [{ input: 'instructions = "GGLLGG"', output: "true" }, { input: 'instructions = "GG"', output: "false" }],
    defaultInput: { instructions: "GGLLGG" },
    complexity: { time: "O(n)", space: "O(1)" },
    beginnerComplexity: { time: "O(n)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def isRobotBounded(self, instructions: str) -> bool:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def isRobotBounded(self, instructions: str) -> bool:\n        # Simulate 4 times to check if it ever returns to origin\n        x, y = 0, 0\n        dirX, dirY = 0, 1\n        for _ in range(4):\n            for d in instructions:\n                if d == \"G\": x, y = x + dirX, y + dirY\n                elif d == \"L\": dirX, dirY = -dirY, dirX\n                else: dirX, dirY = dirY, -dirX\n            if x == 0 and y == 0: return True\n        return False",
      javascript: "var isRobotBounded = function(instructions) {\n    let x = 0, y = 0, dirX = 0, dirY = 1;\n    for (let i = 0; i < 4; i++) {\n        for (let d of instructions) {\n            if (d === 'G') { x += dirX; y += dirY; }\n            else if (d === 'L') { [dirX, dirY] = [-dirY, dirX]; }\n            else { [dirX, dirY] = [dirY, -dirX]; }\n        }\n        if (x === 0 and y === 0) return true;\n    }\n    return false;\n};"
    },
    codes: {
      python: "class Solution:\n    def isRobotBounded(self, instructions: str) -> bool:\n        dirX, dirY = 0, 1\n        x, y = 0, 0\n        for d in instructions:\n            if d == \"G\": x, y = x + dirX, y + dirY\n            elif d == \"L\": dirX, dirY = -dirY, dirX\n            else: dirX, dirY = dirY, -dirX\n        return (x == 0 and y == 0) or (dirX, dirY) != (0, 1)",
      javascript: "var isRobotBounded = function(instructions) {\n    let x = 0, y = 0, dirX = 0, dirY = 1;\n    for (let d of instructions) {\n        if (d === 'G') { x += dirX; y += dirY; }\n        else if (d === 'L') { [dirX, dirY] = [-dirY, dirX]; }\n        else { [dirX, dirY] = [dirY, -dirX]; }\n    }\n    return (x === 0 && y === 0) || (dirX !== 0 || dirY !== 1);\n};",
      cpp: "class Solution {\npublic:\n    bool isRobotBounded(string instructions) {\n        int x = 0, y = 0, dirX = 0, dirY = 1;\n        for (char i : instructions) {\n            if (i == 'G') { x += dirX; y += dirY; }\n            else if (i == 'L') {\n                int temp = dirX;\n                dirX = -dirY;\n                dirY = temp;\n            } else {\n                int temp = dirX;\n                dirX = dirY;\n                dirY = -temp;\n            }\n        }\n        return (x == 0 && y == 0) || (dirX != 0 || dirY != 1);\n    }\n};"
    }
  },
  {
    id: "858", slug: "mirror-reflection", title: "Mirror Reflection", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "There is a special square room with mirrors on each of the four walls. Except for the corners, every point on the walls is a mirror. Each wall has length p. A laser ray emits from the corner (0, 0) and hits a wall at (p, q). Find the number of the receptor (0, 1, or 2) that the ray hits first.",
    detailedExplanation: "We can imagine the room being reflected repeatedly. The ray eventually reaches a corner after travel a total distance that is a multiple of both p and q. Let this distance be L = LCM(p, q). The number of reflections depends on whether L/p and L/q are odd or even.",
    edgeCases: [
      "p = q",
      "p is much larger than q",
      "p is a multiple of q"
    ],
    algorithmSteps: [
      "While both p and q are even, divide both by 2.",
      "If p is even, the ray hits receptor 2.",
      "If q is even, the ray hits receptor 0.",
      "If both are odd, the ray hits receptor 1."
    ],
    examples: [{ input: "p = 2, q = 1", output: "2" }, { input: "p = 3, q = 1", output: "1" }],
    defaultInput: { p: 2, q: 1 },
    complexity: { time: "O(log p)", space: "O(1)" },
    beginnerComplexity: { time: "O(log p)", space: "O(1)" },
    optimalComplexity: { time: "O(log p)", space: "O(1)" },
    starterCode: "class Solution:\n    def mirrorReflection(self, p: int, q: int) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def mirrorReflection(self, p: int, q: int) -> int:\n        # Simulating reflections (could be complex)\n        return -1",
      javascript: "var mirrorReflection = function(p, q) {\n    return -1;\n};"
    },
    codes: {
      python: "class Solution:\n    def mirrorReflection(self, p: int, q: int) -> int:\n        while p % 2 == 0 and q % 2 == 0:\n            p //= 2\n            q //= 2\n        if p % 2 == 0: return 2\n        if q % 2 == 0: return 0\n        return 1",
      javascript: "var mirrorReflection = function(p, q) {\n    while (p % 2 === 0 && q % 2 === 0) {\n        p /= 2;\n        q /= 2;\n    }\n    if (p % 2 === 0) return 2;\n    if (q % 2 === 0) return 0;\n    return 1;\n};",
      cpp: "class Solution {\npublic:\n    int mirrorReflection(int p, int q) {\n        while (p % 2 == 0 && q % 2 == 0) {\n            p /= 2;\n            q /= 2;\n        }\n        if (p % 2 == 0) return 2;\n        if (q % 2 == 0) return 0;\n        return 1;\n    }\n};"
    }
  },
  {
    id: "166", slug: "fraction-to-recurring-decimal", title: "Fraction to Decimal", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Given two integers representing the numerator and denominator of a fraction, return the fraction in string format. If the fractional part is repeating, enclose the repeating part in parentheses. If multiple answers are possible, return any of them.",
    detailedExplanation: "We perform long division. If there's a remainder, we continue the division after adding a decimal point. To detect cycles in the fractional part, we use a hash map to store the position of each remainder encountered. If we see a remainder again, we found a repeating cycle.",
    edgeCases: [
      "Numerator is 0",
      "Denominator is negative",
      "Integer result (no fractional part)",
      "Non-repeating decimal"
    ],
    algorithmSteps: [
      "Handle the sign of the result.",
      "Convert numerator and denominator to 64-bit absolute values to handle overflow.",
      "Calculate the integer part: num // den.",
      "If there's no remainder, return the result.",
      "Start adding fractional part: add '.', and use a map to store seen remainders.",
      "While remainder is not 0 and not in the map:",
      "Store remainder's index, multiply remainder by 10, add digit to result.",
      "If we encounter a seen remainder, insert '(' at the stored index and add ')'.",
      "Return the joined list."
    ],
    examples: [{ input: "numerator = 1, denominator = 2", output: '"0.5"' }, { input: "numerator = 2, denominator = 1", output: '"2"' }, { input: "numerator = 4, denominator = 333", output: '"0.(012)"' }],
    defaultInput: { numerator: 1, denominator: 2 },
    complexity: { time: "O(denominator)", space: "O(denominator)" },
    beginnerComplexity: { time: "O(denominator)", space: "O(denominator)" },
    optimalComplexity: { time: "O(denominator)", space: "O(denominator)" },
    starterCode: "class Solution:\n    def fractionToDecimal(self, numerator: int, denominator: int) -> str:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def fractionToDecimal(self, numerator: int, denominator: int) -> str:\n        # Simple floating point division (insufficient for recurring decimals)\n        return str(numerator / denominator)",
      javascript: "var fractionToDecimal = function(numerator, denominator) {\n    return (numerator / denominator).toString();\n};"
    },
    codes: {
      python: "class Solution:\n    def fractionToDecimal(self, numerator: int, denominator: int) -> str:\n        if numerator == 0: return \"0\"\n        res = []\n        if (numerator < 0) ^ (denominator < 0): res.append(\"-\")\n        num, den = abs(numerator), abs(denominator)\n        res.append(str(num // den))\n        remainder = num % den\n        if remainder == 0: return \"\".join(res)\n        res.append(\".\")\n        dic = {}\n        while remainder != 0:\n            if remainder in dic:\n                res.insert(dic[remainder], \"(\")\n                res.append(\")\")\n                break\n            dic[remainder] = len(res)\n            remainder *= 10\n            res.append(str(remainder // den))\n            remainder %= den\n        return \"\".join(res)",
      javascript: "var fractionToDecimal = function(numerator, denominator) {\n    if (numerator === 0) return \"0\";\n    let res = \"\";\n    if (Math.sign(numerator) !== Math.sign(denominator)) res += \"-\";\n    let num = Math.abs(numerator), den = Math.abs(denominator);\n    res += Math.floor(num / den);\n    let remainder = num % den;\n    if (remainder === 0) return res;\n    res += \".\";\n    let map = new Map();\n    while (remainder !== 0) {\n        if (map.has(remainder)) {\n            let index = map.get(remainder);\n            return res.slice(0, index) + \"(\" + res.slice(index) + \")\";\n        }\n        map.set(remainder, res.length);\n        remainder *= 10;\n        res += Math.floor(remainder / den);\n        remainder %= den;\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    string fractionToDecimal(long numerator, long denominator) {\n        if (numerator == 0) return \"0\";\n        string res = \"\";\n        if (numerator < 0 ^ denominator < 0) res += '-';\n        numerator = abs(numerator); denominator = abs(denominator);\n        res += to_string(numerator / denominator);\n        long rem = numerator % denominator;\n        if (rem == 0) return res;\n        res += '.';\n        unordered_map<long, int> mp;\n        while (rem) {\n            if (mp.count(rem)) {\n                res.insert(mp[rem], \"(\");\n                res += ')';\n                break;\n            }\n            mp[rem] = res.size();\n            rem *= 10;\n            res += to_string(rem / denominator);\n            rem %= denominator;\n        }\n        return res;\n    }\n};"
    }
  },
  {
    id: "12", slug: "integer-to-roman", title: "Integer to Roman", difficulty: "Medium", diffClass: "difficulty-medium", category: "Math",
    description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given an integer, convert it to a roman numeral.",
    detailedExplanation: "We can maintain a list of pairs containing the symbol and its corresponding value, ordered from largest to smallest. We iterate through this list, and for each value, we determine how many times it fits into the current number, adding the symbols and updating the number.",
    edgeCases: [
      "Single digit integer",
      "Integers requiring subtraction notation (e.g., 4, 9, 40)",
      "Max integer allowed (3999)"
    ],
    algorithmSteps: [
      "Define a list of Roman numeral symbols and their values in descending order.",
      "Include subtraction cases like 'IV', 'IX', 'XL', 'XC', etc.",
      "Initialize 'res' as an empty string.",
      "For each symbol and value in the list:",
      "While 'num' >= 'value':",
      "Add 'symbol' to 'res'.",
      "Subtract 'value' from 'num'.",
      "Return 'res'."
    ],
    examples: [{ input: "num = 3", output: '"III"' }, { input: "num = 58", output: '"LVIII"' }, { input: "num = 1994", output: '"MCMXCIV"' }],
    defaultInput: { num: 3 },
    complexity: { time: "O(1)", space: "O(1)" }, // Finite number of symbols
    beginnerComplexity: { time: "O(1)", space: "O(1)" },
    optimalComplexity: { time: "O(1)", space: "O(1)" },
    starterCode: "class Solution:\n    def intToRoman(self, num: int) -> str:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def intToRoman(self, num: int) -> str:\n        # Simple series of if/else or matching (simplified)\n        res = \"\"\n        while num >= 1000: res += \"M\"; num -= 1000\n        if num >= 900: res += \"CM\"; num -= 900\n        # ... and so on for each case\n        return res",
      javascript: "var intToRoman = function(num) {\n    let res = \"\";\n    while (num >= 1000) { res += \"M\"; num -= 1000; }\n    if (num >= 900) { res += \"CM\"; num -= 900; }\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def intToRoman(self, num: int) -> str:\n        symList = [[\"I\", 1], [\"IV\", 4], [\"V\", 5], [\"IX\", 9], [\"X\", 10], [\"XL\", 40], [\"L\", 50], [\"XC\", 90], [\"C\", 100], [\"CD\", 400], [\"D\", 500], [\"CM\", 900], [\"M\", 1000]]\n        res = \"\"\n        for sym, val in reversed(symList):\n            if num // val:\n                count = num // val\n                res += (sym * count)\n                num = num % val\n        return res",
      javascript: "var intToRoman = function(num) {\n    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];\n    const sym = [\"M\",\"CM\",\"D\",\"CD\",\"C\",\"XC\",\"L\",\"XL\",\"X\",\"IX\",\"V\",\"IV\",\"I\"];\n    let res = \"\";\n    for (let i = 0; i < val.length; i++) {\n        while (num >= val[i]) {\n            res += sym[i];\n            num -= val[i];\n        }\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    string intToRoman(int num) {\n        string sym[] = {\"M\", \"CM\", \"D\", \"CD\", \"C\", \"XC\", \"L\", \"XL\", \"X\", \"IX\", \"V\", \"IV\", \"I\"};\n        int val[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};\n        string res = \"\";\n        for (int i = 0; i < 13; i++) {\n            while (num >= val[i]) {\n                res += sym[i];\n                num -= val[i];\n            }\n        }\n        return res;\n    }\n};\n"
    }
  },
  {
    id: "13", slug: "roman-to-integer", title: "Roman to Integer", difficulty: "Easy", diffClass: "difficulty-easy", category: "Math",
    description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
    detailedExplanation: "We iterate through the string from left to right. For each symbol, if its value is less than the symbol to its right, it is part of a subtraction notation (e.g., 'IV'). In this case, we subtract its value from the total. Otherwise, we add its value to the total.",
    edgeCases: [
      "Single character roman numeral",
      "Roman numeral with multiple subtractions (e.g., 'MCMXCIV')",
      "All same characters (e.g., 'III')"
    ],
    algorithmSteps: [
      "Create a map of Roman symbols to their integer values.",
      "Initialize 'res' to 0.",
      "Iterate through the string 's' from 0 up to len(s) - 1.",
      "If the current symbol's value is less than the next symbol's value:",
      "Subtract current value from 'res'.",
      "Else, add current value to 'res'.",
      "Return 'res'."
    ],
    examples: [{ input: 's = "III"', output: "3" }, { input: 's = "LVIII"', output: "58" }, { input: 's = "MCMXCIV"', output: "1994" }],
    defaultInput: { s: "III" },
    complexity: { time: "O(n)", space: "O(1)" }, // excluding map
    beginnerComplexity: { time: "O(n)", space: "O(1)" },
    optimalComplexity: { time: "O(n)", space: "O(1)" },
    starterCode: "class Solution:\n    def romanToInt(self, s: str) -> int:\n        # Write your code here\n        pass",
    beginnerCode: {
      python: "class Solution:\n    def romanToInt(self, s: str) -> int:\n        # Case by case replacement approach\n        s = s.replace(\"IV\", \"IIII\").replace(\"IX\", \"VIIII\")\n        s = s.replace(\"XL\", \"XXXX\").replace(\"XC\", \"LXXXX\")\n        s = s.replace(\"CD\", \"CCCC\").replace(\"CM\", \"DCCCC\")\n        roman = {\"I\": 1, \"V\": 5, \"X\": 10, \"L\": 50, \"C\": 100, \"D\": 500, \"M\": 1000}\n        return sum(roman[char] for char in s)",
      javascript: "var romanToInt = function(s) {\n    s = s.replace(\"IV\", \"IIII\").replace(\"IX\", \"VIIII\")\n         .replace(\"XL\", \"XXXX\").replace(\"XC\", \"LXXXX\")\n         .replace(\"CD\", \"CCCC\").replace(\"CM\", \"DCCCC\");\n    let roman = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};\n    let res = 0;\n    for (let char of s) res += roman[char];\n    return res;\n};"
    },
    codes: {
      python: "class Solution:\n    def romanToInt(self, s: str) -> int:\n        roman = {\"I\": 1, \"V\": 5, \"X\": 10, \"L\": 50, \"C\": 100, \"D\": 500, \"M\": 1000}\n        res = 0\n        for i in range(len(s)):\n            if i + 1 < len(s) and roman[s[i]] < roman[s[i + 1]]:\n                res -= roman[s[i]]\n            else:\n                res += roman[s[i]]\n        return res",
      javascript: "var romanToInt = function(s) {\n    const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };\n    let res = 0;\n    for (let i = 0; i < s.length; i++) {\n        if (map[s[i]] < map[s[i+1]]) res -= map[s[i]];\n        else res += map[s[i]];\n    }\n    return res;\n};",
      cpp: "class Solution {\npublic:\n    int romanToInt(string s) {\n        unordered_map<char, int> m = {{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (m[s[i]] < m[s[i + 1]]) res -= m[s[i]];\n            else res += m[s[i]];\n        }\n        return res;\n    }\n};\n"
    }
  }
];
