import { describe, it, test } from 'mocha';
import { expect } from 'chai';

import { QueueWith2Stacks } from '.';

describe('QueueWith2Stacks', function () {
  it('creates a new queue from no arguments', function () {
    const queue = new QueueWith2Stacks();

    expect(queue).to.be.instanceOf(QueueWith2Stacks);
    expect(queue.empty).to.be.true;
  });

  it('creates a new queue from 1 argument', function () {
    const data = 42;
    const queue = new QueueWith2Stacks(data);

    expect(queue).to.be.instanceOf(QueueWith2Stacks);
    expect(queue.empty).to.be.false;
  });

  it('creates a new queue from many arguments', function () {
    const data = [1, 2, 3, 4, 5];
    const queue = new QueueWith2Stacks(...data);

    expect(queue).to.be.instanceOf(QueueWith2Stacks);
    expect(queue.empty).to.be.false;
  });

  it('creates a new queue from an array', function () {
    const data = [1, 2, 3, 4, 5];
    const queue = new QueueWith2Stacks(data);

    expect(queue).to.be.instanceOf(QueueWith2Stacks);
    expect(queue.empty).to.be.false;
  });

  test('peek() returns the value at the head of the list', function () {
    const data = [1, 2, 3, 4, 5];
    const empty = new QueueWith2Stacks();
    const queues = [new QueueWith2Stacks(...data), new QueueWith2Stacks(data[0]), new QueueWith2Stacks(data)];

    expect(empty.peek()).to.be.null;
    queues.forEach((q) => {
      expect(q.peek()).to.equal(data[0]);
    });
  });

  test('enqueue() adds data to the end of the list', function () {
    const value = 42;
    const data = [1, 2, 3, 4, 5];
    const empty = new QueueWith2Stacks();
    const queue = new QueueWith2Stacks(data);

    // adding to an empty queue => head = tail
    empty.enqueue(value);
    expect(empty.peek()).to.equal(value);

    let result;
    queue.enqueue(value);
    while (!queue.empty) {
      result = queue.dequeue();
    }
    expect(result).to.equal(value);
  });

  test('dequeue() removes head and returns its data', function () {
    const data = [1, 2, 3, 4, 5];
    const empty = new QueueWith2Stacks();
    const queue = new QueueWith2Stacks(data);

    const emptyResult = empty.dequeue();
    expect(emptyResult).to.be.null;

    const result = queue.dequeue();
    expect(result).to.equal(data[0]);
  });
});
