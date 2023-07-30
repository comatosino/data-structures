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

  test('addFirst() adds element to beginning of list', function () {
    const element = 42;
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    list.addFirst(element);

    expect(list.toArray()).to.deep.equal([element, ...data]);
  });

  test('addLast() appends element to end of list', function () {
    const element = 42;
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    list.addLast(element);

    expect(list.toArray()).to.deep.equal([...data, element]);
  });

  test('clear() removes all elements from the list', function () {
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    expect(list.size).to.equal(data.length);

    list.clear();

    expect(list.size).to.equal(0);
  });

  test('clone() returns a shallow copy', function () {
    const element = 42;
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    const clone = list.clone();
    clone.set(1, element);

    // updating a clone node updates the source too
    data.forEach((_e, i) => {
      expect(list.get(i)).to.equal(clone.get(i));
    });
  });

  test('clone(true) returns a deep copy', function () {
    const element = 42;
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    const clone = list.clone(true);
    clone.set(1, element); // [1, 42, 3]

    // updating clone does not update source node
    expect(list.get(1)).to.equal(data[1]);
    expect(clone.get(1)).to.equal(element);
  });

  test('contains() tests existence of an element', function () {
    const element = { foo: 'bar' };
    const data = [{ baz: 'bing' }, element, { bat: 'bop' }];
    const list = new LinkedList(data);

    expect(list.contains(element)).to.be.true;
  });

  test('get() returns first element', function () {
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    expect(list.get()).to.equal(data[0]);
  });

  test('get(index) returns element at given index', function () {
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    data.forEach((e, i) => {
      expect(list.get(i)).to.equal(e);
    });
  });

  test('getFirst() returns element at head of list', function () {
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    expect(list.getFirst()).to.equal(data[0]);
  });

  test('getlast() returns element at tail of list', function () {
    const data = [1, 2, 3];
    const list = new LinkedList(data);

    expect(list.getlast()).to.equal(data[data.length - 1]);
  });

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
