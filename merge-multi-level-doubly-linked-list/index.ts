// medium
// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
// time: O(n) space: O(1)

export type Node = {
  value: number
  child?: Node
  next?: Node
  prev?: Node
}

export class LinkedList {
  constructor(
    public head?: Node
  ) { }

  public flatten() {
    const stack: Node[] = []
    let cn = this.head
    while (cn) {
      if (cn.child) {
        if (cn.next) stack.push(cn.next)
        cn.next = cn.child
        cn.child.prev = cn
        cn.child = undefined
        cn = cn.next
        continue
      }
      if (!cn.next && stack.length > 0) {
        const next = stack.pop()
        cn.next = next
        next!.prev = cn
        cn = next
        continue
      }
      cn = cn.next
    }
  }

  public toArray(): number[] {
    const arr = []
    let cn = this.head
    while (cn) {
      arr.push(cn.value)
      cn = cn.next
    }
    return arr
  }

  public print() {
    let str = this.head?.value ?? ''
    let item = this.head?.next
    while (item) {
      str += item.value + ' -> '
      item = item.next
    }
    console.log(str);
  }
}