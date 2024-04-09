class SinglyLinkedNode:
    def __init__(self, data):
        self.data = data
        self.next = None


class DoublyLinkedNode(SinglyLinkedNode):
    def __init__(self, data):
        super().__init__(data)
        self.prev = None
