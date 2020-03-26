export default class Stack<TItem> {
  max: number
  items: TItem[]

  constructor(max: number) {
    this.max = max
    this.items = []
  }

  /**
   * Push an item onto the stack.
   */
  push = (item: TItem) => {
    if (this.isFull())
      throw new Error('Stack is full')

    this.items.push(item)
  }

  /**
   * Pop the top item from the stack.
   */
  pop = (): TItem => {
    if (this.isEmpty())
      throw new Error('Stack is empty')

    return this.items.pop()
  }

  top = (): TItem => {
    if (this.isEmpty())
      throw new Error('Stack is empty')

    return this.items[this.items.length-1]
  }

  /**
   * Check whether is stack full.
   */
  isFull = (): boolean => {
    return this.items.length === this.max
  }

  /**
   * Check whether is stack empty.
   */
  isEmpty = (): boolean => {
    return this.items.length === 0
  }
}
