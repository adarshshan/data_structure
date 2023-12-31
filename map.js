const map = new Map([['a', 1], ['b', 2]])
map.set('c',3)
map.set('d',4)
map.set('e',5)
map.delete('b')
for(const [key,value] of map){
    console.log(`${key} : ${value}`);
}
console.log(map.has('d',4))