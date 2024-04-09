import { describe, it, test } from 'mocha';
import { expect } from 'chai';

import { SinglyLinkedList as LinkedList } from '.';

describe('Singly Linked List', function () {
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

  test('append() adds given element to end of list', function () {
    const data = [1, 2, 3, 4, 5];
    const element = 42;
    const list = new LinkedList(data);

    data.push(element);
    list.append(element);
    expect(list.toArray()).to.deep.equal(data);
    expect(list.length).to.equal(data.length);
  });

  test('remove() deletes first found instance of given element', function () {
    const data = [1, 2, 3, 4, 5];
    const list = new LinkedList(data);

    // remove from head
    list.remove(data.shift() as number);
    expect(list.toArray()).to.deep.equal(data);

    // remove from tail
    list.remove(data.pop() as number);
    expect(list.toArray()).to.deep.equal(data);

    const [element] = data.splice(1, 1);
    list.remove(element);
    expect(list.toArray()).to.deep.equal(data);
    expect(list.length).to.equal(data.length);
  });

  test('clear() removes all elements', function () {
    const list = new LinkedList('a', 'b', 'c', 'd', 'e');

    list.clear();

    expect(list.length).to.equal(0);
  });

  it('implements toString method', function () {
    const data = ['a', 'b', 'c', 'd', 'e'];
    const list = new LinkedList(data);

    const result = list.toString();

    expect(result).to.equal('a -> b -> c -> d -> e');
  });

  it('implements toArray method', function () {
    const data = ['a', 'b', 'c', 'd', 'e'];
    const list = new LinkedList(data);

    const result = list.toArray();

    expect(Array.isArray(result)).to.be.true;
    expect(result).to.deep.equal(data);
  });
});
