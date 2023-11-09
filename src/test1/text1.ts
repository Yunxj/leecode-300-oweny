/**
 * 1. 题目 - 两数之和
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
 *
 * 2. 逻辑图解地址：https://doc.weixin.qq.com/flowchart/f4_APsA7wbNACcPvOK69UpS8euY441Wu?scode=AJEAIQdfAAo9JLq8yWAPsA7wbNACc&newEmptyDoc=1&templateId=
 */

/** 分析 */
// 方法1： 暴力解法，双for循环，遍历数组，比较target和nums[i]，如果target==nums[i]，则返回[i,i+1]
const nums = [2, 7, 11, 15];
const target = 9;
const result = [] as any;
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if (target === nums[i] + nums[j]) {
      result[0] = i;
      result[1] = j;
    }
  }
}

// console.log(result, "result - 1");

/** 方法2:哈希表（散列表）
 * 1、把数字遍历一遍，用哈希表存起来
 */

const nums2 = [3, 2, 7, 11, 15];
const target2 = 9;
const result2 = [] as any;
const hashTable = new Map();

for (let i = 0; i < nums2.length; i++) {
  hashTable.set(nums2[i], i);
}

for (let i = 0; i < nums2.length; i++) {
  const diff = target2 - nums2[i];
  if (hashTable.get(diff) && diff !== i) {
    result2[0] = i;
    result2[1] = hashTable.get(diff);
  }
}

// console.log(result2, "result - 2");

/** 哈希表 - 简化版 */
function twoSum(nums: number[], target: number): number[] {
  const len: number = nums.length;
  // 若数组小于2位，则直接返回空数组
  if (len > 1) {
    // 这里map第二个数不建议写成number，因为map.get方法会报错,第一次会存入undefined
    let map: Map<number, any> = new Map();
    for (let i = 0; i < len; i++) {
      const num = nums[i];
      // 取差值
      const diff = target - num;
      console.log(map.has(diff), map.get(diff), map, "map.has(diff)");
      if (map.has(diff)) {
        // 若差值存在，则直接返回
        // map.get取出的会是符合条件的第一位数值索引，循环走到第二位符合条件时，索引为i
        return [map.get(diff), i];
      }
      // 循环至少会执行一次，第一次设置前map值为Map {}
      /** 一个for 循环干了两件事
       * 1、将数组nums的键和值存入map中，map.set(num, i)
       * 2、数组的和和目标值target做比对，若匹配则返回对应数组下标，map.has(diff)
       */
      map.set(num, i);
    }
  }

  //这句不能漏，若都不符合条件，返回[]，也可以考虑抛出异常
  return [];
}

console.log(twoSum(nums, target), "result - 3");
