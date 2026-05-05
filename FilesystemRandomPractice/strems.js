import fs from 'fs'
const readStream = fs.createReadStream('Pranish.txt');
readStream.on('data',(chunk) => {
    console.log('Reading' , chunk);
}) ; 