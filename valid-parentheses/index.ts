// easy
// https://leetcode.com/problems/valid-parentheses/
// time: O(n) space: O(n)

export function isValid(s: string): boolean {
  if (s.length == 0) return true
  if (s.length % 2 != 0) return false
  const chars = s.split('')
  const stack = []
  for (const char of chars) {
    if (char == '(' || char == '[' || char == '{') {
      stack.push(char)
      continue
    }
    const lastChar = stack.pop()
    switch (char) {
      case ')':
        if (lastChar != '(') return false
        break;
      case ']':
        if (lastChar != '[') return false
        break;
      case '}':
        if (lastChar != '{') return false
        break;
      default:
        throw new Error(`invalid character: '${char}'`);
    }
  }
  return stack.length == 0
};
