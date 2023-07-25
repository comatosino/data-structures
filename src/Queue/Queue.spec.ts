import { describe, it, test } from "mocha";
import { expect } from "chai";

import { Queue } from ".";

describe("Queue class", function () {
  it("creates a new queue from no arguments", function () {
    const queue = new Queue();

    expect(queue).to.be.instanceOf(Queue);
    expect(queue.empty).to.be.true;
    expect(queue.length).to.equal(0);
  });

  it("creates a new queue from 1 argument", function () {
    const data = 42;
    const queue = new Queue(data);

    expect(queue).to.be.instanceOf(Queue);
    expect(queue.empty).to.be.false;
    expect(queue.length).to.equal(1);
  });

  it("creates a new queue from many arguments", function () {
    const data = [1, 2, 3, 4, 5];
    const queue = new Queue(...data);

    expect(queue).to.be.instanceOf(Queue);
    expect(queue.empty).to.be.false;
    expect(queue.length).to.equal(data.length);
  });

  it("creates a new queue from an array", function () {
    const data = [1, 2, 3, 4, 5];
    const queue = new Queue(data);

    expect(queue).to.be.instanceOf(Queue);
    expect(queue.empty).to.be.false;
    expect(queue.length).to.equal(data.length);
  });

  test("peek() returns the value of the head node", function () {
    const data = [1, 2, 3, 4, 5];
    const empty = new Queue();
    const queues = [new Queue(...data), new Queue(data[0]), new Queue(data)];

    expect(empty.peek()).to.be.null;
    queues.forEach((q) => {
      expect(q.peek()).to.equal(data[0]);
    });
  });

  test("enqueue() adds data to the end of the list", function () {
    const value = 42;
    const data = [1, 2, 3, 4, 5];
    const empty = new Queue();
    const queue = new Queue(data);

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

  test("dequeue() removes head and returns its data", function () {
    const data = [1, 2, 3, 4, 5];
    const empty = new Queue();
    const queue = new Queue(data);

    const emptyResult = empty.dequeue();
    expect(emptyResult).to.be.null;

    const result = queue.dequeue();
    expect(result).to.equal(data[0]);
  });

  it("updates the length field", function () {
    const data = [1, 2, 3, 4, 5];
    const queue = new Queue(data);

    queue.dequeue();
    expect(queue.length).to.equal(data.length - 1);

    queue.enqueue(5);
    expect(queue.length).to.equal(data.length);
  });

  it("updates the empty field", function () {
    it("updates the empty property", () => {
      const data = 42;
      const queue = new Queue();

      expect(queue.empty).to.be.true;

      queue.enqueue(data);
      expect(queue.empty).to.be.false;

      queue.dequeue();
      expect(queue.empty).to.be.true;
    });
  });

  it("implements toString method", function () {
    const data = ["a", "b", "c", "d", "e"];
    const queue_empty = new Queue();
    const queue_1 = new Queue(data[0]);
    const queue_args = new Queue(...data);
    const queue_arr = new Queue(data);

    expect(queue_empty.toString()).to.equal("");
    expect(queue_1.toString()).to.equal("a");
    expect(queue_args.toString()).to.equal("a -> b -> c -> d -> e");
    expect(queue_arr.toString()).to.equal("a -> b -> c -> d -> e");
  });

  it("implements toArray method", function () {
    const data = ["a", "b", "c", "d", "e"];
    const queue = new Queue(data);

    const result = queue.toArray();

    expect(Array.isArray(result)).to.be.true;
    expect(result).to.deep.equal(data);
  });
});
