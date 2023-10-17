/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number 
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 || !list2) {
    return list1 || list2
  }
  if (list1.val < list2.val) {
    const newList1 = list1.next
    list1.next = mergeTwoLists(newList1, list2)
    return list1
  }
  const newList2 = list2.next
  list2.next = mergeTwoLists(newList2, list1)
  return list2
}