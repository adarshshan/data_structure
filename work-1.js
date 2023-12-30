// class ListNode {
//     constructor(data) {
//         this.data = data
//         this.next = null                
//     }
// }
// class LinkedList {
//     constructor(head = null) {
//         this.head = head
//         console.log(this.head)
//     }
// }
// let node1 = new ListNode(2)
// let node2 = new ListNode(53)
// let node3 = new ListNode(500)
// let node4 = new ListNode(30)
// node1.next = node2
// node2.next = node3
// node3.next = node4

// let list = new LinkedList(node3)

// console.log(list.head.next.data)

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

//FABBINOSSI
// let fab = [0, 1];
// function fabbinossi(num) {
//     let fab = [0, 1];
//     for (let i = 2; i < num; i++) {
//         fab[i] = fab[i - 1] + fab[i - 2];
//     }
//     return fab;
// }

// let array = fabbinossi(10);
// console.log(array);

//FACTORIAL NUMBER
// function factorial(num){
//     let fac=1;
//     for(let i=num;i>0;i--){
//         fac=fac*i
//     }
//     return fac;
// }
// let result=factorial(3)
// console.log(result)

//  PRIME NUMBERS
function isPrime(n) {
    for (let i = 2; i < n / 2; i++) {
        if (n < 2) return false;
        if (n % i == 0) {
            return false
        }
    }
    return true;
}
console.log(isPrime(1))


