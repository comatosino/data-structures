import { describe, it, test } from "mocha";
import { expect } from "chai";

import { Stack } from ".";

describe("Stack", function () {
  it("creates a new stack from no arguments", function () {
    const stack = new Stack();

    expect(stack).to.be.instanceOf(Stack);
    expect(stack.empty).to.be.true;
    expect(stack.size).to.equal(0);
  });

  it("creates a new stack from 1 argument", function () {
    const data = 42;
    const stack = new Stack(data);

    expect(stack).to.be.instanceOf(Stack);
    expect(stack.empty).to.be.false;
    expect(stack.size).to.equal(1);
  });

  it("creates a new stack from many arguments", function () {
    const data = [1, 2, 3, 4, 5];
    const stack = new Stack(...data);

    expect(stack).to.be.instanceOf(Stack);
    expect(stack.empty).to.be.false;
    expect(stack.size).to.equal(data.length);
  });

  it("creates a new stack from an array", function () {
    const data = [1, 2, 3, 4, 5];
    const stack = new Stack(data);

    expect(stack).to.be.instanceOf(Stack);
    expect(stack.empty).to.be.false;
    expect(stack.size).to.equal(data.length);
  });

  test("peek() returns data at the top of the stack", function () {
    const data = [1, 2, 3, 4, 5];
    const empty = new Stack();
    const stack = new Stack(data);

    expect(empty.peek()).to.be.null;
    expect(stack.peek()).to.equal(data[data.length - 1]);
  });

  test("push() adds data to top of stack", function () {
    const data = 42;
    const stack = new Stack();

    stack.push(data);
    expect(stack.peek()).to.equal(data);
  });

  test("pop() removes and returns data from top of stack", function () {
    const data = [1, 2, 3, 4, 5];
    const empty = new Stack();
    const stack = new Stack(data);

    expect(empty.peek()).to.be.null;

    let i = data.length - 1;
    while (i >= 0) {
      expect(stack.pop()).to.equal(data[i]);
      i--;
    }
  });

  it("implements toString method", function () {
    const data = [1, 2, 3, 4, 5];
    const stack = new Stack();
    const stack_1 = new Stack(data[0]);
    const stack_args = new Stack(...data);
    const stack_arr = new Stack(data);

    expect(stack.toString()).to.equal("");
    expect(stack_1.toString()).to.equal("1");
    expect(stack_args.toString()).to.equal("5 -> 4 -> 3 -> 2 -> 1");
    expect(stack_arr.toString()).to.equal("5 -> 4 -> 3 -> 2 -> 1");
  });

  it("implements toArray method", function () {
    const data = ["a", "b", "c", "d", "e"];
    const stack = new Stack(data);
    data.reverse();

    const result = stack.toArray();

    expect(Array.isArray(result)).to.equal(true);
    data.forEach((el, idx) => {
      expect(result[idx]).to.equal(el);
    });
  });
});
