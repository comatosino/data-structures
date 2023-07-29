interface INode<T> {
  data: T;
  prev: INode<T> | null;
  next: INode<T> | null;
}

/**
 * Doubly Linked List implementation
 */
export class LinkedList<T> {
  #_Node = class Node<T> implements INode<T> {
    public prev: Node<T> | null = null;
    public next: Node<T> | null = null;
    constructor(public data: T) {}
  };

  #_head: INode<T> | null = null;
  #_tail: INode<T> | null = null;
  #_size = 0;

  constructor(init?: T | T[], ...rest: T[]) {
    if (Array.isArray(init)) {
      init.forEach(this.addLast.bind(this));
    } else if (init) {
      [init, ...rest].forEach(this.addLast.bind(this));
    }
  }

  /**
   * @returns the number of elements in this list.
   */
  get size() {
    return this.#_size;
  }

  /**
   * Private helper to return node at given index
   * @param index index of the node to return
   * @returns reference to the node at given index
   * @throws Error if index not of type number
   * @throws Error if index index < 0 || index >= size
   */
  #_get(index: number) {
    if (typeof index !== 'number') {
      throw new Error('invalid index type');
    }
    if (index < 0 || index >= this.#_size) {
      throw new Error('index out of bounds');
    }
    let n = this.#_head;
    let i = 0;
    while (i <= index) {
      if (i === index) {
        return n;
      }
      n = n!.next;
      i++;
    }
    return null;
  }

  /**
   * Inserts the specified element at the specified position in this list.
   * Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices).
   * If index not given, adds element to end of list
   * @param element element to be inserted
   * @param index index at which the specified element is to be inserted
   * @throws Error if index given but not of type number
   * @throws Error if index out of bounds
   */
  public add(element: T, index?: number) {
    if (index !== undefined && typeof index !== 'number') {
      throw new Error('invalid index type');
    }
    if (index && (index < 0 || index > this.#_size)) {
      throw new Error('index out of bounds');
    }
    if (index === 0) {
      return this.addLast(element);
    }
    if (this.#_head === null || index === undefined || index === this.#_size) {
      return this.addLast(element);
    }
    const n = this.#_get(index - 1);
    const node = new this.#_Node(element);

    node.next = n!.next;
    node.prev = n;
    n!.next!.prev = node;
    n!.next = node;

    this.#_size++;
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
    this.#_size++;
  }

  /**
   * Appends the specified element to the end of this list.
   * This method is equivalent to add(element).
   * @param element the element to add
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
    this.#_size++;
  }

  /**
   * Removes all of the elements from this list.
   */
  clear() {
    this.#_head = null;
    this.#_tail = null;
    this.#_size = 0;
  }

  /**
   * Returns a copy of this LinkedList.
   * @param deep if true, returns a deep copy of this LinkedList
   * @returns by default, a shallow copy of this LinkedList
   */
  clone(deep = false) {
    const copy = new LinkedList();
    // deep copy -> add new nodes
    // shallow copy -> use these nodes
    if (deep) {
      let n = this.#_head;
      while (n !== null) {
        copy.add(n.data);
        n = n.next;
      }
    } else {
      copy.#_head = this.#_head;
      copy.#_tail = this.#_tail;
    }
    return copy;
  }

  /**
   * Returns true if this list contains the specified element.
   * checks referential equality for objects
   * @param element element whose presence in this list is to be tested
   */
  public contains(element: T) {
    let n = this.#_head;
    while (n !== null) {
      if (n.data === element) {
        return true;
      }
      n = n.next;
    }
    return false;
  }

  /**
   * Retrieves, but does not remove, the head (first element) of this list.
   * @returns the data at the head of this list, or null if the list is empty
   */
  public element() {
    return this.#_head ? this.#_head.data : null;
  }

  /**
   * Returns the element at the specified position in this list.
   * @param index index of the element to return
   * @returns the element at the specified position in this list
   * @throws Error if index not of type number
   * @throws Error if index out of bounds
   */
  public get(index: number) {
    const n = this.#_get(index);
    return n ? n.data : null;
  }

  /**
   * @returns the first element in this list.
   */
  public getFirst() {
    return this.#_head ? this.#_head.data : null;
  }

  /**
   * @returns the last element in this list.
   */
  public getlast() {
    return this.#_tail ? this.#_tail.data : null;
  }

  /**
   * @returns index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
   */
  public indexOf(element: T) {
    let n = this.#_head;
    let i = 0;
    while (n !== null) {
      if (n.data === element) {
        return i;
      }
      n = n.next;
      i++;
    }
    return -1;
  }

  /**
   *
   */
  public lastIndexOf() {
    //
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
