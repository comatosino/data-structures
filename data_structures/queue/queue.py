class QueueNode:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    """
    FIFO
    """

    def __init__(self):
        self._head: QueueNode = None
        self._tail: QueueNode = None

    def __str__(self):
        return " -> ".join(map(str, self.to_list()))

    def to_list(self) -> list:
        """
        Cast stack values to list

        Returns:
            List of stack values
        """
        r = []
        n = self._head
        while n is not None:
            r.append(n.data)
            n = n.next
        return r

    def is_empty(self) -> bool:
        """
        Check if the queue is empty

        Returns:
            True if queue contains no elements, else False
        """
        return self._head is None

    def peek(self):
        """
        View the value stored at the front of the queue

        Returns:
            Value stored at front of queue,
            or None if queue is empty
        """
        return self._head.data if self._head else None

    def enqueue(self, data) -> None:
        """
        Append a value to the queue

        Params:
            data: The value to add to the queue
        """
        node = QueueNode(data)
        if self._head is None:
            self._head = node
        if self._tail is not None:
            self._tail.next = node
        self._tail = node

    def dequeue(self):
        """
        Remove first element from queue

        Returns:
            Value stored in the front element,
            or None if queue is empty
        """
        if self._head is None:
            return None
        data = self._head.data
        self._head = self._head.next
        if self._head is None:
            self._tail = None
        return data
