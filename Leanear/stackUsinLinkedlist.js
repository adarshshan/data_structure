class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class Stack {
    constructor() {
        this.start = null;
        this.top = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    push(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.start = node;
            this.top = node;
        } else {
            this.top.next = node;
            node.prev = this.top;
            node.next = null;
            this.top = node;
        }
        this.size++;
    }
    pop() {
        if (this.isEmpty()) return console.log('Stack UnderFlow!');
        if (this.size === 1) {
            this.start = null
            this.top = null;
            this.size--;
            return;
        }
        this.top.prev.next = null;
        this.top = this.top.prev;
        this.size--;
        return;
    }
    topElement() {
        if (this.isEmpty()) return console.log('Stack is Empty!');
        return this.top.data;
    }
    getSize() {
        return this.size;
    }
    printStack() {
        if (this.isEmpty()) return console.log('stack is Empty!');
        let Str = ``;
        let curr = this.start;
        while (curr !== null) {
            Str += `${curr.data} `;
            curr = curr.next
        }
        console.log(Str);
    }
}

const stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
// stack.pop()
console.log(`the size if ${stack.getSize()}`)
console.log(`the top element is ${stack.topElement()}`)
stack.printStack()