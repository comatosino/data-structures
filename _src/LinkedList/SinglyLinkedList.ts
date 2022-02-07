type SingleNodeType = SingleListNode<any> | null;

class SingleListNode<T> {
  public data: T;
  public next: SingleNodeType;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  private head: SingleNodeType;
  protected size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }
}
