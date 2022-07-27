const LinkedList = require('./LinkedList')

describe('#constructor', () => {
  test('creates a new linked list', () => {
    const myList = new LinkedList(1)

    expect(myList.head.value).toBe(1)
    expect(myList.tail.value).toBe(1)
    expect(myList.head.next).toBeNull()
    expect(myList.tail.next).toBeNull()
    expect(myList.length).toBe(1)
  })
})