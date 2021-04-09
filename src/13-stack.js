/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = [];
    this.top = 0;
  }

  push(element) {
    this.array[this.top] = element;
    this.top += 1;
  }

  pop() {
    if (this.array.length) {
      const deletedElem = this.array[this.top - 1];
      this.array.length = 0 || this.top - 1;
      this.top -= 1;
      return deletedElem;
    }
    return undefined;
  }

  peek() {
    return this.array[this.top - 1];
  }
}

module.exports = Stack;
