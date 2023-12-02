/**
 * LeeCode - 24题(中等)，两两交换链表中的节点（Swap In Pairs）
 * 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
 * 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 示例 1：
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 示例 2：
 * 输入：head = []
 * 输出：[]
 * 示例 3：
 * 输入：head = [1]
 * 输出：[1]
 * 提示：
 * 链表中节点的数目在范围 [0, 100] 内,0 <= Node.val <= 100
 */

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

import { ListNode } from "../../utils/index";

let swapPairsNode1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
function swapPairs(head: ListNode | null): ListNode | null {
  const res = new ListNode();
  res.next = head;
  let cur = res;
  while (cur.next !== null && cur.next.next !== null) {
    // 两两的交换，1和3与上一个的next链断了，不能直接找到，移动前必须存起来。
    const temp1 = cur.next; // 将 1 先存起来
    const temp2 = cur.next.next.next; // 将 3 也要先存起来
    // 调整指向，指向2
    cur.next = cur.next.next;
    // 2 指向1，但是因为cur.next指向2，1无法获取，提前用变量存起来,
    cur.next.next = temp1; //
    // 1 指向3
    temp1.next = temp2;
    // 交换完位置，需要移动cur的指针
    cur = cur.next.next;
  }

  return res.next;
}

console.log(
  JSON.stringify(swapPairs(swapPairsNode1)),
  "swapPairs(swapPairsNode1);"
);
