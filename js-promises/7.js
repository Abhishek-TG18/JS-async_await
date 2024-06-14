async function data (callback){
    url1="https://jsonplaceholder.typicode.com/posts/1";
    url2="https://jsonplaceholder.typicode.com/todos/1";
    let response1 = await fetch(url1);
    let response2= await fetch(url2);
    let data1= await response1.json();
    let data2 = await response2.json();
    callback(data1,data2);
     };

     function loging(d1,d2){
        const obj={
            todo:d1,
            post:d2,

        };
        console.log(obj);
     }

     data(loging);