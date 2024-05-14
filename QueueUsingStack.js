class Queue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(item) {
      // To enqueue an item, we push it into stack1
      this.stack1.push(item);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        // If stack2 is empty, we need to transfer elements from stack1 to stack2
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      // Pop from stack2 to dequeue the item
      return this.stack2.pop();
    }
  
    peek() {
      if (this.stack2.length === 0) {
        // If stack2 is empty, the front element is at the bottom of stack1
        return this.stack1[0];
      } else {
        // Otherwise, it's the top element of stack2
        return this.stack2[this.stack2.length - 1];
      }
    }
  
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  }
  
  
//   const queue = new Queue();
//   queue.enqueue(1);
//   queue.enqueue(2);
//   queue.enqueue(3);
  
//   console.log("Front element:", queue.front());  

//   console.log("Dequeued element:", queue.dequeue());  
  
//   console.log("Is queue empty?", queue.isEmpty());  
  
//   console.log("Dequeued element:", queue.dequeue());  
//   console.log("Dequeued element:", queue.dequeue());  
  
//   console.log("Is queue empty?", queue.isEmpty());




class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(109);
queue.enqueue(209);
queue.enqueue(309);
queue.enqueue(409);
queue.enqueue(509);
console.log(queue.size());
queue.print();
console.log(queue.isFull());
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(609);
queue.print(); 