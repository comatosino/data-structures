from typing import Deque
from collections import deque


class BinaryTree:
    def __init__(self, data):
        self.left: BinaryTree = None
        self.right: BinaryTree = None
        self.data = data

    def insert(self, value):
        if value <= self.data:
            if not self.left:
                self.left = BinaryTree(value)
            else:
                self.left.insert(value)
        else:
            if not self.right:
                self.right = BinaryTree(value)
            else:
                self.right.insert(value)

    def contains(self, value):
        if value == self.data:
            return True
        if self.left:
            return self.left.contains(value)
        if self.right:
            return self.right.contains(value)
        return False

    def traverse_in_order_iterative(self):
        curr: BinaryTree = self
        stack = []
        while True:
            if curr is not None:
                stack.append(curr)
                curr = curr.left
            elif stack:
                curr = stack.pop()
                print(curr.data)
                curr = curr.right
            else:
                break

    def level_order(self):
        queue: Deque[BinaryTree] = deque()
        queue.append(self)
        while queue:
            node = queue.popleft()
            print(node.data)
            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)

    def inorder(self):
        if self.left:
            self.left.inorder()
        print(self.data)
        if self.right:
            self.right.inorder()

    def preorder(self):
        print(self.data)
        if self.left:
            self.left.preorder()
        if self.right:
            self.right.preorder()

    def postorder(self):
        if self.left:
            self.left.postorder()
        if self.right:
            self.right.postorder()
        print(self.data)
