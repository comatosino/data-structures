"""
Implement an algorithm to determine if all characters in a string are unique
"""


def is_unique(string: str) -> bool:
    s = set()
    for char in string:
        if char in s:
            return False
        s.add(char)
    return True
