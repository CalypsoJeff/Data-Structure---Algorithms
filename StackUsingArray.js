class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element onto stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return top element of stack
    pop() {
      if (this.items.length === 0) {
        return "Underflow"; // or throw an exception if the stack is empty
      }
      return this.items.pop();
    }
  
    // View the top element of the stack
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  
    // Display the stack elements
    display() {
      console.log(this.items.toString());
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek()); // View the top element
  stack.display(); // Display all elements in the stack
  stack.pop(); // Remove the top element
  stack.display(); // Display elements after pop


  

// VALID PARENTHESIS


function validParenthesis(s){
  const stack=[]
  const map = {
    "(": ")",
    "[":"]",
    "{":"}"
  }

  for(let char of s){
    if(char in map){
      stack.push(char)
    }else{
      if(stack.length===0){
        return false
      }
      const top=stack.pop()
      if(char!==map[top]){
        return false
      }
    }
  }
  return stack.length===0
}

console.log(validParenthesis("()"));
console.log(validParenthesis("()[]{}"));
console.log(validParenthesis("([)]{}"));


