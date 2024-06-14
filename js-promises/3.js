const person = {
    firstName : "Abhishek",
    lastName:"TG",
    age:19,
};
function calculateAge(person,callback){
    const Name = person.firstName + person.lastName;
    const ageInDays = person.age * 365;
    callback(Name,ageInDays);
};

function print(name,age){
    console.log(`The persons full name is ${name} and his age in days is ${age}`);
};

calculateAge(person,print);