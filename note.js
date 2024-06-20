class TrieNode {
    constructor(key) {
        this.key = key;
        this.parant = null;
        this.children = {};
        this.end = false;
        this.getWord = () => {
            let output = [];
            let node = this;
            while (node !== null) {
                output.unshift(node.key);
                node = node.parant;
            }
            return output.join('');
        }
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                const newNode = new TrieNode(word[i]);
                node.children[word[i]] = newNode;
                newNode.parant = node;
            }
            node = node.children[word[i]];
            if (i === word.length - 1) node.end = true;
        }
    }
    contains(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) node = node.children[word[i]];
            else return false;
        }
        return node.end;
    }
    find(prefix) {
        let node = this.root;
        let output = [];
        for (let i = 0; i < prefix.length; i++) {
            if (node.children[prefix[i]]) node = node.children[prefix[i]];
            else return output;
        }
        this.findAllwords(output, node);
        return output;
    }
    findAllwords(arr, node) {
        if (node.end) arr.unshift(node.getWord());
        for (let child in node.children) {
            this.findAllwords(arr, node.children[child]);
        }
    }
}