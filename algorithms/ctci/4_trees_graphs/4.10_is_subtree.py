class BinaryTree:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def is_subtree(t1: BinaryTree, t2: BinaryTree) -> bool:
    if t2 is None: # a null tree is always a subtree (since nodes terminate with None)
        return True
    return is_subtree(t1, t2)


def find_subtree(r1: BinaryTree, r2: BinaryTree):
    if r1 is None: # we've exhausted r1 with no match
        return False
    if r1.data == r2.data and match_trees(r1, r2): # check trees when a possible root is found
        return True
    return find_subtree(r1.left, r2) or find_subtree(r1.right, r2) # keep searching


def match_trees(n1: BinaryTree, n2: BinaryTree):
    if n1 is None and n2 is None:
        return True
    if n1 is None or n2 is None or n1.data != n2.data:
        return False
    return match_trees(n1.left, n2.left) and match_trees(n1.right, n2.right)
