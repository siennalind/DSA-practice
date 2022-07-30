class DLLNode {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new DLLNode(value)
        this.head = newNode
        this.tail = newNode
        if (value === undefined) {
            this.length = 0
        } else {
            this.length = 1
        }
    }

    // Add node to the end of the list
    push(value) {
        const newNode = new DLLNode(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
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