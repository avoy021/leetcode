const problems = [
    {
        "id": "1",
        "title": "Find Sum",
        "question": "Given an array of integers, find their equivalent sum.",
        "examples": [
            "Input: nums = [2,7]",
            "Output: 9",
            "Output: Because nums[0] + nums[1] == 9",
            "Input: nums = [3,2,4]",
            "Output: 9",
            "Input: nums = [3,3]",
            "Output: 6",
            ""
        ],
        "constraints": [
            "2 <= nums.length <= 100",
            "0 <= nums[i] <= 100",
            "Only one valid answer exists."
        ]
    },
    {
        "id": "7",
        "title": "Reverse Integer",
        "question": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.Assume the environment does not allow you to store 64-bit integers (signed or unsigned).",
        "examples": [
            "Input: x = 123",
            "Output: 321",
            "Input: x = -123",
            "Output: -321",
            "Input: x = 120",
            "Output: 21",
            "Input: x = 0",
            "Output: 0",
            ""
        ],
        "constraints": [
            "-231 <= x <= 231 - 1"
        ]
    },
    {
        "id": "35",
        "title": "Search Insert Position",
        "question": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.You must write an algorithm with O(log n) runtime complexity.",
        "examples": [
            "Input: nums = [1,3,5,6], target = 5",
            "Output: 2",
            "Input: nums = [1,3,5,6], target = 2",
            "Output: 1",
            "Input: nums = [1,3,5,6], target = 7",
            "Output: 4",
            "Input: nums = [1,3,5,6], target = 0",
            "Output: 0",
            "Input: nums = [1], target = 0",
            "Output: 0",
            ""
        ],
        "constraints": [
            "1 <= nums. length <= 104-104 <= nums[i] <= 104",
            "nums contains distinct values sorted in ascending order.-104 <= target <= 104"
        ]
    },
    {
        "id": "485",
        "title": "Max Consecutive Ones",
        "question": "Given a binary array nums, return the maximum number of consecutive 1's in the array.",
        "examples": [
            "Input: nums = [1,1,0,1,1,1]",
            "Output: 3",
            "Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.",
            "Input: nums = [1,0,1,1,0,1]",
            "Output: 2",
            ""
        ],
        "constraints": [
            "1 <= nums.length <= 105",
            "nums[i] is either 0 or 1."
        ]
    },
    {
        "id": "1498",
        "title": "Number of Subsequences That Satisfy the Given Sum Condition",
        "question": "Given an array of integers nums and an integer target.Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.",
        "examples": [
            "Input: nums = [3,5,6,7], target = 9",
            "Output: 4",
            "Explanation: There are 4 subsequences that satisfy the condition.",
            "[3] -> Min value + max value <= target (3 + 3 <= 9)",
            "[3,5] -> (3 + 5 <= 9)",
            "[3,5,6] -> (3 + 6 <= 9)",
            "[3,6] -> (3 + 6 <= 9)",
            "Input: nums = [3,3,6,8], target = 10",
            "Output: 6",
            "Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).",
            "[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]Input: nums = [2,3,3,4,6,7], target = 12",
            "Output: 61",
            "Explanation: There are 63 non-empty subsequences, two of them don't satisfy the condition ([6,7], [7]).",
            "Number of valid subsequences (63 - 2 = 61).",
            "Input: nums = [5,2,4,1,7,6,8], target = 16",
            "Output: 127",
            "Explanation: All non-empty subset satisfy the condition (2^7 - 1) = 127"
        ],
        "constraints": [
            "1 <= nums.length <= 105 ",
            "1 <=nums[i] <= 106",
            " 1 <= target <= 106"
        ]
    },
    {
        "id": "1503",
        "title": "Last Moment Before All Ants Fall Out of a Plank",
        "question": "We have a wooden plank of the length n units. Some ants are walking on the plank, each ant moves with speed 1 unit per second. Some of the ants move to the left, the other move to the right.When two ants moving in two different directions meet at some point, they change their directions and continue moving again. Assume changing directions doesn't take any additional time.When an ant reaches one end of the plank at a time t, it falls out of the plank imediately.Given an integer n and two integer arrays left and right, the positions of the ants moving to the left and the right. Return the moment when the last ant(s) fall out of the plank.",
        "examples": [
            "Input: n = 4, left = [4,3], right = [0,1]",
            "Output: 4",
            "Explanation: In the image above:",
            "-The ant at index 0 is named A and going to the right.",
            "-The ant at index 1 is named B and going to the right.",
            "-The ant at index 3 is named C and going to the left.",
            "-The ant at index 4 is named D and going to the left.",
            "Note that the last moment when an ant was on the plank is t = 4 second, after that it falls imediately out of the plank. (i. e. We can say that at t = 4. 0000000001, there is no ants on the plank).",
            "Input: n = 7, left = [], right = [0,1,2,3,4,5,6,7]",
            "Output: 7",
            "Explanation: All ants are going to the right, the ant at index 0 needs 7 seconds to fall.",
            "Input: n = 7, left = [0,1,2,3,4,5,6,7], right = []",
            "Output: 7",
            "Explanation: All ants are going to the left, the ant at index 7 needs 7 seconds to fall.",
            "Input: n = 9, left = [5], right = [4]",
            "Output: 5",
            "Explanation: At t = 1 second, both ants will be at the same intial position but with different direction.",
            "Input: n = 6, left = [6], right = [0]",
            "Output: 6",
            ""
        ],
        "constraints": [
            "1 <= n <= 10^40 <= left. length <= n + 10 <= left[i] <= n0 <= right. length <= n + 10 <= right[i] <= n1 <= left. length + right. length <= n + 1All values of left and right are unique",
            " and each value can appear only in one of the two arrays."
        ]
    },
    {
        "id": "1504",
        "title": "Count Submatrices With All Ones",
        "question": "Given a rows * columns matrix mat of ones and zeros, return how many submatrices have all ones.",
        "examples": [
            "Input: mat = [[1,0,1],",
            "              [1,1,0],",
            "              [1,1,0]]",
            "Output: 13",
            "Explanation:",
            "There are 6 rectangles of side 1x1.",
            "There are 2 rectangles of side 1x2.",
            "There are 3 rectangles of side 2x1.",
            "There is 1 rectangle of side 2x2. ",
            "There is 1 rectangle of side 3x1.",
            "Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.",
            "Input: mat = [[0,1,1,0],",
            "              [0,1,1,1],",
            "              [1,1,1,0]]",
            "Output: 24",
            "Explanation:",
            "There are 8 rectangles of side 1x1.",
            "There are 5 rectangles of side 1x2.",
            "There are 2 rectangles of side 1x3. ",
            "There are 4 rectangles of side 2x1.",
            "There are 2 rectangles of side 2x2. ",
            "There are 2 rectangles of side 3x1. ",
            "There is 1 rectangle of side 3x2. ",
            "Total number of rectangles = 8 + 5 + 2 + 4 + 2 + 2 + 1 = 24.",
            "Input: mat = [[1,1,1,1,1,1]]",
            "Output: 21",
            "Input: mat = [[1,0,1],[0,1,0],[1,0,1]]",
            "Output: 5",
            ""
        ],
        "constraints": [
            "1 <= rows <= 1501 <= columns <= 1500 <= mat[i][j] <= 1"
        ]
    },
    {
        "id": "1508",
        "title": "Range Sum of Sorted Subarray Sums",
        "question": "You are given the array nums consisting of n positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 109 + 7.",
        "examples": [
            "Input: nums = [1,2,3,4], n = 4, left = 1, right = 5",
            "Output: 13 ",
            "Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13. ",
            "Input: nums = [1,2,3,4], n = 4, left = 3, right = 4",
            "Output: 6",
            "Explanation: The given array is the same as example 1. We have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 3 to ri = 4 is 3 + 3 = 6.",
            "Input: nums = [1,2,3,4], n = 4, left = 1, right = 10",
            "Output: 50",
            ""
        ],
        "constraints": [
            "n == nums. length1 <= nums. length <= 10001 <= nums[i] <= 1001 <= left <= right <= n * (n + 1) / 2"
        ]
    },
    {
        "id": "1509",
        "title": "Minimum Difference Between Largest and Smallest Value in Three Moves",
        "question": "Given an array nums, you are allowed to choose one element of nums and change it by any value in one move.Return the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.",
        "examples": [
            "Input: nums = [5,3,2,4]",
            "Output: 0",
            "Explanation: Change the array [5,3,2,4] to [2,2,2,2].",
            "The difference between the maximum and minimum is 2-2 = 0. Input: nums = [1,5,0,10,14]",
            "Output: 1",
            "Explanation: Change the array [1,5,0,10,14] to [1,1,0,1,1]. ",
            "The difference between the maximum and minimum is 1-0 = 1.",
            "Input: nums = [6,6,0,1,1,4,6]",
            "Output: 2",
            "Input: nums = [1,5,6,14,15]",
            "Output: 1",
            ""
        ],
        "constraints": [
            "1 <= nums. length <= 10^5-10^9 <= nums[i] <= 10^9"
        ]
    },
    {
        "id": "1513",
        "title": "Number of Substrings With Only 1s",
        "question": "Given a binary string s (a string consisting only of '0' and '1's).Return the number of substrings with all characters 1's.Since the answer may be too large, return it modulo 10^9 + 7.",
        "examples": [
            "Input: s = \"0110111\"",
            "Output: 9",
            "Explanation: There are 9 substring in total with only 1's characters.",
            "\"1\" -> 5 times.",
            "\"11\" -> 3 times.",
            "\"111\" -> 1 time. Input: s = \"101\"",
            "Output: 2",
            "Explanation: Substring \"1\" is shown 2 times in s.",
            "Input: s = \"111111\"",
            "Output: 21",
            "Explanation: Each substring contains only 1's characters.",
            "Input: s = \"000\"",
            "Output: 0",
            ""
        ],
        "constraints": [
            "s[i] == '0' or s[i] == '1'1 <= s. length <= 10^5"
        ]
    },
    {
        "id": "1514",
        "title": "Path with Maximum Probability",
        "question": "You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.",
        "examples": [
            "Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0. 5,0. 5,0. 2], start = 0, end = 2",
            "Output: 0. 25000",
            "Explanation: There are two paths from start to end, one having a probability of success = 0. 2 and the other has 0. 5 * 0. 5 = 0. 25.",
            "Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0. 5,0. 5,0. 3], start = 0, end = 2",
            "Output: 0. 30000",
            "Input: n = 3, edges = [[0,1]], succProb = [0. 5], start = 0, end = 2",
            "Output: 0. 00000",
            "Explanation: There is no path between 0 and 2.",
            ""
        ],
        "constraints": [
            "2 <= n <= 10^40 <= start",
            " end < nstart != end0 <= a",
            " b < na != b0 <= succProb. length == edges. length <= 2*10^40 <= succProb[i] <= 1There is at most one edge between every two nodes."
        ]
    },
    {
        "id": "1519",
        "title": "Number of Nodes in the Sub-Tree With the Same Label",
        "question": "Given a tree (i.e. a connected, undirected graph that has no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges. The root of the tree is the node 0, and each node of the tree has a label which is a lower-case character given in the string labels (i.e. The node with the number i has the label labels[i]).The edges array is given on the form edges[i] = [ai, bi], which means there is an edge between nodes ai and bi in the tree.Return an array of size n where ans[i] is the number of nodes in the subtree of the ith node which have the same label as node i.A subtree of a tree T is the tree consisting of a node in T and all of its descendant nodes.",
        "examples": [
            "Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = \"abaedcd\"",
            "Output: [2,1,1,1,1,1,1]",
            "Explanation: Node 0 has label 'a' and its sub-tree has node 2 with label 'a' as well, thus the answer is 2. Notice that any node is part of its sub-tree.",
            "Node 1 has a label 'b'. The sub-tree of node 1 contains nodes 1,4 and 5, as nodes 4 and 5 have different labels than node 1, the answer is just 1 (the node itself).",
            "Input: n = 4, edges = [[0,1],[1,2],[0,3]], labels = \"bbbb\"",
            "Output: [4,2,1,1]",
            "Explanation: The sub-tree of node 2 contains only node 2, so the answer is 1.",
            "The sub-tree of node 3 contains only node 3, so the answer is 1.",
            "The sub-tree of node 1 contains nodes 1 and 2, both have label 'b', thus the answer is 2.",
            "The sub-tree of node 0 contains nodes 0, 1, 2 and 3, all with label 'b', thus the answer is 4.",
            "Input: n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = \"aabab\"",
            "Output: [3,2,1,1,1]",
            "Input: n = 6, edges = [[0,1],[0,2],[1,3],[3,4],[4,5]], labels = \"cbabaa\"",
            "Output: [1,2,1,1,2,1]",
            "Input: n = 7, edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]], labels = \"aaabaaa\"",
            "Output: [6,5,4,1,3,2,1]",
            ""
        ],
        "constraints": [
            "1 <= n <= 10^5edges. length == n - 1edges[i]. length == 20 <= ai",
            " bi < nai != bilabels. length == nlabels is consisting of only of lower-case English letters."
        ]
    },
    {
        "id": "1524",
        "title": "Number of Sub-arrays With Odd Sum",
        "question": "Given an array of integers arr, return the number of subarrays with an odd sum.Since the answer can be very large, return it modulo 109 + 7.",
        "examples": [
            "Input: arr = [1,3,5]",
            "Output: 4",
            "Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]",
            "All sub-arrays sum are [1,4,9,3,8,5].",
            "Odd sums are [1,9,3,5] so the answer is 4.",
            "Input: arr = [2,4,6]",
            "Output: 0",
            "Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]",
            "All sub-arrays sum are [2,6,12,4,10,6].",
            "All sub-arrays have even sum and the answer is 0.",
            "Input: arr = [1,2,3,4,5,6,7]",
            "Output: 16",
            ""
        ],
        "constraints": [
            "1 <= arr. length <= 1051 <= arr[i] <= 100"
        ]
    },
    {
        "id": "1525",
        "title": "Number of Good Ways to Split a String",
        "question": "You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q where its concatenation is equal to s and the number of distinct letters in p and q are the same.Return the number of good splits you can make in s.",
        "examples": [
            "Input: s = \"aacaba\"",
            "Output: 2",
            "Explanation: There are 5 ways to split \"aacaba\" and 2 of them are good. ",
            "(\"a\", \"acaba\") Left string and right string contains 1 and 3 different letters respectively.",
            "(\"aa\", \"caba\") Left string and right string contains 1 and 3 different letters respectively.",
            "(\"aac\", \"aba\") Left string and right string contains 2 and 2 different letters respectively (good split).",
            "(\"aaca\", \"ba\") Left string and right string contains 2 and 2 different letters respectively (good split).",
            "(\"aacab\", \"a\") Left string and right string contains 3 and 1 different letters respectively.",
            "Input: s = \"abcd\"",
            "Output: 1",
            "Explanation: Split the string as follows (\"ab\", \"cd\").",
            "Input: s = \"aaaaa\"",
            "Output: 4",
            "Explanation: All possible splits are good. Input: s = \"acbadbaada\"",
            "Output: 2",
            ""
        ],
        "constraints": [
            "s contains only lowercase English letters. 1 <= s. length <= 10^5"
        ]
    },
    {
        "id": "492",
        "title": "Construct the Rectangle",
        "question": "A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.",
        "examples": [
            "Input: area = 4",
            "Output: [2,2]",
            "Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. ",
            "But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.",
            "Input: area = 37",
            "Output: [37,1]",
            "Input: area = 122122",
            "Output: [427,286]",
            ""
        ],
        "constraints": [
            "1 <= area <= 107"
        ]
    },
    {
        "id": "1529",
        "title": "Bulb Switcher IV",
        "question": "There is a room with n bulbs, numbered from 0 to n - 1, arranged in a row from left to right. Initially, all the bulbs are turned off.Your task is to obtain the configuration represented by target where target[i] is '1' if the ith bulb is turned on and is '0' if it is turned off.You have a switch to flip the state of the bulb, a flip operation is defined as follows:When any bulb is flipped it means that if it is '0' it changes to '1' and if it is '1' it changes to '0'.Return the minimum number of flips required to form target.",
        "examples": [
            "Input: target = \"10111\"",
            "Output: 3",
            "Explanation: Initial configuration \"00000\".",
            "flip from the third bulb:  \"00000\" -> \"00111\"",
            "flip from the first bulb:  \"00111\" -> \"11000\"",
            "flip from the second bulb:  \"11000\" -> \"10111\"",
            "We need at least 3 flip operations to form target. Input: target = \"101\"",
            "Output: 3",
            "Explanation: \"000\" -> \"111\" -> \"100\" -> \"101\".",
            "Input: target = \"00000\"",
            "Output: 0",
            "Input: target = \"001011101\"",
            "Output: 5",
            ""
        ],
        "constraints": [
            "Choose any bulb (index i) of your current configuration. Flip each bulb from index i to index n - 1. 1 <= target. length <= 105target[i] is either '0' or '1'."
        ]
    },
    {
        "id": "1530",
        "title": "Number of Good Leaf Nodes Pairs",
        "question": "Given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.Return the number of good leaf node pairs in the tree.",
        "examples": [
            "Input: root = [1,2,3,null,4], distance = 3",
            "Output: 1",
            "Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.",
            "Input: root = [1,2,3,4,5,6,7], distance = 3",
            "Output: 2",
            "Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.",
            "Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3",
            "Output: 1",
            "Explanation: The only good pair is [2,5].",
            "Input: root = [100], distance = 1",
            "Output: 0",
            "Input: root = [1,1,1], distance = 2",
            "Output: 1",
            ""
        ],
        "constraints": [
            "The number of nodes in the tree is in the range [1",
            " 2^10]. Each node's value is between [1",
            " 100]. 1 <= distance <= 10"
        ]
    }
]

export default problems;