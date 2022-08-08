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

    // adds a node at the start of the list
    // edge case (1) there are no items
    unshift(value) {
        const newNode = new DLLNode(value)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    // remove node at the beginning of the list
    // edge case (1) there are no nodes
    // edge case (2) there's only one node
    shift() {
        if (this.length === 0) return false

        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp
    }

    // gets value of a node at an index
    // edge case (1) index doesn't exist
    get(index) {
        if (index <= 0 || index >= this.length) {
            return undefined
        }

        let temp
        if (index < this.length/2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp
    }

    // changes value of node at the specified node
    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    // insert node at the specified index
    // edge case (1) insertion at beginning of list
    // edge case (2) insertion at end of list
    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return false

        const newNode = new DLLNode(value)
        let temp, after

        temp = this.get(index - 1)
        after = temp.next

        temp.next = newNode
        after.prev = newNode
        newNode.prev = temp
        newNode.next = after

        this.length++
        return true
    }

    // removes a node at the specified index
    // edge case (1) at the end of the list
    // edge case (2) at the beginning of the list
    // edge case (3) index doesn't exist
    remove (index) {
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        if (index < 0 || index > this.length) return false

        const temp = this.get(index)
        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null

        this.length--
        return temp
    }
}