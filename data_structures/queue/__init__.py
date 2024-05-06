class QueueNode:
    def __init__(self, data):
        self.data = data
        self.next: QueueNode = None


class Queue:
    """FIFO"""

    def __init__(self):
        self.head: QueueNode = None
        self.tail: QueueNode = None

    def isempty(self) -> bool:
        return self.head is None

    def peek(self):
        if not self.head:
            return None
        return self.head.data

    def add(self, data):
        node = QueueNode(data)
        if self.tail is not None:
            self.tail.next = node
        self.tail = node
        if self.head is None:
            self.head = node

    def remove(self):
        if self.head is None:
            return None
        data = self.head.data
        self.head = self.head.next
        if self.head is None:
            self.tail = None
        return data
