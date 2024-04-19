interface INode<T> {
  data: T;
  next: INode<T> | null;
}

export class SinglyLinkedList<T> {
  #_Node = class Node<T> implements INode<T> {
    public next: Node<T> | null = null;
    constructor(public data: T) {}
  };

  #_head: INode<T> | null = null;
  #_length = 0;

  constructor(init?: T | T[], ...rest: T[]) {
    if (Array.isArray(init)) {
      init.forEach(this.append, this);
    } else if (init) {
      [init, ...rest].forEach(this.append, this);
    }
  }

  get length() {
    return this.#_length;
  }

  /**
   * adds given element to end of list
   * @param data
   */
  append(data: T) {
    const node = new this.#_Node(data);
    if (this.#_head === null) {
      this.#_head = node;
    } else {
      let current = this.#_head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.#_length++;
  }

  /**
   * removes first found instance of given element
   * @param data
   * @returns true if data found and removed, else false
   */
  remove(data: T) {
    if (this.#_head === null) {
      return false;
    }
    if (this.#_head.data === data) {
      this.#_head = this.#_head.next;
      this.#_length--;
      return true;
    }
    let current = this.#_head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.#_length--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  clear() {
    this.#_head = null;
    this.#_length = 0;
  }

  public toString() {
    let result = '';
    let current = this.#_head;
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
    let current = this.#_head;
    while (current !== null) {
      result.push(current.data as T);
      current = current.next;
    }
    return result;
  }
}
