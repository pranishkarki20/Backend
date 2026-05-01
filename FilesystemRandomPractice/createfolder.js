import fs from "fs"

// asynchrous 
console.log('Start');
fs.mkdir('myFolder' , (err) => {
    if (err) throw err;
    console.log('Folder Created') ;
});
console.log("End");

//synchrounous 

console.log('Start') ;
fs.mkdirSync('myfolder2');
console.log("Folder Created");
console.log('End');