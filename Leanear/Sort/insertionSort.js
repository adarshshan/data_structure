//insertion sort

function InsertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numToInsert=arr[i]
        let j=i-1;
        while(arr[j]>numToInsert && j>=0){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=numToInsert;
    }
}

let arr = [8, 20, -2, 4, -6,-23]
InsertionSort(arr)
console.log(arr)

//Big O  O(n*2);