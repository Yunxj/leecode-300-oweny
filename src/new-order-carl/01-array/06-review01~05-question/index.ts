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

function searchRR(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    // 初始化的left和right控制的center取值，求中值left、right相加除以2，向下取整
    let center = Math.floor((left + right) / 2); // 易漏、易错点
    // right的和left的+1、-1，排出center在数轴中的
    // 和target比较的是值（nums[center]），不是center
    if (nums[center] > target) {
      right = center - 1;
    } else if (nums[center] < target) {
      left = center + 1;
    } else {
      return center;
    }
  }
  return -1;
}
console.log(searchRR([-1, 0, 3, 5, 9, 12], 9), "searchRr");

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

// console.log(searchR([-1, 0, 3, 5, 9, 12], 9), "searchR");

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

// 双指针用法,fast 为快指针，slow慢指针, 数组和长度都要正确

function removeElementR(nums: number[], val: number): number | any {
  // 慢指针控制原数组的新值下标，不等于val的值重新调整下标
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}

// console.log(removeElementR([0, 1, 2, 2, 3, 0, 4, 2], 2), "removeElementR");
// console.log(removeElementR([3, 2, 2, 3], 3), "removeElementR");

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
  let i = 0;
  let j = nums.length - 1;
  let res: number[] = [];
  // 数组是非递减顺序，有对称性，通过左右双指针的方式，在一个循环中处理排序和数据插入
  while (i <= j) {
    if (Math.abs(nums[i]) < Math.abs(nums[j])) {
      res.unshift(Math.pow(nums[j], 2));
      j--;
    } else {
      res.unshift(Math.pow(nums[i], 2));
      i++;
    }
  }
  return res;
}

// console.log(sortedSquaresR([-4, -1, 0, 3, 10]), "sortedSquaresR");
// console.log(sortedSquaresR([-5, -3, -2, -1]), "sortedSquaresR");

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
// 此方法pass，在LeeCode上超时了。。。O(n^2)
function minSubArrayLenR(target: number, nums: number[]): number {
  let sum = 0;
  let res = nums.length + 1;
  let sumLength = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        // 满足条件，表示长度需要加一
        sumLength = j - i + 1;
        res = res > sumLength ? sumLength : res;
      }
    }
  }

  return res === nums.length + 1 ? 0 : res;
}

// 单for循环+while
function minSubArrayLenRS(target: number, nums: number[]): number {
  let sum = 0;
  let res = nums.length + 1;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    // 窗口移动，i控制头部，j控制尾部，sum=累加nums[i]集合
    sum += nums[i];
    while (sum >= target) {
      // 与之前的最小长度比较，最短的存入res中，头与尾的下标相减+1位长度
      res = Math.min(res, i - j + 1);
      //满足条件时，sum的集合减去nums[j]尾部,j++,向前移动一位
      sum -= nums[j]; // 易漏、易错点
      j++;
    }
  }
  return res === nums.length + 1 ? 0 : res;
}

// console.log(
//   minSubArrayLenR(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]),
//   "minSubArrayLenR"
// );
// console.log(
//   minSubArrayLenRS(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]),
//   "minSubArrayLenR"
// );

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
 * 读懂题意，发现规律
 * 矩阵从最外层往里面循环
 * 统一逻辑处理规则，遵循左闭右开[)的规则
 * 边界：
 *  loop：循环圈 Math.floor(n / 2)
 *  mid：特殊情况，n的奇偶性判断， Math.floor(n / 2)，最中间的位置
 *  startX,startY：循环前进时，x,y轴方向的坐标，
 *  内循环每一个方向一个for，i，j：当前while循环计数，具体数值的插入坐标，i确定一维的坐标，j确定二维的坐标
 *    坐标系m(行) * n(列)，（x , y）
 *
 *  offset:控制每圈循环的长度,
 *  count: 计数，与n^2的对应
 *
 * @param n
 * @returns
 */
function generateMatrix(n: number): number[][] {
  let startX: number = 0;
  let startY: number = 0;
  let loop: number = Math.floor(n / 2);
  let mid: number = Math.floor(n / 2);
  let offset: number = 1;
  let count: number = 1;
  let res: number[][] = new Array(n).fill(0).map(() => new Array(n));

  // 先找到规律，确定内部循环的逻辑，再看外部要进行几次
  while (loop--) {
    // （x , y）(startX , startY)（行 ， 列）,先累加的是列
    let i = startX;
    let j = startY;
    // 边界[ )、[]对应，for循环中的 < 或 <=
    // 上行 列y++，小于最大限制
    for (; j < n - offset; j++) {
      res[i][j] = count++;
    }
    // 右侧 行x++，小于最大限制
    for (; i < n - offset; i++) {
      res[i][j] = count++;
    }
    // 下行 列y--，大于最小限制
    for (; j > startY; j--) {
      res[i][j] = count++;
    }
    // 左侧 行x--，大于最小限制
    for (; i > startX; i--) {
      res[i][j] = count++;
    }

    // 一次内部循环走完，根据外部循环调整，新一轮的内部循环的起始位置startX,startY，for中i，y的边界限制
    startX++;
    startY++;
    offset += 1;
  }
  // 奇偶性
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }

  return res;
}

console.log(generateMatrix(3), "generateMatrix");
