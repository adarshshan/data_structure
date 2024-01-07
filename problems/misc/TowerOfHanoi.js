function towerOfHanoi(n,from,to,using){
    if(n===0){
        console.log(`move disc from ${from} to ${to}`);
        return;
    }
    towerOfHanoi(n-1,from,using,to);
    console.log(`movie disc ${n} from ${from} to ${to}`);
    towerOfHanoi(n-1,using,to,from);
}
towerOfHanoi(3,'A','C','B')