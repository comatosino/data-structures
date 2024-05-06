class StackNode:
    def __init__(self, data):
        self.data = data
        self.next: StackNode = None


class Stack:
    """LIFO"""

    def __init__(self):
        self.top: StackNode = None

    def isempty(self):
        return self.top is None

    def peek(self):
        if not self.top:
            return None
        return self.top.data

    def push(self, data):
        node = StackNode(data)
        node.next = self.top
        self.top = node

    def pop(self, data):
        if not self.top:
            return None
        data = self.top.data
        self.top = self.top.next
        return data
