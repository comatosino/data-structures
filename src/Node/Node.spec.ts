import { describe, it } from "mocha";
import { expect } from "chai";

import { SinglyLinkedNode, DoublyLinkedNode } from ".";

describe("Singly Linked Node class", function () {
  it("instantiates a new Singly Linked Node with given data", function () {
    const data = 42;
    const node = new SinglyLinkedNode(data);

    expect(node.data).to.equal(data);
    expect(node.next).to.be.null;
  });
});

describe("Doubly Linked Node class", function () {
  it("instantiates a new Doubly Linked Node with given data", function () {
    const data = 42;
    const node = new DoublyLinkedNode(data);

    expect(node.data).to.equal(data);
    expect(node.next).to.be.null;
    expect(node.prev).to.be.null;
  });
});
