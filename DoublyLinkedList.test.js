const DoublyLinkedList = require('./DoublyLinkedList')

const doublyLinkedList = new DoublyLinkedList()

describe("Doubly Linked List", () => {
    const doublyLinkedList = new DoublyLinkedList()

    afterEach(() => {
        jest.restoreAllMocks()
    })

    test("checks push exists & is a function", () => {
        expect(doublyLinkedList.push()).toBeDefined()
        expect(typeof doublyLinkedList.push).toBe("function")
    })
})


// pop

// unshift

// shift

// get

// set

// insert

// remove