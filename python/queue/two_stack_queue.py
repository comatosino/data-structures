"""
queue.two_stack_queue
"""

from stack import Stack


class TwoStackQueue:
    """
    Implementation of a queue using 2 stacks
    """

    def __init__(self):
        self._new = Stack()
        self._old = Stack()

    def __str__(self):
        old = self._old._list()
        new = self._new._list()
        return " -> ".join(map(str, old + new[::-1]))

    def _update(self):
        if self._old.isempty():
            while not self._new.isempty():
                self._old.push(self._new.pop())

    def peek(self):
        """
        Returns the value at front of list
        """
        self._update()
        return self._old.peek()

    def enqueue(self, value):
        """
        Add a value to end of list
        """
        self._new.push(value)

    def dequeue(self):
        """
        Remove head element and return its value
        """
        self._update()
        return self._old.pop()
