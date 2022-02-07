class ListNode<T> {
  public data: T;
  public next: ListNode<T> | null;

    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
}

export default class SinglyLinkedList<T> {
    private _head: ListNode<T> | null;
    protected size: number;

    constructor() {

    }



}