import { SinglyLinkedNode as Node } from '../Node';

export default class SinglyLinkedList<T> {
  #_head: Node<T> | null = null;
  #_length = 0;

  constructor(init?: T | T[], ..._rest: T[]) {
    let args = Array.isArray(init) ? init : (Array.from(arguments) as T[]);
    args.forEach(this.add, this);
  }

  get head() {
    return this.#_head ? this.#_head.data : null;
  }

  get length() {
    return this.#_length;
  }

  // add data to of list
  public add(data: T) {
    const node = new Node(data);
    if (this.#_head === null) {
      this.#_head = node;
    } else {
      let curr = this.#_head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  // remove data from list
  public delete(data: T) {
    if (this.#_head === null) {
      return;
    }
    if (this.#_head.data === data) {
      this.#_head = this.#_head.next;
      return;
    }
    let curr = this.#_head;
    while (curr.next !== null) {
      if (curr.next.data === data) {
        curr.next = curr.next.next;
      }
      curr = curr.next as Node<T>;
    }
  }

  public toString() {
    let str = '';
    let curr = this.#_head;
    while (curr !== null) {
      str += curr.data;
      if (curr.next !== null) {
        str += ' => ';
      }
      curr = curr.next;
    }
    return str;
  }

  // return list as new array
  public toArray() {
    const arr = [] as T[];
    let curr = this.#_head;
    while (curr !== null) {
      arr.push(curr.data);
      curr = curr.next;
    }
    return arr;
  }
}
