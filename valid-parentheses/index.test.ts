import { isValid } from "."

describe("LinkedList", () => {
  describe('flatten', () => {
    type TestCase = {
      name: string
      input: string
      result: boolean
    }
    const testCases: TestCase[] = [
      { name: 'empty string', input: '', result: true },
      { name: 'valid parentheses 1', input: '()', result: true },
      { name: 'valid parentheses 2', input: '()[]{}', result: true },
      { name: 'valid parentheses 3', input: '{([])}', result: true },
      { name: 'valid parentheses 4', input: '{()[]}', result: true },
      { name: 'invalid parentheses 1', input: '{', result: false },
      { name: 'invalid parentheses 2', input: '(]', result: false },
      { name: 'invalid parentheses 3', input: '{([]', result: false },
      { name: 'invalid parentheses 4', input: '{([)]}', result: false },
    ]
    for (const tc of testCases) {
      test(tc.name, () => {
        const result = isValid(tc.input)
        expect(result).toEqual(tc.result)
      })
    }
  })
})
