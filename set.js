class Set {

    constructor () {
        this.data = [];
    }

    isEmpty() {
        return (this.data.length === 0);
    }

    has(element) {
        return (this.data.indexOf(element) !== -1);
    }

    values() {
        return this.data;
    }

    add(element) {
        if (!this.has(element)) {
            this.data.push(element);
            return true;
        }
        return false;
    }

    remove(element) {
        if (this.isEmpty()) {
            throw new Error('Empty Set');
        }
        if (this.has(element)) {
            let index = this.data.indexOf(element);
            this.data.splice(index, 1);
            return true;
        }
        return false;
    }

    union(otherSet) {
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    };

    intersection(otherSet) {
        let intersectionSet = new Set();
        let firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    difference(otherSet) {
        let differenceSet = new Set();
        let firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

}

let set1 = new Set();
set1.add('a');
set1.add('b');
set1.add('c');
set1.add('d');
set1.add('e');
let set2 = new Set();
set2.add('d');
set2.add('e');
set2.add('f');
set2.add('g');
set2.add('g');
set2.add('h');
console.log(set1.data);
console.log(set1.union(set2));
console.log(set1.intersection(set2));
console.log(set1.difference(set2));
set1.remove('a');
console.log(set1.data);