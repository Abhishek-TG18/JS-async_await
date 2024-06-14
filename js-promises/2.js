function manipulateString(str,callback){
        const manipulatedString = str.toUpperCase();
        callback(manipulatedString);
}

const logstring=((str)=>{
    console.log(`The manipulated string is `, str);
})

let str="abhishek tg";

manipulateString(str,logstring);