// Creates a new node of value and sets it pointing at null
class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    // Creates a new linked list using the constructor for a node, sets both head and
    // tail pointing at the node and sets the initial length to 1.
    constructor (value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    // Method to add a node to the end of the list
    // Returns the list with the new node added
    push (value) {
        // Node to be added
        const newNode = new Node(value)

        // This code runs if the list was empty
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } 
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        // This code always runs
        this.length++
        return this
    }

    // pop

    // unshift

    // shift

    // get

    // set

    // insert
    
    // remove

    // reverse
}

module.exports = LinkedList;