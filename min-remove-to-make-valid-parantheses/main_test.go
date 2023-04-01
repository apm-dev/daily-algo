package main

import (
	"testing"
)

func Test_minRemoveToMakeValid(t *testing.T) {
	testCases := []struct {
		input  string
		result string
	}{
		{input: "lee(t(c)o)de)", result: "lee(t(c)o)de"},
		{input: "", result: ""},
		{input: "))((", result: ""},
		{input: "a)b(c)d", result: "ab(c)d"},
	}
	for _, tc := range testCases {
		t.Run(tc.input, func(t *testing.T) {
			result := minRemoveToMakeValid(tc.input)
			if tc.result != result {
				t.Fail()
			}
		})
	}
}
