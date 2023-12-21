/**
 * LeeCode - 203题(简单)，移除链表元素（remove-linked-list-elements）
 * 704. 二分查找
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点。
 * 示例 1：
 *  输入：head = [1,2,6,3,4,5,6], val = 6
 *  输出：[1,2,3,4,5]
 * 示例 2：
 *  输入：head = [], val = 1
 *  输出：[]
 * 示例 3：
 *  输入：head = [7,7,7,7], val = 7
 *  输出：[]
 */

import { ListNode } from "../../../utils/listNode";
let test1ListNode1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let result = new ListNode(0, head);
  let pre: any = result;
  let cur: any = result.next;

  // 链表循环while
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    // 遍历一次，向后移动一位
    cur = cur.next;
  }

  return result.next;
}

console.log(removeElements(test1ListNode1, 2), "removeElements");
