'use strict';

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
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

    add(data) {
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

    remove(data) {

        if (!data) {
            throw new Error('Data Missing');
        }

        if (this.isEmpty()) {
            throw new Error('Empty Linked List');
        }

        let prev = null;
        let curr = this.head;

        while (curr) {

            if (!prev && curr.data === data) {
                this.head = this.head.next;
                this.length--;
                return true;
            }

            if (curr.data === data) {
                prev.next = curr.next;
                this.length--;
                return true;
            }

            prev = curr;
            curr = curr.next;

        }

        return false;
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

Linked List Testing

*/

const list = new LinkedList();
try {
    console.log(list.isEmpty());
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    console.log(list.isEmpty());
    console.log(list.toArray());
    list.remove(1);
    console.log(list.toArray());
    list.remove(4);
    console.log(list.toArray());
    list.remove(5);
    console.log(list.toArray());
    console.log(list.size());
} catch (err) {
    console.log(err);
}
