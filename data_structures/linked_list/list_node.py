class ListNode:
    def __init__(self, data) -> None:
        self.data = data
        self.next: ListNode = None

    def __str__(self) -> str:
        l = []
        h = self
        while h:
            l.append(h.data)
            h = h.next
        return " -> ".join(map(str, l))
