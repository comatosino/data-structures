export class SinglyLinkedNode<T> {
  public next: SinglyLinkedNode<T> | null = null;
  constructor(public data: T) {}
}
export class DoublyLinkedNode<T> extends SinglyLinkedNode<T> {
  public prev: DoublyLinkedNode<T> | null = null;
}
