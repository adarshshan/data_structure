class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    isFull() {
        return this.currentLength === this.capacity;
    }
    isEmpty() {
        return this.currentLength === 0;
    }
    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }
    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }
    print() {
        if (this.isEmpty()) return console.log('Queue is Emptty!')
        let i
        let str = '';
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
            str += `${this.items[i]}  `
        }
        console.log(str)
        console.log(`Front is ${this.front} and rear is ${this.rear}`)
    }
}

const queue = new CircularQueue(7);
let arr = [2, 5, 4, 75, 3, 4]
for (let i = 0; i < arr.length; i++) {
    queue.enqueue(arr[i]);
}
// queue.dequeue()
queue.print()
