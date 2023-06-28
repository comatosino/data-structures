import { DoublyLinkedNode as Node } from '../Node';

export default class DoublyLinkedList<T> {
  #_head: Node<T> | null = null;
  #_tail: Node<T> | null = null;
  #_length: number = 0;

  constructor(init?: T | T[], ...rest: T[]) {
    let args = Array.isArray(init) ? init : (Array.from(arguments) as T[]);
    args.forEach(this.append, this);
  }

  get length() {
    return this.#_length;
  }

  get head() {
    return this.#_head ? this.#_head.data : null;
  }

  get tail() {
    return this.#_tail ? this.#_tail.data : null;
  }

  public prepend(data: T) {}

  public append(data: T) {}

  public delete(data: T) {}

  public toString() {}

  public toArray() {}
}
