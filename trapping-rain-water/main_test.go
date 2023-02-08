package main

import (
	"fmt"
	"testing"
)

func Test_TrappingRainWater(t *testing.T) {
	testCases := []struct {
		heights []int
		result  int
	}{
		{
			heights: []int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1},
			result:  6,
		},
		{
			heights: []int{4, 2, 0, 3, 2, 5},
			result:  9,
		},
		{
			heights: []int{4, 2, 3},
			result:  1,
		},
	}
	for _, tc := range testCases {
		t.Run(fmt.Sprint(tc.heights), func(t *testing.T) {
			result := trappingRainWater(tc.heights)
			if result != tc.result {
				t.FailNow()
			}
		})
	}
}
