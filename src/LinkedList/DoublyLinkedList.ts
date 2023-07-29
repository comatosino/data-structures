import { DoublyLinkedNode as Node } from '../Node';

export class DoublyLinkedList<T> {
  #_head: Node<T> | null = null;
  #_tail: Node<T> | null = null;
  #_length = 0;

  constructor(init?: T | T[], ...rest: T[]) {
    if (Array.isArray(init)) {
      init.forEach(this.append.bind(this));
    } else if (init) {
      [init, ...rest].forEach(this.append.bind(this));
    }
  }

  /**
   * number of elements in the list
   */
  get length() {
    return this.#_length;
  }

  // add at given position
  // append if index not given
  public add(element: T, index: number) {
    if (typeof index !== 'number' || index < 0) {
      throw new Error('index must be a positive integer');
    }
    if (index === 0) {
      return this.prepend(element);
    }
    if (index === this.#_length - 1) {
      return this.append(element);
    }
    // traverse the list and insert
    this.#_length++;
  }

  // add to head of list
  prepend(element: T) {
    const node = new Node(element);
    node.next = this.#_head;
    this.#_head = node;
    this.#_length++;
  }

  // add to end of list
  public append(element: T) {
    const node = new Node(element);
    if (this.#_head === null) {
      this.#_head = node;
    }
    if (this.#_tail !== null) {
      this.#_tail.next = node;
    }
    this.#_tail = node;
    this.#_length++;
  }

  clear() {
    this.#_head = null;
    this.#_tail = null;
    this.#_length = 0;
  }

  clone() {
    return new DoublyLinkedList(this.toArray());
  }

  // contains() {}

  // get() {}

  // getFirst() {}

  // getLast() {}

  // indexOf() {}

  // lastIndexOf() {}

  // peekFirst() {}

  // peekLast() {}

  // remove() {}

  // removeFirst() {}

  // removeLast() {}

  // removeLastOccurence() {}

  // set() {}

  toArray() {
    const result = [] as T[];
    let current = this.#_head;
    while (current !== null) {
      result.push(current.data as T);
      current = current.next;
    }
    return result;
  }

  public toString() {
    let result = '';
    let current = this.#_head;
    while (current !== null) {
      result += current.data;
      if (current.next !== null) {
        result += ' -> ';
      }
      current = current.next;
    }
    return result;
  }
}
