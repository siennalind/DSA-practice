// Class for creating a new node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Class for creating a linked list and methods
class LinkedList {
    // This creates a new linked list, sets the tail and head to point to
    // the new node and sets the length to 1
    constructor (value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    // A method to add a node to end of linked list
    push (value) {
        // This creates the node to be added
        const newNode = new Node(value)
        // Checks if there are nodes in the list already, if there's not this
        // will set head and tail to point to the new node
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        // This code will run if there's already nodes in the list, it sets the
        // new node to the end of the list and then sets the tail to point to
        // the new item at the end.
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        // Adds 1 to the length of the linked list and returns the linked list
        // with the new item added
        this.length++
        return this
    }
}