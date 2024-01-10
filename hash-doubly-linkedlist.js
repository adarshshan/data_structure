//HASH TABLE USING DOUBLY LINKED LIST

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class HashTable {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.size;
    }
    set(key,value){
        const index=this._hash(key);
        
    }
}