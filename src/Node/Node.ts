export class SinglyLinkedNode<T> {
  public next: SinglyLinkedNode<T> | null = null;
  constructor(public data: T) {}
}
export class DoublyLinkedNode<T> {
  public next: DoublyLinkedNode<T> | null = null;
  public prev: DoublyLinkedNode<T> | null = null;
  constructor(public data: T) {}
}
