package main

// Hard
// https://leetcode.com/problems/trapping-rain-water/
// time: O(n) space: O(1)

func trappingRainWater(height []int) int {
	p1 := 0
	p2 := len(height) - 1
	water := 0
	maxL := 0
	maxR := height[p2]
	for p1 != p2 {
		ch := 0
		w := 0
		if maxL <= maxR {
			ch = height[p1]
			w = maxL - ch
			if ch > maxL {
				maxL = ch
			}
		} else {
			ch = height[p2]
			w = maxR - ch
			if ch > maxR {
				maxR = ch
			}
		}
		if w > 0 {
			water += w
		}
		if maxL <= maxR {
			p1++
		} else {
			p2--
		}
	}
	return water
}
