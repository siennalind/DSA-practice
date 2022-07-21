const LinkedList = require('./linkedlist')

describe("Linked List", () => {
  const linkedList = new LinkedList()

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test("checks push exists & is a function", () => {
    expect(linkedList.push()).toBeDefined()
    expect(typeof linkedList.push).toBe("function")
  })
})

// pop

// unshift

// shift

// get

// set

// insert

// remove

// reverse