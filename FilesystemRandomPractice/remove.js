import fs from "fs"

fs.rmdir('myfolder2',(err) =>{
    if(err) throw err ; 
    console.log('Folder Remove')
})

console.log("Start");
fs.rmdirSync('myfolder')
console.log('End');
