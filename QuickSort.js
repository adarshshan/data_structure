//QUICK SORT
// function quickSort(arr){
//     if(arr.length<2)return arr;
//     let pivot=arr[arr.length-1]
//     let left=[];
//     let right=[];
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
function QuickSort(arr) {
    if(arr.length<2)return arr;
    let left = [], right = [];
    const pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}
let arr = [8, 20, -2, 4, -6, -23];
console.log(QuickSort(arr))
//worst case O(n*2)
//avg case => O(nlogn)