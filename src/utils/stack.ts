export class Stack {
  items: any[];
  constructor() {
    this.items = [];
  }

  /** 入栈 */
  push(item: any) {
    this.items.push(item);
  }

  /** 出栈 */
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  /** 查看栈的最后一个元素 */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  /** 栈是否为空 */
  isEmpty() {
    return this.items.length === 0;
  }

  /** 栈的长度 */
  size() {
    return this.items.length;
  }
}
