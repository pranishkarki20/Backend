import { Post } from "../models/post.model.js";

// create a post

const creatPost = async (req, res) => {
    try {
        const { name, description, age } = req.body;

        if (!name || !description || !age) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const post = await Post.create({ name, description, age });

        return res.status(201).json({
            message: "Post created successfully",
            post
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        });
    }
};

const getpost = async (req , res) => {
    try{
        const getPosts = await Post.find();
        res.status(200).json(getPosts)
    }catch (error){
        res.status(500).json({
            message: "internal server error" ,error
        })
    }
};
export {
    creatPost,
    getpost
};
