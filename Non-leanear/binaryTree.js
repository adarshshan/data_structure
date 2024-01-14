class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let currnet = this.root;
        while (true) {
            if (value === currnet.value) return undefined;
            if (value < currnet.value) {
                if (currnet.left === null) {
                    currnet.left = newNode;
                    return this;
                }
                currnet = currnet.left;
            } else {
                if (currnet.right === null) {
                    currnet.right = newNode;
                    return this;
                }
                currnet = currnet.right;
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    contains(value) {
        if (!value) return 'No Input!'
        if (this.root === null) return false;
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    preorder(root){
if(root){
    console.log(root.value);
    this.preorder(root.left)
    this.preorder(root.right)
}
    }
    remove(value) {
        this.removeHelper(value, this.root, null);
    }
    removeHelper(value, root, parentNode) {
        let current = root;
        while (current !== null) {
            if (value < current.value) {
                parentNode = current;
                current = current.left;
            } else if (value > current.value) {
                parentNode = current;
                current = current.right;
            } else {
                if (current.left !== null && current.right !== null) {
                    current.value = this.getMin(current.right);
                    this.removeHelper(current.value, current.right, current);
                } else {
                    if (parentNode === null) {
                        if (current.right === null) {
                            current = current.left;
                        } else {
                            current = current.right;
                        }
                    } else {
                        if (parentNode.left === current) {
                            if (current.right === null) {
                                parentNode.left = current.left;
                            } else {
                                parentNode.left = current.right;
                            }
                        } else {
                            if (current.right == null) {
                                parentNode.right = current.left;
                            } else {
                                parentNode.right = current.right
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    getMin(current) {
        if (current.left === null) {
            return current.value;
        } else {
            return this.getMin(current.left)
        }
    }
    getMax(current) {
        if (current.right === null) {
            return current.value;
        } else {
            return this.getMax(current.right)
        }
    }
}
const obj = new BinarySearchTree();
obj.insert(10)
obj.insert(8)
obj.insert(11)
obj.insert(4)
obj.insert(9)
obj.remove(10)
obj.preorder(obj.root);
console.log(obj.contains(10))
console.log(obj.find(15))
console.log(`Min value is ${obj.getMin(obj.root)} max is ${obj.getMax(obj.root)}`);