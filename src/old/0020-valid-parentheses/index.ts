/**
 * LeeCode - 20题(简单)，有效的括号（Valid Parentheses）
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

import { Stack } from "../../utils/index";

const strValid = "[(({})}]";
/**
 * 方法1- 利用栈的特性（先入后出），进行符号匹配。
 * @param s 字符串
 * @returns boolean
 */
function isValid(s: string): Boolean {
  const sk = new Stack();
  if (s.length % 2 === 1) return false; // 字符串的长度一定是偶数，奇数直接return false
  for (const value of s) {
    //  遍历字符串，遇到左括号，入栈
    if (value === "(" || value === "[" || value === "{") {
      sk.push(value);
    } else {
      //  遍历字符串，遇到右括号，出栈并且和右括号匹配，如果匹配成功就继续下一步，否则直接return false
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
  // 栈中没有值，说明全部匹配上了，字符串有效
  return sk.size() === 0;
}
// console.log(isValid(strValid), "isValid isValid");

/**
 * 方法2 正则匹配
 * @param s 字符串
 * @returns
 */
function isValidReg(s: string) {
  /**
   * 1）声明遍历
   *  相关的正则表达式
   *  因为题目给的[,],(,),{,}符号组成的字符串; 在正则表达式中具有特殊含义，需要反斜杠（\）转义符进行转义
   *  类似用[]或()或{}去匹配字符串，有就替换为(''),
   */
  const reg = /\[\]|\(\)|\{\}/;
  /**
   * 2）逻辑处理
   * 核心：若 s不断存在 []、()或{}子串，则 将给它们不断的替换成 '' ，并更新s值 。
   * s = [(()}], 通过s.replace(reg, ""), s=[(}] ，
   * 从字符串中，[]或()或{}，括号不包含任何的内容开始，进行匹配并替换成空字符串，
   * 即原[{}] => [],原（{}）=> (),原{()} => {}; 原{(]} => {(]},无法替换，原样返回。
   * while的结束条件，reg.test(s)无法配置到值，则循环结束，或者当s被全部替换为空字符串时，则循环结束。
   */
  while (reg.test(s)) {
    s = s.replace(reg, "");
    // console.log(s, s.replace(reg, ""), "replacereplacereplace");
  }

  /**
   * 3）返回结果
   * 若 将所有的 []、()或{}子串 都替换成 '' 后、s长度为0，则 为有效的的括号，反之，不是。
   */
  // console.log(s, s.replace(reg, ""), "-------------");
  return s.length === 0;
}
console.log(isValidReg(strValid), "isValidRegisValidReg");
