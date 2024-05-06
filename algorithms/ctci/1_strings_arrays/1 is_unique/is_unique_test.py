from is_unique import is_unique


def test_true():
    string = "abcde"
    assert is_unique(string)


def test_false():
    string = "hello"
    assert not is_unique(string)
