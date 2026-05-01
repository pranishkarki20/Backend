import fs from "fs/promises";

fs.appendFile("Pranish.txt" , "Hello guys How are you? are you fine ?")
 .then(() => fs.readFile("Pranish.txt" ,"utf-8"))
 .then((data) => console.log(data))
 .catch((err) => console.error(err));