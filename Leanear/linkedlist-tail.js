class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront() {
        if (this.isEmpty()) return null;
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
    removeFromEnd() {
        if (this.isEmpty()) return null;
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }
    reverse() {
        if (this.isEmpty()) return;
        let current = this.head;
        let prev = null;
        let nex = null;
        while (current) {
            nex = current.next;
            current.next = prev
            prev = current
            current = nex
        }
        this.tail = this.head
        this.head = prev;
    }
    print() {
        if (this.isEmpty()) {
            console.log(`List is Empty!`);
        } else {
            let list = '';
            let curr = this.head;
            while (curr) {
                list += `${curr.value} `;
                curr=curr.next;
            }
            console.log(list)
        }
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
}

module.exports = LinkedList;