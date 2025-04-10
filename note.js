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
        let newNode = new Node(data);
        if (!this.root) this.root = newNode;
        else this.insertNode(newNode, this.root);
    }
    insertNode(newNode, current) {
        if (newNode.data < current.data) {
            if (!current.left) current.left = newNode;
            else this.insertNode(newNode, current.left)
        } else {
            if (!current.right) current.right = newNode;
            else this.insertNode(newNode, current.right);
        }
    }
    contains(data){
let node=this.root;
if(node.)
    }
}