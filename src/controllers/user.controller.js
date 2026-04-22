import { User } from "../user.model.js";

const registerUser = async(req, res) =>{
    try{
        const{ username , email , password} = req.body; 

        //basic validation 

        if (!username || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        //check 
        const existing = await User.findOne({email:email.toLowerCase()}); 
        if(existing){
            return res.status(400).json({message : "User already exists"})
        }
        const newUser = await User.create({
            username,
            email: email.toLowerCase(),
            password,
        });
        res.status(201).json({
            message:"User registered",
            user: { id: newUser._id, email: newUser.email, username: newUser.username }
        });
    }catch (error){
        res.status(500).json({message:"Internal server error" ,error:error.message});
    }
}

export{
    registerUser
}
