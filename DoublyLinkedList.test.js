const DoublyLinkedList = require("./DoublyLinkedList")

describe('#constructor', () => {
    test('creating doubly linked list', () => {
        const myList = new DoublyLinkedList(1)

        expect(myList.head.value).toBe(1)
        expect(myList.tail.value).toBe(1)
        expect(myList.head.prev).toBeNull()
        expect(myList.tail.next).toBeNull()
        expect(myList.length).toBe(1)
    })
  })