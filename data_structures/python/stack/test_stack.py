from . import Stack


def test_init():
    s = Stack()
    assert isinstance(s, Stack)
    assert s.top is None


def test_isempty():
    s = Stack()
    assert s.is_empty()


def test_push():
    values = [1, 2, 3, 4, 5]
    s = Stack()

    for v in values:
        s.push(v)

    t = s.top
    for v in reversed(values):
        assert t.data == v
        t = t.next


def test_pop():
    values = [1, 2, 3, 4, 5]
    s = Stack()

    for v in values:
        s.push(v)

    for v in reversed(values):
        assert s.pop() == v


def test_peek():
    values = [1, 2, 3, 4, 5]
    s = Stack()

    for v in values:
        s.push(v)

    assert s.peek() == values[-1]


def test_str():
    values = [1, 2, 3, 4, 5]
    s = Stack()

    for v in values:
        s.push(v)

    assert s.__str__() == "5 -> 4 -> 3 -> 2 -> 1"
