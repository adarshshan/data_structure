//Recursive Binary search

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1;
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) return middleIndex

    if (target < arr[middleIndex]) return search(arr, target, leftIndex, middleIndex - 1)
    else return search(arr, target, middleIndex + 1, rightIndex)

}

// console.log(recursiveBinarySearch([-5,2,4,6,10],10))
// console.log(recursiveBinarySearch([-5,2,4,6,10],6))
// console.log(recursiveBinarySearch([-5,2,4,6,10],130))

// ----TO FIND THE SUM OF N NUMBERS
function Sum(num, sum) {
    sum = sum + num
    return num !== 0 ? Sum(num - 1, sum) : sum;
}
// console.log(Sum(10,0));



//----TO FIND THE FACTORIAL OF A NUMBER
function fact(number, fa) {
    let prev = number - 1;
    fa = fa * number;
    if (number === 1) return fa;
    if (number > 0) return fact(prev, fa);
}
console.log(fact(5, 1))

