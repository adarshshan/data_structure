class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
        console.log(this.head)
    }
}
let node1 = new ListNode(2)
let node2 = new ListNode(53)
let node3 = new ListNode(500)
let node4 = new ListNode(30)
node1.next = node2
node2.next = node3
node3.next = node4

let list = new LinkedList(node3)

console.log(list.head.next.data) 