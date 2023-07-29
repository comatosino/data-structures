import { DoublyLinkedNode as Node } from '../Node';

export class DoublyLinkedList<T> {
  #_head: Node<T> | null = null;
  #_tail: Node<T> | null = null;
  #_length = 0;

  constructor(init?: T | T[], ...rest: T[]) {
    if (Array.isArray(init)) {
      init.forEach(this.add, this);
    } else if (init) {
      [init, ...rest].forEach(this.add, this);
    }
  }

  get length() {
    return this.#_length;
  }

  add() {
    console.log('add');
  }

  remove() {
    console.log('remove');
  }

  clear() {
    console.log('clear');
  }

  toArray() {
    console.log('toArr');
  }
}
