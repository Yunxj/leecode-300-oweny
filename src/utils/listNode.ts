export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList {
  head: ListNode | null;
  constructor() {
    this.head = null;
  }

  // 在链表头部添加一个节点
  prepend(val: any) {
    const newNode = new ListNode(val as any, this.head);
    this.head = newNode;
  }

  // 删除链表中指定值的节点
  delete(val: any) {
    if (!this.head) {
      return;
    }

    // 如果头节点的值等于要删除的值
    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.val === val) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // 在链表尾部添加一个节点
  append(val: any) {
    const newNode = new ListNode(val as any);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  // 查找链表中是否有指定值的节点
  find(val: any) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
}

// 使用示例
// 链表结构类似一个，对象嵌套的结构，每个对象都有两个值{ val: 2, next: null }，val当前链表节点的值，next存在下一个链表节点的对象(其实对象的内存地址)。
// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.prepend(0);
// console.log(linkedList.head, "linkedList111"); // 输出 ListNode { val: 2, next: null }
