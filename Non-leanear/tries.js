class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
  
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
  
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  }
  
  const trie = new Trie();

// insert all of the article titles into the trie
const articleTitles = [
  "JavaScript Basics",
  "Advanced JavaScript Techniques",
  "Introduction to React",
  "Getting Started with Node.js",
];
articleTitles.forEach((title) => trie.insert(title.toLowerCase()));

// search for article titles that start with the user's query
const userInput = "jav";
const suggestions = [];
let node = trie.root;

for (let i = 0; i < userInput.length; i++) {
  const char = userInput[i];
  if (!node.children[char]) {
    break;
  }
  node = node.children[char];
}

if (node.isEndOfWord) {
  suggestions.push(userInput);
}

function findSuggestions(node, prefix) {
  if (node.isEndOfWord) {
    suggestions.push(prefix);
  }
  for (const [char, child] of Object.entries(node.children)) {
    findSuggestions(child, prefix + char);
  }
}

findSuggestions(node, userInput);

console.log(suggestions);