class SinglyLinkedNode:
    """
    For use with Singly Linked Lists, Stacks, and Queues
    """

    def __init__(self, data):
        self.data = data
        self.next = None


class DoublyLinkedNode(SinglyLinkedNode):
    """
    For use with Doubly Linked Lists
    """

    def __init__(self, data):
        super().__init__(data)
        self.prev = None
