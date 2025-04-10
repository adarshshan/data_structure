const LinkedList=require('./linkedlist-tail');

class LinkedListQueue{
    constructor(){
        this.list=new LinkedList()
    }
    isEmpty(){
        return this.list.isEmpty();
    }
    getSize(){
        return this.list.getSize()
    }
    enqueue(value){
        this.list.append(value)
    }
    dequeue(){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value;
    }
    display(){
        return this.list.print()
    }
}

//
const queue=new LinkedListQueue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
console.log(queue.getSize())
queue.display()