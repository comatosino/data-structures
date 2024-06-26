class BinaryTree:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class ListNode:
    def __init__(self, data):
        self.data = data
        self.next: ListNode = None


class LinkedList:
    def __init__(self):
        self.head: ListNode = None
        self.tail: ListNode = None

    def __str__(self) -> str:
        l = []
        h = self.head
        while h:
            l.append(h.data)
            h = h.next
        s = " -> ".join(map(str, l))
        return f"[ {s} ]"

    def insert(self, data):
        node = ListNode(data)
        if self.head is None:
            self.head = node
        if self.tail is not None:
            self.tail.next = node
        self.tail = node


def level_lists(t: BinaryTree):
    lists = []
    _level_lists([], t, 0)
    return lists


def _level_lists(lists: list[LinkedList], node: BinaryTree, level: int):
    if node is None:
        return
    if len(lists) == level:
        lists.append(LinkedList())
    lists[level].insert(node.data)
    _level_lists(lists, node.left, level + 1)
    _level_lists(lists, node.right, level + 1)


def main():
    root = BinaryTree(1)
    l = BinaryTree(2)
    r = BinaryTree(3)
    l.left = BinaryTree(4)
    l.right = BinaryTree(5)
    r.left = BinaryTree(6)
    r.right = BinaryTree(7)
    root.left = l
    root.right = r

    lists = level_lists(root)
    for linked_list in lists:
        print(linked_list)


if __name__ == "__main__":
    main()
