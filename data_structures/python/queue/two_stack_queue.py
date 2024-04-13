from stack import Stack


class TwoStackQueue:
    """
    Implementation of a queue using 2 stacks
    """

    def __init__(self):
        self._new = Stack()
        self._old = Stack()

    def __str__(self):
        old = self._old.to_list()
        new = self._new.to_list()
        print(old, new)
        return " -> ".join(map(str, old + new[::-1]))

    def _update(self):
        """
        Helper method to dump values from new stack to old stack
        """
        if self._old.is_empty():
            while not self._new.is_empty():
                self._old.push(self._new.pop())

    def is_empty(self) -> bool:
        """
        Check if the queue is empty

        Returns:
            True if queue contains no elements, else False
        """
        return self._new.is_empty() and self._old.is_empty()

    def peek(self):
        """
        View the value stored at the front of the queue

        Returns:
            Value stored at front of queue,
            or None if queue is empty
        """
        self._update()
        return self._old.peek()

    def enqueue(self, data):
        """
        Append a value to the queue

        Params:
            data: The value to add to the queue
        """
        self._new.push(data)

    def dequeue(self):
        """
        Remove first element from queue

        Returns:
            Value stored in the front element,
            or None if queue is empty
        """
        self._update()
        return self._old.pop()
