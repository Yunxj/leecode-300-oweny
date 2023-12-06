/**
 * LeeCode - 59题(中等)，螺旋矩阵 II（Spiral Matrix II）
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 示例 1：(图片解释在readme.md中查看)
 *  输入：n = 3
 *  输出：[[1,2,3],[8,9,4],[7,6,5]]
 * 示例 2：
 *  输入：n = 1
 *  输出：[[1]]
 * 提示：
 *  1 <= n <= 20
 */

/**
 * 矩阵从最外层往里面循环
 * 统一逻辑处理规则，遵循左闭右开[)的规则
 * 边界：
 *  loop：循环圈 Math.floor(n / 2)
 *  mid：特殊情况，n的奇偶性判断， Math.floor(n / 2)，最中间的位置
 *  startX,startY：循环前进时，x,y轴方向的坐标，
 *  i，j：当前while循环计数，具体数值的插入坐标，i确定一维的坐标，j确定二维的坐标
 *  offset:控制每圈循环的长度,
 *  count: 计数，与n^2的对应
 *
 * @param n
 * @returns
 */
function generateMatrix(n: number): number[][] {
  let loop: number = Math.floor(n / 2);
  let mid: number = Math.floor(n / 2);
  let startX: number = 0;
  let startY: number = 0;
  let offset: number = 1;
  let count: number = 1;
  let res: number[][] = new Array(n).fill(1).map((i) => new Array(n));
  while (loop--) {
    let j = startX;
    let i = startY;
    // 上面一行
    for (j; j < n - offset; j++) {
      res[i][j] = count++;
    }
    // 右边一列
    for (i; i < n - offset; i++) {
      res[i][j] = count++;
    }
    //下面一行
    for (j; j > startX; j--) {
      res[i][j] = count++;
    }
    //左边一列
    for (i; i > startY; i--) {
      res[i][j] = count++;
    }
    // 循环一次，圈要往里缩进一格
    startX++;
    startY++;
    offset++;
  }
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;
}

console.log(generateMatrix(1), "generateMatrix");
