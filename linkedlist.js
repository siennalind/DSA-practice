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

    // A method to remove a node from the end of the linked list.
    // Edge cases: (1) There are no nodes, (2) There is only one node
    pop () {
        // Addressing edge case (1) no nodes by returning undefined is
        // the head is pointing at nothing as there's no nodes if so
        if (!this.head) return undefined
        // If there's two or more nodes this code runs
        let temp = this.head
        let pre = this.head

        // Temp moves over one space each loop and is followed by pre in the
        // next iteration. Once temp.next is no longer true it no longer moves
        // and pre will be at the node previous.
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        // Tail is then set to pre which is at the second last node and the
        // next node for tail is set to null. Length of the linked list is then
        // decremeneted by 1
        this.tail = pre
        this.tail.next = null
        this.length--
        // If there's only one node in the list the head and tail are both set
        // to null
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        // Temp, the item that is popped off, is returned
        return temp
        }

    // Method to add an element to the beginning of the linked list
    // Returns the linkedlist with the new node added at the start
    // Edge cases are (1) there are no nodes
    unshift (value) {
        // Creates the node to add to the start of the linked list
        const newNode = new Node(value)
        // Handle edge case (1) of there being no nodes by setting 
        // both the head and tail to point at the new node
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } 
        // If there are nodes in the linked list this code runs
        // It sets the next value of the new node to point at the
        // node the head is currently pointing at, then setting the
        // head to point at the new node being added
        else {
            newNode.next = this.head
            this.head = newNode
        }
        // for both cases the length is then incremented by one and
        // the linked list is returned with the new node added
        this.length++
        return this
        }

        // Method to remove the first node of the linkedlist
        // Returns the linkedlist after the node is removed
        // Edge cases are (1) There are no nodes, (2) There is only one node
        shift () {
            // Returns undefined is there are no nodes in the list
            if (!this.head) {
                return undefined }
            // If there is only one node both head & tail are set to null
            // and undefined is returned
            else if (this.length === 1) {
                this.head = null
                this.tail = this.head
                this.length--
                return undefined
                }
            // If it's not an edge case this code runs. The head is set to
            // point at the next node.
            else {
                this.head = this.head.next
            }
            // This code always runs. It decrements the length by 1 and 
            // returns the linked list after the node is removed
            this.length--
            return this
        }

        // A method to get a node from a specific index in a linked list
        // Returns the node at the specified index
        // Edge cases are (1) there are no nodes
        get (index) {
            // Checks for edge case (1), code inside the if statement runs if
            // the list is empty and returns undefined.
            if (this.length === 0) {
                return undefined
            } 
            // If there are nodes in the list this code will run instead
            else {
                // Declaring iteration variable & temp variable that will be
                // used to find the node at the specified index. Temp variable
                // is set equal to head.
                let i = 0
                let temp = this.head

                // While i is smaller than the index, keep iterating
                while (i < index) {
                    // Temp moves to the next node
                    temp = temp.next
                    // i is incremented by 1 for each loop
                    i++
                }

                // Once the loop is done return the node that temp
                // is pointing at
                return temp
            }
        }

        // Method to change the value of the node at the specified index
        // Edge cases (1) There are no nodes, (2) index doesn't exist
        set (index, value) {
            // Checks if the index exists, returns undefined if it doesn't
            if (index < 0 || index > this.length) { 
                return undefined
            }
            // If the index exists this code runs instead
            else {
                // Declaring a temp variable to get the node at the 
                // specified index by using the get method on it
                let temp
                temp = this.get(index)
                // Changes the value at that node to the value that was
                // passed into the set method and returns the changed node
                temp.value = value
                return temp
            }
        }
}

    // insert

    // remove

    // reverse