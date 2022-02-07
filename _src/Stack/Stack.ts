class Stack<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  static type() {
    return "stack";
  }

  get size() {
    return this.items.length;
  }

  empty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.items.length) return this.items[this.items.length - 1];
    return null;
  }

  pop() {
    return this.items.pop();
  }

  push(element: T) {
    return this.items.push(element);
  }
}

module.exports = Stack;
