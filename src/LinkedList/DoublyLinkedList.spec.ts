import { describe, it, test } from 'mocha';
import { expect } from 'chai';

import { LinkedList } from '.';

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

  test('add(element) appends element to end of list', function () {
    const element = 42;
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    list.add(element);

    expect(list.toArray()).to.deep.equal([...data, 42]);
  });

  test('add(element, index) inserts element at given index', function () {
    const element = 42;
    const data = [1, 2, 3];
    let list = new LinkedList(data);

    list = new LinkedList(data);
    list.add(element, 0);
    expect(list.toArray()).to.deep.equal([element, ...data]);

    list = new LinkedList(data);
    list.add(element, 1);
    expect(list.toArray()).to.deep.equal([1, 42, 2, 3]);

    list = new LinkedList(data);
    list.add(element, 2);
    expect(list.toArray()).to.deep.equal([1, 2, 42, 3]);

    list = new LinkedList(data);
    list.add(element, 3);
    expect(list.toArray()).to.deep.equal([...data, element]);

    // test out of bounds
  });

  test('addFirst()', function () {
    const element = 42;
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    list.addFirst(element);

    expect(list.toArray()).to.deep.equal([element, ...data]);
  });

  test('addLast()', function () {
    const element = 42;
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    list.addLast(element);

    expect(list.toArray()).to.deep.equal([...data, element]);
  });

  // test('clear()', function () {});

  // test('clone() shallow copy', function () {});

  // test('clone() deep copy', function () {});

  // test('contains()', function () {});

  // test('get()', function () {});

  // test('getFirst()', function () {});

  // test('getlast()', function () {});

  // test('indexOf()', function () {});

  // test('lastIndexOf()', function () {});

  // test('remove()', function () {});

  // test('removeFirst()', function () {});

  // test('removeFirstOccurence()', function () {});

  // test('removeLast()', function () {});

  // test('removeLastOccurrence()', function () {});

  // test('set()', function () {});

  // test('toArray()', function () {});

  // test('toString()', function () {});
});
