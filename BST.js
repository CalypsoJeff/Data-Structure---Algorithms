class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        return this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        return this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return root.value;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // DEPTH FIRST SEARCH

  // PreOrder

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // InOrder
  Inorder(root) {
    if (root) {
      this.Inorder(root.left);
      console.log(root.value);
      this.Inorder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // BREADTH FIRST SEARCH

  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    } else {
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        }
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
    }
    return root;
  }

  closest(value){
    if(!this.root) return false 
    let curr=this.root;
    let closest=this.root
    while(curr){
        if(Math.abs(value-curr.value)<Math.abs(value-closest.value)){
            closest=curr
        }

        if(value<curr.value){
            curr=curr.left;
        }else if(value>curr.value){
            curr= curr.right;
        }else{
            return curr
        }
    }
    return closest.value
  }

  secondMinimum(){

  }

}

const BinarySearchTree = new BST();
console.log(BinarySearchTree.isEmpty());
BinarySearchTree.insert(10);
BinarySearchTree.insert(8);
BinarySearchTree.insert(12);
BinarySearchTree.insert(7);
BinarySearchTree.insert(9);
BinarySearchTree.insert(11);

// console.log(BinarySearchTree.isEmpty());

// console.log(BinarySearchTree.search(BinarySearchTree.root,5));

// BinarySearchTree.preOrder(BinarySearchTree.root)
// BinarySearchTree.Inorder(BinarySearchTree.root)
// BinarySearchTree.postOrder(BinarySearchTree.root)
// BinarySearchTree.levelOrder()

// console.log(BinarySearchTree.min(BinarySearchTree.root));
// console.log(BinarySearchTree.max(BinarySearchTree.root));

// BinarySearchTree.delete(6);
// BinarySearchTree.delete(5);

// BinarySearchTree.levelOrder()

console.log(BinarySearchTree.closest(7));