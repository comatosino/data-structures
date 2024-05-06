class TreeNode:
    """BST"""

    def __init__(self, data):
        self.left: TreeNode = None
        self.right: TreeNode = None
        self.data = data

    def insert(self, value):
        if value <= self.data:
            if not self.left:
                self.left = TreeNode(value)
            else:
                self.left.insert(value)
        else:
            if not self.right:
                self.right = TreeNode(value)
            else:
                self.right.insert(value)

    def contains(self, value):
        if value == self.data:
            return True

        elif value < self.data:
            if not self.left:
                return False
            else:
                return self.left.contains(value)

        else:
            if not self.right:
                return False
            else:
                return self.right.contains(value)

    def print_in_order(self):
        if self.left:
            self.left.print_in_order()
        print(self.data)
        if self.right:
            self.right.print_in_order()

    def print_preorder(self):
        print(self.data)
        if self.left:
            self.left.print_preorder()
        if self.right:
            self.right.print_preorder()

    def print_postorder(self):
        if self.left:
            self.left.print_postorder()
        if self.right:
            self.right.print_postorder()
        print(self.data)
