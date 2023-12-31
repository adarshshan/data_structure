class Queue {
    constructor() {
        this.items = [3,34,344]
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
obj.enqueue('hello')
obj.enqueue(10)
obj.dequeue()
obj.print()