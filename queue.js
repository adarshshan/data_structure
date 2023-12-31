class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null;
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString())
    }
}
const obj=new Queue();
obj.enqueue(10)
obj.enqueue(20)
obj.enqueue(30)
console.log(obj.dequeue())
console.log(obj.peek())
obj.print()
