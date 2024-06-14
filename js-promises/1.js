function doubleArray(arr,callback){

        const doubleArr = arr.map((num)=>{
             return callback(num);
        })
        return doubleArr;
}
const arr=[1,2,3,4,5,6,7,8,9];

let callback=((num)=>{ return num*2});


let arr2 = doubleArray(arr,callback);
console.log(arr);
console.log(arr2);