interface INode<T> {
  data: T;
  prev: INode<T> | null;
  next: INode<T> | null;
}

/**
 * Doubly Linked List implementation
 */
export class DoublyLinkedList<T> {
  #_head: INode<T> | null = null;
  #_tail: INode<T> | null = null;
  #_size = 0;

  #_Node = class implements INode<T> {
    public prev: INode<T> | null = null;
    public next: INode<T> | null = null;
    constructor(public data: T) {}
  };

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
  #_getNode(index: number) {
    if (typeof index !== 'number') {
      throw new Error('invalid index type');
    }
    if (index < 0 || index >= this.#_size) {
      throw new Error('index out of bounds');
    }
    let n = this.#_head;
    let i = 0;
    while (i !== index && i <= index) {
      n = n!.next;
      i++;
    }
    return n;
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
      return this.addFirst(element);
    }
    if (this.#_head === null || index === undefined || index === this.#_size) {
      return this.addLast(element);
    }
    const n = this.#_getNode(index - 1);
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
  public clear() {
    this.#_head = null;
    this.#_tail = null;
    this.#_size = 0;
  }

  /**
   * Returns a copy of this LinkedList.
   * @param deep if true, returns a deep copy of this LinkedList
   * @returns by default, a shallow copy of this LinkedList
   */
  public clone(deep = false) {
    const copy = new DoublyLinkedList<T>();
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
    copy.#_size = this.#_size;
    return copy;
  }

  /**
   * Check if list contains given element
   * checks referential equality for objects
   * @param element element whose presence in this list is to be tested
   * @returns true if this list contains the specified element.
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
   * Returns the element at the specified position in this list.
   * @param index index of the element to return
   * @returns the element at the specified position in this list
   * @throws Error if index not of type number
   * @throws Error if index out of bounds
   */
  public get(index?: number) {
    const n = this.#_getNode(index ?? 0);
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
   * Get index of the first occurence of given element
   * checks referential equality for objects
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
   * Get index of the last occurence of given element
   * checks referential equality for objects
   * @returns index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
   */
  public lastIndexOf(element: T) {
    let n = this.#_tail;
    let i = this.#_size - 1;
    while (n != null) {
      if (n.data === element) {
        return i;
      }
      n = n.prev;
      i--;
    }
    return -1;
  }

  /**
   * Removes the element at the given index
   * @param index position of the element to be removed
   * @returns element at given index if found, else, null
   */
  public remove(index?: number) {
    const n = this.#_getNode(index === undefined ? 0 : index);
    if (n === null) {
      return null;
    }
    if (n === this.#_head) {
      return this.removeFirst();
    }
    if (n === this.#_tail) {
      return this.removeLast();
    }
    const data = n.data;
    n.prev!.next = n.next;
    n.next!.prev = n.prev;
    this.#_size--;
    return data;
  }

  /**
   * Removes and returns head element
   * @returns element at the head of the list
   */
  public removeFirst() {
    if (this.#_head === null) {
      return null;
    }
    const data = this.#_head.data;
    this.#_head = this.#_head.next;
    if (this.#_head === null) {
      this.#_tail = null;
    }
    this.#_size--;
    return data;
  }

  /**
   * Removes first found occurence of given element
   * @param element the element to be removed
   * @returns true if element removed
   */
  public removeFirstOccurence(element: T) {
    let n = this.#_head;
    let i = 0;
    while (n !== null) {
      if (n.data === element) {
        this.remove(i);
        return true;
      }
      n = n.next;
      i++;
    }
    return false;
  }

  /**
   * Removes and returns tail element
   * @returns element at the tail of the list
   */
  public removeLast() {
    if (this.#_tail === null) {
      return null;
    }
    const data = this.#_tail.data;
    this.#_tail = this.#_tail.prev;
    if (this.#_tail !== null) {
      this.#_tail.next = null;
    }
    this.#_size--;
    return data;
  }

  /**
   * Removes last found occurence of given element
   * @param element the element to be removed
   * @returns true if element removed
   */
  public removeLastOccurrence(element: T) {
    let n = this.#_tail;
    let i = this.#_size - 1;
    while (n !== null) {
      if (n.data === element) {
        this.remove(i);
        return true;
      }
      n = n.prev;
      i--;
    }
    return false;
  }

  /**
   *  Replaces the element at the specified position in this list with the specified element.
   * @param index index of the element to be updated
   * @param element the data to put at index
   * @returns the element previously at the specified position
   */
  public set(index: number, element: T) {
    const n = this.#_getNode(index) as INode<T>;
    const data = n.data;
    n.data = element;
    return data;
  }

  /**
   * @returns an array of this list's elements
   */
  public toArray() {
    const result = [] as T[];
    let current = this.#_head;
    while (current !== null) {
      result.push(current.data as T);
      current = current.next;
    }
    return result;
  }

  /**
   * @returns a string representation of this list's elements
   */
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
