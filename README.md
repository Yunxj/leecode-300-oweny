# leecode-300-oweny

## 目录结构

```
src
├── new-order-carl
│   ├── 01-array
│   │   ├── 01-0704-binary-search
│   │   │   ├── index.ts
│   │   │   └── readme.md
│   │   └── 02-
│   │       └── readme.md
│   └── 02-list
│       └── readme.md
├── old
│   ├── 0001-two-sum
│   │   ├── index.ts
│   │   └── readme.md
│   ├── 0002-add-two-numbers
│   │   ├── index.ts
│   │   └── readme.md
│   ├── 0020-valid-parentheses
│   │   ├── index.ts
│   │   └── readme.md
│   ├── 0021-merge-two-sorted-lists
│   │   ├── index.ts
│   │   └── readme.md
│   ├── 0022-generate-parentheses
│   │   ├── index.ts
│   │   └── readme.md
│   └── 0024-swap-in-pairs
│       ├── index.ts
│       └── readme.md
└── utils
    ├── index.ts
    ├── listNode.ts
    └── stack.ts
```

## 环境按照和使用说明

### Step1: 依赖包安装

```
npm install
```

### Step2: 编译代码

- 打印结果， console.log(xxxx, "=========================");
  ```
    ts-node ./src/old/001-two-sum
  ```

### 每题文件命名格式

- 目录位置调整，之前的刷题顺序不合理，放到 old 文件里面，新的刷题调整到 new-order-carl 文件中,按照数组、链表、哈希表的顺序开始。
- 目录 './src', 四位数字 + 题目的英文全拼，中间用斜杠连接。例如：第一题 0001-two-sum，四位数字-题目完整的英文。
- tree src

### 学习的思路

- 自己有一定代码基础，没有必要在从头跟视频，再系统的学一遍数据结构和算法的基础内容，
- 直接从简单的 leeCode 题目直接刷起来，视频讲解+LeeCode 原题，反复模仿的敲，直到自己理解并能敲出来和手写出来为止。
- 学习的中间遇到不会的数据结构，算法，先停下来，用以前学到的 JS 基础知识，推导或者模拟出来，帮助自己理解和消化。这里面可能今天想了很久也理解不了，可以先放一放，明天再学习的时候，回去看看，说不定就又理解了。
- 刷题和基础学习的顺序视自己的情况调整
- 说一千道一万，最重要是开始，从一个简单题开始，看视频学完，自己再做一遍。写代码、调试、写注释，最后发到 LeeCode 上，通过测试用例，还是相当的有成就感。
