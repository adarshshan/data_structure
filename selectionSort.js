
function selectionSort(array){
    let n = array.length;
    for(let i = 0; i < n; i++){
        let min = i;
        for(let j = i+1; j < n; j++){
            if(array[j] < array[min]){
                min=j;
            }
         }
        if (min != i){
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }
    return array;
}
