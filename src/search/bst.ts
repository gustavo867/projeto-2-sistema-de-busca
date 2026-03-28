class Node {
  value: number;
  left: Node | null = null;
  right: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class BST {
  root: Node | null = null;

  insert(value: number) {
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: Node | null, value: number): Node {
    if (!node) return new Node(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  search(value: number): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: Node | null, value: number): boolean {
    if (!node) return false;

    if (value === node.value) return true;

    if (value < node.value) {
      return this.searchNode(node.left, value);
    }

    return this.searchNode(node.right, value);
  }
}
