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
    getSize(){
        return this.items.length;
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

//To reverse an String
let str='hello how are you guys!';
let arr=str.split(" ");
let reverse=[]
console.log(arr)
for(let i of arr){
    stack.push(i)
}
console.log(`the length is ${stack.getSize()}`)
let len=stack.getSize()
console.log(`the length of stack is ${len}`)
for(let i=0;i<len;i++){
    let val=stack.pop();
    reverse.push(val);
}
console.log(`Reversed string is ${reverse} `);
stack.printStack()