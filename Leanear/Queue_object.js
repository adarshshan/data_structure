class Queue {
    constructor() {
        this.items = {}
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.items[this.rear] = value;
        this.rear++
    }
    dequeue() {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++;
        return item;
    }
    isEmpty() {
        return this.rear - this.front === 0;
    }
    peek(){
        return this.items[this.front];
    }
    size(){
        return this.rear-this.front;
    }
    isExist(ref){
        return this.items[ref]
    }
    print(){
        console.log(this.items)
    }
}

const queue=new Queue()

queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(8)
queue.enqueue(34)
queue.print()
console.log(queue.dequeue())
queue.enqueue(400)
queue.enqueue(99)
queue.print()
console.log(`${queue.isExist(4)} is exist in this array`)
console.log(`The first Element in this array is ${queue.peek()}`)
console.log(`the size of the queue is ${queue.size()}`)