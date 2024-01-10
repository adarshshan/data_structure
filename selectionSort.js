
// Javascript program for implementation of selection sort 
function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function selectionSort(arr) {
    var min;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[min])
                min = j;
        swap(arr, min, i);
    }
    printArray(arr)
}

function printArray(arr) {
    let a = ''
    for (let i = 0; i < arr.length; i++) {
        a += `${arr[i]}  `
    }
    console.log(a);
}

var arr = [64, 25, 12, 22, 11];
selectionSort(arr); 
