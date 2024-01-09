// Functions to be implemented
// push(item)
// pop()
// peek()
// isEmpty()
// printStack()
class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) return 'underflow';
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    printStack(){
        let Str=''
        for(let i=0;i<this.items.length;i++){
            Str+=`${this.items[i]} `;
        }
        console.log(Str);
    }
}

const stack=new Stack()
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.pop()
// console.log(stack.peek())
// stack.printStack()