class HashMap {

    constructor () {
        this.bucket = new Array();
        this.bucketSize = 10;
        this.size = 0;
    }

    _hashFunction(str) {
        if (typeof str !== 'string') {
            str = str.toString();
        }
        let hashCode = 0;
        for (let i = 0; i < str.length; i++) {
            hashCode += str.charCodeAt(i);
        }
        return hashCode % this.bucketSize;
    }

    _reHash() {
        const temp = this.bucket;
        this.bucket = new Array();
        this.bucketSize *= this.bucketSize;
        this.size = 0;

        for (let i = 0; i < temp.length; i++) {
            if (temp[i] !== undefined) {
                let arr = temp[i];
                for (let j = 0; j < arr.length; j++) {
                    this.add(arr[j][0], arr[j][1]);
                }
            }
        }

    }

    add(key, value) {
        let added = false;
        const index = this._hashFunction(key);
        if (this.bucket[index] === undefined) {
            this.bucket[index] = [
                [key, value]
            ];
            added = true;
        } else {
            let temp = this.bucket[index];
            for (let i = 0; i < temp.length; i++) {
                if (temp[i][0] === key) {
                    temp[i][1] = value;
                    added = true;
                }
            }
            if (!added) {
                temp.push([key, value]);
                added = true;
            }
        }
        if (added) {
            this.size++;
            let loadFactor = ((1.0 * this.size) / this.bucketSize);
            if (loadFactor > 0.7) {
                this._reHash();
            }
        }
        return added;
    }

    remove(key) {
        const index = this._hashFunction(key);
        if (this.bucket[index] !== undefined) {
            const temp = this.bucket[index];
            for (let i = 0; i < temp.length; i++) {
                if (key === temp[i][0]) {
                    delete temp[i];
                    this.size--;
                    break;
                }
            }
        }
    }

    value(key) {
        const index = this._hashFunction(key);
        if (this.bucket[index] !== undefined) {
            const temp = this.bucket[index];
            for (let i = 0; i < temp.length; i++) {
                if (key === temp[i][0]) {
                    return temp[i][1];
                }
            }
        }
        return null;
    }

    print() {
        let temp = this.bucket;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] !== undefined) {
                let arr = temp[i];
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j] !== undefined) {
                        console.log(`Key: ${arr[j][0]} Value:${arr[j][1]}`);
                    }
                }
            }
        }

    }
}
let map = new HashMap();
map.add(9, 99);
map.add(3, 59);
map.add(6, 44);
map.add(7, 82);
map.add(9, 105);
map.add(10, 115);
console.log(map.value(2));
map.remove(2);
map.remove(6);
map.print();