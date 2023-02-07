package main

import "testing"

func Test_BackspaceStringCompare(t *testing.T) {
	testCases := []struct {
		str1   string
		str2   string
		result bool
	}{
		{"ab#c", "az#c", true},
		{"a#", "z#x#y#", true},
		{"ac", "azz##c", true},
		{"ab", "##ab", true},
		{"####", "##", true},
		{"ab", "cb", false},
		{"#b", "#c", false},
		{"bxj#tw", "bxj###tw", false},
		{"bxj##tw", "bxj###tw", false},
	}
	for _, tc := range testCases {
		t.Run(tc.str1+" ? "+tc.str2, func(t *testing.T) {
			result := backspaceCompare(tc.str1, tc.str2)
			if result != tc.result {
				t.FailNow()
			}
		})
	}
}
