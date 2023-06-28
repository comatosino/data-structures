import { Queue } from '../src/Queue';

describe('Queue', () => {
  it('creates new instance', () => {
    const data = [1, 2, 3, 4, 5];

    const queue = new Queue(); // empty queue
    const queue_1 = new Queue(data[0]); // from 1 arg
    const queue_args = new Queue(...data); // from args
    const queue_arr = new Queue(data); // from array

    expect(queue).toBeInstanceOf(Queue);
    expect(queue.length).toBe(0);
    expect(queue.empty).toBe(true);

    expect(queue_1).toBeInstanceOf(Queue);
    expect(queue_1.length).toBe(1);
    expect(queue_1.empty).toBe(false);

    expect(queue_arr).toBeInstanceOf(Queue);
    expect(queue_arr.length).toBe(data.length);
    expect(queue_arr.empty).toBe(false);

    expect(queue_args).toBeInstanceOf(Queue);
    expect(queue_args.length).toBe(data.length);
    expect(queue_args.empty).toBe(false);
  });

  it('can peek at the head node', () => {
    const data = [5, 4, 3, 2, 1];
    const queueInits = [new Queue(data[0]), new Queue(data), new Queue(...data)];

    queueInits.forEach((queue) => {
      expect(queue.peek()).toBe(data[0]);
    });
  });

  test('calling peek on an empty list returns null', () => {
    const queue = new Queue();

    expect(queue.empty).toBe(true);
    expect(queue.length).toBe(0);
    expect(queue.peek()).toBeNull();
  });

  it('can add data to an empty list', () => {
    const value = 5;
    const queue = new Queue();

    queue.enqueue(value);

    expect(queue.length).toBe(1);
    expect(queue.empty).toBe(false);
    expect(queue.peek()).toBe(value);
  });

  it('adds data to the end of list', () => {
    const value = 4;
    const data = [1, 2, 3];
    const queue = new Queue(data);

    queue.enqueue(value);

    // empty the list to get to the last element
    let el: (typeof data)[number] | null = null;
    while (queue.length > 0) {
      el = queue.dequeue();
    }

    expect(el).toBe(value);
  });

  it('can remove data from head of the list', () => {
    const data = [1, 2, 3, 4, 5];
    const queue = new Queue(data);

    while (queue.length > 0) {
      expect(queue.dequeue()).toBe(data.shift());
    }
  });

  test('calling dequeue on an empty list returns null', () => {
    const queue = new Queue();

    const result = queue.dequeue();

    expect(result).toBeNull();
  });

  it('updates the length property', () => {
    const data = [1, 2, 3, 4, 5];
    const queue = new Queue(data);

    queue.dequeue();
    expect(queue.length).toBe(data.length - 1);

    queue.enqueue(5);
    expect(queue.length).toBe(data.length);
  });

  it('updates the empty property', () => {
    const queue = new Queue(1);

    queue.dequeue();
    expect(queue.empty).toBe(true);

    queue.enqueue(1);
    expect(queue.empty).toBe(false);
  });

  it('implements toString method', () => {
    const data = ['a', 'b', 'c', 'd', 'e'];
    const queue = new Queue();
    const queue_1 = new Queue(data[0]);
    const queue_args = new Queue(...data);
    const queue_arr = new Queue(data);

    expect(queue.toString()).toBe('');
    expect(queue_1.toString()).toBe('a');
    expect(queue_args.toString()).toBe('a -> b -> c -> d -> e');
    expect(queue_arr.toString()).toBe('a -> b -> c -> d -> e');
  });

  it('implements toArray method', () => {
    const data = ['a', 'b', 'c', 'd', 'e'];
    const queue = new Queue(data);

    const result = queue.toArray();

    expect(Array.isArray(result)).toBe(true);
    result.forEach((item, idx) => {
      expect(item).toBe(data[idx]);
    });
  });

  // it('', () => {});
});
6;
