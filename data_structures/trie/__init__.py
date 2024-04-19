class TrieNode:
    def __init__(self, char: str = None):
        self.character = char
        self.children = {}
        self.complete = False


class Trie:
    def __init__(self, words: list[str] = None) -> None:
        self.root = TrieNode()
        if words:
            for word in words:
                self.insert(word)

    def insert(self, word: str) -> None:
        """
        Add a new word to the Trie
        """
        if not word:
            raise ValueError("'word' must be non-empty str")

        node = self.root

        for char in word:
            if char in node.children:
                node = node.children[char]
            else:
                new_node = TrieNode(char)
                node.children[char] = new_node
                node = new_node

        node.complete = True
