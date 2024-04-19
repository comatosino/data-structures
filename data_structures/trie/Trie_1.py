class TrieNode:
    def __init__(self, char: str) -> None:
        self.char = char
        self.children = {}
        self.end = False


class Trie:
    def __init__(self) -> None:
        self.root = TrieNode("")
        self.output = []

    def _dfs(self, node: TrieNode, pre: str):
        if node.end:
            self.output.append(pre + node.char)
        for char in node.children.values():
            self._dfs(char, pre + node.char)

    def insert(self, word: str):
        node = self.root

        for char in word:
            if char in node.children:
                node = node.children[char]
            else:
                new_node = TrieNode(char)
                node.children[char] = new_node
                node = new_node

        node.end = True

    def search(self, word: str) -> list[str]:
        node = self.root
        self.output = []

        for char in word:
            if char in node.children:
                node = node.children[char]
            else:
                return self.output

        self._dfs(node, word[:-1])
        return self.output
