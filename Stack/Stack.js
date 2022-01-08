export default class Stack {
    constructor() {
        this.items = [];
    }

    static type() {
        return 'Stack';
    }

    get size() {
        return this.items.length;
    }

    // methods

    // Tests if this stack is empty.
    empty() {
        return this.items.length === 0;
    }

    // Looks at the object at the top of this stack without removing it from the stack.
    peek() {
       if (this.items.length) return this.items[this.items.length - 1];
       return null;
    }

    // Removes the last element and returns that element.
    pop(element) {
        return this.items.pop(element);
    }

    // Pushes an item onto the top of this stack
    // returns new size
    push(element) {
        return this.items.push(element);
    }
}