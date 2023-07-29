export class SinglyLinkedNode<T> {
  public next: SinglyLinkedNode<T> | null = null;
  constructor(public data: T) {}
}
export class DoublyLinkedNode<T> {
  public prev: DoublyLinkedNode<T> | null = null;
  public next: DoublyLinkedNode<T> | null = null;
  constructor(public data: T) {}
}
