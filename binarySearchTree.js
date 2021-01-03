class Node {
    constructor (data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class Tree {
    constructor () {
        this.root = null;
    }

    isEmpty() {
        return (this.root === null);
    }

    _addElement(root, ele) {

        if (!root) {
            return new Node(ele);
        } else if (ele < root.data) {
            root.leftChild = this._addElement(root.leftChild, ele);
        } else {
            root.rightChild = this._addElement(root.rightChild, ele);
        }

        return root;
    }

    add(ele) {
        this.root = this._addElement(this.root, ele);
    }

    _removeElement(root, ele) {

        if (!root) {
            throw new Error('Empty Binary Search Tree');
        }

        if (root.data === ele) {

            if (!root.leftChild && !root.rightChild) {
                return null;
            } else if (root.leftChild && !root.rightChild) {
                return root.leftChild;
            } else if (!root.leftChild && root.rightChild) {
                return root.rightChild;
            } else {
                let temp = root.rightChild;

                while (temp.leftChild) {
                    temp = temp.leftChild;
                }

                root.data = temp.data;
                root.rightChild = this._removeElement(root.rightChild, temp.data);
                return root;
            }

        } else if (root.data > ele) {
            root.leftChild = this._removeElement(root.leftChild, ele);
            return root;
        } else {
            root.rightChild = this._removeElement(root.rightChild, ele);
            return root;
        }
    }

    remove(ele) {
        this.root = this._removeElement(this.root, ele);
    }

    inOrder() {
        function traverse(node, arr) {
            (node.leftChild && traverse(node.leftChild, arr));
            arr.push(node.data);
            (node.rightChild && traverse(node.rightChild, arr));
        }

        const arr = new Array();
        traverse(this.root, arr);
        return arr;
    }

    preOrder() {
        function traverse(node, arr) {
            arr.push(node.data);
            (node.leftChild && traverse(node.leftChild, arr));
            (node.rightChild && traverse(node.rightChild, arr));
        }
        const arr = new Array();
        traverse(this.root, arr);
        return arr;
    }

    postOrder() {

        function traverse(node, arr) {
            (node.leftChild && traverse(node.leftChild, arr));
            (node.rightChild && traverse(node.rightChild, arr));
            arr.push(node.data);
        }
        const arr = new Array();
        traverse(this.root, arr);
        return arr;
    }

    levelOrder() {
        const arr = new Array();
        const arrayQueue = new Array();

        if (this.root) {
            arrayQueue.push(this.root);

            while (arrayQueue.length > 0) {
                let node = arrayQueue.shift();
                arr.push(node.data);
                if (node.leftChild) {
                    arrayQueue.push(node.leftChild);
                }
                if (node.rightChild) {
                    arrayQueue.push(node.rightChild);
                }
            }
        }
        return arr;
    }


}

/**
 * Tree Testing
 */

const tree = new Tree();
tree.add(9);
tree.add(4);
tree.add(17);
tree.add(3);
tree.add(6);
tree.add(22);
tree.add(5);
tree.add(7);
tree.add(20);
tree.add(10);

console.log(`InOrder: ${tree.inOrder()}`);
console.log(`PreOrder: ${tree.preOrder()}`);
console.log(`PostOrder: ${tree.postOrder()}`);
console.log(`LevelOrder: ${tree.levelOrder()}`);
// bst.remove(10);