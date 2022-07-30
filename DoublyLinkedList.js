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

    // remove node from end of list
    // edge case (1) empty list
    // edge case (2) only one node
    pop() {
        if (this.length === 0) return undefined
        
        let temp = this.tail
        if (this.length === 1) {
            this.tail = null
            this.head = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp
    }
}

    // unshift
    // shift
    // get
    // set
    // insert
    // remove

module.exports = DoublyLinkedList;