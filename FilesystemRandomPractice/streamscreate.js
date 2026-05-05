import fs from 'fs'

const writeStream = fs.createWriteStream('Pranish.txt');

writeStream.write('Hello , how are you ?'); 
writeStream.end()