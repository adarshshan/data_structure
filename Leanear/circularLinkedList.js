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
    delete(value) {
        let curr = this.head;
        let prev
        do {
            prev = curr;
            curr = curr.next;
        } while (curr !== this.head && curr.data !== value)
        if (curr.data === value) {
            prev.next = curr.next;
            this.size--;
        } else {
            console.log('Entered Number is not exist in linked list!')
        }
    }
    insert(index, value) {
        const newNode = new Node(value)
        if (this.isEmpty()) return console.log('list is empty!');
        let prev = this.head
        let curr;
        for (let i = 1; i < index - 1; i++) {
            prev = prev.next
            curr = prev.next
        }
        prev.next = newNode;
        newNode.next = curr
        this.size++;
    }
    isCircular() {
        return this.tail.next !== null;
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

const obj = new CircularLinkedList()
obj.append(23);
obj.append(5);
obj.append(90);
obj.prepend(40)
obj.display()
obj.insert(2,99)
obj.display()
console.log(obj.getSize())