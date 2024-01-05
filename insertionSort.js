

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numToSort = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numToSort) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numToSort;
    }
}

let arr = [8,20,-2,4,-6]
insertionSort(arr)
console.log(arr)