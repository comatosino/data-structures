interface INode<T> {
  data: T;
  next: INode<T> | null;
}

// LIFO
export class Stack<T> {
  #_top: INode<T> | null = null;
  #_size = 0;

  #_Node = class Node<T> implements INode<T> {
    public next: Node<T> | null = null;
    constructor(public data: T) {}
  };

  constructor(init?: T | T[], ...rest: T[]) {
    if (Array.isArray(init)) {
      init.forEach(this.push, this);
    } else if (init) {
      [init, ...rest].forEach(this.push, this);
    }
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
    const node = new this.#_Node(data);
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
    let current = this.#_top;
    while (current !== null) {
      result.push(current.data as T);
      current = current.next;
    }
    return result;
  }
}
