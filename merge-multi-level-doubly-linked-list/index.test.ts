import { LinkedList, Node } from "."

describe("LinkedList", () => {
  describe('flatten', () => {
    type TestCase = {
      name: string
      input?: Node
      result: number[]
    }
    const testCases: TestCase[] = [
      {
        /*
        1 <->  2 <->  3 <->  4 <->  5 <->  6
              |                     |
              7 <->  8  <->  9     12  <->  13
                    |
                    10  <->  11
        */
        name: '3 levels dobly linked list',
        input: ((): Node | undefined => {
          const n1: Node = { value: 1 }
          const n2: Node = { value: 2, prev: n1 }
          n1.next = n2
          const n3: Node = { value: 3, prev: n2 }
          n2.next = n3
          const n4: Node = { value: 4, prev: n3 }
          n3.next = n4
          const n5: Node = { value: 5, prev: n4 }
          n4.next = n5
          const n6: Node = { value: 6, prev: n5 }
          n5.next = n6
          const n7: Node = { value: 7 }
          const n8: Node = { value: 8, prev: n7 }
          n7.next = n8
          const n9: Node = { value: 9, prev: n8 }
          n8.next = n9
          const n10: Node = { value: 10 }
          const n11: Node = { value: 11, prev: n10 }
          n10.next = n11
          const n12: Node = { value: 12 }
          const n13: Node = { value: 13, prev: n12 }
          n12.next = n13
          n2.child = n7
          n8.child = n10
          n5.child = n12
          return n1
        })(),
        result: [1, 2, 7, 8, 10, 11, 9, 3, 4, 5, 12, 13, 6]
      },
      {
        name: 'empty linked list',
        input: undefined,
        result: []
      },
      {
        name: 'linked list with one node',
        input: { value: 5 },
        result: [5]
      }
    ]
    for (const tc of testCases) {
      test(tc.name, () => {
        const list = new LinkedList(tc.input)
        // list.print()
        list.flatten()
        // list.print()
        expect(list.toArray()).toEqual(tc.result)
      })
    }
  })
})
