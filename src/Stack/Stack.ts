import { SinglyLinkedNode as Node } from '../Node';

export class Stack<T> {
  #_top: Node<T> | null = null;
  #_size: number = 0;

  constructor(init?: T | T[], ...rest: T[]) {
    let args = Array.isArray(init) ? init : (Array.from(arguments) as T[]);
    args.forEach(this.push, this);
  }

  get size() {
    return this.#_size;
  }

  get empty() {
    return this.#_top === null;
  }

  public peek() {
    return this.#_top ? this.#_top.data : null;
  }

  public push(data: T) {
    const node = new Node(data);
    node.next = this.#_top;
    this.#_top = node;
    this.#_size++;
  }

  public pop() {
    if (this.#_top === null) {
      return null;
    }
    const data = this.#_top.data;
    this.#_top = this.#_top.next;
    this.#_size--;
    return data;
  }

  public toString() {
    let result = '';
    let current = this.#_top;
    while (current != null) {
      result += current.data;
      if (current.next !== null) {
        result += ' -> ';
      }
      current = current.next;
    }
    return result;
  }

  public toArray() {
    const result = [] as T[];
    let current = this.#_top;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}
