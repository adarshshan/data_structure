class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++;
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next;
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--;
        return removeNode.value;
    }
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            let removedNode;
            if (prev.next) {
                removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }
    removeDuplicates() {
        let curr = this.head
        while (curr !== null) {
            let right=
            curr = curr.next;
        }
    }
    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev;
    }
    print() {
        if (this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()
console.log('list is Empty? ', list.isEmpty())
console.log('List Size ', list.getSize())
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(70)
// list.prepend(90)
// list.append(100)
// list.append(2)
// list.prepend(2)
// list.insert(500, 1)
// console.log(list.removeFrom(0))
// list.removeValue(100)
// list.reverse()

// arr.map(item=>list.append(item))
// let distinctArr = [...new Set(arr.map(item => item))]
// list.print()


//CONVERTION OF ARRAY INTO LINKEDLIST
let arr = [1, 2, 3, 3, 5, 6, 6, 6, 7, 9, 10, 10]
const Obj2 = new LinkedList()
arr.map(item => Obj2.append(item));
Obj2.print()
console.log(`The size of linked list is ${Obj2.getSize()}`)
console.log(`the result is ${Obj2.removeDuplicates()}`)

//REMOVE DUPLICATES
// let curr = Obj2.head
// Obj2.print()
// while (curr && curr.next !== null) {
//     let flag = 0;
//     if (curr.value === curr.next.value) {
//         // curr.next = curr.next.next;
//         Obj2.size--;
//         // flag = 1;
//         continue;
//     }
//     // if (flag !== 1) {
//     curr = curr.next;
//     // }
// }
// Obj2.print()