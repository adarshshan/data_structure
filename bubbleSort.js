//To Sort an array
// function fun(arr) {
//     let flag;
//     do {
//         flag=0;
//         for(let i=0;i<arr.length;i++){
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 flag = 1;
//             }
//         }
//     } while (flag ===1);
//     return arr;
// }

let arr = [-6, 20, 8, -2, 4]
fun(arr);
console.log(arr)
// Big O  => O(n*2)



function fun(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                j--;
            }
        }
    }
}