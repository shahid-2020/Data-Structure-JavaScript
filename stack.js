'use strict';

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return (this.length === 0);
    }

    push(data) {
        const newNode = new Node(data);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    pop() {

        if (this.isEmpty()) {
            throw new Error('Empty Stack');
        }

        this.length--;
        let prev = null;
        let curr = this.head;

        if (!curr.next) {
            this.head = null;
            return true;
        }

        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }

        prev.next = null;

        return true;
    }


    toArray() {

        let curr = this.head;
        let array = [];

        while (curr) {
            array.push(curr.data);
            curr = curr.next;
        }

        return array;
    }

}

/*

Stack Testing

*/

const stack = new Stack();
try {
    console.log(stack.isEmpty());
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    console.log(stack.isEmpty());
    console.log(stack.toArray());
    stack.pop();
    console.log(stack.toArray());
    stack.pop();
    console.log(stack.toArray());
    stack.pop();
    console.log(stack.toArray());
    stack.pop();
    console.log(stack.toArray());
    stack.pop();
    console.log(stack.toArray());
    console.log(stack.size());
} catch (err) {
    console.log(err);
}
