import fs from "fs/promises"

console.log("start");
async function run() {
    await fs.appendFile("Pranish.txt" ,"I am from Nepal")
    const data = await fs.readFile('Pranish.txt' , 'utf-8');
    console.log(data);
}

run();
console.log("End")