class Stack{
    constructor(){
        this.queue={};
        this.length=0;
    }
    push(item){
        this.queue[this.length]=item;
        this.length++;
    }
    pop(){
        if(this.length===0){
            return null;
        }
        const poppedItem=this.queue[this.length-1];
        delete this.queue[this.length-1];
        this.length--;
        return poppedItem
    }
    peek(){
        if(this.length===0){
            return null;
        }
        return this.queue[this.length-1]
    }
    empty() {
        return this.length === 0;
      }
    
}
const stack = new Stack();
console.log("Is stack empty?", stack.empty());

stack.push(50);
stack.push(100);
stack.push(150)
console.log("Top element:", stack.peek()); 
console.log("Popped element:", stack.pop()); 

console.log("Is stack empty?", stack.empty()); 

console.log("Popped element:", stack.pop()); 
console.log("Popped element:", stack.pop());
console.log("Is stack empty?", stack.empty());