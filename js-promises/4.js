const books = [
    {
        title:"the great",
        author:"abhi",
        year:1955,
    },
    {
        title:"fire in ice",
        author:"harshi",
        year:1966,
    },
    {
        title:"my friends are mentals",
        author:"Tajana",
        year:1756,
    }
]



function order(arr,callback){
   let title= arr.map((obj)=>obj.title)
   callback(title);
}
const sort=((title)=>{
    title.sort();
    console.log(title.join(","));
    

})

order(books,sort);