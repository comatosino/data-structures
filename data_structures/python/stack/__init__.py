from node import SinglyLinkedNode as Node


class Stack:
    """
    LIFO
    """

    def __init__(self) -> None:
        self.top: Node = None

    def __str__(self) -> str:
        return " -> ".join(map(str, self.to_list()))

    def to_list(self) -> list:
        """
        Cast stack values to list

        Returns:
            List of stack values
        """
        r = []
        n = self.top
        while n is not None:
            r.append(n.data)
            n = n.next
        return r

    def is_empty(self):
        """
        Check if stack has any values

        Returns:
            True if stack contains no elements, else False
        """
        return self.top is None

    def peek(self):
        """
        Return, but do not remove, most recently added value

        Returns:
            Most recent value added to stack
            None if stack is empty
        """
        if self.top is None:
            return None
        return self.top.data

    def pop(self):
        """
        Remove and return the top value in the stack

        Returns:
            Most recent value added to stack
            None if stack is empty
        """
        if self.top is None:
            return None
        data = self.top.data
        self.top = self.top.next
        return data

    def push(self, data):
        """
        Add a new value to the top of the stack
        """
        node = Node(data)
        node.next = self.top
        self.top = node
