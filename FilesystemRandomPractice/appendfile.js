import fs from "fs" 

//synchronous 
console.log("start");
fs.appendFileSync("Pranish.txt", '\nHello Guys ! Welcome to my Video');
const data =fs.readFileSync("Pranish.txt" ,'utf-8')
console.log(data);
console.log("End");

//asynchronous 
fs.appendFile('Pranish.txt','\nNew Line' , (err) => {
    if(err) throw err ; 
    console.log('Data appended');
});

fs.readFile('Pranish.txt' , 'utf-8' , (err,data)=>{
    if(err)throw err ; 
    console.log(data)
});
