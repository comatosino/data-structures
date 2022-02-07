type NodeType = DoubleListNode<any> | null;

class DoubleListNode<T> {
  public data: T;
  public next: DoubleListNode<T> | null;
  public prev: DoubleListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  private head: DoubleListNode<T> | null;

  constructor() {
    this.head = null;
  }
}

module.exports = DoublyLinkedList;
