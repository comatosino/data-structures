export default class Queue {
    constructor() {
        this.items = [];
    }

    static type() {
        return 'Queue';
    }

    // methods

    // returns number of elements in queue
    get size() {
        return this.items.length;
    }

    // Inserts the specified element into this queue
    // returns queue size
    add(element) {
        return this.items.push(element);
    }

    // Retrieves, but does not remove, the head of this queue
    // returns null if this queue is empty.
    peek() {
        if (this.items.length) return this.items[0];
        return null;
    }

    // retrieve and remove head of queue
    remove() {
        return this.items.shift()
    }
}