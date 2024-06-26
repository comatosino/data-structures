class TrieNode:
    def __init__(self, char: str = None):
        self.char = char
        self.next = {}
        self.end = False


class Trie:
    def __init__(self, words: list[str] = None):
        self.root = TrieNode()
        if words:
            for word in words:
                self.add(word)

    def add(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node.next:
                node.next[char] = TrieNode(char)
            node = node.next[char]
        node.end = True

    def has(self, word: str, exact=True) -> bool:
        node = self.root
        for char in word:
            if char not in node.next:
                return False
            node = node.next[char]
        return node.end if exact else True
