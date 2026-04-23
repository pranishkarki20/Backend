import express from "express" ;

const app = express(); 

app.use(express.json()); //expected it to be in json format 
 
import userRouter from '../routes/user.route.js';
//a file that handels all the users -related tasks (like creating user , getting a user etc.)
app.use("/api/v1/users", userRouter);
//whenever a request comes to URL /api/v1/users , hand it over  to userRouter to handle .


//create an exprees app 
export default app ;
// the   configured app is share  with rest of your project.  file like server.js  will import  this app and actually start the server 
