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

    // Method to add a value to the end of the list
    // Returns the list with the new node added
    push(value) {
        // Node to be added
        const newNode = new Node(value)

        // This code runs if the list is empty
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } 
        else {
            let temp
            temp = this.tail
            this.tail = newNode
            temp.next = newNode
            newNode.prev = temp
        }
        // This code always runs
        this.length++
        return this
    }
}

    // pop

    // unshift

    // shift

    // get

    // set

    // insert
    
    // remove

module.exports = DoublyLinkedList;