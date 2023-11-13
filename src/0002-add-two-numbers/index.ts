import { ListNode } from "../utils/listNode";
/**
 * LeeCode - 2题，两数相加（Add Two Numbers）
 * 给你两个 非空 的链表，表示两个非负的整数。
 *  它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储一位数字
 * 请你将两个数相加，并以相同形式返回一个表示和的链表
 * 你可以假设除了数字 0之外，这两个数都不会以 0 开头。
 * 输入 2 -> 4 -> 3
 *     5 -> 6 -> 4
 * 输出 7 -> 0 -> 8
 */

// Definition for singly-linked list.（单链表的定义）
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

let test1ListNode2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};
/** 迭代法-题解 */
function addTwoNumbers1(
  l1: ListNode | null | any,
  l2: ListNode | null | any
): ListNode | null {
  let total = 0;
  let next1 = 0;
  let result = new ListNode(0);
  let cur = result;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    total = n1 + n2 + next1;
    cur.next = new ListNode(total % 10);
    next1 = Math.floor(total / 10); // 小数相加的问题
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    cur = cur.next;
  }
  if (next1) {
    cur.next = new ListNode(next1);
  }
  return result.next;
}

function addTwoNumbers2(l1: any, l2: any) {
  let head = null as any;
  let tail = null as any;
  // 进位值
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  // 如果遍历结束，还有进位值，那么加上0
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head.next;
}

function addTwoNumbers3(l1: any, l2: any) {
  const newList = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let cur = newList;
  let carry = 0; // 存储进位
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    const val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    cur.next = new ListNode(val % 10);
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    cur = cur.next;
  }
  // 遍历完后，如果还有进位，追加到最后
  if (carry) {
    cur.next = new ListNode(carry);
  }
  return newList.next;
}

/** 注意事项
 * 1、js代码运行时，需要传入链表结构的数据
 * 2、除以 10 时，需要Math.floor处理下
 */
// console.log(addTwoNumbers3(test1ListNode1, test1ListNode2), "l2 = l2");

/** 递归法-题解 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers4(l1: any, l2: any) {
  return dfs(l1, l2, 0);
}

function dfs(l1: any, l2: any, carray: any) {
  if (!l1 && !l2 && carray === 0) {
    return null;
  }
  const val1 = l1 ? l1.val : 0;
  const val2 = l2 ? l2.val : 0;
  const sum = val1 + val2 + carray;
  const node = new ListNode(sum % 10);
  node.next = dfs(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    Math.floor(sum / 10)
  );
  return node;
}

function addTwoNumbers5(
  l1: ListNode | null,
  l2: ListNode | null,
  sign?: boolean
): ListNode | null {
  if (!l1 && !l2) {
    return sign ? new ListNode(1) : null;
  }
  /// 递归出口条件, 省略 除以10的操作
  let sum = (l1?.val || 0) + (l2?.val || 0) + (sign ? 1 : 0);
  if (sum >= 10) {
    sign = true;
    sum = sum % 10;
  } else {
    sign = false;
  }
  return new ListNode(
    sum,
    addTwoNumbers5(l1?.next || null, l2?.next || null, sign)
  );
}

function addTwoNumbers6(l1: any, l2: any) {
  // “一般递归的特点”：
  // 1 2种实现 —— dfs（深度优先搜索） 和 bfs（广度优先搜索）
  // 2 3个核心
  // 1）确定返回值得类型及其含义
  // 2）确定递归的出口条件及对应的值
  // 3）递归处理的函数体
  const dfs = (l1: any, l2: any, carry: any) => {
    // 其实可以简写成 if (!l1 && !l2 && !carry)。
    // 1）下面3行是递归出口
    if (l1 === null && l2 === null && carry === 0) {
      return null;
    }

    // 2）下面7-8行是递归处理的函数体
    // 此时必定是 l1、l2或carry中存在“真值”（即有 非null 或 非0 值）
    const val_1 = l1 ? l1.val : 0,
      val_2 = l2 ? l2.val : 0,
      next_1 = l1 ? l1.next : null,
      next_2 = l2 ? l2.next : null,
      sum: any = val_1 + val_2 + carry;

    let resLink = new ListNode(sum % 10);
    // 边界：别漏了 parseInt ，别的语言也需可直接 sum/10 ！
    resLink.next = dfs(next_1, next_2, Math.floor(sum / 10));

    // “本次递归”的返回值
    return resLink;
  };

  return dfs(l1, l2, 0);
}

/** 自己的解法 - 迭代法 */
function addTwoNumbers7(l1: any, l2: any) {
  let total = 0;
  let next1 = 0;
  let result = new ListNode(0);
  let cur = result; // {val:0,next:null}
  /** result 和 cur 在这段代码中指向同一个链表，简单讲就是同一个对象。
   * 具体来说，它们都指向一个新创建的 ListNode 实例，该实例的值为 0，且没有下一个节点（因为默认的 next 参数为 null）。
   * 当你在后续的代码中修改 cur（例如通过更改 cur.next），result 也会受到影响，
   * 因为它们指向同一个链表。这种方法通常用于在链表上进行迭代操作，同时保留对链表头部的引用。
   * */
  console.log(result, "lcurcurcurcurcur");
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    total = n1 + n2 + next1;
    cur.next = new ListNode(total % 10); // {val:0,next:{val:7,next:null}}
    next1 = Math.floor(total / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    cur = cur.next;
  }
  if (next1) {
    cur.next = new ListNode(next1);
  }
  return result.next;
}

/** 自己解法 - 递归法 */
/** 递归的理解 - 示例
 * 递归函数通常需要结束条件，以防止无限递归。在递归调用中，规模逐渐减小，最终达到结束条件，从而退出递归
 * 这个和while的使用很像
 */
// function factorial(n: any) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return (n * factorial(n - 1)) as any;
// }
// console.log(factorial(5), "factorial"); // 输出 120

function addTwoNumbers8(l1: any, l2: any) {
  const dfs = function (l1: any, l2: any, next1: any) {
    if (l1 === null && l2 === null && next1 === 0) return;
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const ne1 = l1 ? l1.next : null;
    const ne2 = l2 ? l2.next : null;
    const total = n1 + n2 + next1;
    let cur = new ListNode(total % 10);
    cur.next = dfs(ne1, ne2, Math.floor(total / 10)) as any;
    return cur;
  };
  return dfs(l1, l2, 0);
}

console.log(addTwoNumbers8(test1ListNode1, test1ListNode2), "l8 = l7");
