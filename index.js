class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++;
  }

  // insert last node

  insertLast (data) {
    let node = new Node(data);
    let current;

    // if empty make head
    if (!this.head) {
      this.head = node;
    } else {
      current =this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // insert at index
  insertAt(data, index) {
    // If index out of range
    if (index < 0 && index <= this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data)
      return;
    } else if (index === this.size-1) {
      this.insertLast(data)
    }

    const node =new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while(count < index) {
      previous = current; // Nodes before index
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
  }

  // Remove at index
  removeAt(index) {
    if(index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if(index === 0) {
      this.head = current.next;
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      }


      previous.next = current.next;
    }

    this.size--

  }

  // Clear list
  clearAll() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current.data)
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300)
ll.insertAt(500,3)

ll.printListData();
console.log('***********')
ll.clearAll()
ll.printListData();
