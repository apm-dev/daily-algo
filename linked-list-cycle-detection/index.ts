// medium
// https://leetcode.com/problems/linked-list-cycle-ii/
// time: O(n) space: O(1)

// Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export class LinkedList {
  constructor(
    public head: ListNode | null
  ) { }

  public detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return null
    let turtle: ListNode | null = head, rabbit: ListNode | null = head
    while (true) {
      turtle = turtle?.next ?? null
      rabbit = rabbit?.next ?? null

      if (rabbit === null || rabbit.next === null) {
        return null
      }
      rabbit = rabbit.next
      if (turtle === rabbit) {
        break
      }
    }

    let p1 = head
    let p2 = turtle
    while (p1.val != p2.val) {
      p1 = p1.next!
      p2 = p2.next!
    }
    return p2
  }

  public print() {
    let str = this.head?.val ?? ''
    let item = this.head?.next
    while (item) {
      str += item.val + ' -> '
      item = item.next
    }
    console.log(str);
  }
}