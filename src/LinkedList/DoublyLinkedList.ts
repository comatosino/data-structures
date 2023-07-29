import { DoublyLinkedNode as Node } from '../Node';

export class DoublyLinkedList<T> {
  #_head: Node<T> | null = null;
  #_tail: Node<T> | null = null;
  #_length = 0;

  constructor(init?: T | T[], ...rest: T[]) {
    if (Array.isArray(init)) {
      init.forEach(this.addFirst.bind(this));
    } else if (init) {
      [init, ...rest].forEach(this.addFirst.bind(this));
    }
  }

  /**
   * number of elements in the list
   */
  get length() {
    return this.#_length;
  }

  // add at given position
  // append if index not given or index is list length
  // public add(element: T, index: number) {}

  // add element to beginning of list
  public addFirst(element: T) {
    const node = new Node(element);
    if (this.#_head === null) {
      this.#_head = node;
      this.#_tail = node;
    } else {
      this.#_head.prev = node;
      node.next = this.#_head;
      this.#_head = node;
    }
    this.#_length++;
  }

  // add element to end of list
  public addLast(element: T) {
    const node = new Node(element);
    if (this.#_head === null) {
      this.#_head = node;
    }
    if (this.#_tail !== null) {
      this.#_tail.next = node;
      node.prev = this.#_tail;
    }
    this.#_tail = node;
    this.#_length++;
  }

  public toArray() {
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
      // console.log(current);
      result += current.data;
      if (current.next !== null) {
        result += ' <-> ';
      }
      current = current.next;
    }
    return result;
  }
}

const list = new DoublyLinkedList();
list.addLast(3); // [3]
list.addLast(77); // [3,77]
list.addFirst(1); // [1,3,77]
list.addLast(42); // [1,3,77,42]
list.addFirst(2); // [2,1,3,77,42]

console.log(list.toArray());
console.log(list.toString());
