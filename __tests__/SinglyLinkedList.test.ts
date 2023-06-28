import { SinglyLinkedList as LinkedList } from '../src/LinkedList';

describe('Singly-linked list', () => {
  it('creates new instance', () => {
    const list = new LinkedList();

    expect(list).toBeInstanceOf(LinkedList);
  });
});
