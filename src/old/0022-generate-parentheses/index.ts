/**
 * LeeCode - 22题(中等)，括号生成（Generate Parentheses）
 * 22. 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 示例 1：
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 示例 2：输入：n = 1
 * 输出：["()"]
 * 提示：1 <= n <= 8
 */

// 利用左括号和右括号做比较，left > right 继续，right > left 直接退出
function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  function dfs(
    n: number,
    result: string[],
    left: number,
    right: number,
    str: string
  ) {
    if (right > left) return;
    if (left === right && right === n) return result.push(str);
    if (left < n) {
      dfs(n, result, left + 1, right, str + "(");
    }
    if (left > right) {
      dfs(n, result, left, right + 1, str + ")");
    }
  }
  dfs(n, result, 0, 0, "");
  return result;
}

console.log(generateParenthesis(3), "generateParenthesis");
