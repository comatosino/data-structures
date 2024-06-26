class Tree:
    def __init__(self, value: int):
        self.value = value
        self.left: Tree = None
        self.right: Tree = None

    def __str__(self) -> str:
        lines, *_ = self._generate_str()
        return "\n".join(lines)

    def _generate_str(self) -> str:
        # No child.
        if self.right is None and self.left is None:
            line = "%s" % self.value
            width = len(line)
            height = 1
            middle = width // 2
            return [line], width, height, middle

        # Only left child.
        if self.right is None:
            lines, n, p, x = self.left._generate_str()
            s = "%s" % self.value
            u = len(s)
            first_line = (x + 1) * " " + (n - x - 1) * "_" + s
            second_line = x * " " + "/" + (n - x - 1 + u) * " "
            shifted_lines = [line + u * " " for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, n + u // 2

        # Only right child.
        if self.left is None:
            lines, n, p, x = self.right._generate_str()
            s = "%s" % self.value
            u = len(s)
            first_line = s + x * "_" + (n - x) * " "
            second_line = (u + x) * " " + "\\" + (n - x - 1) * " "
            shifted_lines = [u * " " + line for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, u // 2

        # Two children.
        left, n, p, x = self.left._generate_str()
        right, m, q, y = self.right._generate_str()
        s = "%s" % self.value
        u = len(s)
        first_line = (x + 1) * " " + (n - x - 1) * "_" + s + y * "_" + (m - y) * " "
        second_line = (
            x * " " + "/" + (n - x - 1 + u + y) * " " + "\\" + (m - y - 1) * " "
        )

        if p < q:
            left += [n * " "] * (q - p)
        elif q < p:
            right += [m * " "] * (p - q)

        lines = [first_line, second_line] + [a + u * " " + b for a, b in zip(left, right)]
        return (lines, n + m + u, max(p, q) + 2, n + u // 2)


def main():
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    result = create_minimal_BST(a)
    print(result)


def create_minimal_BST(a: list[int]) -> Tree:
    """
    Assumes a is sorted in ascending order
    This way, we can build subtrees about the midpoints of subarrays
    """
    return __create_minimal_BST(a, 0, len(a) - 1)


def __create_minimal_BST(a: list[int], start: int, end: int) -> Tree:
    if start > end:
        return None
    mid = (start + end) // 2
    node = Tree(a[mid])
    node.left = __create_minimal_BST(a, start, mid - 1)
    node.right = __create_minimal_BST(a, mid + 1, end)
    return node


if __name__ == "__main__":
    main()
