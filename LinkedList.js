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

    // push
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