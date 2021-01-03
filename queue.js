'use strict';

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
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

    enqueue(data) {
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

    dequeue() {

        if (this.isEmpty()) {
            throw new Error('Empty Queue');
        }
        this.length--;
        this.head = this.head.next;
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

Queue Testing

*/

const queue = new Queue();
try {
    console.log(queue.isEmpty());
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    console.log(queue.isEmpty());
    console.log(queue.toArray());
    queue.dequeue();
    console.log(queue.toArray());
    queue.dequeue();
    console.log(queue.toArray());
    queue.dequeue();
    console.log(queue.toArray());
    queue.dequeue();
    console.log(queue.toArray());
    queue.dequeue();
    console.log(queue.toArray());
    console.log(queue.size());
} catch (err) {
    console.log(err);
}
