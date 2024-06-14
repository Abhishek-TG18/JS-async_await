function greet(name){
    return new Promise((resolve,reject)=>{
        const grettings = `Hello! ${name} `;
        console.log(grettings);
        resolve(grettings);
    })
};

greet("abhi");