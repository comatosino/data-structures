import { describe, it } from "mocha";
import { expect } from "chai";

import { SinglyLinkedNode, DoublyLinkedNode } from ".";

describe("Singly Linked Node", function () {
  it("creates a new singly linked node with given data", function () {
    const data = 42;
    const node = new SinglyLinkedNode(data);

    expect(node.data).to.equal(data);
    expect(node.next).to.be.null;
  });
});

describe("Doubly Linked Node", function () {
  it("creates a new doubly linked node with given data", function () {
    const data = 42;
    const node = new DoublyLinkedNode(data);

    expect(node.data).to.equal(data);
    expect(node.next).to.be.null;
    expect(node.prev).to.be.null;
  });
});
