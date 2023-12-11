/**
 * LeeCode - 704题(简单)，二分查找（binary search）- array - 01
 * 704. 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 示例 1:
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 示例 2:
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 * 提示：
 * 你可以假设 nums 中的所有元素是不重复的。
 * n 将在 [1, 10000]之间。
 * nums 的每个元素都将在 [-9999, 9999]之间。
 */

/**
 * 二分查找，画数轴
 * [left, right],[left, right)，开闭区间的选择
 * @param nums
 * @param target
 * @returns
 */
function searchR(nums: number[], target: number): number {
  // 初始区域下标
  let left = 0;
  let right = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    // 通过改变left和right的值，定义center的值，来控制二分法符合要求的区间范围
    let center = Math.floor((left + right) / 2);
    // +1和-1，排除center
    if (target > nums[center]) {
      left = center + 1;
    } else if (target < nums[center]) {
      right = center - 1;
    } else {
      return center;
    }
  }
  return -1;
}

console.log(searchR([-1, 0, 3, 5, 9, 12], 9), "searchR");

/**
 * LeeCode - 27题(简单)，移除元素（remove element）- array - 02
 * 27. 移除元素
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 说明:
 *  为什么返回数值是整数，但输出的答案是数组呢?
 * 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 * 你可以想象内部操作如下:
 *  nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
 *  int len = removeElement(nums, val);
 *  在函数里修改输入数组对于调用者是可见的。
 *  根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
 *  for (int i = 0; i < len; i++) {
 *    print(nums[i]);
 *  }
 * 示例 1：
 *  输入：nums = [3,2,2,3], val = 3
 *  输出：2, nums = [2,2]
 *  解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
 * 示例 2：
 *  输入：nums = [0,1,2,2,3,0,4,2], val = 2
 *  输出：5, nums = [0,1,3,0,4]
 *  解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 * 提示：
 *  0 <= nums.length <= 100
 *  0 <= nums[i] <= 50
 *  0 <= val <= 100
 */

// 用原始方法实现，双指针用法,fast 为快指针，slow慢指针

function removeElementR(nums: number[], val: number): number | any {
  let slow = 0;

  return slow;
}

/**
 * LeeCode - 977题(简单)，有序数组的平方（Squares of a Sorted Array）- array - 03
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
function sortedSquaresR(nums: number[]): number[] {
  let res: number[] = [];

  return res;
}

/**
 * LeeCode - 209题(中等)，长度最小的子数组（Minimum Size Subarray Sum）array - 04
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其总和大于等于 target 的长度最小的连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]，
 * 并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 * 示例 1：
 *  输入：target = 7, nums = [2,3,1,2,4,3]
 *  输出：2
 *  解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 * 示例 2：
 *  输入：target = 4, nums = [1,4,4]
 *  输出：1
 *
 * 示例 3：
 *  输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 *  输出：0
 *
 * 提示：
 *  1 <= target <= 109
 *  1 <= nums.length <= 105
 *  1 <= nums[i] <= 105
 *
 * 进阶：
 *  如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 */

function minSubArrayLenR(target: number, nums: number[]): number {
  return 0;
}

/**
 * LeeCode - 59题(中等)，螺旋矩阵 II（Spiral Matrix II）array - 05
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
  return [];
}
