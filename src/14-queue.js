const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    // eslint-disable-next-line no-new
    new ListNode(null);
  }

  get size() {
    const oldCount = 0;
    function recurs(elem, newCount) {
      let count = newCount;
      if (!elem.value) return count;
      if (elem.value && !elem.next) {
        count += 1;
        return count;
      }
      // eslint-disable-next-line no-return-assign
      return recurs(elem.next, count += 1);
    }
    const newRecurs = recurs.bind(this);
    const result = newRecurs(this, oldCount);
    return result;
  }

  enqueue(element) {
    function req(oldlist, elem) {
      const list = oldlist;
      if (list.value === undefined) {
        list.value = elem;
        list.next = null;
        return '';
      }

      if (list.next === null) {
        list.next = new ListNode(elem);
        return '';
      }
      return req(list.next, elem);
    }
    req.apply(this, [this, element]);
  }

  dequeue() {
    const deleteEl = this.value;
    if (this.next) {
      this.value = this.next.value;
      this.next = this.next.next;
    } else {
      delete this.value;
      this.next = null;
    }

    return deleteEl;
  }
}

module.exports = Queue;
