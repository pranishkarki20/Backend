import fs from "fs" 

fs.appendFile('Pranish.txt','\nNew Line' , (err) => {
    if(err) throw err ; 
    console.log('Data appended');
});

fs.readFile('Pranish.txt' , 'utf-8' , (err,data)=>{
    if(err)throw err ; 
    console.log(data)
});
