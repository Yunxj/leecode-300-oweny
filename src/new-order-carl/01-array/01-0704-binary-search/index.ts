/**
 * LeeCode - 704题(简单)，二分查找（binary search）
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

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  /**
   * [left, right],[left, right)
   * +1，还是-1，看区间的取值，是开区间还是闭区间
   * left的加1还是不加，right的减1还是不减，以不查找当前索引本身值为条件，
   * 就是从自己能取到值的索引下一位开始查找，能取到(闭区间)需要移位，不能取到(开区间)。
   */
  while (left <= right) {
    // 改变下标的值，来控制二分法符合要求的区间
    let midline = Math.floor((left + right) / 2);
    if (nums[midline] > target) {
      right = midline - 1;
    } else if (nums[midline] < target) {
      left = midline + 1;
    } else {
      // 不用再另加相等条件了，上面把小于和大于都判断了，就剩等于了
      return midline;
    }
  }
  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9), "search");
