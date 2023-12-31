let arr1=[1,2,5,6]
let arr2=['shanu','adarsh'];
let result=arr1.concat(arr2);
let evennumbers=arr1.filter(item=>item%2==0);
let doubleofElements=arr1.map(item=>item*2);
let average=arr1.reduce(myfun,0)
function myfun(total,num){
    return total+=num;
}
let sliceresult=arr1.slice(1,3)
arr1.splice(2,0,23,90)