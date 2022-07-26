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

    // Method to remove a node at the end of the list
    pop() {
        if (this.length === 0) return undefined

        temp = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null

        this.length--
        if (this.length === 0) return undefined
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } 
        else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    // Remove node at the beginning of list
    shift() {
        if (this.length === 0) return false
        if (this.length === 1) {
            this.length--
            return this.head
        }

        let temp
        temp = this.head
        this.head = temp.next
        temp.next = null
        this.head.prev = null
        
        this.length--
        return temp
    }
}

    // get

    // set

    // insert
    
    // remove

module.exports = DoublyLinkedList;