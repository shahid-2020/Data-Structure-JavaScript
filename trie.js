const Node = function () {
    this.keys = new Map();
    this.isEnd = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};

const Trie = function () {
    this.root = new Node();
};

Trie.prototype.add = function (input, node = this.root) {
    if (input.length === 0) {
        node.setEnd();
    } else if (!node.keys.has(input[0])) {
        node.keys.set(input[0], new Node());
        return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
        return this.add(input.substr(1), node.keys.get(input[0]));
    }
};

Trie.prototype.isWord = function (word) {
    let node = this.root;
    while (word.length > 1) {
        if (!node.keys.has(word[0])) {
            return false;
        } else {
            node = node.keys.get(word[0]);
            word = word.substr(1);
        }
    }
    return (node.keys.has(word[0]) && node.keys.get(word[0]).isEnd()) ? true : false;
};

Trie.prototype.print = function () {
    let words = new Array();
    let search = function (node, str) {
        if (node.keys.size != 0) {
            for (let letter of node.keys.keys()) {
                search(node.keys.get(letter), str.concat(letter));
            }
            if (node.isEnd()) {
                words.push(str);
            }
        } else {
            str.length > 0 ? words.push(str) : undefined;
            return;
        }
    };

    search(this.root, new String());
    return words.length > 0 ? words : null;

};

trie = new Trie();
trie.add('ball');
trie.add('bat');
trie.add('doll');
trie.add('dork');
trie.add('do');
trie.add('dorm');
trie.add('send');
trie.add('sense');
console.log(trie.isWord('doll'));
console.log(trie.isWord('dor'));
console.log(trie.print());

