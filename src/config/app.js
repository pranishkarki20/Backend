import express from "express" ;
import cors from "cors";

const app = express(); 

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json()); //expected it to be in json format 
 
import userRouter from '../routes/user.route.js';
import  postRouter from '../routes/post.route.js';
import { Post } from "../models/post.model.js";
//a file that handels all the users -related tasks (like creating user , getting a user etc.)
app.use("/api/v1/users", userRouter);
//whenever a request comes to URL /api/v1/users , hand it over  to userRouter to handle .
app.use("/api/v1/posts", postRouter);
//create an exprees app 
export default app ;
// the   configured app is share  with rest of your project.  file like server.js  will import  this app and actually start the server 
