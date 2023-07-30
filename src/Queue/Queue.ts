interface INode<T> {
  data: T;
  next: INode<T> | null;
}

// FIFO
export class Queue<T> {
  #_head: INode<T> | null = null; // remove from here
  #_tail: INode<T> | null = null; // add to here
  #_length = 0;

  #_Node = class Node<T> implements INode<T> {
    public next: Node<T> | null = null;
    constructor(public data: T) {}
  };

  constructor(init?: T | T[], ...rest: T[]) {
    if (Array.isArray(init)) {
      init.forEach(this.enqueue, this);
    } else if (init) {
      [init, ...rest].forEach(this.enqueue, this);
    }
  }

  get length() {
    return this.#_length;
  }

  get empty() {
    return this.#_head === null;
  }

  public peek() {
    return this.#_head ? this.#_head.data : null;
  }

  // add data to tail
  public enqueue(data: T) {
    const node = new this.#_Node(data);
    if (this.#_head === null) {
      this.#_head = node;
    }
    if (this.#_tail !== null) {
      this.#_tail.next = node;
    }
    this.#_tail = node;
    this.#_length++;
  }

  // remove and return data from head
  public dequeue() {
    if (this.#_head === null) {
      return null;
    }
    const data = this.#_head.data;
    this.#_head = this.#_head.next;
    if (this.#_head === null) {
      this.#_tail = null;
    }
    this.#_length--;
    return data;
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
