//To Sort an array

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

let arr = [-6, 20, 8,-2, -3,-2, 4]
fun(arr);
console.log(arr)
// Big O  => O(n*2)