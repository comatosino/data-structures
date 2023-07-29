interface INode<T> {
  data: T;
  prev: INode<T> | null;
  next: INode<T> | null;
}

/**
 * Doubly Linked List implementation
 * Emulates behavior of Java 8 LinkedList class
 */
export class LinkedList<T> {
  #_Node = class Node<T> implements INode<T> {
    public prev: Node<T> | null = null;
    public next: Node<T> | null = null;
    constructor(public data: T) {}
  };

  #_head: INode<T> | null = null;
  #_tail: INode<T> | null = null;
  #_length = 0;

  constructor(init?: T | T[], ...rest: T[]) {
    if (Array.isArray(init)) {
      init.forEach(this.addLast.bind(this));
    } else if (init) {
      [init, ...rest].forEach(this.addLast.bind(this));
    }
  }

  /**
   * @returns number of elements in the list
   */
  get length() {
    return this.#_length;
  }

  /**
   * Inserts the specified element at the specified position in this list.
   * Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices).
   * If index not given, adds element to end of list
   * @param element element to be inserted
   * @param index index at which the specified element is to be inserted
   */
  public add(element: T, index?: number) {
    if (index !== undefined && typeof index !== 'number') {
      throw new Error('invalid index type');
    }
    if (index && (index < 0 || index > this.#_length)) {
      throw new Error('index out of bounds');
    }
    if (index === 0) {
      return this.addFirst(element);
    }
    if (this.#_head === null || index === undefined || index === this.#_length) {
      return this.addLast(element);
    }
    let i = 0;
    let n: INode<T> | null = this.#_head;
    while (i < index - 1) {
      n = n!.next!;
      i++;
    }
    const node = new this.#_Node(element);
    node.next = n.next;
    node.prev = n;
    n.next!.prev = node;
    n.next = node;
  }

  /**
   * Inserts the specified element at the beginning of this list.
   * @param element the element to add
   */
  public addFirst(element: T) {
    const node = new this.#_Node(element);
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

  /**
   * Appends the specified element to the end of this list.
   * This method is equivalent to add(element).
   * @param element
   */
  public addLast(element: T) {
    const node = new this.#_Node(element);
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
      result += current.data;
      if (current.next !== null) {
        result += ' <-> ';
      }
      current = current.next;
    }
    return result;
  }
}
