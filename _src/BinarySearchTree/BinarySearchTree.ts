type TreePointerType = TreeNode<any> | null;

class TreeNode<T> {
  data: T;
  left: TreePointerType;
  right: TreePointerType;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  private root: TreePointerType;

  constructor() {
    this.root = null;
  }
}
