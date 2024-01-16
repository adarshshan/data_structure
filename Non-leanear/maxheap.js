class MaxHeap {
    constructor() {
        this.heap = [];
    }
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
    remove() {
        if (this.heap.length === 0) return null;
        let item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let BigChild = this.leftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChildValue(index) > this.leftChildValue(index)) {
                BigChild = this.rightChildIndex(index);
            }
            if (this.heap[index] > this.heap[BigChild]) break;
            else this.swap(BigChild, index);
            index = BigChild;
        }
    }
    leftChildValue(index) {
        return this.heap[this.leftChildIndex(index)];
    }
    rightChildValue(index) {
        return this.heap[this.rightChildIndex(index)];
    }
    leftChildIndex(index) {
        return (2 * index) + 1;
    }
    rightChildIndex(index) {
        return (2 * index) + 2;
    }
    hasLeftChild(index) {
        return this.leftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.rightChildIndex(index) < this.heap.length;
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParant(index) && this.heap[this.parantIndex(index)] < this.heap[index]) {
            this.swap(this.parantIndex(index), index);
            index = this.parantIndex(index);
        }
    }
    swap(parantIndex, index) {
        let temp = this.heap[parantIndex];
        this.heap[parantIndex] = this.heap[index];
        this.heap[index] = temp;
    }
    parantIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    hasParant(index) {
        return this.parantIndex(index) >= 0;
    }
    printMinHeap() {
        if (this.heap.length !== 0) {
            let list = ``;
            for (let i = 0; i < this.heap.length; i++) {
                list += `${this.heap[i]} `;
            }
            console.log('heap List.....');
            console.log(list);
        }
    }
}

// const he = new MinHeap()

// he.add(23)
// he.add(2)
// he.add(3)
// he.add(33)
// he.add(22)
// he.add(20)
// he.add(1)
// he.printMinHeap()
// he.remove();
// console.log(`...........`)
// he.printMinHeap()
function heapSort(arr){
    const heap=new MaxHeap();
    let sortedArr=[]
    for(let i=0;i<arr.length;i++){
        heap.add(arr[i]);
    }
    for(let i=0;i<arr.length;i++){
        sortedArr.push(heap.remove());
    }
    return sortedArr.reverse();
}
console.log(heapSort([213,5,7,8,54,8]))