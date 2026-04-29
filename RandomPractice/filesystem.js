import fs from "fs"

console.log("stating")
//fs.writeFileSync("Pranish.txt", " Hello Everyone ")
fs.writeFile("Pranih.txt" , "Hello Everyone" ,()=> {
    console.log("done")
})
console.log("ending")