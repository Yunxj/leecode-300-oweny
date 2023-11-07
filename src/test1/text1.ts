/**
 * 1. 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target ，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标,
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 你可以按任意顺序返回答案。
 * 示例 1:
 * 输入: nums = [2,7,11,15]， target = 9
 * 输出: [0,1]
 * 解释: 因为 nums[o] + nums[1] == 9 ，返回 [，1] 。
 * 示例2:
 * 输入: nums = [3,2,4]， target = 6输出: [1,2]
 * 示例 3:
 * 输入: nums = [3,3]， target = 6
 * 输出: [0,1]
 */

/** 分析 */
// 1. 暴力解法，双for循环，遍历数组，比较target和nums[i]，如果target==nums[i]，则返回[i,i+1]

const nums  = [2, 7, 11, 15]; 
const target = 9;
const result = [] as any
for(let i=0;i<nums.length;i++) {
    for(let j=0;j<nums.length;j++) {
        if(target ===nums[i] + nums[j]) {
            result[0] = i
            result[1] = j
        }
    }
}

console.log(result, 'result')


// 2. 双指针解法，遍历数组，比较target和nums[i]，如果target==nums[i]，则i指针后移，否则i指针前移
// 3. 排序解法，对数组排序，遍历数组，比较target和nums[i]，如果target==nums[i]，则返回[i,i+1]
// 4. 滑动窗口解法，遍历数组，比较target和nums[i]，如果target==nums[i]，则i指针后移，否则i指针前移，
