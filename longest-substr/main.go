package main

// Medium
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// time: O(n) , space: O(n)

func lengthOfLongestSubstring(s string) int {
	if len(s) <= 1 {
		return len(s)
	}
	left := 0
	right := 0
	maxLength := 0
	lastSeenCharAt := make(map[string]int)
	for right < len(s) {
		char := string(s[right])
		lastIndex, ok := lastSeenCharAt[char]
		if ok && lastIndex >= left {
			left = lastIndex + 1
		}
		lastSeenCharAt[char] = right
		length := right - left + 1
		if length > maxLength {
			maxLength = length
		}
		right++
	}
	return maxLength
}
