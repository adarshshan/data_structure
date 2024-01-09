class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [key, value];
        } else {
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        const sameKeyItem = bucket.find(item => item[0] === key);
        if (sameKeyItem) {
            bucket.splice(bucket.indexOf(sameKeyItem), 1);
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) console.log(i, this.table[i]);
        }
    }
}

const table = new HashTable(10);
table.set("name", "Bruce");
table.set("age", 25);
table.display();
// console.log(table.get("name"));
// table.set("mane", "Clark");
// table.set("name", "Diana");
// console.log(table.get("mane"));
// table.remove("name");
// table.display();
