/*
* Data Structure - Stack
*/
(() => {
    
    var Stack = function() {
        this.top     = -1;
        this._stack  = [];
    };
    
    Stack.prototype.push = function(node) {
        this.top++;
        this._stack[this.top] = node;
    };
    
    Stack.prototype.pop = function() {
        this._stack.splice(this.top, 1);
        this.top--;
    };
    
    var stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.pop();
    
    console.log(stack);
    
})();
