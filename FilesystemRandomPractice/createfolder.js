import fs from "fs"

console.log('Start');
fs.mkdir('myFolder' , (err) => {
    if (err) throw err;
    console.log('Folder Created') ;
});
console.log("End");
