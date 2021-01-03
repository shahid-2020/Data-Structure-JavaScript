/**
 * Heap
 * Two types of Heap
 * >Min Heap
 * >Max Heap
 * 
 * left child i*2
 * right child i*2+1
 * parent i/2
 */

class MinHeap {

    constructor () {
        this.heap = [null];
    }

    isEmpty() {
        return (this.heap.length === 1);
    }

    add(num) {
        this.heap.push(num);

        let childIndex = this.heap.length - 1;
        let parentIndex = Math.floor(childIndex / 2);
        while (childIndex > 1) {
            if (this.heap[parentIndex] > this.heap[childIndex]) {
                [this.heap[childIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[childIndex]];
                childIndex = parentIndex;
                parentIndex = Math.floor(childIndex / 2);
            } else {
                return;
            }
        }
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error('Empty Heap');
        }
        let smallest = this.heap[1];
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.pop();

        let Index = 1;
        let minIndex = Index;
        let left = Index * 2;
        let right = Index * 2 + 1;

        while (left < this.heap.length) {
            if (this.heap[left] < this.heap[right]) {
                minIndex = left;
            }

            if (this.heap[right] < this.heap[left]) {
                minIndex = right;
            }

            if (minIndex === Index) {
                break;
            }
            [this.heap[Index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[Index]];
            Index = minIndex;
            left = Index * 2;
            right = Index * 2 + 1;
        }

        return smallest;
    }

    sort() {
        const arr = new Array();
        while (!this.isEmpty()) {
            arr.push(this.remove());
        }
        return arr;
    }
}

let h = new MinHeap();
h.add(5);
h.add(4);
h.add(3);
h.add(2);
h.add(1);
console.log(h.sort());
