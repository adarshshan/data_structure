let array = [-5, 2, 4, 6, 10, 33, 34]
let target = 6;
console.log(FindIndex(array,target));


function FindIndex(arr, tar) {
    left = 0;
    right = arr.length - 1;
    while (left <= right) {
        let middleIndex = Math.floor((left + right) / 2)
        if (arr[middleIndex] === tar) return middleIndex;
        if (arr[middleIndex] < tar) {
            left = middleIndex + 1;
        } else {
            right = middleIndex - 1;
        }
    }
    return -1;
}
