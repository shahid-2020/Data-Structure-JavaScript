'use strict';

class Node {
    next = null;
    constructor (data) {
        this.data = data;
    }
}

class Stack {
    head = null;
    tail = null;
    length = 0;

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

        if (this.length === 0) {
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

const queue = new Stack();
try {
    console.log(queue.isEmpty());
    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.push(4);
    queue.push(5);
    console.log(queue.isEmpty());
    console.log(queue.toArray());
    queue.pop();
    console.log(queue.toArray());
    queue.pop();
    console.log(queue.toArray());
    queue.pop();
    console.log(queue.toArray());
    queue.pop();
    console.log(queue.toArray());
    queue.pop();
    console.log(queue.toArray());
    console.log(queue.size());
} catch (err) {
    console.log(err);
}
