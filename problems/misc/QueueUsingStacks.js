class QueueUsingStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (this.isEmpty()) return;
    if (!this.stack2.length)
      while (this.stack1.length) this.stack2.push(this.stack1.pop());
    return this.stack2.pop();
  }
  isEmpty() {
    return !this.stack1.length && !this.stack2.length;
  }
}
