

// let arr = [6, 5, 4, 3, 9, 8, 0];
// let target = 10;
// let temp = [];
// const result = findValues(arr);
// console.log(result);
// function findValues(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (temp.includes(10 - arr[i])) {
//             return [arr[i], 10 - arr[i]];
//         } else {
//             temp.push(arr[i])
//         }
//     }
//     return console.log('No result found');
// }

// let arr = [3, 5, 6, 6, 9, 7, 3, 6];
// var p = arr.length - 1;
// let val = 6;
// if (arr[p] == val) p = arr.length - 2;
// newArray(arr, val);
// function newArray(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == val) {
//             while (arr[p] == val && p !== 0) {
//                 console.log('hai')
//                 p--;
//                 console.log(`value of p is ${p}`)
//             }
//             console.log(`The values are ${arr[i] } and ${arr[p]}`);
//             arr[i] = arr[p];
//             arr[p] = val;
//             console.log(`The values are ${arr[i] } and ${arr[p]}`);
//         }
//         console.log('hello')
//     }
//     console.log(arr);
// }


// let array = fabbinossi(10);
// console.log(array);

//  PRIME NUMBERS
// function isPrime(n) {
//     for (let i = 2; i < n / 2; i++) {
//         if (n < 2) return false;
//         if (n % i == 0) {
//             return false
//         }
//     }
//     return true;
// }
// console.log(isPrime(1))

// POWER OF TWO
// function isPowerOfTwo(n) {
//     if (n < 1) return false;
//     while (n > 1) {
//         if (n % 2 !== 0) return false;
//         n = n / 2;
//     }
//     return true;
// }
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));

// function isPowerOftwoBitwise(n) {
//     if (n < 1) return false;
//     return (n & (n - 1)) === 0
// }
// console.log(isPowerOftwoBitwise(1))
// console.log(isPowerOftwoBitwise(2))
// console.log(isPowerOftwoBitwise(5))

//FABBINOSSI
// let fab = [0, 1];
// function fabbinossi(num) {
//     let fab = [0, 1];
//     for (let i = 2; i < num; i++) {
//         fab[i] = fab[i - 1] + fab[i - 2];
//     }
//     return fab;
// }
//RECURSION

// let number=0;
// function num(number){
//     console.log(`the number is ${number}`);
//     if(number<50){
//         let newnumber=number+1;
//         num(newnumber);
//     }
// }
// num(number)

// FABBINOSSI USING RECURSSION
// let arr=[0,1];
// var b=2;
// function rabinoRecursion(num){
//     console.log(num);
//     if(b<num){
//         arr.push(arr[b-1]+arr[b-2])
//         b++;
//         rabinoRecursion(num);
//     }
// }
// rabinoRecursion(10);
// console.log(arr)

//RECURSIVE FACTORIAL

// function factorial(num){
//     let fac=1;
//     for(let i=num;i>0;i--){
//         fac=fac*i
//     }
//     return fac;
// }
// let result=factorial(3)
// console.log(result)


// function factRecursive(num){
//     let fact=num;
//     console.log(num);
//     if(num<0) return fact;
//     fact=fact*num-1
//     factRecursive(num-1);
// }
// console.log(factRecursive(5));

//LEANEAR SEARCH    
// function searchElement(target, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (target === array[i]) return i;
//     }
//     return -1;
// }
// array = [3, 5, 6, 2, 3, 34, 2, 38];
// console.log(searchElement(3, array))
// console.log(searchElement(334, array))
// console.log(searchElement(34, array))

//BINARY SEARCH
// array = [-5, 2, 4, 6, 10,23]
// target = 39;
// console.log(array[Math.floor(array.length / 2)]);
// console.log(findIndex(array, target));
// function findIndex(array, target) {
//     if (!array.length) return -1;
//     if (array[Math.floor(array.length / 2)] === target) return Math.floor(array.length / 2);
//     if (target < array[Math.floor(array.length / 2)]) {
//         for (let i = 0; i < Math.floor(array.length / 2); i++) {
//             if (array[i] === target) return i;
//         }
//     } else {
//         for (let i = Math.floor(array.length / 2) + 1; i < array.length; i++) {
//             if (array[i] === target) return i;
//         }
//     }
//     return -1;
// }
let array = [-5, 2, 4, 6, 10,33,34]
let target = 10;
console.log(findIndex(array, target));
function findIndex(array, target) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        // console.log(middleIndex);
        if (target === array[middleIndex]) {
            return middleIndex;
        }
    }
    if (target < array[middleIndex]) {
        rightIndex = middleIndex - 1;
    } else {
        leftIndex = middleIndex + 1;
    }
    return -1;
}
