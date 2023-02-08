package main

import (
	"fmt"
	"regexp"
	"strings"
)

// easy
// https://leetcode.com/problems/valid-palindrome/
// time: O(n) space: O(1)

func isPalindrome(s string) bool {
	reg := regexp.MustCompile(`[^A-Za-z0-9]+`)
	s = reg.ReplaceAllString(s, "")
	s = strings.ToLower(s)
	length := len(s)
	if length < 2 {
		return true
	}
	fmt.Println(s, length)
	if length%2 == 0 {
		j := length / 2
		i := j - 1
		for i >= 0 {
			if s[i] != s[j] {
				return false
			}
			i--
			j++
		}
	} else {
		i := 0
		j := length - 1
		for i != j {
			if s[i] != s[j] {
				fmt.Println(string(s[i]), string(s[j]))
				return false
			}
			i++
			j--
		}
	}
	return true
}
