import fs from "fs"

console.log("Start");

//asynchronous 
fs.unlink('Pranih.txt' , (err) =>{
    if(err) throw err ; 
    console.log("File Deleted");
});

console.log("End")

// Synchronous 
fs.unlinkSync('Pranih1.txt');
console.log('File Deleted')