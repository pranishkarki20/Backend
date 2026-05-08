import  {form} from "../models/form.model.js"

const createform = async (req , res ) => {
    try {
        const {name , email , phonenumber} = req.body;
        if (!name || !email || !phonenumber){
            return res.status(400).json({
                message: "All Fields are required"
            });
        }

        const createdForm = await form.create({
            name,
            email,
            phone: phonenumber
        });
        return res.status(201).json({
            message : "Form Submitted Successfully",
            form: createdForm
        });
    } catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}
export{
    createform,
}
