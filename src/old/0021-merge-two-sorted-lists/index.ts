/**
 * LeeCode - 21题(简单)，合并两个有序链表（Merge Two Sorted Lists）
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 示例 1：
 *  输入：l1 = [1,2,4], l2 = [1,3,4]
 *  输出：[1,1,2,3,4,4]
 * 示例 2：
 *  输入：l1 = [], l2 = []
 *  输出：[]
 * 示例 3：
 *  输入：l1 = [], l2 = [0]
 *  输出：[0]
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
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
const util = require("util");
import { ListNode, LinkedList } from "../../utils/index";
let mergeTwoListNode1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 8,
      next: null,
    },
  },
};

let mergeTwoListNode2 = {
  val: 4,
  next: {
    val: 6,
    next: {
      val: 7,
      next: null,
    },
  },
};

/** 两种方法，不管哪一种，首要考虑循环出来的条件 */
/** 迭代法 while */
function mergeTwoLists1(
  list1: ListNode | null | any,
  list2: ListNode | null | any
): ListNode | null {
  let result = new ListNode() as any;
  let cur = result;
  // 处理list1，list2都存在的情况
  while (list1 && list2) {
    // 如果list1.val小于list2.val，将cur（新链表）的next指向list1，并且为了继续while，list1链表被重新赋值为list1.next
    // 如果是第一位，cur.val是空（null），没有被赋值。所以最后的解雇，是从cur.next取值。
    if (list1.val < list2.val) {
      // 向新链表赋值，其实这里只是把list1链表/的第一个值，赋值过去了，
      //下一个值的指针，会重新走循环,把原先cur.next(即包换整条链上list1)重新判断并赋值。
      cur.next = list1;
      list1 = list1.next; // 相当于指针向前进一位
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  // 处理当list1，list2中有一个或者都不存在的情况
  cur.next = list1 ? list1 : list2;
  return result.next;
}

// 当对象的嵌套层级较深时，为了避免打印过多的信息。转换成字符串打印
// const objString1 = util.inspect(
//   mergeTwoLists1(mergeTwoListNode1, mergeTwoListNode2),
//   {
//     depth: null,
//   }
// );
// console.log(objString1, "objString1");

/** 递归法 */
function mergeTwoLists2(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  function dfs(l1: any, l2: any) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        l1.next = dfs(l1.next, l2); // 把return的值赋值下一位，cur.next = list1;
        return l1; // return l1给下函数 l1.next赋值使用， list2 = list2.next
      } else {
        l2.next = dfs(l1, l2.next);
        return l2;
      }
    } else {
      return l1 || l2 || null;
    }
  }
  return dfs(list1, list2);
}

const objString2 = util.inspect(
  mergeTwoLists2(mergeTwoListNode1, mergeTwoListNode2),
  {
    depth: null,
  }
);
console.log(objString2, "objString2");
