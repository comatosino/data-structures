import { describe, it } from 'mocha';
import { expect } from 'chai';

import { DoublyLinkedList as LinkedList } from '.';

describe('Doubly Linked List', function () {
  it('creates a new list from no arguments', function () {
    const list = new LinkedList();

    expect(list).to.be.instanceOf(LinkedList);
  });

  it('creates a new list from 1 argument', function () {
    const data = 42;
    const list = new LinkedList(data);

    expect(list).to.be.instanceOf(LinkedList);
  });

  it('creates a new list from many arguments', function () {
    const data = [1, 2, 3, 4, 5];
    const list = new LinkedList(...data);

    expect(list).to.be.instanceOf(LinkedList);
  });

  it('creates a new list from an array', function () {
    const data = [1, 2, 3, 4, 5];
    const list = new LinkedList(data);

    expect(list).to.be.instanceOf(LinkedList);
  });
});
