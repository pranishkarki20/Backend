import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({
            username,
            email: email.toLowerCase(),
            password,
        });

        res.status(201).json({
            message: "User registered",
            user: { id: newUser._id, email: newUser.email, username: newUser.username }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        res.status(200).json({
            message: "User Login",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

const logoutUser = async(req, res) =>{
    try{
        const {email} = req.body;
        const user = await User.findOne({
            email
        }); 
        if(!user) return res.status(404).json({
            message : "user not found "
        }); 

        res.status(200).json({
            message : "Logout Successful"
        });
    }catch (error) {
        res.status(500).json({
            message: "Internal Server erro" ,error
        })
    }
}

export {
    registerUser,
    loginUser,
    logoutUser
};
