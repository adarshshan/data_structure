const TrieNode = function (key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
    this.getWord = function () {
        let output = [];
        let node = this;
        while (node !== null) {
            output.unshift(node.key);
            node = node.parent;
        }
        return output.join('');
    };
}

const Trie = function () {
    this.root = new TrieNode(null);

    this.insert = function (word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode(word[i]);
                node.children[word[i]].parent = node;
            }
            node = node.children[word[i]];
            if (i == word.length - 1) node.end = true;
        }
    }
    this.contains = function (word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) node = node.children[word[i]];
            else return false;
        }
        return node.end;
    };
    this.   find = function (prefix) {
        let node = this.root;
        let output = [];
        for (let i = 0; i < prefix.length; i++) {
            if (node.children[prefix[i]]) node = node.children[prefix[i]];
            else return output;
        }
        findAllWords(node, output);
        return output;
    };
    const findAllWords = (node, arr) => {   
        if (node.end) arr.unshift(node.getWord());
        for (let child in node.children) {
            findAllWords(node.children[child], arr);
        }
    }
    this.remove = function (word) {
        let node = this.root;
        if (!word) return;
        removeWord(node, word);
        function removeWord (node, word) {
            if (node.end && node.getWord() === word) {
                let hasChildren = Object.keys(node.children).length > 0;
                if (hasChildren) node.end = false;
                else node.parent.children = {};
                return true;
            }
            for (let key in node.children) {
                removeWord(node.children[key], word)
            }
            return false
        };
    };
}

const trie = new Trie();

// insert few values
trie.insert("peter");
trie.insert("piper");
trie.insert("picked");
trie.insert("pickled");
trie.insert("pepper");
trie.insert("peek");

// check contains method
console.log(trie.contains("picked"));  
console.log(trie.contains("pepper")); 
trie.remove("pepper");
console.log(trie.contains("pepper")); 

// check find method
console.log(trie.find("p"));  
console.log(trie.find("pe")); 
