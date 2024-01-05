class Node {
    constructor(value) {
        this.data = value;
        this.next = null
    }
}
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.size = 0;
    }
    isEmpty() {
        return this.head === null;
    }
    getSize() {
        return this.size;
    }
    append(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail.next = newNode;
            newNode.next = this.head
            this.tail = newNode
        }
        this.size++;
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode
            this.tail.next = this.head
        }
        this.size++;
    }
    isCircular(){
        return this.tail.next!==null;
    }
    display() {
        if (this.isEmpty()) return console.log(`The circular linked list is Empty!`)
        let curr = this.head;
        let List = ``;
        do {
            List += `${curr.data} `;
            curr = curr.next;
        } while (curr !== this.head)
        console.log(List);
    }
}

const obj=new CircularLinkedList()
obj.append(23);
obj.append(5);
obj.append(90);
obj.prepend(40)
obj.display()
console.log(obj.getSize())
console.log(obj.isCircular())