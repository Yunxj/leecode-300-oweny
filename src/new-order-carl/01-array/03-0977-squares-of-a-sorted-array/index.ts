/**
 * LeeCode - 977题(简单)，有序数组的平方（Squares of a Sorted Array）
 * 977. 有序数组的平方
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * 示例 1：
 *  输入：nums = [-4,-1,0,3,10]
 *  输出：[0,1,9,16,100]
 *  解释：平方后，数组变为 [16,1,0,9,100]
 *  排序后，数组变为 [0,1,9,16,100]
 * 示例 2：
 *  输入：nums = [-7,-3,2,3,11]
 *  输出：[4,9,9,49,121]
 * 提示：
 *  1 <= nums.length <= 104
 *  -104 <= nums[i] <= 104
 *  nums 已按 非递减顺序 排序
 * 进阶：
 *  请你设计时间复杂度为 O(n) 的算法解决本问题
 */

// 暴力法
function sortedSquares(nums: number[]): number[] {
  let res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i] ** 2);
  }
  res.sort((a, b) => {
    return a - b;
  });
  return res;
}

/**
 * 双指针的方法
 * @param nums
 * @returns
 * 核心思想：递增数组。特殊情况：负数的平方，有可能是最大的，需要重新排序，
 *         因此需要从最两边数平方后比较（两边平方后的数，一定比中间数的平方大），再往中间继续比较。
 * 即 双指针:
 *      最左边(i = 0)，最右边(j = nums.length - 1);
 *      i++，j--,同步向中间偏移，与之匹配的计数k = nums.length - 1，k--，用来向新数组插入数据。
 * 还巧妙的运用for里面特性，双指针(i，j)、计数(k)，i++, j--, k--，
 * 当最左边[i]值的平方 < 最右边nums[j]值的平方时，向新数组的[k]位置，插入第nums[j]值的平方，同时k--,j--
 * 反之，向新数组的[k]位置，插入第nums[i]个值的平方,同时k--,i++
 */

function sortedSquaresS(nums: number[]): number[] {
  let res: number[] = Array.from({ length: nums.length });
  let k = res.length - 1; // 控制值的插入
  let j = nums.length - 1; // i 最左侧指针，j最右侧指针
  for (let i = 0; i <= j; ) {
    // 当最左边[i]值的平方 < 最右边nums[j]值的平方时，向新数组的[k]位置，插入第nums[j]值的平方
    if (nums[i] ** 2 < nums[j] ** 2) {
      res[k--] = nums[j] ** 2;
      j--;
      // 反之，向新数组的[k]位置，插入第nums[i]个值的平方,同时k--,i++
    } else {
      res[k--] = nums[i] ** 2;
      i++;
    }
  }
  return res;
}

function sortedSquaresSS(nums: number[]): number[] {
  let res: number[] = [];
  // i 最左侧指针，j最右侧指针
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    // 当最左边nums[i]的绝对值 < 最右边nums[j]绝对值时，向新数组的开头插入nums[j]值的平方
    if (Math.abs(nums[i]) < Math.abs(nums[j])) {
      res.unshift(nums[j] ** 2);
      j--;
      // 反之，向新数组的[k]位置，插入nums[i]值的平方
    } else {
      res.unshift(nums[i] ** 2);
      i++;
    }
  }
  return res;
}

// console.log(sortedSquares([-7, -3, 2, 3, 11]), "sortedSquares");
// console.log(sortedSquaresS([-7, -3, 2, 3, 11]), "sortedSquares");
console.log(sortedSquaresSS([-7, -3, 2, 3, 11]), "sortedSquaresS");
