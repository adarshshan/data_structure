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
    if (!word) return;
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        let newNode = new TrieNode(word[i]);
        newNode.parant = node;
        node.children[word[i]] = newNode;
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
    let output = []
    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) node = node.children[prefix[i]];
      else return output;
    }
    this.findAllWords(node, output);
    return output;
  }
  findAllWords(node, arr) {
    if (node.end) arr.unshift(node.getWord());
    for (let child in node.children) {
      this.findAllWords(node.children[child], arr);
    }
  }
  remove(word) {
    if (!word) return;
    let node = this.root;
    removeWord(node, word);
    function removeWord(node, word) {
      if (node.end && node.getWord() === word) {
        let hasChildren = Object.keys(node.children).length > 0;
        if (hasChildren) node.end = false;
        else node.parant.children = {};
        return true;
      }
      for (let child in node.children) {
        removeWord(node.children[child], word);
      }
      return false;
    }
  }

}

const trie = new Trie();
trie.insert('adarsh')
trie.insert('adar')
trie.insert('athira')
trie.insert('abinesh')
trie.insert('keerthi')
console.log(trie.contains('keerthi'))
trie.remove('keerthi')
console.log(trie.contains('keerthi'))
console.log(trie.find('a'))