class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];
    while (queue.length) {
      let curr = queue.shift();
      if (!curr.left) {
        curr.left = newNode;
        return;
      } else if (!curr.right) {
        curr.right = newNode;
        return;
      } else {
        queue.push(curr.left);
        queue.push(curr.right);
      }
    }
  }
  findValue(value) {
    if (!this.root) return null;
    let queue = [this.root];

    while (queue.length) {
      let curr = queue.shift();
      if (curr.vlaue === value) return true;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return false;
  }
  findMin(node = this.root) {
    if (!node) return Infinity;
    return Math.min(
      node.value,
      this.findMin(node.left),
      this.findMin(node.right)
    );
  }
  findMax(node = this.root) {
    if (!node) return -Infinity;
    return Math.max(
      node.value,
      this.findMax(node.left),
      this.findMax(node.right)
    );
  }
  height(node = this.root) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
  countNodes(node = this.root) {
    if (!node) return 0;
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
}

const bt = new BinaryTree();

bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(18);
bt.insert(918);
bt.insert(916);
bt.insert(11);
bt.insert(88);

bt.inOrder();
