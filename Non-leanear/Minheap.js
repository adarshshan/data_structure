class MinHeap {
    constructor() {
        this.heap = [];
    }
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
    remove() {
        if (this.heap.length === 0) return null;
        const item=this.heap[0];
        this.heap[0]=this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
    heapifyDown(){
        let index=0;
        while(this.hasLeftChild(index)){
            let smallChild=this.getLeftChild(index);
            if(this.hasRightChild(index)&&this.rightChildValue(index)<this.leftChildValue(index)){
                smallChild=this.getRightChild(index);
            }
            if(this.heap[index]<this.heap[smallChild])break;
            else this.swap(index,smallChild);
            index=smallChild;
        }
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParant(index) && this.heap[this.getParant(index)] > this.heap[index]) {
            this.swap(this.getParant(index), index);
            index = this.getParant(index);
        }
    }
    swap(parantIndex, childIndex) {
        let temp = this.heap[parantIndex];
        this.heap[parantIndex] = this.heap[childIndex];
        this.heap[childIndex] = temp;
    }
    getLeftChild(index) {
        return (2 * index) + 1;
    }
    getRightChild(index) {
        return (2 * index) + 2;
    }
    getParant(index) {
        return Math.floor((index - 1) / 2);
    }
    hasLeftChild(index) {
        return this.getLeftChild(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChild(index) < this.heap.length;
    }
    hasParant(index) {
        return this.getParant(index) >= 0;
    }
    leftChildValue(index) {
        return this.heap[this.getLeftChild(index)];
    }
    rightChildValue(index) {
        return this.heap[this.getRightChild(index)];
    }
    parantValue(index) {
        return this.heap[this.getParant(index)];
    }
    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }
    print(){
        if(this.heap.length===0)return null;
        let list=``;
        for(let i=0;i<this.heap.length;i++){
            list+=`${this.heap[i]} `;
        }
        console.log(list);
    }
}

const heap=new MinHeap()
heap.add(22)
heap.add(18)
heap.add(26)
heap.add(34)
heap.add(40)
heap.add(45)
heap.add(8)
heap.add(10)
heap.add(15)
heap.add(20)
heap.add(25)
heap.print();
console.log(heap.peek())
console.log(`Deleted ${heap.remove()}`);
console.log(`Deleted ${heap.remove()}`);
heap.print()

//HEAP SORT
// function heapSort(arr){
//     const he=new MinHeap()
//     let sortedArr=[];
//     for(let i=0;i<arr.length;i++){
//         he.add(arr[i]);
//     }
//     for(let i=0;i<arr.length;i++){
//         sortedArr.push(he.remove());
//     }
//     return sortedArr;
// }
// console.log(heapSort([3,6,33,234,22,2,1,.5]))


