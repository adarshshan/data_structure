class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
            this.size++
            return
        }
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.size++
    }
    removeFromFront() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value;
    }
    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail == null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--;
        return value;
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log(`Invalid input!.`)
            return
        }
        if (index === 0) {
            this.prepend(value)
            return;
        }
        const node = new Node(value);
        if (index === this.size) {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
            this.size++;
            return;
        }
        let prev = this.head
        let curr = prev.next
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next
            curr = prev.next
        }
        node.next = curr
        node.prev = prev
        curr.prev = node
        prev.next = node
        this.size++;
    }
    deleteValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.head.prev = null;
            this.size--;
            return
        }
        let curr = this.head
        while (curr.value !== value && curr.next !== null) {
            curr = curr.next;
        }
        if (curr.value !== value && curr.next === null) {
            console.log('Invalid Value');
            return
        }
        if (curr.next === null && curr.value === value) {
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--;
            return
        }
        let left = curr.prev
        let right = curr.next
        left.next = right
        right.prev = left;
        this.size--;
    }
    deleteFromIndex(index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid Index!')
            return;
        }
        if (index === 0) {
            this.head = this.head.next
            this.head.prev = null
            this.size--
            return
        }
        if (index === this.size - 1) {
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
            return
        }
        let curr = this.head
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        let left = curr.prev
        let right = curr.next
        left.next = right;
        right.prev = left;
        this.size--;
    }
    printReverse() {
        if (this.isEmpty()) {
            console.log('List is Empty!');
            return
        }
        let curr = this.tail
        let list = '';
        while (curr) {
            list += `${curr.value}  `;
            curr = curr.prev;
        }
        console.log(`Reversed LinkedList is ${list}`);
    }
    print() {
        if (this.isEmpty()) {
            console.log(`List is Empty...`);
            return;
        }
        let curr = this.head
        let list = '';
        while (curr) {
            list += `${curr.value}  `;
            curr = curr.next;
        }
        console.log(list);
    }
}
// const obj = new DoublyLinkedList()
// console.log('List is Empty : ', obj.isEmpty())
// console.log('Ths size of array is ', obj.getSize())
// obj.prepend(23)
// obj.prepend(40)
// obj.prepend(60)
// obj.append(300)
// obj.removeFromFront()
// obj.removeFromEnd()
// obj.print();
// obj.insert(1000, 5)
// obj.deleteValue(39);
// obj.deleteFromIndex(2)
// obj.print();
// console.log(obj.getSize())
// obj.printReverse();


//CONVERTION OF ARRAY TO LINKED LIST
let arr = [3, 5, 7, 8, 9]
const obj2 = new DoublyLinkedList()
arr.map(item => obj2.append(item))
obj2.print()
console.log(`size of linkedlist :${obj2.getSize()}`);