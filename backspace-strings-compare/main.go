package main

// Easy
// https://leetcode.com/problems/backspace-string-compare/
// time: O(n) , space: O(1)

func backspaceCompare(s string, t string) bool {
	if s == t {
		return true
	}
	sp := len(s) - 1
	tp := len(t) - 1
	sskip := 0
	tskip := 0
	for {
		if sp >= 0 && string(s[sp]) == "#" {
			sskip++
			sp--
		} else if sskip > 0 {
			sskip--
			sp--
		} else if tp >= 0 && string(t[tp]) == "#" {
			tskip++
			tp--
		} else if tskip > 0 {
			tskip--
			tp--
		} else {
			if sp < 0 && tp < 0 {
				return true
			}
			if (sp < 0 && tp >= 0) || (sp >= 0 && tp < 0) {
				return false
			}
			if s[sp] != t[tp] {
				return false
			}
			sp--
			tp--
		}
	}
}
