import { Stack } from '../Stack';

export class QueueWith2Stacks<T> {
  private newestOnTop = new Stack<T>();
  private oldestOnTop = new Stack<T>();

  constructor(init?: T | T[], ...rest: T[]) {
    if (Array.isArray(init)) {
      init.forEach(this.enqueue, this);
    } else if (init) {
      [init, ...rest].forEach(this.enqueue, this);
    }
  }

  get empty() {
    return this.newestOnTop.empty && this.oldestOnTop.empty;
  }

  // push to newestOnTop
  // peek and pop from oldestOnTop
  // if oldestOnTop is empty, dump newestOnTop into it.
  private updateStacks() {
    if (this.oldestOnTop.empty) {
      while (!this.newestOnTop.empty) {
        this.oldestOnTop.push(this.newestOnTop.pop() as T);
      }
    }
  }

  public peek() {
    this.updateStacks();
    return this.oldestOnTop.peek();
  }

  public enqueue(data: T) {
    this.newestOnTop.push(data);
  }

  public dequeue() {
    this.updateStacks();
    return this.oldestOnTop.pop();
  }
}
