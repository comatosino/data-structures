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


def is_unique_alt(string: str) -> bool:
    """
    If we can't use additional data structures,

    we can try sorting the string and checking adjacent elements
    """
    s = set()
    for char in string:
        if char in s:
            return False
        s.add(char)
    return True
