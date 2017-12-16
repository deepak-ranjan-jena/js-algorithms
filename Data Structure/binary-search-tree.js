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
  
  // print binary tree;
  BinaryTree.prototype.printTree = function(subTree) {
    // if there is no sub tree, return the value
    if(!subTree) return;
    
    console.log(subTree.value);
    
    // call left and right node to print the values
    this.printTree(subTree.leftNode);
    this.printTree(subTree.rightNode);
  }
  
  const tree = new BinaryTree();
  tree.insert(20);
  tree.insert(10);
  tree.insert(25);
  tree.insert(5);
  tree.insert(8);
  tree.insert(15);
  tree.insert(16);

  
  
  // print the results
  tree.printTree(tree.root);
  
  // locate any node in BST
  tree.locate(20);
  
})();
