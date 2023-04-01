package main

import (
	"bytes"
)

// medium
// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
// time: O(n) space: O(n)

func minRemoveToMakeValid(s string) string {
	stack := []int{}
	shouldDelete := make([]bool, len(s))
	for i, ch := range s {
		if ch == '(' {
			stack = append(stack, i)
		} else if ch == ')' {
			if len(stack) > 0 {
				stack = stack[:len(stack)-1]
			} else {
				shouldDelete[i] = true
			}
		}
	}
	for _, i := range stack {
		shouldDelete[i] = true
	}
	var result bytes.Buffer
	for i, v := range s {
		if !shouldDelete[i] {
			result.WriteRune(v)
		}
	}
	return result.String()
}
