/**
 * LeeCode - 209题(中等)，长度最小的子数组（Minimum Size Subarray Sum）
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

function minSubArrayLen(target: number, nums: number[]): number {
  let res = nums.length + 1; // 存储最小的满足与目标值条件的子数组长度
  let sum: number = 0; // 累加和
  let sumLength: number = 0; //  所有满足与目标值条件的子数组长度
  for (let i = 0; i < nums.length; i++) {
    sum = 0; // 每次上层循环重置
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]; // 累加连续的值
      if (sum >= target) {
        sumLength = j - i + 1; // 双for循环，在第二个for中进行的值比较，再替换，单个for双指针也需要比较大小，再替换
        res = res < sumLength ? res : sumLength; // 中传操作，满足条件的可能存在多个，取最小的
        // console.log(res, sumLength, "sumLength");
        break;
      }
    }
  }
  return (res = res ? sumLength : 0);
}

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), "minSubArrayLen");

/**
 * 双while循环，时间复杂度是O(n)，而不是O(n^2).
 * 指针是在一个循环中完成的。
 */

/**
 * 双指针 - 左右指针，滑动窗口
 * for的循环里面不能用if，要用while，是持续更新指针的位置
 * [1,1,1,1,1,100],target = 100, (105 > target, 104 > target, 103 > target)，这些都满足要求，需要循环比较，找到最小长度。
 * @param target
 * @param nums
 * @returns
 */

function minSubArrayLenS(target: number, nums: number[]): number {
  let res = nums.length + 1; // 存储最小的满足与目标值条件的子数组长度
  let sum: number = 0; // 累加和
  let i = 0;
  // let sumLength: number = 0; //  所有满足与目标值条件的子数组长度
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      // sumLength = ;单个for双指针也需要比较大小，再替换，这里和双for还不一样
      res = Math.min(res, j - i + 1);
      sum -= nums[i];
      i++;
    }
  }
  return (res = res !== nums.length + 1 ? res : 0);
}

console.log(
  minSubArrayLenS(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]),
  "minSubArrayLenS"
);
