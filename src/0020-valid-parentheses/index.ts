/**
 * LeeCode - 20题，有效的括号（Valid Parentheses）
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 1、左括号必须用相同类型的右括号闭合。
 * 2、左括号必须以正确的顺序闭合。
 * 3、每个右括号都有一个对应的相同类型的左括号。
 * 示例 1：
 *  输入：s = "()"
 *  输出：true
 * 示例 2：
 *  输入：s = "()[]{}"
 *  输出：true
 * 示例 3：
 *  输入：s = "(]"
 *  输出：false
 *
 * 题目思考分析
 * 1、涉及知识点，栈的特性，栈是一种遵循后进先出（LIFO，Last In First Out）
 * 2、用JS实现栈的数据结构
 * 3、遍历字符串，利用栈的特性，存在左括号，与右括号匹配。
 */

import { Stack } from "../utils/index";

const strValid = "[(({})}]";
function isValid(s: string): Boolean {
  const sk = new Stack();
  if (s.length % 2 === 1) return false;
  for (const value of s) {
    if (value === "(" || value === "[" || value === "{") {
      sk.push(value);
    } else {
      const temp = sk.pop();
      switch (value) {
        case ")":
          if (temp !== "(") return false;
          break;
        case "]":
          if (temp !== "[") return false;
          break;
        case "}":
          if (temp !== "{") return false;
          break;
        default:
          break;
      }
    }
  }
  return sk.size() === 0;
}

console.log(isValid(strValid), "isValidisValid");
