//STACK USING ARRAY

class stack {
    constructor() {
        this.item = [];
    }
    push(value) {
        this.item.push(value);
    }
    pop() {
        this.item.pop();
    }
    peek() {
        return this.item[this.getSize() - 1];
    }
    print() {
        let list = '';
        this.item.map(item => list += item + ' ');
        return list;
    }
    isEmpty() {
        return this.item.length === 0;
    }
    getSize() {
        return this.item.length;
    }
}

const st = new stack();
st.push(34)
st.push(334)
st.push(90)
st.push(84)
console.log(st.print());
// st.pop();
console.log(st.print());
console.log(st.peek());




