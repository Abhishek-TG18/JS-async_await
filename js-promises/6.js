async function sample(){
    let url="https://jsonplaceholder.typicode.com/todos/1"
 let response= await fetch(url);
const value = await response.json();
console.log(value);
}

sample();