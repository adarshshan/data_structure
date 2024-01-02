// TO FIND THE INDEX OF TARGET IN A SORTED ARRAY;

let array = [-5, 2, 4, 6, 10, 33, 34]
let target = 4;
console.log(FindIndex(array,target));

function FindIndex(arr, tar) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tar) return i;
    }
    return -1;
}
