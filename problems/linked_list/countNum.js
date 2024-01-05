class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size
    }
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }
    print() {
        if (this.isEmpty()) return console.log(`List is Empty!`);
        let list = ``;
        let curr = this.head;
        while (curr) {
            list += `${curr.data} `;
            if (!curr.next) break;
            curr = curr.next;
        }
        console.log(list);
    }
}

const obj = new LinkedList()
obj.append(3)
obj.append(5)
obj.append(7)
obj.append(8)
obj.append(3)
obj.append(3)
obj.append(3)
obj.append(5)
obj.append(3)
obj.print()
// console.log(obj.getSize())
function ElementCount(key){
    let count=0;
    let len=obj.getSize();
    let curr=obj.head;
    for(let i=0;i<len;i++){
        if(curr.data===key)count++;
        curr=curr.next;
    }
    return count;
}
// console.log(`Result is ${ElementCount(3)}`)

//USING RECURSION
function ElCount(key){
    return count(key,obj.head,c=0);
}
function count(key,curr,c){
    if(key===curr.data)c++;
    return curr.next!==null?count(key,curr.next,c):c;
}
console.log(ElCount(58))