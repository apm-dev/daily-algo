import { LinkedList, ListNode } from "."

describe("LinkedList", () => {
  describe('flatten', () => {
    type TestCase = {
      name: string
      input: ListNode | null
      result: number | null
    }
    const testCases: TestCase[] = [
      {
        /*
        1 ->  2 ->  3 ->  4
                    |     |
                    6 <-  5
        */
        name: 'multi-nodes linked list with cycle',
        input: ((): ListNode | null => {
          const n1: ListNode = { val: 1, next: null }
          const n2: ListNode = { val: 2, next: null }
          const n3: ListNode = { val: 3, next: null }
          const n4: ListNode = { val: 4, next: null }
          const n5: ListNode = { val: 5, next: null }
          const n6: ListNode = { val: 6, next: null }
          n1.next = n2
          n2.next = n3
          n3.next = n4
          n4.next = n5
          n5.next = n6
          n6.next = n3
          return n1
        })(),
        result: 3
      },
      {
        /*
        1 ->  2
        |     |
        <- 3<-
        */
        name: 'three nodes linked list with cycle',
        input: ((): ListNode | null => {
          const n1: ListNode = { val: 1, next: null }
          const n2: ListNode = { val: 2, next: null }
          const n3: ListNode = { val: 3, next: null }
          n1.next = n2
          n2.next = n3
          n3.next = n1
          return n1
        })(),
        result: 1
      },
      {
        /*
        1 ->  2 ->  3
        */
        name: 'three nodes linked list without cycle',
        input: ((): ListNode | null => {
          const n1: ListNode = { val: 1, next: null }
          const n2: ListNode = { val: 2, next: null }
          const n3: ListNode = { val: 3, next: null }
          n1.next = n2
          n2.next = n3
          n3.next = null
          return n1
        })(),
        result: null
      },
      {
        /*
        1 <->  2
        */
        name: 'two nodes linked list with cycle',
        input: ((): ListNode | null => {
          const n1: ListNode = { val: 1, next: null }
          const n2: ListNode = { val: 2, next: null }
          n1.next = n2
          n2.next = n1
          return n1
        })(),
        result: 1
      },
      {
        name: 'empty linked list',
        input: null,
        result: null
      },
      {
        name: 'linked list with one node',
        input: { val: 5, next: null },
        result: null
      }
    ]
    for (const tc of testCases) {
      test(tc.name, () => {
        const list = new LinkedList(tc.input)
        // list.print()
        const n = list.detectCycle(tc.input)
        // list.print()
        expect(n?.val ?? null).toEqual(tc.result)
      })
    }
  })
})
