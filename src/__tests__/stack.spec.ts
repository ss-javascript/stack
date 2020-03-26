import Stack from '../stack'

describe('Given a Stack instance', () => {
  describe('#push()', () => {
    it('Should push the item', () => {
      const stack = new Stack<number>(1)
      stack.push(5)
      expect(stack.isFull()).toBeTruthy()
    })

    it('Should throw an error if the stack is full', () => {
      const stack = new Stack<number>(0)
      const push = () => stack.push(1)
      expect(push).toThrowError()
    })
  })

  describe('#pop()', () => {
    it('Should remove the item', () => {
      const stack = new Stack<number>(1)
      stack.push(1)
      expect(stack.pop()).toEqual(1)
    })

    it('Should throw an error if the stack is empty', () => {
      const stack = new Stack<number>(0)
      expect(stack.pop).toThrowError()
    })
  })

  it('#isEmpty()', () => {
    const stack = new Stack<number>(1)
    stack.push(1)
    stack.pop()
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('#isFull()', () => {
    const stack = new Stack<number>(1)
    stack.push(1)
    expect(stack.isFull()).toBeTruthy()
  })

  it('#top()', () => {
    const stack = new Stack<number>(1)
    stack.push(1)
    expect(stack.top()).toEqual(1)
  })
})
