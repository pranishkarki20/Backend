import fs from"fs"
console.log ("start")  ; 
//readfile is Asynchronous 
fs.readFile('Pranish.txt' , 'utf-8' ,(err, data) =>{
    if(err) throw err; 
    console.log(data);
}); 
console.log("End");


console.log ("start");
//readfileSync  is synchronous
const data = fs.readFileSync('Pranish.txt' , 'utf-8') ;
console.log(data);

console.log("End");