package main

import "testing"

func Test_IsPalindrome(t *testing.T) {
	testCases := []struct {
		input  string
		result bool
	}{
		{input: "", result: true},
		{input: "a", result: true},
		{input: "aA", result: true},
		{input: "aabaa", result: true},
		{input: "aabbaa", result: true},
		{input: "abc", result: false},
		{input: "A man, a plan, a canal: Panama", result: true},
		{input: "race car", result: true},
		{input: "race a car", result: false},
	}
	for _, tc := range testCases {
		t.Run(tc.input, func(t *testing.T) {
			result := isPalindrome(tc.input)
			if result != tc.result {
				t.FailNow()
			}
		})
	}
}
