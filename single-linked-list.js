function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.numberOfValues++;
    
  } else {
  	this.tail.next = node;
    this.tail = node;
    this.numberOfValues++;
  }

};

SinglyLinkedList.prototype.remove = function(data) {
  var previous = this.head;
  var current = this.head;
  for (var i = 0, i < this.numberOfValues, i++){
  	if(current.data == data){
    	var temp = current.previous;
    	current = current.next;
      current.previous = temp;
			this.numberOfValues--;
      i = this.numberOfValues+1; //to break the for loop
    }else{
    	current = current.next;
    }
    if(i == this.numberOfValues){
    	console.log("node not found")
    }
  }
  
};

SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
  var node = new Node(data);
  for (var i = 0, i < toNodeData, i++){
  	current = current.next;
  }
  node.next = current.next;
  current.next = node;
};

SinglyLinkedList.prototype.length = function() {
  console.log(this.numberOfValues);
};

SinglyLinkedList.prototype.print = function() {
	var current = this.head;
  for (var i = 0, i < this.numberOfValues, i++){
  	if(current.next != null){
  		console.log(current.data + " ");
    }else{
    	console.log(current.data);
    }
  }
};


/*
singlyLinkedList.print(); // => ''
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
singlyLinkedList.print(); // => 1 2 3 4
console.log('length is 4:', singlyLinkedList.length()); // => 4
singlyLinkedList.remove(3); // remove value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(9); // remove non existing value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(1); // remove head
singlyLinkedList.print(); // => 2 4
singlyLinkedList.remove(4); // remove tail
singlyLinkedList.print(); // => 2
console.log('length is 1:', singlyLinkedList.length()); // => 1
singlyLinkedList.add(6);
singlyLinkedList.print(); // => 2 6
singlyLinkedList.insertAfter(3, 2);
singlyLinkedList.print(); // => 2 3 6
singlyLinkedList.insertAfter(4, 3);
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 4);
singlyLinkedList.insertAfter(7, 6); // insertAfter the tail
singlyLinkedList.print(); // => 2 3 4 5 6 7
singlyLinkedList.add(8); // add node with normal method
singlyLinkedList.print(); // => 2 3 4 5 6 7 8
console.log('length is 7:', singlyLinkedList.length()); // => 7
singlyLinkedList.print(); // => 12 13 14 15 16 17 18
console.log('length is 7:', singlyLinkedList.length()); // => 7
*/


module.exports = {
  SinglyLinkedList : SinglyLinkedList,
  Node : Node
};
