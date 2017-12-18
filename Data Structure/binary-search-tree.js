/*
* Binary Search Tree
*/
(() => {
  // define the binary tree function
  var BinaryTree = function() {
    this.root = null
  };
  
  // define binary node
  var BinaryNode = function(val) {
    this.value = val;
    
    // set the left and right node
    this.leftNode = null;
    this.rightNode = null;
  };
  
  // insert method
  BinaryTree.prototype.insert = function(val) {
    // create a new node with passed value
    var node = new BinaryNode(val);
    
    // if there is no root, make this node as root
    if(this.root === null) {
      this.root = node;
    } else { // otherwise call insertNode
      this.insertNode(node, this.root);
    }
  };
  
  //insert node method
  BinaryTree.prototype.insertNode = function(node, subTree) {
    // if there is no value in the subtree, insert the node here
    if(!subTree) {
      subTree = node;
    } else if(node.value < subTree.value) {
      subTree.leftNode = this.insertNode(node, subTree.leftNode);
    } else if(node.value > subTree.value) {
      subTree.rightNode = this.insertNode(node, subTree.rightNode);
    }
      
    // return the subTree
    return subTree;
  };
  
  // method to locate a value
  BinaryTree.prototype.locate = function(findValue) {
    // initialize the variable
    let nodeValue;
    
    // if the value equals to root node then returns the value
    if(this.root.value === findValue) {
      console.log(`Node: ${findValue} found in this BST :: RootNode`);
    } else { // otherwise call locate node method
      nodeValue = this.locateNode(findValue, this.root);
      
      // console the message based on findValue
      if(nodeValue != undefined)
        console.log(`Node: ${findValue} found in this BST`);
      else
        console.log(`Node: ${findValue} doesn't exist in this BST`);
    }
  };
  
  // method to locate a node
  BinaryTree.prototype.locateNode = function(findValue, subTree) {
    // return null if no node present
    if(!subTree) {
       return null;
    } else {
      // if the value search as root
      if(findValue === subTree.value) {
        return subTree;
      } else if(subTree.leftNode != null && findValue < subTree.value) {
        return this.locateNode(findValue, subTree.leftNode);
      } else if(subTree.rightNode != null && findValue > subTree.value) {
        return this.locateNode(findValue, subTree.rightNode);
      }
    };
  };
  
  // method to delete a node
  BinaryTree.prototype.delete = function(value, subTree) {
    // find node to remove and its parent
    var node = null,
        parent = null,
        dir = '';
    
    // set the sub tree
    subTree = subTree || this.root;
    
    while(subTree) {
      // matched found
      if(value === subTree.value) {
        node = subTree;
        break;
      } else if(value < subTree.value) {
        parent = subTree;
        subTree = subTree.leftNode;
        dir = 'leftNode';
      } else if(value > subTree.value) {
        parent = subTree;
        subTree = subTree.rightNode;
        dir = 'rightNode';
      }
    }
    
    // if no node found, return null
    if(!node) {
      console.log(`Node: ${value} doesn't exist in this BST`);
      return null;
    }
    
    // two child
    if(node.leftNode && node.rightNode) {
      // find the immidiate successor from right node
      var minNode = node.rightNode,
          minNodeValue;
      
      // look till you reach the bottom of the tree in left tree
      while(minNode) {
        if(minNode.leftNode) {
          minNode = minNode.leftNode;
        } else {
          break; // we are at the bottom of the tree
        }
      }
      
      minNodeValue = minNode.value;
      
      // delete the minNode
      this.delete(minNode.value);
      
      // replace the node value with min value
      node.value = minNodeValue;

    } else if(!node.leftNode && !node.rightNode) { // no children
      parent[dir] = null;
    } else { // one child
      parent[dir] = node.leftNode ? node.leftNode : node.rightNode;      
    }    
    
    // release the min Node
    node = null;
    
    return subTree;
  };
  
  // Breadth First search
  BinaryTree.prototype.breadthFirstSeach = function(val) {
    // if there is no root, then return false
    if(!this.root) return;
    
    // take a queue and current value to track
    var queue = [this.root],
        current = null,
        level = 0; // level will indicate which level the value is present in BST starting 1
    
    while(queue[0]) {
      // remove the first item from queue and assign it to current
      current = queue.shift();
      
      // if match found
      if(val === current.value) {
        // if match found, then empty the queue and return the value
        queue = [];
        console.log(`${val} found in this BST at level: ${level}`);
        return [current, level];
      } else {
        // if the node has a left child
        if(current.leftNode) {
          queue.push(current.leftNode);
        }
        // if the node has a right child
        if(current.rightNode) {
          queue.push(current.rightNode)
        }
        
        // increment the level is there is a left /right child
        if(current.leftNode || current.rightNode)
          level++;
      }
    }
    
    console.log(`${val} doesn't exist in this BST`);
    return null;
  };
  
  // print binary tree;
  BinaryTree.prototype.printTree = function(subTree) {
    // if there is no sub tree, return the value
    if(!subTree) return;
    
    // call left and right node to print the values
    this.printTree(subTree.leftNode);
    console.log(subTree.value);
    this.printTree(subTree.rightNode);
  }
  
  const tree = new BinaryTree();
  tree.insert(20);
  tree.insert(10);
  tree.insert(25);
  tree.insert(5);
  tree.insert(15);
  tree.insert(8);
  tree.insert(16);
  
  // locate any node in BST
  tree.locate(5);
  
  // remove node from BST
  //tree.delete(10);
  
  // search using breadth first approach
  tree.breadthFirstSeach(15);

  // print the results
  tree.printTree(tree.root);
  
})();
