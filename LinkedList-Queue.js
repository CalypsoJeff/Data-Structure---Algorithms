const LinkedList = require("./LinkedListWithTail")

class LinkedListQueue{
    constructor(){
        this.list= new LinkedList()
    }
    enqueue(value){
        this.list.append(value)
    }

    dequeue(value){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value

    }
    isEmpty(){
        return this.list.isEmpty()

    }
    getSize(){
        return this.list.getSize()

    }
    print(){
        return this.list.print()
    }
}

const queue = new LinkedListQueue();

console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.getSize());
queue.print()
// queue.dequeue()
// queue.print()
console.log(queue.peek());