"""
queue.Queue
"""

from node import SinglyLinkedNode as Node


class Queue:
    """
    FIFO
    """

    def __init__(self):
        self._head: Node = None
        self._tail: Node = None

    def isempty(self):
        """
        What it says on the tin
        """
        return self._head is None

    def peek(self):
        """
        Return value stored in head node
        """
        return self._head.data if self._head else None

    def enqueue(self, data):
        """
        Append data to tail
        """
        node = Node(data)
        if self._head is None:
            self._head = node
        if self._tail is not None:
            self._tail.next = node
        self._tail = node

    def dequeue(self):
        """
        Remove and return data from head
        """
        if self._head is None:
            return None
        data = self._head.data
        self._head = self._head.next
        if self._head is None:
            self._tail = None
        return data
