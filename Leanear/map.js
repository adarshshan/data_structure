const map = new Map()    //set, has, delete, get
map.set('c', 3)
map.set('d', 4)
map.set('b', 40)
map.set('b', 400)
map.set('b', 4000)
map.set('e', 500)
// map.delete('b')
for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}
console.log(map.has('b'))
console.log(map.get('b'))
console.log(map);