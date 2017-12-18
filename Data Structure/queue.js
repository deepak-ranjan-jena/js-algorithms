/*
* Data Structure - Queue
*/
(() => {
  // Queue object
  var Queue = function() {
    this.tail = -1;
    this._queue = [];
  };
  
  Queue.prototype.enqueue = function(val) {
    this.tail++;
    this._queue[this.tail] = val;
  };
  
  Queue.prototype.dequeue = function() {
    this.tail--;
    this._queue.shift();
    
    return this._queue;
  };
  
  var queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(15);
  queue.dequeue(10);
  
  console.log(queue); 
  
})();
