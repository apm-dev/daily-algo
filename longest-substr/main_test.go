package main

import "testing"

func Test_LongestSubstringWithoutRepeatingCharacter(t *testing.T) {
	testCases := []struct {
		input  string
		result int
	}{
		{input: "abcabcbb", result: 3},
		{input: "bbbbb", result: 1},
		{input: "pwwkew", result: 3},
		{input: "abcbda", result: 4},
		{input: "abbcba", result: 3},
		{input: "a", result: 1},
		{input: "", result: 0},
	}
	for _, tc := range testCases {
		t.Run(tc.input, func(t *testing.T) {
			result := lengthOfLongestSubstring(tc.input)
			if result != tc.result {
				t.FailNow()
			}
		})
	}
}
