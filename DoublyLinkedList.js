class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
}

    // push
    // pop
    // unshift
    // shift
    // get
    // set
    // insert
    // remove

module.exports = DoublyLinkedList;