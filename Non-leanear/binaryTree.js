class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        if (!data) return 'invalid Input!'
        const newNode = new Node(data)
        if (this.root === null) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }
    insertNode(current, newNode) {
        if (newNode.data < current.data) {
            if (current.left === null)
                current.left = newNode;
            else
                this.insertNode(current.left, newNode)
        } else {
            if (current.right === null)
                current.right = newNode;
            else
                this.insertNode(current.right, newNode)
        }
    }
    contains(data) {
        if (!data) return false;
        if (this.root === null) return false;
        let current = this.root;
        while (current) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(current, data) {
        if (current === null) return null;
        if (data < current.data) {
            current.left = this.removeNode(current.left, data);
            return current;
        } else if (data > current.data) {
            current.right = this.removeNode(current.right, data);
            return current;
        } else {
            if (current.left === null && current.right === null) {
                current = null;
                return current;
            }
            if (current.left === null) {
                current = current.right;
                return current;
            } else if (current.right === null) {
                current = current.left;
                return current;
            }
            const min = this.findMinimum(current.right);
            current.data = min.data;

            current.right = this.removeNode(current.right, min.data);
            return current;
        }
    }
    findMinimum(current) {
        if (current.left === null)
            return current;
        else
            return this.findMinimum(current.left);
    }
    inorder(current) {
        if (current !== null) {
            this.inorder(current.left);
            console.log(current.data);
            this.inorder(current.right);
        }
    }
    preOrder(current) {
        if (current !== null) {
            console.log(current.data);
            this.preOrder(current.left);
            this.preOrder(current.right);
        }
    }
    closestvalue(target) {
        let current = this.root
        let closest = current.data
        while (current != null) {
            if (Math.abs(target - closest) > Math.abs(target - current.data)) {
                closest = current.data
            }
            if (target < current.data) {
                current = current.left
            } else if (target > current.data) {
                current = current.right
            } else {
                break
            }
        }
        return closest
    }
    isvalidbst() {
        return this.isBST(this.root, -Infinity, Infinity)
    }
    isBST(node, min, max) {
        if (node === null) return true;
        if (node.data <= min || node.data >= max) return false;
        return this.isBST(node.left, min, node.data) && this.isBST(node.right, node.data, max)
    }

}
const obj = new BinarySearchTree();
obj.insert(20)
obj.insert(16)
obj.insert(24)
obj.insert(10)
obj.insert(18)
obj.insert(21)
obj.insert(29)
obj.insert(5)
obj.insert(12)
obj.insert(17)
obj.insert(19)
obj.insert(27)
obj.insert(32)
console.log(obj.closestvalue(174))
console.log(obj.isvalidbst())
obj.inorder(obj.root);
obj.remove(20)
obj.remove(24)
obj.remove(27)
console.log(`deleted`)
obj.inorder(obj.root);


//To check the given binary trees are same
// const case1 = new BinarySearchTree()
// case1.insert(1)
// case1.insert(2)
// case1.insert(3)
// const case2 = new BinarySearchTree()
// case2.insert(1)
// case2.insert(2)
// case2.insert(3)

// let isSameTree = function (p, q) {
//     let a = conputeHashTree(p)
//     let b = conputeHashTree(q);
//     return a === b;
// };
// function conputeHashTree(root) {
//     if (root.left === null||root.right===null) return null;
//     let lefthash = conputeHashTree(root.left);
//     let righthash = conputeHashTree(root.right);
//     return `(${root.val}${lefthash}${righthash})`;
// }
// console.log(isSameTree(case1, case2));