const A=[1,2],B=[3,4];
let arr=[];
for(let i=0;i<A.length;i++){
    for(let j=0;j<B.length;j++){
        arr.push([A[i],B[j]]);
    }
}
console.log(arr)